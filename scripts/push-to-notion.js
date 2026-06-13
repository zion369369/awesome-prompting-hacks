/**
 * scripts/push-to-notion.js
 * PSEO Database Sync Script for public Notion pages (DA 90).
 * 
 * ES-Module compliant version.
 */

import { Client } from '@notionhq/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG_PATH = path.join(__dirname, '../config/notion.json');

// Check config file exists
if (!fs.existsSync(CONFIG_PATH)) {
  fs.mkdirSync(path.dirname(CONFIG_PATH), { recursive: true });
  fs.writeFileSync(CONFIG_PATH, JSON.stringify({
    notion_key: "NOTION_INTERNAL_INTEGRATION_TOKEN_HERE",
    database_id: "NOTION_DATABASE_ID_HERE"
  }, null, 2), 'utf-8');
  
  console.log('[INFO] Scaffolding configuration template...');
  console.log(`Created notion config file at: ${CONFIG_PATH}`);
  console.log('To synchronize with Notion, edit this file and add your credentials.');
  process.exit(0);
}

const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));

if (config.notion_key === "NOTION_INTERNAL_INTEGRATION_TOKEN_HERE" || !config.notion_key) {
  console.warn('[WARNING] Notion API key not configured.');
  console.log(`Please update config/notion.json at: ${CONFIG_PATH}`);
  process.exit(0);
}

const notion = new Client({ auth: config.notion_key });
const databaseId = config.database_id;

const saasData = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/saas_comparisons.json'), 'utf-8'));
const taxData = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/tax_calculators.json'), 'utf-8'));

const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/Hello%20Prompting:%20Best%20AI%20Prompt%20Optimizer/idfecahooccghgkjohelhjecjeeeapah?hl=en";

async function pushSaasRecord(item) {
  try {
    const title = `${item.software_a} vs ${item.software_b} for ${item.industry}`;
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: title
              }
            }
          ]
        },
        Category: {
          select: {
            name: "SaaS"
          }
        },
        Platform: {
          select: {
            name: "Claude" 
          }
        },
        Score: {
          number: item.difficulty_score
        },
        "CWS Link": {
          url: CHROME_STORE_URL
        }
      }
    });
    console.log(`[SYNCED] Pushed SaaS row: ${title}`);
  } catch (error) {
    console.error(`[ERROR] Failed to push SaaS record: ${error.message}`);
  }
}

async function pushTaxRecord(item) {
  try {
    const title = `${item.asset_type} Tax Estimator - Zip ${item.zip_code}`;
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: title
              }
            }
          ]
        },
        Category: {
          select: {
            name: "Tax"
          }
        },
        Platform: {
          select: {
            name: "Gemini"
          }
        },
        Score: {
          number: parseInt(item.tax_bracket) || 90
        },
        "CWS Link": {
          url: CHROME_STORE_URL
        }
      }
    });
    console.log(`[SYNCED] Pushed Tax row: ${title}`);
  } catch (error) {
    console.error(`[ERROR] Failed to push Tax record: ${error.message}`);
  }
}

async function run() {
  console.log('[STARTING] Synchronizing local PSEO data rows to public Notion database...');
  
  for (const item of saasData) {
    await pushSaasRecord(item);
    await new Promise(resolve => setTimeout(resolve, 350));
  }

  for (const item of taxData) {
    await pushTaxRecord(item);
    await new Promise(resolve => setTimeout(resolve, 350));
  }

  console.log('[COMPLETED] Sync run execution completed.');
}

run();
