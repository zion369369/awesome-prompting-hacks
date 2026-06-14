import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATABASE_PATH = path.join(__dirname, '../src/data/scraped_prompts.json');
const README_PATH = path.join(__dirname, '../README.md');

function determinePlatform(item) {
  const text = `${item.title} ${item.category} ${item.tags.join(' ')}`.toLowerCase();
  if (text.includes('midjourney')) return 'Midjourney';
  if (text.includes('claude')) return 'Claude';
  if (text.includes('gemini')) return 'Gemini';
  if (text.includes('chatgpt') || text.includes('openai') || text.includes('gpt')) return 'ChatGPT';
  return 'Universal';
}

async function main() {
  console.log('[START] Updating README stats...');
  try {
    if (!fs.existsSync(DATABASE_PATH)) {
      throw new Error(`Database file not found: ${DATABASE_PATH}`);
    }
    if (!fs.existsSync(README_PATH)) {
      throw new Error(`README.md not found: ${README_PATH}`);
    }

    const prompts = JSON.parse(fs.readFileSync(DATABASE_PATH, 'utf-8'));
    const totalPrompts = prompts.length;

    // Platform breakdown
    const platforms = { Midjourney: 0, Claude: 0, Gemini: 0, ChatGPT: 0, Universal: 0 };
    const categories = {};

    prompts.forEach(p => {
      const plat = determinePlatform(p);
      platforms[plat]++;

      const cat = p.category || 'General';
      categories[cat] = (categories[cat] || 0) + 1;
    });

    // Sort categories
    const sortedCategories = Object.entries(categories)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    // Build stats markdown
    let statsMarkdown = `\n### 📊 Prompt Library Stats\n\n`;
    statsMarkdown += `| ⚙️ Platform | 🔢 Count | 📈 Share |\n`;
    statsMarkdown += `| :--- | :--- | :--- |\n`;
    Object.entries(platforms).forEach(([plat, count]) => {
      const share = ((count / totalPrompts) * 100).toFixed(1);
      statsMarkdown += `| **${plat}** | ${count} | ${share}% |\n`;
    });
    statsMarkdown += `| **Total** | **${totalPrompts}** | **100%** |\n\n`;

    statsMarkdown += `#### 🏷️ Top Categories\n`;
    sortedCategories.forEach(([cat, count]) => {
      statsMarkdown += `- **${cat}** (${count} templates)\n`;
    });
    statsMarkdown += `\n*Last updated: ${new Date().toUTCString()}*\n`;

    // Read README.md
    let readme = fs.readFileSync(README_PATH, 'utf-8');

    // Add markers to README if they don't exist
    if (!readme.includes('<!-- STATS_START -->')) {
      const splitTarget = '## 🔧 Prompt Optimization Console Toolkit';
      if (readme.includes(splitTarget)) {
        readme = readme.replace(splitTarget, `<!-- STATS_START -->\n<!-- STATS_END -->\n\n${splitTarget}`);
      } else {
        // Fallback to top
        readme = `<!-- STATS_START -->\n<!-- STATS_END -->\n\n` + readme;
      }
    }

    // Replace contents between markers
    const startIdx = readme.indexOf('<!-- STATS_START -->');
    const endIdx = readme.indexOf('<!-- STATS_END -->');

    if (startIdx !== -1 && endIdx !== -1 && startIdx < endIdx) {
      const before = readme.substring(0, startIdx + '<!-- STATS_START -->'.length);
      const after = readme.substring(endIdx);
      readme = before + '\n' + statsMarkdown + '\n' + after;
      fs.writeFileSync(README_PATH, readme, 'utf-8');
      console.log('[SUCCESS] README stats updated successfully!');
    } else {
      console.error('[ERROR] Could not locate stats markers in README.md.');
    }
  } catch (error) {
    console.error('[ERROR] Failed to update README stats:', error.message);
  }
}

main();
