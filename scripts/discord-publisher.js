/**
 * scripts/discord-publisher.js
 * Programmatic Developer Distribution Engine for Discord Webhooks.
 * 
 * Formats our prompt templates into rich, premium Discord Embeds
 * and posts them to a target Discord channel using a Webhook URL.
 * 
 * Run instructions:
 * 1. Create a Webhook on your Discord Server (Server Settings -> Integrations -> Webhooks).
 * 2. Set the environment variable: DISCORD_WEBHOOK_URL=your_webhook_url
 * 3. Run: node scripts/discord-publisher.js [optional_slug_or_index]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCRAPED_PROMPTS_PATH = path.join(__dirname, '../src/data/scraped_prompts.json');
const TARGET_DOMAIN = 'https://zion369369.github.io/awesome-prompting-hacks';
const FAVICON_URL = `${TARGET_DOMAIN}/favicon.png`;
const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en";

// Load webhook URL from environment or .env if present
let webhookUrl = process.env.DISCORD_WEBHOOK_URL;

// Simple fallback .env parser if not run in a preloaded environment
if (!webhookUrl) {
  const envPath = path.join(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    const match = envContent.match(/^DISCORD_WEBHOOK_URL=(.+)$/m);
    if (match) {
      webhookUrl = match[1].trim();
    }
  }
}

function truncateText(text, limit) {
  if (text.length <= limit) return text;
  return text.substring(0, limit - 3) + '...';
}

function formatDiscordPayload(prompt) {
  const liveUrl = `${TARGET_DOMAIN}/prompts/${prompt.slug}`;
  
  // Truncate the prompt code snippet to 1000 chars to avoid hitting embed limits (6000 total)
  const maxPromptLength = 1000;
  const truncatedPrompt = truncateText(prompt.prompt, maxPromptLength);
  
  // Create description content
  const description = `**Copy and run this optimized prompt template in Claude, ChatGPT, or Gemini:**\n\n\`\`\`text\n${truncatedPrompt}\n\`\`\`\n${
    prompt.prompt.length > maxPromptLength ? `*...Note: Prompt truncated. [Read full prompt on the website](${liveUrl})*\n` : ''
  }`;

  // Custom embed colors: HSL/Hex tailored dark-premium look
  // Discord uses base-10 integers for colors. Hex #7B2CBF (purple) is 8072383 in decimal.
  const embedColor = 8072383; 

  const payload = {
    username: "Awesome Prompting Hacks",
    avatar_url: FAVICON_URL,
    content: `🚀 **New AI Prompt Template Released!**\nAutomate your development workflows with this high-performance template.`,
    embeds: [
      {
        title: prompt.title,
        description: description,
        url: liveUrl,
        color: embedColor,
        fields: [
          {
            name: "📂 Category",
            value: prompt.category || "General",
            inline: true
          },
          {
            name: "🏷️ Tags",
            value: prompt.tags.slice(0, 5).join(', ') || "ai, prompt",
            inline: true
          }
        ],
        footer: {
          text: "Awesome Prompting Hacks • Free Production-Grade AI Prompts",
          icon_url: FAVICON_URL
        },
        timestamp: new Date().toISOString()
      }
    ]
  };

  return payload;
}

async function publishToDiscord(prompt) {
  const payload = formatDiscordPayload(prompt);

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 204) {
      console.log(`[SUCCESS] Successfully posted prompt to Discord: "${prompt.title}"`);
    } else {
      const errorText = await response.text();
      console.error(`[API ERROR] Discord webhook rejected request (${response.status}):`, errorText);
    }
  } catch (error) {
    console.error(`[NETWORK ERROR] Failed to submit to Discord webhook:`, error.message);
  }
}

async function main() {
  if (!fs.existsSync(SCRAPED_PROMPTS_PATH)) {
    console.error(`[ERROR] Prompt database not found at: ${SCRAPED_PROMPTS_PATH}`);
    process.exit(1);
  }

  const prompts = JSON.parse(fs.readFileSync(SCRAPED_PROMPTS_PATH, 'utf-8'));
  
  if (prompts.length === 0) {
    console.error('[ERROR] No prompts found in database.');
    process.exit(1);
  }

  // Select prompt: check command arguments first
  let selectedPrompt = prompts[0]; // Default to first
  const arg = process.argv[2];

  if (arg) {
    if (!isNaN(arg)) {
      const idx = parseInt(arg, 10);
      if (idx >= 0 && idx < prompts.length) {
        selectedPrompt = prompts[idx];
      } else {
        console.warn(`[WARN] Index ${idx} out of bounds, defaulting to index 0.`);
      }
    } else {
      const found = prompts.find(p => p.slug === arg);
      if (found) {
        selectedPrompt = found;
      } else {
        console.warn(`[WARN] Slug "${arg}" not found, defaulting to index 0.`);
      }
    }
  }

  console.log(`[SELECTED] "${selectedPrompt.title}" for Discord distribution.`);

  if (!webhookUrl) {
    console.log('\n[INFO] DISCORD_WEBHOOK_URL is not set.');
    console.log('Running in DRY-RUN mode. Here is a sample of the compiled JSON payload:\n');
    console.log(JSON.stringify(formatDiscordPayload(selectedPrompt), null, 2));
    console.log('\nTo publish this programmatically:');
    console.log('1. Open your Discord server settings -> Integrations -> Webhooks.');
    console.log('2. Create/copy a Webhook URL.');
    console.log('3. Set the DISCORD_WEBHOOK_URL environment variable or save it in your .env file.');
    console.log('4. Run: node scripts/discord-publisher.js [index_or_slug]\n');
    process.exit(0);
  }

  console.log(`[PUBLISHING] Sending payload to Discord webhook...`);
  await publishToDiscord(selectedPrompt);
  console.log('[COMPLETE] Discord distribution run finished.');
}

main();
