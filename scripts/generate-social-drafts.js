import fs from 'fs';
import path from 'path';

const DATABASE_PATH = path.resolve('src/data/scraped_prompts.json');
const OUTPUT_DIR = path.resolve('social_drafts');

function formatRedditPost(prompt) {
  const liveUrl = `https://zion369369.github.io/awesome-prompting-hacks/prompts/${prompt.slug}`;
  let post = `**Title**: How to use the "${prompt.title}" AI Prompt for Development & Workflows\n\n`;
  post += `Hey developers!\n\n`;
  post += `Automating tasks with AI is a core skill. Today's featured system prompt from our repository is calibrated for **${prompt.category}**.\n\n`;
  post += `### ⚡ System Instruction / Prompt:\n`;
  post += `\`\`\`text\n${prompt.prompt.trim()}\n\`\`\`\n\n`;
  post += `### 🔧 How to Use:\n`;
  post += `1. Copy the code block above.\n`;
  post += `2. Paste it as the initial/system instruction in Claude 3.5 Sonnet, ChatGPT, or Gemini.\n`;
  post += `3. Feed your reference material directly below it.\n\n`;
  post += `---\n`;
  post += `* 🚀 **Interactive Version with copy-to-clipboard**: [Explore ${prompt.title}](${liveUrl})\n`;
  post += `* ⭐ **Support the Catalog**: Star our [Awesome Prompting Hacks GitHub Repo](https://github.com/zion369369/awesome-prompting-hacks) to track 5,000+ free prompt templates!\n`;
  post += `* 🧩 **Chrome Extension**: Get real-time Prompt Scores directly inside your chat window via the [Hello Prompting Console](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).\n`;
  return post;
}

function formatTwitterThread(prompt) {
  const liveUrl = `https://zion369369.github.io/awesome-prompting-hacks/prompts/${prompt.slug}`;
  const tweets = [];
  
  function safeTruncate(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
  }

  // Tweet 1: Intro (Max length calculation)
  const prefix1 = `1/5 🚀 AI Prompt of the Day: "`;
  const suffix1 = `"\n\nBoost your workflow with this production-grade template calibrated specifically for ${prompt.category} tasks.\n\nRead the thread or copy here: ${liveUrl}`;
  const maxTitleLen1 = 280 - (prefix1.length + suffix1.length);
  const safeTitle = safeTruncate(prompt.title, maxTitleLen1);
  tweets.push(`${prefix1}${safeTitle}${suffix1}`);
  
  // Tweet 2: Description & Calibration
  const tagsStr = prompt.tags.slice(0, 3).map(t => `#${t}`).join(' ');
  tweets.push(`2/5 🔧 Calibration Details:\n\n• Category: ${prompt.category}\n• Tags: ${tagsStr}\n• Best Run On: Claude 3.5 Sonnet / GPT-4o\n\nEstablish an expert persona in the LLM runtime in seconds.`);
  
  // Tweet 3: Prompt snippet (Max length calculation)
  const prefix3 = `3/5 📋 Prompt Preview:\n\n"""\n`;
  const suffix3 = `\n"""\n\nGet the full, un-truncated copy-pasteable prompt template here: ${liveUrl}`;
  const maxSnippetLen3 = 280 - (prefix3.length + suffix3.length);
  const promptSnippet = safeTruncate(prompt.prompt.trim(), maxSnippetLen3);
  tweets.push(`${prefix3}${promptSnippet}${suffix3}`);
  
  // Tweet 4: Tip
  tweets.push(`4/5 💡 Execution Tip:\n\nFor optimal results, paste this system instruction first, then load your reference material or logs inside XML tags (e.g. <context>your_code</context>) to maintain format compliance.`);
  
  // Tweet 5: CTA
  tweets.push(`5/5 🌟 Track 5,000+ free curated prompt templates by starring our GitHub repo:\nhttps://github.com/zion369369/awesome-prompting-hacks\n\n🧩 Or install the free Hello Prompting extension to get live prompt scoring in ChatGPT/Claude: https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en`);

  return tweets.map((t, idx) => `--- TWEET ${idx + 1} (${t.length} chars) ---\n${t}\n`).join('\n');
}

function generate() {
  console.log('[START] Compiling social media drafts...');
  try {
    if (!fs.existsSync(DATABASE_PATH)) {
      throw new Error(`Database file not found: ${DATABASE_PATH}`);
    }

    const prompts = JSON.parse(fs.readFileSync(DATABASE_PATH, 'utf-8'));
    if (prompts.length === 0) {
      throw new Error('No prompts found in database.');
    }

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const daysSinceEpoch = Math.floor(Date.now() / 86400000);
    const idx = daysSinceEpoch % prompts.length;
    const prompt = prompts[idx];

    console.log(`[SELECTED] "${prompt.title}" (Index ${idx}) for social draft generation.`);

    const redditPost = formatRedditPost(prompt);
    const twitterThread = formatTwitterThread(prompt);

    fs.writeFileSync(path.join(OUTPUT_DIR, 'reddit_post.md'), redditPost, 'utf-8');
    fs.writeFileSync(path.join(OUTPUT_DIR, 'twitter_thread.txt'), twitterThread, 'utf-8');

    console.log('[SUCCESS] Social drafts created at social_drafts/reddit_post.md and social_drafts/twitter_thread.txt');

  } catch (error) {
    console.error('[ERROR] Failed to compile social drafts:', error.message);
  }
}

generate();
