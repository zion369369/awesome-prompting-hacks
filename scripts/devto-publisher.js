/**
 * scripts/devto-publisher.js
 * Programmatic Developer Distribution Engine for Dev.to (DA 87).
 * 
 * Auto-selects coding, developer, and script-engineering prompts,
 * formats them into high-value markdown dev posts, and submits them
 * directly to the Dev.to API.
 * 
 * Run instructions:
 * 1. Generate an API key on Dev.to (Settings -> Developer -> API Keys).
 * 2. Set environment variable: DEVTO_API_KEY=your_key_here
 * 3. Run: node scripts/devto-publisher.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCRAPED_PROMPTS_PATH = path.join(__dirname, '../src/data/scraped_prompts.json');
const DEVTO_API_KEY = process.env.DEVTO_API_KEY;
const TARGET_DOMAIN = 'https://zion369369.github.io/awesome-prompting-hacks';
const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en";

// Keywords to trigger developer-oriented content filter
const DEV_KEYWORDS = [
  'code', 'dev', 'developer', 'programming', 'script', 'python', 'javascript',
  'typescript', 'sql', 'bash', 'powershell', 'html', 'css', 'react', 'node',
  'api', 'git', 'terminal', 'database', 'docker', 'solidity', 'rust', 'c++', 'java'
];

function isDevPrompt(prompt) {
  const textToSearch = `${prompt.title} ${prompt.category} ${prompt.tags.join(' ')} ${prompt.prompt}`.toLowerCase();
  return DEV_KEYWORDS.some(keyword => textToSearch.includes(keyword));
}

function formatArticleBody(prompt) {
  const liveUrl = `${TARGET_DOMAIN}/prompts/${prompt.slug}`;
  const tagsList = prompt.tags.map(t => `#${t}`).join(' ');

  return `---
title: "How to use the '${prompt.title}' AI Prompt for Development"
published: false
description: "Copy and run this optimized AI template to automate your coding workflows with Claude, ChatGPT, and Gemini."
tags: ["promptengineering", "ai", "coding", "productivity"]
---

Automating development workflows using natural language prompts has become a core competency for modern engineers. Today, we're sharing a production-grade prompt template calibrated specifically for developer tasks.

## 🎨 The Optimized Prompt Template

Copy and paste this system instruction directly into your AI chat console (e.g. Claude 3.5 Sonnet, GPT-4o, or Gemini 1.5 Pro):

\`\`\`text
${prompt.prompt}
\`\`\`

---

## 🔧 Pro Tips for Execution

1. **Context Loading:** For optimal results, enclose any reference code snippets or error logs in clean XML tags (e.g. \`<code_to_review>\` or \`<error_output>\`) directly after pasting the prompt.
2. **Framework Alignment:** This template works best when system instructions are strictly followed. Avoid post-prompt overrides to maintain output compliance.

---

## 🚀 Live Interactive Version & Extensions

*   **View this prompt on our gallery:** [Interactive ${prompt.title} Page](${liveUrl})
*   **Auto-Optimize prompts in your browser:** To score, format, and upgrade your prompts directly in your ChatGPT/Claude chat window with a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Extension](${CHROME_STORE_URL}).

---
*Distributed programmatically via the **Awesome Prompting Hacks** SEO distribution engine.*
`;
}

async function publishToDevTo(prompt) {
  const articleBody = formatArticleBody(prompt);

  // Parse frontmatter and body
  const bodyMarkdown = articleBody.replace(/^---\n([\s\S]*?)\n---\n/, '');
  const title = `How to use the '${prompt.title}' AI Prompt for Development`;
  
  const payload = {
    article: {
      title: title,
      published: false, // Save as draft initially for safety
      body_markdown: bodyMarkdown,
      tags: ["ai", "productivity", "webdev", "programming"],
      series: "Awesome Prompting Hacks"
    }
  };

  try {
    const response = await fetch('https://dev.to/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': DEVTO_API_KEY
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (response.ok) {
      console.log(`[SUCCESS] Published draft to Dev.to: "${title}"`);
      console.log(`Draft URL: ${result.url}`);
    } else {
      console.error(`[API ERROR] Failed for "${title}":`, result.error || result.message);
    }
  } catch (error) {
    console.error(`[NETWORK ERROR] Failed to submit to Dev.to:`, error.message);
  }
}

async function main() {
  console.log('[START] Scanning prompt database for developer-oriented content...');

  if (!fs.existsSync(SCRAPED_PROMPTS_PATH)) {
    console.error(`[ERROR] Prompt database not found at: ${SCRAPED_PROMPTS_PATH}`);
    process.exit(1);
  }

  const prompts = JSON.parse(fs.readFileSync(SCRAPED_PROMPTS_PATH, 'utf-8'));
  const devPrompts = prompts.filter(isDevPrompt);

  console.log(`Found ${devPrompts.length} developer-oriented prompts out of ${prompts.length} total entries.`);

  if (!DEVTO_API_KEY) {
    console.log('\n[INFO] DEVTO_API_KEY environment variable is not set.');
    console.log('Running in DRY-RUN mode. Here is a sample of the compiled article markdown:\n');
    if (devPrompts.length > 0) {
      console.log(formatArticleBody(devPrompts[0]));
    } else {
      console.log('No developer prompts found to preview.');
    }
    console.log('\nTo publish this programmatically:');
    console.log('1. Go to Dev.to Settings -> Account and generate a Developer API Key.');
    console.log('2. Run: export DEVTO_API_KEY=your_key');
    console.log('3. Run: node scripts/devto-publisher.js\n');
    process.exit(0);
  }

  // Limit API requests to prevent rate-limiting (e.g. publish top 3 drafts at a time)
  const limit = Math.min(devPrompts.length, 3);
  console.log(`[PUBLISHING] Submitting the top ${limit} developer prompt drafts to Dev.to...`);

  for (let i = 0; i < limit; i++) {
    await publishToDevTo(devPrompts[i]);
    // Sleep to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1500));
  }

  console.log('[COMPLETE] dev.to distribution run finished.');
}

main();
