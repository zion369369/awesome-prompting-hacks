/**
 * scripts/generate-rss.js
 * Programmatic RSS Feed Generator for developer aggregators (like daily.dev).
 * 
 * Compiles the prompt database into a valid RSS 2.0 XML feed
 * saved to: docs/rss.xml (and public/rss.xml).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCRAPED_PROMPTS_PATH = path.join(__dirname, '../src/data/scraped_prompts.json');
const PUBLIC_DIR = path.join(__dirname, '../public');
const DOCS_DIR = path.join(__dirname, '../docs');

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

function generateRss() {
  console.log('[START] Generating RSS feed XML...');

  if (!fs.existsSync(SCRAPED_PROMPTS_PATH)) {
    console.error(`[ERROR] Prompt database not found at: ${SCRAPED_PROMPTS_PATH}`);
    process.exit(1);
  }

  const prompts = JSON.parse(fs.readFileSync(SCRAPED_PROMPTS_PATH, 'utf-8'));
  
  // Sort prompts by title (or assume newest first, limiting to the top 50 for RSS feed size efficiency)
  const feedItems = prompts.slice(0, 100); 

  const targetDomain = 'https://zion369369.github.io/awesome-prompting-hacks';
  const buildDate = new Date().toUTCString();

  let xml = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Awesome Prompting Hacks</title>
    <link>${targetDomain}/</link>
    <description>Free production-grade AI prompt templates for ChatGPT, Claude, Gemini, and Midjourney.</description>
    <language>en-us</language>
    <pubDate>${buildDate}</pubDate>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${targetDomain}/rss.xml" rel="self" type="application/rss+xml" />
`;

  feedItems.forEach(item => {
    const itemUrl = `${targetDomain}/prompts/${item.slug}`;
    const description = `Copy and run the calibrated AI prompt template for: "${item.title}". Tags: ${item.tags.join(', ')}.`;
    
    xml += `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${itemUrl}</link>
      <description>${escapeXml(description)}</description>
      <guid isPermaLink="true">${itemUrl}</guid>
      <pubDate>${buildDate}</pubDate>
    </item>\n`;
  });

  xml += `  </channel>
</rss>`;

  // Write to public folder (for dev/build copy)
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }
  fs.writeFileSync(path.join(PUBLIC_DIR, 'rss.xml'), xml, 'utf-8');

  // Write to docs folder (for static live output)
  if (!fs.existsSync(DOCS_DIR)) {
    fs.mkdirSync(DOCS_DIR, { recursive: true });
  }
  fs.writeFileSync(path.join(DOCS_DIR, 'rss.xml'), xml, 'utf-8');

  console.log(`[SUCCESS] Generated RSS feed containing ${feedItems.length} items at: docs/rss.xml`);
}

generateRss();
