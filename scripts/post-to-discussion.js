import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

if (!token) {
  const envPath = path.join(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    const match = envContent.match(/^GITHUB_TOKEN=(.+)$/m);
    if (match) {
      token = match[1].trim();
    }
  }
}

const owner = 'zion369369';
const repo = 'awesome-prompting-hacks';
const DATABASE_PATH = path.join(__dirname, '../src/data/scraped_prompts.json');

async function queryGraphQL(query, variables = {}) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'Node-Fetch'
    },
    body: JSON.stringify({ query, variables })
  });

  const json = await response.json();
  if (!response.ok || json.errors) {
    throw new Error(`GraphQL Error: ${JSON.stringify(json.errors || json)}`);
  }
  return json.data;
}

async function getRepoMetadata() {
  const query = `
    query($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        id
        discussionCategories(first: 10) {
          nodes {
            id
            name
          }
        }
      }
    }
  `;
  return await queryGraphQL(query, { owner, name: repo });
}

async function createDiscussion(repositoryId, categoryId, title, body) {
  const mutation = `
    mutation($repositoryId: ID!, $categoryId: ID!, $title: String!, $body: String!) {
      createDiscussion(input: {repositoryId: $repositoryId, categoryId: $categoryId, title: $title, body: $body}) {
        discussion {
          id
          url
        }
      }
    }
  `;
  return await queryGraphQL(mutation, { repositoryId, categoryId, title, body });
}

async function main() {
  console.log('[START] Starting Discussions Sync...');
  try {
    if (!fs.existsSync(DATABASE_PATH)) {
      throw new Error(`Database file not found: ${DATABASE_PATH}`);
    }

    const prompts = JSON.parse(fs.readFileSync(DATABASE_PATH, 'utf-8'));
    if (prompts.length === 0) {
      throw new Error('No prompts found in database.');
    }

    // 1. Resolve daily prompt using epoch days
    const daysSinceEpoch = Math.floor(Date.now() / 86400000);
    const idx = daysSinceEpoch % prompts.length;
    const prompt = prompts[idx];
    console.log(`[SELECTED] "${prompt.title}" (Index ${idx}) for Discussions Sync.`);

    // 2. Fetch repo metadata
    console.log('[GITHUB] Querying repository and discussion metadata...');
    const meta = await getRepoMetadata();
    const repoId = meta.repository.id;
    const categories = meta.repository.discussionCategories.nodes;

    if (categories.length === 0) {
      console.log('[INFO] Discussions are not enabled or no categories exist. Enable Discussions in repository settings.');
      return;
    }

    // Find "Show and Tell" or similar category, fallback to first
    let category = categories.find(c => c.name.toLowerCase().includes('show') || c.name.toLowerCase().includes('tell'));
    if (!category) {
      category = categories.find(c => c.name.toLowerCase().includes('general')) || categories[0];
    }

    console.log(`[CATEGORY] Selected category "${category.name}" (ID: ${category.id})`);

    // 3. Format body
    const liveUrl = `https://zion369369.github.io/awesome-prompting-hacks/prompts/${prompt.slug}`;
    const discussionTitle = `⚡ Prompt of the Day: ${prompt.title}`;
    
    let discussionBody = `### 🎨 ${prompt.title}\n\n`;
    discussionBody += `Optimized system instruction for **${prompt.category}** developers.\n\n`;
    discussionBody += `#### 📋 Copy-Paste Prompt Template:\n`;
    discussionBody += `\`\`\`text\n${prompt.prompt}\n\`\`\`\n\n`;
    discussionBody += `💡 *Use this prompt in Claude 3.5 Sonnet, ChatGPT, or Gemini. Make sure to star the repo for daily updates!* \n\n`;
    discussionBody += `--- \n`;
    discussionBody += `🔗 **[View interactive gallery version with copy-to-clipboard](${liveUrl})**\n`;
    discussionBody += `🧩 **[Install our Hello Prompting Chrome Extension](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en)** to score and format prompts in real-time.`;

    // 4. Submit to GitHub Discussions
    console.log('[PUBLISHING] Submitting discussion mutation to GitHub...');
    const result = await createDiscussion(repoId, category.id, discussionTitle, discussionBody);
    console.log(`[SUCCESS] Discussion created successfully: ${result.createDiscussion.discussion.url}`);

  } catch (error) {
    console.error('[ERROR] Failed to sync to Discussions:', error.message);
  }
}

main();
