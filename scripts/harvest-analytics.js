import fs from 'fs';
import path from 'path';
import { Client } from '@notionhq/client';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATABASE_PATH = path.join(__dirname, '../src/data/scraped_prompts.json');
const ANALYTICS_PATH = path.join(__dirname, '../src/data/prompt_analytics.json');

const devtoApiKey = process.env.DEVTO_API_KEY;
const notionKey = process.env.NOTION_KEY || process.env.NOTION_API_KEY;
const databaseId = process.env.NOTION_DATABASE_ID;

async function fetchDevToArticles() {
  if (!devtoApiKey) {
    console.warn('[DEVTO] DEVTO_API_KEY is not set. Skipping Dev.to analytics harvest.');
    return [];
  }

  const url = 'https://dev.to/api/articles/me';
  const response = await fetch(url, {
    headers: {
      'api-key': devtoApiKey,
      'User-Agent': 'Node-Fetch'
    }
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Failed to fetch Dev.to articles (${response.status}): ${text}`);
  }

  return await response.json();
}

async function updateNotionPage(notion, pageId, views, reactions, comments) {
  try {
    const properties = {};

    // Only update if they exist (we'll check properties dynamically before updating)
    properties.Views = {
      number: views
    };
    properties.Reactions = {
      number: reactions
    };
    properties.Comments = {
      number: comments
    };

    await notion.pages.update({
      page_id: pageId,
      properties: properties
    });
    console.log(`[NOTION] Updated page ID ${pageId} with Views: ${views}, Reactions: ${reactions}`);
  } catch (error) {
    console.warn(`[NOTION WARN] Could not update page ID ${pageId}: ${error.message}`);
  }
}

async function main() {
  console.log('[START] Harvesting content distribution analytics...');
  try {
    // 1. Fetch from Dev.to
    const articles = await fetchDevToArticles();
    console.log(`[DEVTO] Retreived ${articles.length} syndicated articles.`);

    const analyticsData = [];
    const matchedStats = {};

    // 2. Parse and match articles
    articles.forEach(article => {
      // Dev.to title format: "How to use the 'Title' AI Prompt for Development"
      const match = article.title.match(/How to use the ['"](.*)['"] AI Prompt for Development/);
      if (match) {
        const promptTitle = match[1];
        matchedStats[promptTitle] = {
          views: article.page_views_count || 0,
          reactions: article.public_reactions_count || 0,
          comments: article.comments_count || 0,
          url: article.url
        };
        
        analyticsData.push({
          title: promptTitle,
          views: article.page_views_count,
          reactions: article.public_reactions_count,
          comments: article.comments_count,
          url: article.url,
          harvestedAt: new Date().toISOString()
        });
      }
    });

    // Save locally
    const outputDir = path.dirname(ANALYTICS_PATH);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(ANALYTICS_PATH, JSON.stringify(analyticsData, null, 2), 'utf-8');
    console.log(`[GIT] Local analytics log saved to: ${ANALYTICS_PATH}`);

    // 3. Notion Update Loop
    if (notionKey && databaseId && Object.keys(matchedStats).length > 0) {
      console.log('[NOTION] Connecting to Notion for analytics sync...');
      const notion = new Client({ auth: notionKey });
      
      // Fetch all entries in database
      const response = await notion.databases.query({ database_id: databaseId });
      const pages = response.results || [];
      console.log(`[NOTION] Found ${pages.length} records in Notion Database.`);

      for (const page of pages) {
        const titleProp = page.properties.Name?.title || [];
        if (titleProp.length > 0) {
          const pageTitle = titleProp[0].text.content;
          const stats = matchedStats[pageTitle];
          
          if (stats) {
            console.log(`[SYNC] Syncing metrics for "${pageTitle}"...`);
            await updateNotionPage(notion, page.id, stats.views, stats.reactions, stats.comments);
          }
        }
      }
    } else {
      console.log('[INFO] Notion credentials missing or no Dev.to matches found. Skipping Notion sync.');
    }

    console.log('[COMPLETE] Analytics harvesting complete.');
  } catch (error) {
    console.error('[ERROR] Harvesting failed:', error.message);
  }
}

main();
