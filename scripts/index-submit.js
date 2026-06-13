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

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const CREDENTIALS_PATH = path.join(__dirname, '../config/service-account.json');

// Check credentials file exists
if (!fs.existsSync(CREDENTIALS_PATH)) {
  console.warn(`[WARNING] Service account credentials file was not found at: ${CREDENTIALS_PATH}`);
  console.log('To activate this script, download a JSON key from your Google Cloud Console Service Account and place it there.');
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

// Compile sitemap list matching your database structures
const TARGET_DOMAIN = 'https://omnivaluation.example.com';

const urlsToIndex = [
  `${TARGET_DOMAIN}/`,
  `${TARGET_DOMAIN}/compare/salesforce-vs-hubspot-for-real-estate`,
  `${TARGET_DOMAIN}/compare/salesforce-vs-hubspot-for-healthcare`,
  `${TARGET_DOMAIN}/compare/clickup-vs-jira-for-software-development`,
  `${TARGET_DOMAIN}/compare/quickbooks-vs-xero-for-ecommerce`,
  `${TARGET_DOMAIN}/tax/real-estate-bracket-35-zip-90210`,
  `${TARGET_DOMAIN}/tax/crypto-assets-bracket-22-zip-10001`,
  `${TARGET_DOMAIN}/tax/stocks-bracket-37-zip-33139`
];

async function main() {
  console.log(`[STARTING] Requesting crawls for ${urlsToIndex.length} programmatic pages...`);
  
  for (const url of urlsToIndex) {
    await notifyUrl(url);
    // Standard delay to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 1200));
  }
  
  console.log('[COMPLETED] Indexing run complete.');
}

main();
