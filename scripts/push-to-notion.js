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

const PLATFORM_ICONS = {
  'GPT-5.5': '🟢',
  'GPT-5.4 mini': '🧠',
  'Claude Fable 5': '🧡',
  'Gemini 3.5 Pro': '✨',
  'DeepSeek R1': '🔵',
  'Grok 4.3': '🛸',
  'Kimi Chat': '🌙',
  'Universal': '🤖'
};

const CATEGORY_ICONS = {
  'Writing': '✍️',
  'Marketing': '📈',
  'Coding': '💻',
  'Fabric': '⚙️',
  'Roleplay': '🎭',
  'SEO': '🔍',
  'General': '💡'
};

const COVER_IMAGES = {
  'GPT-5.5': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
  'GPT-5.4 mini': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop',
  'Claude Fable 5': 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200&auto=format&fit=crop',
  'Gemini 3.5 Pro': 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
  'DeepSeek R1': 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1200&auto=format&fit=crop',
  'Grok 4.3': 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop',
  'Kimi Chat': 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop',
  'Default': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop'
};

function determinePlatform(item) {
  const title = item.title;
  const category = item.category || 'General';
  const tags = item.tags || [];
  const text = `${title} ${category} ${tags.join(' ')}`.toLowerCase();
  
  // Explicit keyword matches first
  if (text.includes('claude') || text.includes('anthropic') || text.includes('sonnet') || text.includes('opus') || text.includes('fable')) {
    return 'Claude Fable 5';
  }
  if (text.includes('gemini') || text.includes('google') || text.includes('1.5 pro') || text.includes('2.0 pro') || text.includes('3.5 pro')) {
    return 'Gemini 3.5 Pro';
  }
  if (text.includes('deepseek') || text.includes('deep-seek') || text.includes('r1')) {
    return 'DeepSeek R1';
  }
  if (text.includes('grok') || text.includes('xai') || text.includes('twitter')) {
    return 'Grok 4.3';
  }
  if (text.includes('kimi') || text.includes('moonshot')) {
    return 'Kimi Chat';
  }
  if (text.includes('chatgpt') || text.includes('gpt-4') || text.includes('gpt-5') || text.includes('openai') || text.includes('o1') || text.includes('o3')) {
    if (text.includes('coding') || text.includes('developer')) return 'GPT-5.4 mini';
    return 'GPT-5.5';
  }

  // If no explicit matches, classify based on task category for maximum performance
  if (category === 'Coding' || text.includes('code') || text.includes('program') || text.includes('developer')) {
    return (title.length % 2 === 0) ? 'Claude Fable 5' : 'DeepSeek R1';
  }
  if (category === 'Writing' || text.includes('write') || text.includes('book') || text.includes('novel')) {
    const val = title.length % 3;
    if (val === 0) return 'Claude Fable 5';
    if (val === 1) return 'Kimi Chat';
    return 'GPT-5.5';
  }
  if (category === 'Marketing' || text.includes('seo') || text.includes('marketing') || text.includes('ads')) {
    const val = title.length % 3;
    if (val === 0) return 'Gemini 3.5 Pro';
    if (val === 1) return 'Grok 4.3';
    return 'GPT-5.5';
  }
  
  // Default fallback: Distribute evenly using simple hash of the title
  const models = [
    'GPT-5.5',
    'Claude Fable 5',
    'Gemini 3.5 Pro',
    'DeepSeek R1',
    'Grok 4.3',
    'Kimi Chat'
  ];
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash += title.charCodeAt(i);
  }
  return models[hash % models.length];
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

// Helper function to archive all existing pages in a database
async function clearDatabase(notion, databaseId) {
  console.log('[NOTION] Querying database for existing pages to archive...');
  let hasMore = true;
  let startCursor = undefined;
  let count = 0;
  const token = notion.auth || process.env.NOTION_KEY;

  while (hasMore) {
    try {
      const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          start_cursor: startCursor,
          page_size: 100
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`[${response.status}] ${errText}`);
      }

      const res = await response.json();
      const pages = res.results || [];
      
      if (pages.length > 0) {
        console.log(`[NOTION] Archiving a batch of ${pages.length} pages...`);
        for (const page of pages) {
          try {
            await notion.pages.update({
              page_id: page.id,
              archived: true
            });
            count++;
            // Pause briefly to respect rate limit
            await new Promise(resolve => setTimeout(resolve, 340));
          } catch (err) {
            console.error(`[ERROR] Failed to archive page ${page.id}:`, err.message);
          }
        }
      }

      hasMore = res.has_more;
      startCursor = res.next_cursor;
    } catch (e) {
      console.error(`[ERROR] Notion database cleanup failed: ${e.message}`);
      break;
    }
  }
  console.log(`[NOTION] Successfully archived ${count} existing pages. Database is clean.`);
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

    const platform = determinePlatform(item);
    const category = item.category || "General";
    
    // Choose icon
    const iconEmoji = PLATFORM_ICONS[platform] || CATEGORY_ICONS[category] || '🤖';
    
    // Choose cover
    const coverUrl = COVER_IMAGES[platform] || COVER_IMAGES[category] || COVER_IMAGES['Default'];

    // Create the page with prompt content blocks in the page body
    await notion.pages.create({
      parent: { database_id: databaseId },
      icon: {
        type: 'emoji',
        emoji: iconEmoji
      },
      cover: {
        type: 'external',
        external: {
          url: coverUrl
        }
      },
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

  // Filter out low-quality/broken scraped items (such as Fabric prompts with # IDENTITY titles or Midjourney artwork prompts)
  const cleanPrompts = prompts.filter(p => {
    const isMidjourney = p.category?.toLowerCase() === 'midjourney';
    const isFabric = p.category?.toLowerCase() === 'fabric';
    const hasBadTitle = p.title.startsWith('#') || p.title.toLowerCase().includes('identity');
    return !isMidjourney && !isFabric && !hasBadTitle;
  });
  console.log(`Filtered prompts list down to ${cleanPrompts.length} high-quality, non-generic entries.`);

  if (!notionKey || !databaseId) {
    console.log('\n[INFO] Notion key or Database ID is not set.');
    console.log('To synchronize programmatically:');
    console.log('1. Set NOTION_KEY and NOTION_DATABASE_ID environment variables, or update config/notion.json.');
    console.log('2. Run: node scripts/push-to-notion.js [options]');
    console.log('Running in DRY-RUN mode. Available prompts mapping preview:');
    if (cleanPrompts.length > 0) {
      const sample = cleanPrompts[0];
      console.log(`Sample Title: "${sample.title}"`);
      console.log(`Sample Category: "${sample.category}"`);
      console.log(`Sample Platform: "${determinePlatform(sample)}"`);
      console.log(`Sample Tags: ${sample.tags.slice(0, 5).join(', ')}`);
      console.log(`Sample Body length: ${sample.prompt.length} characters.`);
    }
    process.exit(0);
  }

  const notion = new Client({ auth: notionKey });

  // Dynamically retrieve the database schema to verify/provision columns
  let dbProperties = {};
  try {
    const dbInfo = await notion.databases.retrieve({ database_id: databaseId });
    dbProperties = dbInfo.properties || {};
    console.log(`[NOTION] Successfully connected. Existing columns: ${Object.keys(dbProperties).join(', ')}`);

    // Dynamic schema provisioning
    const missingProps = {};
    if (!dbProperties.Category) missingProps.Category = { select: {} };
    if (!dbProperties.Platform) missingProps.Platform = { select: {} };
    if (!dbProperties.Tags) missingProps.Tags = { multi_select: {} };
    if (!dbProperties.Score) missingProps.Score = { number: {} };
    if (!dbProperties["CWS Link"]) missingProps["CWS Link"] = { url: {} };

    if (Object.keys(missingProps).length > 0) {
      console.log(`[NOTION] Provisioning missing columns via HTTP PATCH: ${Object.keys(missingProps).join(', ')}...`);
      const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${notionKey}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          properties: missingProps
        })
      });
      if (response.ok) {
        const updatedDb = await response.json();
        dbProperties = updatedDb.properties || {};
        console.log('[NOTION] Notion database columns provisioned successfully!');
      } else {
        const text = await response.text();
        console.warn(`[NOTION WARN] Failed to update schema (${response.status}): ${text}`);
      }
    }
  } catch (e) {
    console.warn(`[NOTION WARN] Could not query/update database properties: ${e.message}. Using default columns.`);
  }

  // Parse arguments
  const args = process.argv.slice(2);
  
  let syncList = [];
  let limit = 10;
  let all = false;
  let singleIndex = null;
  
  const limitIdx = args.findIndex(a => a === '--limit');
  if (limitIdx !== -1 && args[limitIdx + 1]) {
    limit = parseInt(args[limitIdx + 1], 10) || 10;
  }
  
  if (args.includes('--all')) {
    all = true;
  }
  
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (i > 0 && args[i - 1] === '--limit') continue;
    if (!a.startsWith('--') && !isNaN(a)) {
      singleIndex = parseInt(a, 10);
      break;
    }
  }
  
  if (singleIndex !== null) {
    const idx = ((singleIndex % cleanPrompts.length) + cleanPrompts.length) % cleanPrompts.length;
    syncList = [cleanPrompts[idx]];
    console.log(`[INDEX] Resolved index ${singleIndex} to prompt index ${idx} (out of ${cleanPrompts.length} clean prompts).`);
  } else {
    if (all) {
      limit = cleanPrompts.length;
    }
    syncList = cleanPrompts.slice(0, limit);
  }

  // Archive old pages in the database first if doing bulk sync
  if (syncList.length > 0 && singleIndex === null) {
    await clearDatabase(notion, databaseId);
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
