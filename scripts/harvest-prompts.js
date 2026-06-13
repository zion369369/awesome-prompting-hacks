/**
 * scripts/harvest-prompts.js
 * Parses open-source prompt templates from:
 * 1. JuliusBrussee/the-prompt-library CSV dataset
 * 2. f/awesome-chatgpt-prompts CSV dataset
 * and merges them into our active Awesome Prompting Hacks database.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_FILE = path.join(__dirname, '../src/data/scraped_prompts.json');
const SCRATCH_CSV_PATH = 'C:\\Users\\SURFACE LAPTOP\\.gemini\\antigravity\\brain\\de1e8602-6656-4fce-a355-6c2147e8ca68\\scratch\\the-prompt-library\\data\\master_100_ai_prompts.csv';
const CHATGPT_CSV_PATH = 'C:\\Users\\SURFACE LAPTOP\\.gemini\\antigravity\\brain\\de1e8602-6656-4fce-a355-6c2147e8ca68\\scratch\\awesome-chatgpt-prompts\\prompts.csv';

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // remove special characters
    .replace(/\s+/g, '-')         // replace spaces with hyphens
    .replace(/-+/g, '-');         // remove duplicate hyphens
}

function parseCSV(content) {
  const rows = [];
  let currentField = '';
  let currentRow = [];
  let inQuotes = false;
  
  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentField += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentField);
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      currentRow.push(currentField);
      rows.push(currentRow);
      currentRow = [];
      currentField = '';
    } else {
      currentField += char;
    }
  }
  
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    rows.push(currentRow);
  }
  
  return rows;
}

async function harvest() {
  console.log('[HARVESTER] Harvesting from multiple open-source repositories...');
  
  try {
    // 1. Read existing prompts database
    let existingPrompts = [];
    if (fs.existsSync(OUTPUT_FILE)) {
      try {
        existingPrompts = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
      } catch (err) {
        console.warn(`[WARNING] Failed to parse existing prompts: ${err.message}`);
      }
    }
    
    const existingSlugs = new Set(existingPrompts.map(p => p.slug));
    console.log(`[HARVESTER] Loaded ${existingPrompts.length} existing prompts.`);

    const newPrompts = [];

    // 2. Parse JuliusBrussee/the-prompt-library CSV
    const targetCSV1 = fs.existsSync(SCRATCH_CSV_PATH) ? SCRATCH_CSV_PATH : path.join(__dirname, '../scratch/the-prompt-library/data/master_100_ai_prompts.csv');
    if (fs.existsSync(targetCSV1)) {
      console.log(`[HARVESTER] Reading CSV 1 from ${targetCSV1}...`);
      const csvContent1 = fs.readFileSync(targetCSV1, 'utf-8');
      const rows1 = parseCSV(csvContent1);
      console.log(`[HARVESTER] Parsed ${rows1.length} rows from CSV 1.`);

      let fabricCount = 0;
      for (let i = 1; i < rows1.length; i++) {
        const row = rows1[i];
        if (row.length < 2) continue;
        
        const rawCategory = row[0] || 'General';
        const promptText = row[1] || '';
        if (!promptText.trim()) continue;

        if (rawCategory.toLowerCase() === 'fabric') {
          if (fabricCount >= 20) continue;
          fabricCount++;
        }

        const roleMatch = promptText.match(/^ROLE:\s*(.*)/i);
        let title = roleMatch ? roleMatch[1].trim() : promptText.split('\n')[0].trim().replace(/^ROLE:\s*/i, '').trim();
        
        if (title.endsWith('.')) title = title.slice(0, -1);
        title = title.trim();
        if (title.length > 80) title = title.substring(0, 77) + '...';
        if (!title) title = `${rawCategory} Assistant ${i}`;

        let slug = slugify(title).substring(0, 50);
        if (slug.endsWith('-')) slug = slug.slice(0, -1);
        if (!slug) slug = 'prompt';
        
        if (existingSlugs.has(slug)) {
          continue;
        }
        
        let finalSlug = slug;
        let suffix = 1;
        while (existingSlugs.has(finalSlug) || newPrompts.some(p => p.slug === finalSlug)) {
          finalSlug = `${slug}-${suffix}`;
          suffix++;
        }

        const categoryTag = slugify(rawCategory);
        newPrompts.push({
          title,
          slug: finalSlug,
          prompt: promptText.trim(),
          imageUrl: null,
          tags: [categoryTag, 'chatgpt', 'open-source'],
          category: rawCategory,
          url: 'https://github.com/JuliusBrussee/the-prompt-library'
        });
      }
    } else {
      console.log(`[HARVESTER] CSV 1 not found at ${targetCSV1}. Skipping.`);
    }

    // 3. Parse f/awesome-chatgpt-prompts CSV
    const targetCSV2 = fs.existsSync(CHATGPT_CSV_PATH) ? CHATGPT_CSV_PATH : path.join(__dirname, '../scratch/awesome-chatgpt-prompts/prompts.csv');
    if (fs.existsSync(targetCSV2)) {
      console.log(`[HARVESTER] Reading CSV 2 from ${targetCSV2}...`);
      const csvContent2 = fs.readFileSync(targetCSV2, 'utf-8');
      const rows2 = parseCSV(csvContent2);
      console.log(`[HARVESTER] Parsed ${rows2.length} rows from CSV 2.`);

      // Crop awesome-chatgpt-prompts to first 2000 entries to keep static build efficient
      const chatgptLimit = 2000;
      let count = 0;

      for (let i = 1; i < rows2.length; i++) {
        if (count >= chatgptLimit) break;
        
        const row = rows2[i];
        if (row.length < 2) continue;

        let title = (row[0] || '').trim();
        const promptText = (row[1] || '').trim();
        
        if (!title || !promptText) continue;
        if (title.endsWith('.')) title = title.slice(0, -1);
        title = title.trim();
        if (title.length > 80) title = title.substring(0, 77) + '...';

        let slug = slugify(title).substring(0, 50);
        if (slug.endsWith('-')) slug = slug.slice(0, -1);
        if (!slug) slug = 'prompt';

        if (existingSlugs.has(slug)) {
          continue;
        }
        
        let finalSlug = slug;
        let suffix = 1;
        while (existingSlugs.has(finalSlug) || newPrompts.some(p => p.slug === finalSlug)) {
          finalSlug = `${slug}-${suffix}`;
          suffix++;
        }

        newPrompts.push({
          title,
          slug: finalSlug,
          prompt: promptText,
          imageUrl: null,
          tags: ['roleplay', 'chatgpt', 'open-source'],
          category: 'Roleplay',
          url: 'https://github.com/f/awesome-chatgpt-prompts'
        });
        
        count++;
      }
      console.log(`[HARVESTER] Added ${count} prompts from awesome-chatgpt-prompts.`);
    } else {
      console.log(`[HARVESTER] CSV 2 not found at ${targetCSV2}. Skipping.`);
    }

    console.log(`[HARVESTER] Identified ${newPrompts.length} new unique prompts to add.`);
    
    // Merge and save
    const mergedMap = new Map();
    existingPrompts.forEach(p => mergedMap.set(p.slug, p));
    newPrompts.forEach(p => mergedMap.set(p.slug, p));
    
    const mergedList = Array.from(mergedMap.values());
    
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(mergedList, null, 2), 'utf-8');
    console.log(`[HARVESTER] Success! Total database now has ${mergedList.length} prompts.`);
  } catch (err) {
    console.error(`[ERROR] Failed to run open-source harvest:`, err.message);
    process.exit(1);
  }
}

harvest();
