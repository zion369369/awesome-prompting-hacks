import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATABASE_PATH = path.join(__dirname, '../src/data/scraped_prompts.json');

async function main() {
  console.log('[START] Processing Notion Webhook Dispatch request...');
  
  const slug = process.env.PROMPT_SLUG;
  const indexStr = process.env.PROMPT_INDEX;
  const platformsStr = process.env.TARGET_PLATFORMS || 'discord,notion,devto';
  
  if (!fs.existsSync(DATABASE_PATH)) {
    console.error(`[ERROR] Database not found: ${DATABASE_PATH}`);
    process.exit(1);
  }
  
  const prompts = JSON.parse(fs.readFileSync(DATABASE_PATH, 'utf-8'));
  let promptIndex = -1;
  
  // 1. Resolve prompt
  if (slug) {
    promptIndex = prompts.findIndex(p => p.slug === slug);
    if (promptIndex === -1) {
      console.warn(`[WARN] Slug "${slug}" not found in database. Trying to parse as index.`);
    }
  }
  
  if (promptIndex === -1 && indexStr !== undefined && indexStr !== '') {
    const parsed = parseInt(indexStr, 10);
    if (!isNaN(parsed)) {
      promptIndex = ((parsed % prompts.length) + prompts.length) % prompts.length;
    }
  }
  
  if (promptIndex === -1) {
    console.log('[INFO] No valid slug or index provided. Defaulting to index 0.');
    promptIndex = 0;
  }
  
  const selectedPrompt = prompts[promptIndex];
  console.log(`[RESOLVED] Prompt: "${selectedPrompt.title}" (Index: ${promptIndex}, Slug: "${selectedPrompt.slug}")`);
  
  // 2. Parse target platforms
  const platforms = platformsStr.split(',').map(p => p.trim().toLowerCase()).filter(p => p.length > 0);
  console.log(`[TARGETS] Syndicating to: ${platforms.join(', ')}`);
  
  // 3. Execute syndication for each platform
  for (const platform of platforms) {
    try {
      console.log(`\n--- Syndicating to ${platform.toUpperCase()} ---`);
      let command = '';
      
      if (platform === 'discord') {
        command = `node scripts/discord-publisher.js ${promptIndex} --everyone`;
      } else if (platform === 'devto') {
        command = `node scripts/devto-publisher.js ${promptIndex}`;
      } else if (platform === 'notion') {
        command = `node scripts/push-to-notion.js ${promptIndex}`;
      } else {
        console.warn(`[WARN] Unsupported platform "${platform}", skipping.`);
        continue;
      }
      
      console.log(`Running: ${command}`);
      execSync(command, { encoding: 'utf-8', stdio: 'inherit' });
      console.log(`[SUCCESS] Completed syndication to ${platform.toUpperCase()}`);
    } catch (error) {
      console.error(`[ERROR] Failed to syndicate to ${platform.toUpperCase()}:`, error.message);
    }
  }
  
  console.log('\n[COMPLETE] Notion dispatch publishing run finished.');
}

main();
