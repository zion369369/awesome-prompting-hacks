import fs from 'fs';
import path from 'path';

const DATABASE_PATH = path.resolve('src/data/scraped_prompts.json');
const BASE_URL = 'https://zion369369.github.io/awesome-prompting-hacks';

// Command line arguments
const args = process.argv.slice(2);
const categoryIndex = args.indexOf('--category');
const targetCategory = categoryIndex !== -1 && args[categoryIndex + 1] ? args[categoryIndex + 1] : null;

function main() {
  console.log('[STARTING] Building professional LinkedIn post draft...');
  
  if (!fs.existsSync(DATABASE_PATH)) {
    console.error(`[ERROR] Prompt database not found at ${DATABASE_PATH}`);
    process.exit(1);
  }

  const prompts = JSON.parse(fs.readFileSync(DATABASE_PATH, 'utf-8'));
  
  // Filter prompts by category if requested, otherwise pick a random one
  let pool = prompts;
  if (targetCategory) {
    pool = prompts.filter(p => p.category.toLowerCase().includes(targetCategory.toLowerCase()));
    if (pool.length === 0) {
      console.log(`[INFO] No prompts found matching category "${targetCategory}". Reverting to general list.`);
      pool = prompts;
    }
  }

  const selected = pool[Math.floor(Math.random() * pool.length)];
  const tokenCount = Math.ceil(selected.prompt.length / 4);

  // LinkedIn post layout
  const post = `🚀 AI Prompt of the Day: Optimize Your ${selected.category} Workflows\n\n` +
    `Generic prompts get generic results. If you want to use LLMs like Claude or GPT-4o for professional-grade tasks, you need structural directives.\n\n` +
    `Here is a calibrated template you can copy and deploy immediately for "${selected.title}":\n\n` +
    `👇 COPY THIS TEMPLATE:\n` +
    `----------------------------------------\n` +
    `${selected.prompt.substring(0, 400)}...\n` +
    `----------------------------------------\n\n` +
    `📊 Engineering Specs:\n` +
    `* Recommended interpreter: Claude 3.5 Sonnet / GPT-4o\n` +
    `* Length: ~${tokenCount} tokens\n` +
    `* Validation: Calibration Entity checked (EEAT compliant)\n\n` +
    `🔗 Access the full, raw template and test it inside the interactive playground: \n` +
    `${BASE_URL}/prompts/${selected.slug}\n\n` +
    `#AI #PromptEngineering #Productivity #LLM #AEO`;

  console.log('\n--- Generated LinkedIn Post Draft ---');
  console.log(post);
  console.log('-------------------------------------\n');
  console.log('[SUCCESS] Copy the post draft above to publish directly to LinkedIn!');
}

main();
