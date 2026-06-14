/**
 * scripts/medium-publisher.js
 * Programmatic Distribution Engine for Medium (DA 96).
 * 
 * Auto-selects high-quality prompts, formats them into markdown
 * articles, retrieves the authenticated Medium User ID, and submits
 * them as drafts directly to the Medium Publishing API.
 * 
 * Run instructions:
 * 1. Get an Integration Token from Medium (Settings -> Security -> Integration Tokens).
 * 2. Add it to your local .env file as: MEDIUM_INTEGRATION_TOKEN=your_token
 * 3. Run: node --env-file=.env scripts/medium-publisher.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCRAPED_PROMPTS_PATH = path.join(__dirname, '../src/data/scraped_prompts.json');
const MEDIUM_INTEGRATION_TOKEN = process.env.MEDIUM_INTEGRATION_TOKEN;
const TARGET_DOMAIN = 'https://zion369369.github.io/awesome-prompting-hacks';
const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en";

// Categories/Keywords to distribute
const SELECTION_KEYWORDS = [
  'midjourney', 'chatgpt', 'gemini', 'claude', 'prompt', 'marketing', 'dev', 'writing', 'visual'
];

function isHighValuePrompt(prompt) {
  const textToSearch = `${prompt.title} ${prompt.category} ${prompt.tags.join(' ')}`.toLowerCase();
  return SELECTION_KEYWORDS.some(keyword => textToSearch.includes(keyword));
}

function formatArticleBody(prompt) {
  const liveUrl = `${TARGET_DOMAIN}/prompts/${prompt.slug}`;
  const tagsList = prompt.tags.map(t => `#${t}`).join(' ');

  return `# How to use the '${prompt.title}' AI Prompt

Optimizing system prompts and visual instructions has become essential for high-performance workflows across text and image models. In this guide, we break down how to run the optimized "${prompt.title}" template.

## The Prompt Code

Copy and paste this calibrated instruction directly into your AI runtime console:

\`\`\`text
${prompt.prompt}
\`\`\`

---

## Calibrated Tips for Best Output

*   **XML Tags:** Enclose user inputs, background sheets, or reference documents in XML tags (e.g., \`<context>\` or \`[data]\`) to maintain a clean boundary inside the LLM attention window.
*   **Avoid Overrides:** Do not append additional commands after the template execution block to maintain the core system role behaviors intact.

---

## Live Interactive Playground

*   **Live Interactive Link:** [Interactive ${prompt.title} Page](${liveUrl})
*   **Browser Optimization Dashboard:** To audit, format, and upgrade your prompts directly in your ChatGPT/Claude chat window with a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Extension](${CHROME_STORE_URL}).

---
*Published programmatically via the **Awesome Prompting Hacks** automated SEO engine.*
`;
}

async function getMediumUserId() {
  try {
    const response = await fetch('https://api.medium.com/v1/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${MEDIUM_INTEGRATION_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    if (response.ok && result.data && result.data.id) {
      return result.data.id;
    } else {
      console.error('[MEDIUM API ERROR] Failed to fetch user profile:', result.errors || result);
      return null;
    }
  } catch (error) {
    console.error('[MEDIUM API ERROR] Network request failed:', error.message);
    return null;
  }
}

async function publishToMedium(userId, prompt) {
  const articleBody = formatArticleBody(prompt);
  const title = `How to use the '${prompt.title}' AI Prompt`;
  const liveUrl = `${TARGET_DOMAIN}/prompts/${prompt.slug}`;

  const payload = {
    title: title,
    contentFormat: 'markdown',
    content: articleBody,
    publishStatus: 'draft',
    tags: ["promptengineering", "artificialintelligence", "productivity", "tech"],
    canonicalUrl: liveUrl
  };

  try {
    const response = await fetch(`https://api.medium.com/v1/users/${userId}/posts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MEDIUM_INTEGRATION_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (response.ok) {
      console.log(`[SUCCESS] Published draft to Medium: "${title}"`);
      console.log(`Draft URL: ${result.data.url}`);
    } else {
      console.error(`[API ERROR] Failed for "${title}":`, result.errors || result);
    }
  } catch (error) {
    console.error(`[NETWORK ERROR] Failed to submit to Medium:`, error.message);
  }
}

async function main() {
  console.log('[START] Scanning prompt database for high-value templates...');

  if (!fs.existsSync(SCRAPED_PROMPTS_PATH)) {
    console.error(`[ERROR] Prompt database not found at: ${SCRAPED_PROMPTS_PATH}`);
    process.exit(1);
  }

  const prompts = JSON.parse(fs.readFileSync(SCRAPED_PROMPTS_PATH, 'utf-8'));
  const targetPrompts = prompts.filter(isHighValuePrompt);

  console.log(`Found ${targetPrompts.length} high-value prompts out of ${prompts.length} total entries.`);

  if (!MEDIUM_INTEGRATION_TOKEN) {
    console.log('\n[INFO] MEDIUM_INTEGRATION_TOKEN environment variable is not set.');
    console.log('Running in DRY-RUN mode. Here is a sample of the compiled Medium post markdown:\n');
    if (targetPrompts.length > 0) {
      console.log(formatArticleBody(targetPrompts[0]));
    } else {
      console.log('No eligible prompts found to preview.');
    }
    console.log('\nTo publish this programmatically:');
    console.log('1. Go to Medium Settings -> Security -> Integration Tokens and generate a token.');
    console.log('2. Add it to your local .env file: MEDIUM_INTEGRATION_TOKEN=your_token_value');
    console.log('3. Run: node --env-file=.env scripts/medium-publisher.js\n');
    process.exit(0);
  }

  console.log('[AUTHENTICATING] Fetching Medium User profile ID...');
  const userId = await getMediumUserId();

  if (!userId) {
    console.error('[ERROR] Could not authenticate with Medium API. Verify your Integration Token.');
    process.exit(1);
  }

  console.log(`Authenticated as User ID: ${userId}`);

  // Limit API requests to prevent rate-limiting (publish 2 drafts at a time)
  const limit = Math.min(targetPrompts.length, 2);
  console.log(`[PUBLISHING] Submitting ${limit} prompt drafts to Medium...`);

  for (let i = 0; i < limit; i++) {
    await publishToMedium(userId, targetPrompts[i]);
    // Sleep to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log('[COMPLETE] Medium distribution run finished.');
}

main();
