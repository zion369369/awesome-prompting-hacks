/**
 * scripts/harvest-prompts.js
 * Parses open-source prompt templates from JuliusBrussee/the-prompt-library CSV dataset
 * and merges them into our active Awesome Prompting Hacks database.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_FILE = path.join(__dirname, '../src/data/scraped_prompts.json');
const SCRATCH_CSV_PATH = 'C:\\Users\\SURFACE LAPTOP\\.gemini\\antigravity\\brain\\de1e8602-6656-4fce-a355-6c2147e8ca68\\scratch\\the-prompt-library\\data\\master_100_ai_prompts.csv';

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
  console.log('[HARVESTER] Harvesting from open-source JuliusBrussee/the-prompt-library repository...');
  
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

    // 2. Read and parse CSV
    const targetCSV = fs.existsSync(SCRATCH_CSV_PATH) ? SCRATCH_CSV_PATH : path.join(__dirname, '../scratch/the-prompt-library/data/master_100_ai_prompts.csv');
    if (!fs.existsSync(targetCSV)) {
      throw new Error(`Master prompts CSV not found at ${targetCSV}`);
    }
    
    console.log(`[HARVESTER] Reading CSV from ${targetCSV}...`);
    const csvContent = fs.readFileSync(targetCSV, 'utf-8');
    const rows = parseCSV(csvContent);
    console.log(`[HARVESTER] Parsed ${rows.length} rows from CSV.`);

    const newPrompts = [];
    let fabricCount = 0;
    
    // Skip header row
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (row.length < 2) continue;
      
      const rawCategory = row[0] || 'General';
      const promptText = row[1] || '';
      const author = row[3] || 'Julius Brussee';
      
      if (!promptText.trim()) continue;

      // Skip most of Fabric prompts to keep static build size performant (capping Fabric at 20 items)
      if (rawCategory.toLowerCase() === 'fabric') {
        if (fabricCount >= 20) {
          continue;
        }
        fabricCount++;
      }

      // Extract title from ROLE line
      const roleMatch = promptText.match(/^ROLE:\s*(.*)/i);
      let title = '';
      if (roleMatch) {
        title = roleMatch[1].trim();
      } else {
        const firstLine = promptText.split('\n')[0].trim();
        title = firstLine.replace(/^ROLE:\s*/i, '').trim();
      }
      
      // Clean up title
      if (title.endsWith('.')) {
        title = title.slice(0, -1);
      }
      title = title.trim();
      
      // Truncate title if too long
      if (title.length > 80) {
        title = title.substring(0, 77) + '...';
      }
      
      if (!title) {
        title = `${rawCategory} Assistant ${i}`;
      }

      let slug = slugify(title).substring(0, 50);
      if (slug.endsWith('-')) {
        slug = slug.slice(0, -1);
      }
      if (!slug) {
        slug = 'prompt';
      }
      
      let finalSlug = slug;
      let suffix = 1;
      while (existingSlugs.has(finalSlug) || newPrompts.some(p => p.slug === finalSlug)) {
        finalSlug = `${slug}-${suffix}`;
        suffix++;
      }

      // Clean up tags
      const categoryTag = slugify(rawCategory);
      const tags = [categoryTag, 'chatgpt', 'open-source'];
      
      const promptItem = {
        title,
        slug: finalSlug,
        prompt: promptText.trim(),
        imageUrl: null, // text templates have no image preview
        tags,
        category: rawCategory,
        url: 'https://github.com/JuliusBrussee/the-prompt-library'
      };

      newPrompts.push(promptItem);
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
