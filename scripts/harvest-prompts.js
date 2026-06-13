/**
 * scripts/harvest-prompts.js
 * Scraper to fetch real-world prompt templates from PromptLibrary.org.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_FILE = path.join(__dirname, '../src/data/scraped_prompts.json');

// Ensure output directory exists
const dataDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function harvest() {
  console.log('[HARVESTER] Starting prompt harvesting from PromptLibrary.org...');
  
  try {
    // 1. Fetch homepage
    console.log('[HARVESTER] Fetching homepage...');
    const homeRes = await fetch('https://promptlibrary.org/');
    if (!homeRes.ok) {
      throw new Error(`Failed to fetch homepage: ${homeRes.statusText}`);
    }
    const homeHtml = await homeRes.text();
    const $home = cheerio.load(homeHtml);
    
    // 2. Extract detail page URLs
    const detailUrls = [];
    $home('a').each((i, el) => {
      const href = $home(el).attr('href');
      if (href && href.includes('/midjourney/') && href !== 'https://promptlibrary.org/midjourney/') {
        // Normalize URL (strip query params, trailing slashes, etc.)
        const normalized = href.split('?')[0];
        if (!detailUrls.includes(normalized)) {
          detailUrls.push(normalized);
        }
      }
    });

    console.log(`[HARVESTER] Found ${detailUrls.length} unique prompt detail pages.`);

    // We can limit or crawl all. Let's try to crawl up to 45 prompts.
    const maxPrompts = 45;
    const targets = detailUrls.slice(0, maxPrompts);
    console.log(`[HARVESTER] Harvesting first ${targets.length} prompts...`);

    const scrapedPrompts = [];

    // 3. Crawl each page
    for (let i = 0; i < targets.length; i++) {
      const url = targets[i];
      const slug = url.replace('https://promptlibrary.org/midjourney/', '').replace(/\//g, '');
      console.log(`[${i + 1}/${targets.length}] Fetching ${url} (slug: ${slug})...`);
      
      try {
        const detailRes = await fetch(url);
        if (!detailRes.ok) {
          console.error(`[ERROR] Failed to fetch ${url}: ${detailRes.statusText}`);
          continue;
        }
        
        const detailHtml = await detailRes.text();
        const $detail = cheerio.load(detailHtml);
        
        // Extract Title
        const title = $detail('.elementor-widget-theme-post-title h1.elementor-heading-title').first().text().trim() ||
                      $detail('h1.elementor-heading-title').first().text().trim() ||
                      $detail('h1').first().text().trim();
        
        // Extract Prompt text
        const promptText = $detail('.elementor-widget-theme-post-content pre code').first().text().trim() ||
                           $detail('pre.wp-block-code code').first().text().trim() ||
                           $detail('pre').first().text().trim();
        
        // Extract Image
        const imageUrl = $detail('meta[property="og:image"]').attr('content') ||
                          $detail('.elementor-widget-theme-post-featured-image img').attr('src') ||
                          $detail('article img').first().attr('src');
                          
        // Extract Tags
        const tags = [];
        $detail('.elementor-post-info__terms-list a, .elementor-widget-post-info a').each((_, el) => {
          const tagText = $detail(el).text().trim().toLowerCase();
          if (tagText && tagText !== 'midjourney' && !tags.includes(tagText) && !tagText.includes('tags:')) {
            tags.push(tagText);
          }
        });
        
        if (!title || !promptText) {
          console.warn(`[WARNING] Incomplete data for ${url}. Skipping.`);
          continue;
        }

        const promptItem = {
          title,
          slug,
          prompt: promptText,
          imageUrl,
          tags: tags.length > 0 ? tags : ['midjourney', 'ai-image'],
          category: 'midjourney',
          url
        };
        
        scrapedPrompts.push(promptItem);
        console.log(`[SUCCESS] Scraped: "${title}"`);
        
        // Politeness delay
        await sleep(300);
      } catch (err) {
        console.error(`[ERROR] Error scraping ${url}:`, err.message);
      }
    }
    
    // Save to file (merging with existing if exists)
    let existingPrompts = [];
    if (fs.existsSync(OUTPUT_FILE)) {
      try {
        existingPrompts = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
      } catch (err) {
        console.warn(`[WARNING] Failed to parse existing prompts file: ${err.message}`);
      }
    }
    const mergedMap = new Map();
    existingPrompts.forEach(item => mergedMap.set(item.slug, item));
    scrapedPrompts.forEach(item => mergedMap.set(item.slug, item));
    const mergedPrompts = Array.from(mergedMap.values());

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(mergedPrompts, null, 2), 'utf-8');
    console.log(`[HARVESTER] Harvest complete! Crawled ${scrapedPrompts.length} prompts. Total database size: ${mergedPrompts.length} prompts.`);
  } catch (err) {
    console.error('[HARVESTER] Critical error during harvesting:', err.message);
    process.exit(1);
  }
}

harvest();
