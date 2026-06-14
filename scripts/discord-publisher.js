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

function formatDiscordPayload(prompt, mentionType = null) {
  const liveUrl = `${TARGET_DOMAIN}/prompts/${prompt.slug}`;
  const repoUrl = 'https://github.com/zion369369/awesome-prompting-hacks';
  
  // Truncate the prompt code snippet to 1000 chars to avoid hitting embed limits (6000 total)
  const maxPromptLength = 1000;
  const truncatedPrompt = truncateText(prompt.prompt, maxPromptLength);
  
  // Custom headers to maximize reach and CTR
  let contentStr = `🔥 **[NEW] Production-Grade AI Prompt Template Released!**\nOptimize your developer workflow with our latest curated engineering hack.`;
  if (mentionType === 'everyone') {
    contentStr = `@everyone\n${contentStr}`;
  } else if (mentionType === 'here') {
    contentStr = `@here\n${contentStr}`;
  }

  // Choose visually rich emojis based on category to make the embed pop
  let categoryEmoji = "📂";
  const cat = (prompt.category || "").toLowerCase();
  if (cat.includes("coding") || cat.includes("dev") || cat.includes("chatgpt")) categoryEmoji = "💻";
  else if (cat.includes("writing") || cat.includes("content")) categoryEmoji = "✍️";
  else if (cat.includes("marketing") || cat.includes("seo")) categoryEmoji = "📈";

  // Create description content with a quick-copy markdown block
  const description = `
**📋 QUICK-COPY PROMPT TEMPLATE**
\`\`\`text
${truncatedPrompt}
\`\`\`
${prompt.prompt.length > maxPromptLength ? `*⚠️ Note: Prompt is truncated. [Get the full un-truncated template here](${liveUrl})*\n` : ''}
💡 *Copy the code block above and paste it directly into Claude, ChatGPT, or Gemini as a system instruction.*
`;

  // Hex #5865F2 (Discord Blurple) in decimal is 5793266
  const embedColor = 5793266; 

  const payload = {
    username: "Awesome Prompting Hacks",
    avatar_url: FAVICON_URL,
    content: contentStr,
    embeds: [
      {
        title: `⚡ ${prompt.title}`,
        description: description,
        url: liveUrl,
        color: embedColor,
        fields: [
          {
            name: `${categoryEmoji} Category`,
            value: `**${prompt.category || "General"}**`,
            inline: true
          },
          {
            name: "🏷️ Tags",
            value: prompt.tags.slice(0, 4).map(t => `\`${t}\``).join(' ') || "`ai` `prompt`",
            inline: true
          },
          {
            name: "🚀 Drive Your Reach & Support Us",
            value: `⭐ **[Star our GitHub Repository](${repoUrl})** to track 5,000+ free prompt engineering hacks!\n🧩 **[Download the Chrome Extension](${CHROME_STORE_URL})** to get real-time prompt scores inside your AI chat console.`,
            inline: false
          }
        ],
        footer: {
          text: "Awesome Prompting Hacks • Curated AI Templates",
          icon_url: FAVICON_URL
        },
        timestamp: new Date().toISOString()
      }
    ]
  };

  return payload;
}

async function publishToDiscord(prompt, mentionType = null) {
  const payload = formatDiscordPayload(prompt, mentionType);

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

  const args = process.argv.slice(2);
  
  // Parse mention flags
  let mentionType = null;
  if (args.includes('--everyone')) {
    mentionType = 'everyone';
  } else if (args.includes('--here')) {
    mentionType = 'here';
  }

  // Filter out command line flags to locate the target prompt slug/index
  const cleanArgs = args.filter(a => !a.startsWith('--'));
  const arg = cleanArgs[0];

  // Select prompt: default to first prompt
  let selectedPrompt = prompts[0];

  if (arg) {
    if (!isNaN(arg)) {
      const rawIdx = parseInt(arg, 10);
      const idx = ((rawIdx % prompts.length) + prompts.length) % prompts.length;
      selectedPrompt = prompts[idx];
      console.log(`[INDEX] Resolved index ${rawIdx} to prompt index ${idx} (out of ${prompts.length} total).`);
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
  if (mentionType) {
    console.log(`[MENTION] Configured to notify: @${mentionType}`);
  }

  if (!webhookUrl) {
    console.log('\n[INFO] DISCORD_WEBHOOK_URL is not set.');
    console.log('Running in DRY-RUN mode. Here is a sample of the compiled JSON payload:\n');
    console.log(JSON.stringify(formatDiscordPayload(selectedPrompt, mentionType), null, 2));
    console.log('\nTo publish this programmatically:');
    console.log('1. Open your Discord server settings -> Integrations -> Webhooks.');
    console.log('2. Create/copy a Webhook URL.');
    console.log('3. Set the DISCORD_WEBHOOK_URL environment variable or save it in your .env file.');
    console.log('4. Run: node scripts/discord-publisher.js [index_or_slug] [--everyone | --here]\n');
    process.exit(0);
  }

  console.log(`[PUBLISHING] Sending payload to Discord webhook...`);
  await publishToDiscord(selectedPrompt, mentionType);
  console.log('[COMPLETE] Discord distribution run finished.');
}

main();
