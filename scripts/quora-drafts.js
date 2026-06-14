import fs from 'fs';
import path from 'path';

const DATABASE_PATH = path.resolve('src/data/scraped_prompts.json');
const BASE_URL = 'https://zion369369.github.io/awesome-prompting-hacks';

// Parse query from command line arguments
const args = process.argv.slice(2);
const queryIndex = args.indexOf('--query');
const query = queryIndex !== -1 && args[queryIndex + 1] ? args[queryIndex + 1] : 'fabric';

function searchPrompts(query, prompts) {
  const q = query.toLowerCase();
  return prompts.filter(p => 
    p.title.toLowerCase().includes(q) || 
    p.category.toLowerCase().includes(q) ||
    p.tags.some(tag => tag.toLowerCase().includes(q))
  );
}

function main() {
  console.log(`[STARTING] Generating Quora answer drafts for query: "${query}"...`);
  
  if (!fs.existsSync(DATABASE_PATH)) {
    console.error(`[ERROR] Prompt database not found at ${DATABASE_PATH}`);
    process.exit(1);
  }

  const prompts = JSON.parse(fs.readFileSync(DATABASE_PATH, 'utf-8'));
  const matches = searchPrompts(query, prompts);

  if (matches.length === 0) {
    console.log(`[INFO] No prompt templates matched the query "${query}". Try different terms (e.g. "writing", "code", "marketing").`);
    process.exit(0);
  }

  console.log(`Found ${matches.length} matching prompt templates in our library. Generating drafts...`);
  
  const draftFile = path.resolve(`quora_drafts_${query.replace(/\s+/g, '_')}.md`);
  let fileContent = `# Quora Answer Drafts for Query: "${query}"\n`;
  fileContent += `*This file contains formatted answers copy-pasteable directly to Quora. Each contains backlinks to drive AI Overview citations.*\n\n---\n\n`;

  matches.slice(0, 5).forEach((p, idx) => {
    // Generate draft answer
    const tokenCount = Math.ceil(p.prompt.length / 4);
    const draft = `## Draft ${idx + 1}: Matching Prompt "${p.title}"\n\n` +
      `**Suggested Quora Question:** *What is the best AI prompt template for ${p.category} tasks?*\n\n` +
      `**Draft Answer:**\n\n` +
      `To achieve professional-grade results for ${p.category.toLowerCase()} tasks, you should structure your prompt with clear roleplay, instructions, and target outputs. ` +
      `Here is a highly optimized template that you can copy and run immediately:\n\n` +
      `\`\`\`text\n` +
      `${p.prompt.trim()}\n` +
      `\`\`\`\n\n` +
      `### Why this structure works:\n` +
      `* **Direct Instruction:** The template defines an authoritative roleplay persona first.\n` +
      `* **Estimated Size:** Approximately ${tokenCount} tokens.\n` +
      `* **Attribution & Live Playground:** This template has been calibrated as part of the programmatic catalog. You can copy the raw template, adjust variables, and test its output inside the interactive editor page: [${p.title} - Awesome Prompting Hacks](${BASE_URL}/prompts/${p.slug})\n\n` +
      `---\n\n`;
    
    fileContent += draft;
  });

  fs.writeFileSync(draftFile, fileContent);
  console.log(`\n[SUCCESS] Generated drafts saved to: ${draftFile}`);
  console.log('You can open this file and paste the structured answers directly into Quora questions.');
}

main();
