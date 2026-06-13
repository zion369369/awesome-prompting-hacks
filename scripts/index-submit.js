/**
 * scripts/index-submit.js
 * Programmatic URL Indexing Automation Script using Google Indexing API.
 * 
 * Formal API Scope: Page types featuring JobPosting or BroadcastEvent schemas.
 * 
 * Setup instructions:
 * 1. Place Service Account JSON credentials at: config/service-account.json
 * 2. Ensure the client email from your JSON is authorized as Owner on the Google Search Console property.
 * 3. Run: node scripts/index-submit.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { google } from 'googleapis';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CREDENTIALS_PATH = path.join(__dirname, '../config/service-account.json');
const DATA_PATH = path.join(__dirname, '../src/data/scraped_prompts.json');

// Check credentials file exists
if (!fs.existsSync(CREDENTIALS_PATH)) {
  console.warn(`[WARNING] Service account credentials file was not found at: ${CREDENTIALS_PATH}`);
  console.log('To activate this script, download a JSON key from your Google Cloud Console Service Account and place it at config/service-account.json.');
  process.exit(0);
}

// Authenticate using Service Account JWT client credentials
const auth = new google.auth.GoogleAuth({
  keyFile: CREDENTIALS_PATH,
  scopes: ['https://www.googleapis.com/auth/indexing']
});

/**
 * Publish indexing notifications to Search Console
 * @param {string} url - Target URL to crawl/re-crawl
 * @param {string} type - 'URL_UPDATED' to index, 'URL_DELETED' to remove
 */
async function notifyUrl(url, type = 'URL_UPDATED') {
  try {
    const authClient = await auth.getClient();
    const indexing = google.indexing({
      version: 'v3',
      auth: authClient
    });

    const result = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: type
      }
    });

    console.log(`[SUCCESS] API Notification accepted for URL: ${url}`);
    console.log(`Response status: ${result.status} | Notification Type: ${type}`);
  } catch (error) {
    console.error(`[ERROR] API submission failed for URL: ${url}`);
    console.error(`Message: ${error.message}`);
  }
}

async function main() {
  console.log('[STARTING] Loading prompts database...');
  let prompts = [];
  if (fs.existsSync(DATA_PATH)) {
    try {
      prompts = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
    } catch (err) {
      console.error('Failed to parse database:', err.message);
      process.exit(1);
    }
  }

  const TARGET_DOMAIN = 'https://zion369369.github.io/awesome-prompting-hacks';
  const urlsToIndex = [
    `${TARGET_DOMAIN}/`,
    `${TARGET_DOMAIN}/privacy/`,
    `${TARGET_DOMAIN}/terms/`,
    ...prompts.map(item => `${TARGET_DOMAIN}/prompts/${item.slug}/`)
  ];

  console.log(`[STARTING] Requesting crawls for ${urlsToIndex.length} programmatic pages...`);
  
  // Note: Standard service accounts have a daily indexing quota (typically 200 URLs per day)
  const quotaLimit = 200;
  const targetUrls = urlsToIndex.slice(0, quotaLimit);
  if (urlsToIndex.length > quotaLimit) {
    console.warn(`[WARNING] Target list size (${urlsToIndex.length}) exceeds standard daily Indexing API quota limit of ${quotaLimit}.`);
    console.warn(`Submitting first ${quotaLimit} URLs in this batch. Run again tomorrow to process the next batch.`);
  }

  for (const url of targetUrls) {
    await notifyUrl(url);
    // Standard delay to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 1200));
  }
  
  console.log('[COMPLETED] Indexing run complete.');
}

main();
