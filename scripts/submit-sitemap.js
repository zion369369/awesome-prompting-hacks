/**
 * scripts/submit-sitemap.js
 * Programmatic Sitemap Submission using Google Search Console API.
 * 
 * Setup instructions:
 * 1. Place Service Account JSON credentials at: config/service-account.json
 * 2. Ensure the client email from your JSON is authorized as Owner/Full User on the GSC property.
 * 3. Run: node scripts/submit-sitemap.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { google } from 'googleapis';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CREDENTIALS_PATH = path.join(__dirname, '../config/service-account.json');
const TARGET_DOMAIN = 'https://zion369369.github.io/awesome-prompting-hacks';
const SITEMAP_URL = `${TARGET_DOMAIN}/sitemap-index.xml`;

// Check credentials file exists
if (!fs.existsSync(CREDENTIALS_PATH)) {
  console.warn(`[WARNING] Service account credentials file was not found at: ${CREDENTIALS_PATH}`);
  console.log('\nTo submit programmatically via this script:');
  console.log('1. Go to Google Cloud Console, enable "Google Search Console API".');
  console.log('2. Create a Service Account, generate a JSON key, and save it at: config/service-account.json');
  console.log(`3. Go to Google Search Console (GSC) and add the Service Account's email as an Owner/Full User of your property.`);
  console.log('4. Run: node scripts/submit-sitemap.js\n');
  console.log(`Alternatively, you can manually submit the sitemap URL in the GSC Web Dashboard:`);
  console.log(`-> Property: ${TARGET_DOMAIN}/`);
  console.log(`-> Sitemap URL: sitemap-index.xml`);
  process.exit(0);
}

// Authenticate using Service Account JWT client credentials
const auth = new google.auth.GoogleAuth({
  keyFile: CREDENTIALS_PATH,
  scopes: ['https://www.googleapis.com/auth/webmasters']
});

async function main() {
  console.log('[STARTING] Submitting sitemap to Google Search Console...');
  console.log(`Site Property URL: ${TARGET_DOMAIN}/`);
  console.log(`Sitemap index URL: ${SITEMAP_URL}`);

  try {
    const authClient = await auth.getClient();
    const searchconsole = google.searchconsole({
      version: 'v1',
      auth: authClient
    });

    // Submitting the sitemap index
    const response = await searchconsole.sitemaps.submit({
      siteUrl: `${TARGET_DOMAIN}/`,
      feedpath: SITEMAP_URL
    });

    console.log('[SUCCESS] Sitemap submission accepted!');
    console.log(`HTTP Status: ${response.status}`);
  } catch (error) {
    console.error('[ERROR] Failed to submit sitemap programmatically.');
    console.error(`Message: ${error.message}`);
    console.log('\nIf you received a 403 / permission error, verify that:');
    console.log(`1. You registered the property in GSC under the EXACT URL: ${TARGET_DOMAIN}/ (including the trailing slash).`);
    console.log('2. The service account email is added as an Owner or Full user of that exact property in GSC.');
  }
}

main();
