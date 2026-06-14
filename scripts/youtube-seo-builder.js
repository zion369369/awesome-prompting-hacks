import fs from 'fs';
import path from 'path';

const DATABASE_PATH = path.resolve('src/data/scraped_prompts.json');
const BASE_URL = 'https://zion369369.github.io/awesome-prompting-hacks';

// Command line arguments
const args = process.argv.slice(2);
const categoryIndex = args.indexOf('--category');
const targetCategory = categoryIndex !== -1 && args[categoryIndex + 1] ? args[categoryIndex + 1] : 'Fabric';

function main() {
  console.log(`[STARTING] Generating YouTube SEO Description Builder for category: "${targetCategory}"...`);
  
  if (!fs.existsSync(DATABASE_PATH)) {
    console.error(`[ERROR] Prompt database not found at ${DATABASE_PATH}`);
    process.exit(1);
  }

  const prompts = JSON.parse(fs.readFileSync(DATABASE_PATH, 'utf-8'));
  
  // Filter prompts by category or tags
  const matchedPrompts = prompts.filter(p => 
    p.category.toLowerCase().includes(targetCategory.toLowerCase()) ||
    p.tags.some(tag => tag.toLowerCase().includes(targetCategory.toLowerCase()))
  );

  if (matchedPrompts.length === 0) {
    console.log(`[INFO] No prompts matched category/tags for "${targetCategory}". Reverting to general list.`);
    process.exit(0);
  }

  console.log(`Found ${matchedPrompts.length} matching prompt templates in our library. Generating YouTube description...`);

  const slugifiedCategory = targetCategory.toLowerCase().replace(/\s+/g, '_');
  const draftFile = path.resolve(`youtube_description_${slugifiedCategory}.md`);

  // Select top 5 prompts to highlight
  const selectedPrompts = matchedPrompts.slice(0, 5);

  let fileContent = `# YouTube Video & SEO Description Package\n`;
  fileContent += `**Category:** ${targetCategory}\n`;
  fileContent += `*Copy-paste the sections below into your YouTube video metadata to seed high-authority backlinks.*\n\n`;
  fileContent += `---\n\n`;

  // Section 1: Title Options
  fileContent += `### 🎬 High-CTR Video Title Options\n`;
  fileContent += `1. 🚀 I Tried 5 Advanced AI Prompts For ${targetCategory} (Results Are INSANE!)\n`;
  fileContent += `2. Stop Using Generic Prompts: The Ultimate ${targetCategory} Prompting Guide\n`;
  fileContent += `3. How to Calibrate AI for ${targetCategory} (Step-by-Step Prompt Tutorial)\n`;
  fileContent += `4. 5 Production-Grade AI Prompts for ${targetCategory} You Need to Copy Right Now\n`;
  fileContent += `5. Claude & GPT-4o: Complete Prompt Engineering Masterclass for ${targetCategory}\n\n`;
  fileContent += `*Tip: Select a title that aligns with your video's visual thumbnail theme.*\n\n`;
  fileContent += `---\n\n`;

  // Section 2: Copy-Paste Description Body
  fileContent += `### 📝 Copy-Paste Video Description\n\n`;
  fileContent += `\`\`\`text\n`;
  fileContent += `Generic prompts get generic results. In this video, we deep dive into 5 production-grade AI prompt templates specifically calibrated for ${targetCategory} tasks. Whether you are using Claude 3.5 Sonnet, GPT-4o, or Gemini, these structured templates will help you build reliable, structured, and high-performance AI outputs.\n\n`;
  fileContent += `👇 COPY & RUN THE PROMPTS FEATURED IN THIS VIDEO:\n\n`;

  selectedPrompts.forEach((p, idx) => {
    const tokenCount = Math.ceil(p.prompt.length / 4);
    fileContent += `🔥 Prompt #${idx + 1}: ${p.title}\n`;
    fileContent += `   👉 Calibrated Link: ${BASE_URL}/prompts/${p.slug}\n`;
    fileContent += `   📊 Specs: ~${tokenCount} tokens | Recommended for Claude 3.5 / GPT-4o\n\n`;
  });

  fileContent += `--- TIMESTAMPS ---\n`;
  fileContent += `0:00 - Introduction to AI Prompting for ${targetCategory}\n`;
  fileContent += `1:30 - How Generic Prompts Fail You\n`;
  fileContent += `3:00 - Deep Dive: Prompt #1 Walkthrough\n`;
  fileContent += `6:15 - Deep Dive: Prompt #2 Walkthrough\n`;
  fileContent += `9:30 - Deep Dive: Prompt #3 Walkthrough\n`;
  fileContent += `12:45 - Deep Dive: Prompt #4 Walkthrough\n`;
  fileContent += `15:50 - Deep Dive: Prompt #5 Walkthrough\n`;
  fileContent += `18:30 - How to Tweak Variables & Use the Interactive Editor\n`;
  fileContent += `20:00 - Conclusion & Next Steps\n\n`;

  fileContent += `--- ABOUT OUR PROMPT DIRECTORY ---\n`;
  fileContent += `Awesome Prompting Hacks is a programmatic directory of 5,000+ calibrated prompt templates engineered for developers, marketers, writers, and creators. Test, customize, and run them all in our interactive playground:\n`;
  fileContent += `🔗 Visit the Directory: ${BASE_URL}\n`;
  fileContent += `🤖 Ingest via LLM Agents (llms.txt): ${BASE_URL}/llms.txt\n\n`;

  fileContent += `--- CONNECT WITH US ---\n`;
  fileContent += `⭐ Star us on GitHub: https://github.com/zion369369/awesome-prompting-hacks\n`;
  fileContent += `💼 Join the conversation on LinkedIn: https://www.linkedin.com/in/awesome-prompting-hacks\n\n`;

  fileContent += `#AI #PromptEngineering #ChatGPT #Claude #AwesomePromptingHacks #GEO #AEO\n`;
  fileContent += `\`\`\`\n\n`;
  fileContent += `---\n\n`;

  // Section 3: Recommended YouTube tags
  fileContent += `### 🏷️ Search-Optimized Video Tags (For Upload Page)\n`;
  const tagList = [
    'prompt engineering', 'prompt templates', 'how to prompt', targetCategory.toLowerCase(),
    'chatgpt prompts', 'claude prompts', 'ai tutorial', 'gemini prompts', 'awesome prompting hacks',
    'generative engine optimization', 'aeo', 'geo'
  ];
  fileContent += `\`${tagList.join(', ')}\`\n`;

  fs.writeFileSync(draftFile, fileContent);
  console.log(`\n[SUCCESS] Generated YouTube description drafts saved to: ${draftFile}`);
  console.log('You can open this file and paste the structured description directly into your YouTube upload portal.');
}

main();
