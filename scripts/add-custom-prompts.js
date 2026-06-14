import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, '../src/data/scraped_prompts.json');

const newCustomPrompts = [
  {
    "title": "Futuristic Cybernetic Nano Banana Image Generator",
    "slug": "futuristic-cybernetic-nano-banana-image-generator",
    "prompt": "A macro photograph of a futuristic nano banana, cybernetic and nanotech elements embedded into the yellow peel, glowing turquoise micro-circuits, digital grid lines, metallic sheen, dark sleek environment, floating particles, volumetric neon lighting, octane render, 8k resolution, designed by Gemini.",
    "imageUrl": "/awesome-prompting-hacks/images/nano_banana.png",
    "category": "Midjourney",
    "tags": ["midjourney", "nano-banana", "image-generation", "cybernetic", "gemini-creation"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Antigravity AI Agent Coding Assistant Prompt",
    "slug": "antigravity-ai-agent-coding-assistant-prompt",
    "prompt": "Act as Antigravity, a cutting-edge Google DeepMind agentic AI coding assistant. You pair program with the user to analyze files, design clean architectures, generate optimal code solutions, debug complex issues, and write clean unit tests. Maintain strict professional standards and high-performance design principles.",
    "imageUrl": "/awesome-prompting-hacks/images/antigravity_ai.png",
    "category": "Coding",
    "tags": ["coding", "antigravity-ai", "gemini-creation", "deepmind-agent", "software-engineering"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Nano Banana Python Micro-Framework Blueprint Creator",
    "slug": "nano-banana-python-micro-framework-blueprint-creator",
    "prompt": "Act as an expert software architect specializing in lightweight Python frameworks. Help the user design and write a boilerplate codebase for the 'Nano Banana' micro-framework—a highly optimized, zero-dependency async web server. Include request routing, middleware support, and JSON parsing.",
    "imageUrl": "/awesome-prompting-hacks/images/nano_banana_coding.png",
    "category": "Coding",
    "tags": ["coding", "nano-banana", "python", "web-framework", "asyncio"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Nano Banana Product Launch Growth Marketing Strategist",
    "slug": "nano-banana-product-launch-growth-marketing-strategist",
    "prompt": "Act as a growth marketing strategist specializing in viral product launches. Develop a high-impact launch framework for 'Nano Banana'—a revolutionary tech gadget. Design the organic social media campaign, PR outreach templates, influencer partnership guidelines, and paid traffic strategies to maximize conversions.",
    "imageUrl": "/awesome-prompting-hacks/images/nano_banana_marketing.png",
    "category": "Marketing",
    "tags": ["marketing", "nano-banana", "product-launch", "viral-marketing", "seo"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Nano Banana SEO Keyword Strategy Planner",
    "slug": "nano-banana-seo-keyword-strategy-planner",
    "prompt": "Act as an elite SEO specialist. Analyze search intent and design a comprehensive keyword mapping and programmatic SEO outline for the target keyword 'nano banana'. Provide content clusters, parent and child topics, search volume estimates, and detailed on-page metadata optimization checklists.",
    "imageUrl": "/awesome-prompting-hacks/images/nano_banana_seo.png",
    "category": "Marketing",
    "tags": ["marketing", "nano-banana", "seo", "keyword-research", "marketing-strategy"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Gemini Image Creation Master Prompt",
    "slug": "gemini-image-creation-master-prompt",
    "prompt": "Act as a prompt engineering master for Gemini's image generation model. Convert simple descriptive ideas from the user into highly descriptive, multi-layered, visually rich prompts that specify composition, lighting, camera angles, color palette, style, texture, and technical attributes for maximum visual impact.",
    "imageUrl": "/awesome-prompting-hacks/images/gemini_creation.png",
    "category": "Midjourney",
    "tags": ["midjourney", "gemini-creation", "image-generation", "prompt-engineering"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Nano Banana Creative Writing Story Generator",
    "slug": "nano-banana-creative-writing-story-generator",
    "prompt": "Act as an award-winning Sci-Fi novelist. Brainstorm, outline, and draft a high-concept short story centered around 'Nano Banana'—a mysterious nanotech device that alters human perception. Develop deep character backstories, rich world-building details, and tense pacing.",
    "imageUrl": "/awesome-prompting-hacks/images/nano_banana_writing.png",
    "category": "Writing",
    "tags": ["writing", "nano-banana", "scifi", "storytelling", "novel-writing"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  }
];

if (fs.existsSync(DATA_FILE)) {
  const content = fs.readFileSync(DATA_FILE, 'utf-8');
  let prompts = JSON.parse(content);

  // Remove existing duplicate slugs to avoid errors
  const newSlugs = newCustomPrompts.map(p => p.slug);
  prompts = prompts.filter(p => !newSlugs.includes(p.slug));

  // Prepend new prompts to the front of the list
  const merged = [...newCustomPrompts, ...prompts];

  fs.writeFileSync(DATA_FILE, JSON.stringify(merged, null, 2), 'utf-8');
  console.log(`[ADDER] Successfully prepended ${newCustomPrompts.length} custom prompts targeting 'nano banana' and 'gemini-creation'. Total prompts count: ${merged.length}`);
} else {
  console.error(`[ERROR] Data file not found at ${DATA_FILE}`);
}
