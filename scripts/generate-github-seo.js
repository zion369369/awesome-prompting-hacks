/**
 * scripts/generate-github-seo.js
 * Programmatic SEO Markdown Engine for GitHub (DA 99).
 * 
 * Re-branded to compile scraped prompts into premium Awesome Prompting Hacks docs.
 */

import fs from 'fs';
import nodePath from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);

// Directories focusing on Prompts
const DOCS_DIR = nodePath.join(__dirname, '../docs');
const PROMPTS_OUT_DIR = nodePath.join(DOCS_DIR, 'prompts');

// Ensure output directories exist
[DOCS_DIR, PROMPTS_OUT_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Load Scraped Prompts Datasets
const scrapedPromptsPath = nodePath.join(__dirname, '../src/data/scraped_prompts.json');

// Extension reference - Branded organically as an Awesome Prompting utility
const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/Hello%20Prompting:%20Best%20AI%20Prompt%20Optimizer/idfecahooccghgkjohelhjecjeeeapah?hl=en";
const EXTENSION_BADGE = `[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](${CHROME_STORE_URL})`;

/**
 * Generate individual prompt markdown page
 */
function generatePromptMarkdown(item) {
  const filename = `${item.slug}.md`;
  const tagsList = item.tags.map(t => `#${t}`).join(' ');

  const mdContent = `# 🚀 AI Prompt: ${item.title}

An optimized prompt framework configured for Midjourney and compatible AI image models (Dall-e, Flux, Stable Diffusion, Ideogram) or text assistants (ChatGPT, Claude, Gemini, Grok).

${EXTENSION_BADGE}

---

${item.imageUrl ? `## 🎨 Output Visual Preview

![Output Preview of ${item.title}](${item.imageUrl})

---` : ''}

## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into your AI console:

\`\`\`text
${item.prompt}
\`\`\`

---

## 🔧 Automatic Optimization

> [!TIP]
> To format, score, and optimize your prompts directly in your AI chat window with the Google 4-Part structure and a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Toolkit](${CHROME_STORE_URL}).

---

## 🏷️ Tags
\`${tagsList}\`
`;

  fs.writeFileSync(nodePath.join(PROMPTS_OUT_DIR, filename), mdContent, 'utf-8');
  return `docs/prompts/${filename}`;
}

/**
 * Write master README.md and docs/index.md index sitemap as an Awesome List
 */
function writeMasterReadme(promptsList) {
  // Sort prompts alphabetically
  const sorted = [...promptsList].sort((a, b) => a.title.localeCompare(b.title));

  const readmeContent = `# 🚀 Awesome Prompting Hacks: The Ultimate Prompt Engineering Guide

A curated list of production-grade prompt templates, visual styles, and AI workflows for Midjourney, ChatGPT, Claude, Gemini, and Grok.

All templates are optimized for execution using the [Hello Prompting Console Toolkit](${CHROME_STORE_URL}).

---

## 🔧 Prompt Optimization Console Toolkit

[![Hello Prompting Console](https://img.shields.io/badge/Hello_Prompting-Console_Toolkit-blue?style=for-the-badge)](${CHROME_STORE_URL})

**Hello Prompting Console** acts as an AI prompt engineer directly in your browser:
*   **Prompt Score™ Live**: Audits and scores prompt health in real-time.
*   **Google 4-Part Framework**: Auto-injects Persona, Task, Context, and Format templates.
*   **One-Click Super Prompts**: Instantly upgrades generic inputs to professional prompts.

---

## 🎨 AI Prompt Templates Gallery

Explore our free, production-ready prompt engineering templates:

${sorted.map(item => `*   [${item.title}](${item.docPath}) - *Tags: ${item.tags.join(', ')}*`).join('\n')}

---

## 📄 License
This repository is licensed under the MIT License.
`;

  fs.writeFileSync(nodePath.join(__dirname, '../README.md'), readmeContent, 'utf-8');
  
  // Format index file for GitHub Pages (stripping the /docs/ folder prefix from links)
  // E.g. docs/prompts/name.md -> prompts/name.md
  const docsIndexContent = readmeContent.replaceAll('docs/', '');
  fs.writeFileSync(nodePath.join(DOCS_DIR, 'index.md'), docsIndexContent, 'utf-8');
  
  console.log(`[SUCCESS] Compiled root README.md and docs/index.md files.`);
}

function run() {
  console.log('[STARTING] Compiling GitHub Markdown directories...');
  
  if (!fs.existsSync(scrapedPromptsPath)) {
    console.error(`[ERROR] Database not found at ${scrapedPromptsPath}. Please run the harvester scraper script first.`);
    process.exit(1);
  }

  const prompts = JSON.parse(fs.readFileSync(scrapedPromptsPath, 'utf-8'));
  console.log(`[COMPILER] Loaded ${prompts.length} prompts from database.`);

  const promptsList = prompts.map(item => {
    const docPath = generatePromptMarkdown(item);
    return {
      title: item.title,
      tags: item.tags,
      docPath
    };
  });
  
  writeMasterReadme(promptsList);
  console.log(`[COMPLETED] Generated ${promptsList.length} markdown documentation pages successfully.`);
}

run();
