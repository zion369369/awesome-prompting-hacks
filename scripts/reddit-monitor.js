import fs from 'fs';
import path from 'path';

const DATABASE_PATH = path.resolve('src/data/scraped_prompts.json');
const BASE_URL = 'https://zion369369.github.io/awesome-prompting-hacks';

// List of target subreddits
const SUBREDDITS = ['PromptEngineering', 'ChatGPT', 'ClaudeAI', 'midjourney'];

async function fetchRedditNew(subreddit) {
  const url = `https://www.reddit.com/r/${subreddit}/new.json?limit=10`;
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AwesomePromptingHacksBot/1.0'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    return data.data.children.map(post => ({
      id: post.data.id,
      title: post.data.title,
      text: post.data.selftext || '',
      url: `https://www.reddit.com${post.data.permalink}`,
      author: post.data.author
    }));
  } catch (error) {
    console.error(`[ERROR] Failed to fetch r/${subreddit}:`, error.message);
    return [];
  }
}

function findMatchingPrompt(postText, prompts) {
  const text = postText.toLowerCase();
  for (const p of prompts) {
    // Check if post title or body contains prompt title or tags
    const titleMatch = text.includes(p.title.toLowerCase());
    const tagMatch = p.tags.some(tag => text.includes(tag.toLowerCase()) && tag.length > 3);
    
    if (titleMatch || tagMatch) {
      return p;
    }
  }
  return null;
}

async function main() {
  console.log('[STARTING] Scanning Reddit for prompt distribution opportunities...');
  
  if (!fs.existsSync(DATABASE_PATH)) {
    console.error(`[ERROR] Prompt database not found at ${DATABASE_PATH}`);
    process.exit(1);
  }

  const prompts = JSON.parse(fs.readFileSync(DATABASE_PATH, 'utf-8'));
  console.log(`Loaded ${prompts.length} reference prompt templates.`);

  for (const sub of SUBREDDITS) {
    console.log(`\nScanning r/${sub} ...`);
    const posts = await fetchRedditNew(sub);
    console.log(`Fetched ${posts.length} recent posts.`);

    let matchCount = 0;
    for (const post of posts) {
      const matchText = `${post.title} ${post.text}`;
      const matchedPrompt = findMatchingPrompt(matchText, prompts);

      if (matchedPrompt) {
        matchCount++;
        console.log(`\n[MATCH FOUND] in r/${sub} by u/${post.author}`);
        console.log(`Reddit Post Title: "${post.title}"`);
        console.log(`Reddit Post Link: ${post.url}`);
        console.log(`Matched Library Template: "${matchedPrompt.title}"`);
        
        // Output formatted Reddit markdown comment
        const comment = `Here is a production-grade prompt template optimized for this specific task:\n\n` +
          `\`\`\`text\n` +
          `${matchedPrompt.prompt.substring(0, 300)}...\n` +
          `\`\`\`\n\n` +
          `You can copy the full calibrated template, adjust variables, and run it directly in your workspace from the interactive page: [${matchedPrompt.title} - Awesome Prompting Hacks](${BASE_URL}/prompts/${matchedPrompt.slug})`;
        
        console.log('--- Proposed Reddit Comment ---');
        console.log(comment);
        console.log('--------------------------------');
      }
    }

    if (matchCount === 0) {
      console.log(`No direct matches found in the 10 most recent posts of r/${sub}.`);
    }
  }
  
  console.log('\n[FINISHED] Reddit scanning run complete.');
}

main();
