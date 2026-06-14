/**
 * scripts/push-to-notion.js
 * PSEO Database Sync Script for public Notion pages.
 * 
 * Synchronizes the prompt templates from src/data/scraped_prompts.json
 * to a public Notion database.
 * 
 * Run instructions:
 * 1. Set credentials in environment variables or config/notion.json:
 *    NOTION_KEY=your_integration_token
 *    NOTION_DATABASE_ID=your_database_id
 * 2. Run: node scripts/push-to-notion.js [options]
 *    Options:
 *      --limit <number>   Limit the number of synced items (default: 10)
 *      --all              Sync all prompts in the database
 */

import { Client } from '@notionhq/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCRAPED_PROMPTS_PATH = path.join(__dirname, '../src/data/scraped_prompts.json');
const CONFIG_PATH = path.join(__dirname, '../config/notion.json');
const TARGET_DOMAIN = 'https://zion369369.github.io/awesome-prompting-hacks';
const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en";

// Load credentials from environment or config file
let notionKey = process.env.NOTION_KEY || process.env.NOTION_API_KEY;
let databaseId = process.env.NOTION_DATABASE_ID;

if (!notionKey || !databaseId) {
  if (fs.existsSync(CONFIG_PATH)) {
    try {
      const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
      if (!notionKey && config.notion_key && config.notion_key !== "NOTION_INTERNAL_INTEGRATION_TOKEN_HERE") {
        notionKey = config.notion_key;
      }
      if (!databaseId && config.database_id && config.database_id !== "NOTION_DATABASE_ID_HERE") {
        databaseId = config.database_id;
      }
    } catch (e) {
      console.warn(`[WARN] Could not parse config/notion.json: ${e.message}`);
    }
  }
}

function determinePlatform(item) {
  const text = `${item.title} ${item.category} ${item.tags.join(' ')}`.toLowerCase();
  if (text.includes('midjourney')) return 'Midjourney';
  if (text.includes('claude')) return 'Claude';
  if (text.includes('gemini')) return 'Gemini';
  if (text.includes('chatgpt') || text.includes('openai') || text.includes('gpt')) return 'ChatGPT';
  return 'Universal';
}

function truncateText(text, limit) {
  if (text.length <= limit) return text;
  return text.substring(0, limit - 3) + '...';
}

function chunkString(str, length) {
  const size = Math.ceil(str.length / length);
  const r = new Array(size);
  let offset = 0;
  for (let i = 0; i < size; i++) {
    r[i] = str.substring(offset, offset + length);
    offset += length;
  }
  return r;
}

async function pushPromptRecord(notion, dbProperties, item) {
  try {
    const liveUrl = `${TARGET_DOMAIN}/prompts/${item.slug}`;
    const properties = {};

    // Name (Title) is always required
    properties.Name = {
      title: [
        {
          text: {
            content: truncateText(item.title, 100)
          }
        }
      ]
    };

    // Safely map optional properties only if they exist in the target Notion database schema
    if (dbProperties.Category) {
      properties.Category = {
        select: {
          name: item.category || "General"
        }
      };
    }

    if (dbProperties.Platform) {
      properties.Platform = {
        select: {
          name: determinePlatform(item)
        }
      };
    }

    if (dbProperties.Score) {
      properties.Score = {
        number: 95
      };
    }

    if (dbProperties["CWS Link"]) {
      properties["CWS Link"] = {
        url: CHROME_STORE_URL
      };
    }

    if (dbProperties.Tags) {
      // Notion multi-select values must have commas stripped and fit length limits
      const cleanTags = item.tags.slice(0, 5).map(tag => {
        return tag.replace(/,/g, '').trim().substring(0, 100);
      }).filter(tag => tag.length > 0);
      
      properties.Tags = {
        multi_select: cleanTags.map(name => ({ name }))
      };
    }

    // Split prompt text into chunks of 2,000 characters to prevent Notion block API limits
    const promptChunks = chunkString(item.prompt, 2000);
    const richText = promptChunks.map(chunk => ({
      type: 'text',
      text: {
        content: chunk
      }
    }));

    // Create the page with prompt content blocks in the page body
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: properties,
      children: [
        {
          object: 'block',
          type: 'heading_2',
          heading_2: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: '⚡ AI Prompt Template'
                }
              }
            ]
          }
        },
        {
          object: 'block',
          type: 'code',
          code: {
            language: 'plain text',
            rich_text: richText
          }
        },
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: '🌐 View original: '
                }
              },
              {
                type: 'text',
                text: {
                  content: liveUrl,
                  link: { url: liveUrl }
                }
              }
            ]
          }
        }
      ]
    });
    console.log(`[SYNCED] Pushed prompt to Notion: "${item.title}"`);
  } catch (error) {
    console.error(`[ERROR] Failed to push prompt "${item.title}":`, error.message);
  }
}

async function run() {
  console.log('[STARTING] Synchronizing prompt data to public Notion database...');

  if (!fs.existsSync(SCRAPED_PROMPTS_PATH)) {
    console.error(`[ERROR] Prompt database not found at: ${SCRAPED_PROMPTS_PATH}`);
    process.exit(1);
  }

  const prompts = JSON.parse(fs.readFileSync(SCRAPED_PROMPTS_PATH, 'utf-8'));
  console.log(`Loaded ${prompts.length} prompts from database.`);

  if (!notionKey || !databaseId) {
    console.log('\n[INFO] Notion key or Database ID is not set.');
    console.log('To synchronize programmatically:');
    console.log('1. Set NOTION_KEY and NOTION_DATABASE_ID environment variables, or update config/notion.json.');
    console.log('2. Run: node scripts/push-to-notion.js [options]');
    console.log('Running in DRY-RUN mode. Available prompts mapping preview:');
    if (prompts.length > 0) {
      const sample = prompts[0];
      console.log(`Sample Title: "${sample.title}"`);
      console.log(`Sample Category: "${sample.category}"`);
      console.log(`Sample Platform: "${determinePlatform(sample)}"`);
      console.log(`Sample Tags: ${sample.tags.slice(0, 5).join(', ')}`);
      console.log(`Sample Body length: ${sample.prompt.length} characters.`);
    }
    process.exit(0);
  }

  const notion = new Client({ auth: notionKey });

  // Dynamically retrieve the database schema to verify available columns
  let dbProperties = {};
  try {
    const dbInfo = await notion.databases.retrieve({ database_id: databaseId });
    dbProperties = dbInfo.properties || {};
    console.log(`[NOTION] Successfully connected. Schema columns: ${Object.keys(dbProperties).join(', ')}`);
  } catch (e) {
    console.warn(`[NOTION WARN] Could not query database schema properties: ${e.message}. Using default columns.`);
  }

  // Parse arguments
  const args = process.argv.slice(2);
  const cleanArgs = args.filter(a => !a.startsWith('--'));
  const arg = cleanArgs[0];

  let syncList = [];

  if (arg && !isNaN(arg)) {
    const rawIdx = parseInt(arg, 10);
    const idx = ((rawIdx % prompts.length) + prompts.length) % prompts.length;
    syncList = [prompts[idx]];
    console.log(`[INDEX] Resolved index ${rawIdx} to prompt index ${idx} (out of ${prompts.length} total prompts).`);
  } else {
    let limit = 10;
    const limitIdx = args.findIndex(a => a === '--limit');
    if (limitIdx !== -1 && args[limitIdx + 1]) {
      limit = parseInt(args[limitIdx + 1], 10) || 10;
    } else if (args.includes('--all')) {
      limit = prompts.length;
    }
    syncList = prompts.slice(0, limit);
  }
  console.log(`[SYNCING] Synchronizing ${syncList.length} items to Notion...`);

  for (let i = 0; i < syncList.length; i++) {
    await pushPromptRecord(notion, dbProperties, syncList[i]);
    // Sleep to respect Notion's rate limit (3 requests per second)
    if (i < syncList.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 380));
    }
  }

  console.log('[COMPLETED] Notion sync completed.');
}

run();
