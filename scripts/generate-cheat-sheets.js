import fs from 'fs';
import path from 'path';

const DATABASE_PATH = path.resolve('src/data/scraped_prompts.json');
const OUTPUT_DIR = path.resolve('cheat-sheets');

function cleanDirectory(dir) {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const curPath = path.join(dir, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        cleanDirectory(curPath);
        fs.rmdirSync(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    }
  } else {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function generate() {
  console.log('[START] Compiling copy-paste prompt cheat sheets...');
  try {
    if (!fs.existsSync(DATABASE_PATH)) {
      throw new Error(`Database file not found: ${DATABASE_PATH}`);
    }

    const prompts = JSON.parse(fs.readFileSync(DATABASE_PATH, 'utf-8'));
    console.log(`Loaded ${prompts.length} prompts to build cheat sheets.`);

    // Initialize/clean output folder
    cleanDirectory(OUTPUT_DIR);

    // Group prompts by category
    const categories = {};
    prompts.forEach(p => {
      const cat = p.category || 'General';
      if (!categories[cat]) {
        categories[cat] = [];
      }
      categories[cat].push(p);
    });

    // Generate markdown file for each category
    Object.entries(categories).forEach(([cat, list]) => {
      const fileName = cat.toLowerCase().replace(/[^a-z0-9]/g, '-') + '.md';
      const filePath = path.join(OUTPUT_DIR, fileName);

      let content = `# 📋 Quick Copy ${cat} Prompt Cheat Sheet\n\n`;
      content += `This file contains **${list.length}** curated prompt templates for **${cat}**. Copy and paste them directly into your AI chat window.\n\n`;
      content += `---\n\n`;

      list.forEach((p, idx) => {
        content += `## ${idx + 1}. ${p.title}\n\n`;
        content += `> **Tags**: ${p.tags.map(t => `\`${t}\``).join(', ')} | **Slug**: \`${p.slug}\`\n\n`;
        content += `### 📋 Template:\n`;
        content += `\`\`\`text\n${p.prompt.trim()}\n\`\`\`\n\n`;
        content += `[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/${p.slug})\n\n`;
        content += `---\n\n`;
      });

      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`[CHEAT-SHEET] Created cheat sheet: ${filePath}`);
    });

    // Generate main index README.md in cheat-sheets folder
    let indexContent = `# 📋 Copy-Paste Prompt Cheat Sheets Index\n\n`;
    indexContent += `Browse our prompt catalog directly in the repository using these categorised cheat sheets:\n\n`;
    indexContent += `| 📂 Category | 🔢 Count | 🔗 Cheat Sheet Link |\n`;
    indexContent += `| :--- | :--- | :--- |\n`;

    Object.entries(categories).forEach(([cat, list]) => {
      const fileName = cat.toLowerCase().replace(/[^a-z0-9]/g, '-') + '.md';
      indexContent += `| **${cat}** | ${list.length} templates | [Browse ${cat} Cheat Sheet](./${fileName}) |\n`;
    });

    indexContent += `\n\n---\n*Auto-generated on every repository build. Explore interactive versions at https://zion369369.github.io/awesome-prompting-hacks/*`;
    
    fs.writeFileSync(path.join(OUTPUT_DIR, 'README.md'), indexContent, 'utf-8');
    console.log('[SUCCESS] Main cheat sheets index generated successfully!');

  } catch (error) {
    console.error('[ERROR] Failed to generate cheat sheets:', error.message);
  }
}

generate();
