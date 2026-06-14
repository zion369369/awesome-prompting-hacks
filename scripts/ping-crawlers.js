import fs from 'fs';
import path from 'path';

const INDEXNOW_KEY = '7a52e93b6e82410a827d0cfcb2750697';
const SITE_URL = 'https://zion369369.github.io/awesome-prompting-hacks';
const SITEMAP_URL = `${SITE_URL}/sitemap-index.xml`;
const OUTPUT_DIR = path.resolve('docs'); // Deployed root directory

async function ping() {
  console.log('[START] Pinging search engine indexers...');
  
  // 1. Ensure output directory exists and write validation key file
  try {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    const keyFilePath = path.join(OUTPUT_DIR, `${INDEXNOW_KEY}.txt`);
    fs.writeFileSync(keyFilePath, INDEXNOW_KEY, 'utf-8');
    console.log(`[INDEXNOW] Verification key written to ${keyFilePath}`);
  } catch (error) {
    console.error('[WARN] Failed to write IndexNow key file:', error.message);
  }

  // 2. Submit to IndexNow API
  const indexNowUrl = 'https://api.indexnow.org/indexnow';
  const payload = {
    host: 'zion369369.github.io',
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: [
      SITE_URL,
      `${SITE_URL}/`,
      SITEMAP_URL
    ]
  };

  try {
    console.log('[INDEXNOW] Submitting URL list to indexers...');
    const response = await fetch(indexNowUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('[INDEXNOW] URLs successfully submitted to IndexNow (Bing/Yandex)!');
    } else {
      const text = await response.text();
      console.warn(`[INDEXNOW WARN] Submission rejected (${response.status}):`, text);
    }
  } catch (error) {
    console.error('[INDEXNOW ERROR] Failed to send IndexNow request:', error.message);
  }
}

ping();
