import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, '../src/data/scraped_prompts.json');

const seoPrompts = [
  {
    "title": "ChatGPT Prompt Optimizer & Engineering Console",
    "slug": "chatgpt-prompt-optimizer-engineering-console",
    "prompt": "Act as a ChatGPT prompt optimizer. Take any basic or vague input from the user and expand it into a high-performance, structured prompt utilizing the Google 4-Part Structure (Role, Task, Context, Output format). Include constraints, examples, and variable placeholders where necessary.",
    "imageUrl": null,
    "category": "ChatGPT",
    "tags": ["chatgpt", "prompt-engineering", "chat-gpt", "openai", "seo"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "YouTube Script Writer & High-CTR Title Optimizer",
    "slug": "youtube-script-writer-high-ctr-title-optimizer",
    "prompt": "Act as a professional YouTube content creator and scriptwriter. Write a compelling, high-retention video script based on the user's topic. Include hook options (first 10 seconds), body paragraphs with visual cues, transitions, and calls to action. Suggest 5 high-CTR titles and thumbnail concepts.",
    "imageUrl": null,
    "category": "Writing",
    "tags": ["youtube", "video-scripts", "content-creation", "seo", "yt"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Amazon Product Description & SEO Bullets Writer",
    "slug": "amazon-product-description-seo-bullets-writer",
    "prompt": "Act as an Amazon listing copywriter. Create a fully optimized product listing including a keyword-rich title, 5 benefit-driven bullet points, and an HTML-formatted product description that complies with Amazon's guidelines and maximizes search visibility.",
    "imageUrl": null,
    "category": "Marketing",
    "tags": ["amazon", "ecommerce", "copywriting", "product-description", "seo"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Gmail Professional Inbox Manager & Reply Draftsman",
    "slug": "gmail-professional-inbox-manager-reply-draftsman",
    "prompt": "Act as a professional executive assistant. Draft clean, concise, and polite email replies for Gmail. Adapt the tone (formal, semi-formal, collaborative) based on the user's brief, and ensure clear call-to-actions and next steps.",
    "imageUrl": null,
    "category": "Writing",
    "tags": ["gmail", "email-writing", "productivity", "outlook", "yahoo-mail"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Canva Visual Layout & Color Palette Planner",
    "slug": "canva-visual-layout-color-palette-planner",
    "prompt": "Act as a professional graphic designer. Design a layout concept, typography pairings (header, subheader, body), and an HSL color palette for a Canva template based on the user's theme (e.g. ebook, presentation, social media post). Provide a step-by-step assembly guide.",
    "imageUrl": null,
    "category": "Midjourney",
    "tags": ["canva", "graphic-design", "color-palette", "marketing", "design-system"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Google Docs Structured Layout & Outline Creator",
    "slug": "google-docs-structured-layout-outline-creator",
    "prompt": "Act as a technical document specialist. Generate a clean, structured document outline for Google Docs (using H1, H2, H3 hierarchy). Provide formatting guidelines, table templates, callout box structures, and a cohesive design system for the document content.",
    "imageUrl": null,
    "category": "Writing",
    "tags": ["google-docs", "document-layout", "formatting", "writing", "templates"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Instagram Caption & Aesthetic Grid Planner",
    "slug": "instagram-caption-aesthetic-grid-planner",
    "prompt": "Act as an Instagram social media manager. Write 5 engaging caption options based on the user's image or topic. Include attention-grabbing hooks, storytelling elements, calls to action, and a curated list of relevant hashtags. Suggest grid styling and visual themes.",
    "imageUrl": null,
    "category": "Marketing",
    "tags": ["instagram", "social-media", "caption-writer", "marketing", "ig"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Roblox Lua Game Script Developer",
    "slug": "roblox-lua-game-script-developer",
    "prompt": "Act as an expert Roblox developer. Write clean, commented Lua scripts for Roblox Studio. Implement game mechanics such as leaderboard updates, custom tools, datastore saving, character customization, or object interactions using the latest Roblox API standards.",
    "imageUrl": null,
    "category": "Coding",
    "tags": ["roblox", "lua", "game-development", "coding", "roblox-studio"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "eBay Listing Title & Description Optimizer",
    "slug": "ebay-listing-title-description-optimizer",
    "prompt": "Act as an eBay e-commerce expert. Create a search-optimized listing for the product provided by the user. Generate a 80-character title packed with high-value search terms, specify item specifics, and write a compelling description highlighting item condition, shipping, and key features.",
    "imageUrl": null,
    "category": "Marketing",
    "tags": ["ebay", "ecommerce", "ebay-listing", "marketing", "sales"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Airbnb & Google Flights Travel Itinerary Planner",
    "slug": "airbnb-google-flights-travel-itinerary-planner",
    "prompt": "Act as a luxury travel consultant. Based on the user's destination, budget, and travel dates, create a detailed day-by-day travel itinerary. Suggest optimal flight booking search strategies on Google Flights and curate listing criteria for finding top-rated Airbnb properties.",
    "imageUrl": null,
    "category": "Marketing",
    "tags": ["airbnb", "google-flights", "travel-itinerary", "skyscanner", "travel-planning"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Spotify Curated Playlist Concept Designer",
    "slug": "spotify-curated-playlist-concept-designer",
    "prompt": "Act as a professional music curator. Design a unique theme and tracklist outline for a Spotify playlist based on the user's mood, genre preferences, or activity. Provide 5 creative playlist titles, description copywriting, and cover art style suggestions.",
    "imageUrl": null,
    "category": "Writing",
    "tags": ["spotify", "music-curation", "playlist-creator", "writing", "mood-board"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Netflix Series Recommendation & Scripting Engine",
    "slug": "netflix-series-recommendation-scripting-engine",
    "prompt": "Act as a film critic and screenwriter. Analyze the user's favorite shows and suggest 5 tailored Netflix series to watch. Additionally, help the user draft a pitch deck and a pilot episode structure for a new original show in that style.",
    "imageUrl": null,
    "category": "Writing",
    "tags": ["netflix", "movie-recommendations", "screenwriting", "storytelling", "writing"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Google Classroom Lesson Planner for Educators",
    "slug": "google-classroom-lesson-planner-for-educators",
    "prompt": "Act as an instructional designer. Create a comprehensive, standards-aligned lesson plan template designed for Google Classroom. Include learning objectives, step-by-step student assignments, discussion board prompts, quiz questions, and a grading rubric.",
    "imageUrl": null,
    "category": "Writing",
    "tags": ["google-classroom", "lesson-planning", "education", "kahoot", "blooket"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Cool Math Games & Math Solver Tutor",
    "slug": "cool-math-games-math-solver-tutor",
    "prompt": "Act as an engaging, encouraging mathematics tutor. Walk the user step-by-step through solving any math equation, explaining the underlying concepts and logic clearly. Suggest interactive 'Cool Math Games'-style learning activities to practice.",
    "imageUrl": null,
    "category": "Coding",
    "tags": ["math-solver", "cool-math-games", "tutoring", "education", "mathematics"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "TikTok Hook & High-Engagement Script Creator",
    "slug": "tiktok-hook-high-engagement-script-creator",
    "prompt": "Act as a viral TikTok creator. Write a script for a 30-60 second video. Include 3 high-impact hook options (first 3 seconds), fast-paced visual instructions, text-on-screen overlay copy, background audio recommendations, and trending hashtag clusters.",
    "imageUrl": null,
    "category": "Marketing",
    "tags": ["tiktok", "viral-videos", "scriptwriter", "marketing", "social-media"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "LinkedIn Thought Leadership & Content Writer",
    "slug": "linkedin-thought-leadership-content-writer",
    "prompt": "Act as a professional personal brand manager. Write a high-engagement LinkedIn post based on the user's industry update or achievement. Structure it with a strong scroll-stopping hook, bulleted actionable insights, white space for readability, and a conversation-starting question.",
    "imageUrl": null,
    "category": "Marketing",
    "tags": ["linkedin", "personal-branding", "copywriting", "professional-writing", "networking"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Etsy Shop SEO Listing & Tag Optimizer",
    "slug": "etsy-shop-seo-listing-tag-optimizer",
    "prompt": "Act as an Etsy SEO expert. Write a product listing that ranks highly. Generate a title using 140 characters of key phrases, write a compelling product description focusing on craftsmanship and gifting, and suggest 13 search-optimized tags for the listing.",
    "imageUrl": null,
    "category": "Marketing",
    "tags": ["etsy", "handmade-shop", "seo", "product-listing", "marketing"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Reddit Thread & Community Engagement Guide",
    "slug": "reddit-thread-community-engagement-guide",
    "prompt": "Act as an experienced Reddit community manager. Draft a high-quality text post for subreddits related to the user's topic. Format it with markdown, write a conversational hook, explain concepts clearly, and outline a strategy for handling common feedback in the comments.",
    "imageUrl": null,
    "category": "Marketing",
    "tags": ["reddit", "community-management", "copywriting", "marketing", "reddit-marketing"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Discord Server Structure & Bot Setup Planner",
    "slug": "discord-server-structure-bot-setup-planner",
    "prompt": "Act as a Discord community architect. Design a comprehensive server channel structure based on the user's community theme. Specify channel categories, text and voice channels, user roles with detailed permissions, and recommend bots for moderation and games.",
    "imageUrl": null,
    "category": "Coding",
    "tags": ["discord", "community-building", "server-design", "bot-integration", "moderation"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Gemini AI Advanced Reasoning Prompt Optimizer",
    "slug": "gemini-ai-advanced-reasoning-prompt-optimizer",
    "prompt": "Act as an elite prompt designer specialized in Google's Gemini models. Refine the user's query into an optimized system prompt that leverages Gemini's multi-modal capabilities, logical reasoning, and structured output formatting (e.g. JSON, Markdown tables).",
    "imageUrl": null,
    "category": "Gemini",
    "tags": ["gemini", "gemini-ai", "prompt-engineering", "google-deepmind", "seo"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Pinterest Pin Description & SEO Keywords Planner",
    "slug": "pinterest-pin-description-seo-keywords-planner",
    "prompt": "Act as a Pinterest SEO expert. Design 3 pin description options based on the user's blog post or product. Include high-traffic keywords, a compelling description that encourages clicks, a call to action, and relevant hashtags.",
    "imageUrl": null,
    "category": "Marketing",
    "tags": ["pinterest", "pinterest-seo", "social-media", "marketing", "blogging"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Google Drive File Organization & Folder Structure Planner",
    "slug": "google-drive-file-organization-folder-structure-planner",
    "prompt": "Act as a digital organization specialist. Design an optimized, clean folder directory structure for Google Drive based on the user's business or personal files. Establish file-naming conventions, archival rules, and sharing permissions guidelines.",
    "imageUrl": null,
    "category": "Coding",
    "tags": ["google-drive", "organization", "productivity", "digital-asset-management", "google-workspace"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Kahoot, Blooket & Prodigy Quiz Question Creator",
    "slug": "kahoot-blooket-prodigy-quiz-question-creator",
    "prompt": "Act as an educational game developer. Create a batch of 10 engaging multiple-choice questions for a Kahoot or Blooket game. Based on the user's topic and grade level, provide the question, 4 answer options (clearly marking the correct one), and set time limits.",
    "imageUrl": null,
    "category": "Writing",
    "tags": ["kahoot", "blooket", "prodigy", "quiz-creator", "education"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Google Slides Presentation Structure & Outline Maker",
    "slug": "google-slides-presentation-structure-outline-maker",
    "prompt": "Act as a presentation deck designer. Create a slide-by-slide content outline for a Google Slides deck based on the user's topic. For each slide, define the slide title, slide layout type, key bullet points, visual asset suggestions, and speaker notes.",
    "imageUrl": null,
    "category": "Writing",
    "tags": ["google-slides", "presentation-design", "slide-deck", "google-workspace", "outline"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Facebook Marketplace Selling Description Optimizer",
    "slug": "facebook-marketplace-selling-description-optimizer",
    "prompt": "Act as an experienced local reseller. Write an eye-catching, trustworthy, and search-optimized product listing description for Facebook Marketplace. Highlight condition, pickup options, payment terms, key features, and answer common FAQs.",
    "imageUrl": null,
    "category": "Marketing",
    "tags": ["facebook-marketplace", "reselling", "marketing", "local-sales", "copywriting"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Google Translate Advanced Localization Expert",
    "slug": "google-translate-advanced-localization-expert",
    "prompt": "Act as a professional translator and localization expert. Translate the provided text into the target language, and explain any colloquialisms, cultural context, or idioms that a direct literal translation like Google Translate might miss. Suggest refinements.",
    "imageUrl": null,
    "category": "Writing",
    "tags": ["google-translate", "translation", "localization", "language-learning", "traductor"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Wordle Game Assistant & Word Solver",
    "slug": "wordle-game-assistant-word-solver",
    "prompt": "Act as a Wordle puzzle expert. Analyze the user's current guesses (letters in green, yellow, and grey) and suggest the top 5 most optimal words to input next, along with the reasoning behind each choice based on letter frequency.",
    "imageUrl": null,
    "category": "Writing",
    "tags": ["wordle", "word-games", "puzzle-solver", "connections", "gaming"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "DoorDash Restaurant Menu & Description Writer",
    "slug": "doordash-restaurant-menu-description-writer",
    "prompt": "Act as a culinary copywriter. Create delicious, mouth-watering description copy for menu items on a DoorDash listing. Highlight ingredients, flavor profiles, portion size, and customization options to maximize orders.",
    "imageUrl": null,
    "category": "Marketing",
    "tags": ["doordash", "restaurant-marketing", "food-writing", "copywriting", "sales"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "PayPal Invoice Description & Payment Request Writer",
    "slug": "paypal-invoice-description-payment-request-writer",
    "prompt": "Act as a freelance billing coordinator. Write a clear, professional payment request email and matching PayPal invoice descriptions for services rendered. Ensure polite tone, clear terms, payment links, and prompt next steps.",
    "imageUrl": null,
    "category": "Writing",
    "tags": ["paypal", "billing", "freelance-tips", "finance", "writing"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  },
  {
    "title": "Discord Community Bot Scripting Guide",
    "slug": "discord-community-bot-scripting-guide",
    "prompt": "Act as a developer specialized in Discord.js and python-discord. Write clean, modular bot code for automating channel moderation, custom role assignment, reaction roles, or command handling. Include clear setup instructions.",
    "imageUrl": null,
    "category": "Coding",
    "tags": ["discord", "bot-development", "javascript", "python", "coding"],
    "url": "https://github.com/zion369369/awesome-prompting-hacks"
  }
];

if (fs.existsSync(DATA_FILE)) {
  const content = fs.readFileSync(DATA_FILE, 'utf-8');
  let prompts = JSON.parse(content);

  // Remove existing duplicate slugs to avoid errors
  const newSlugs = seoPrompts.map(p => p.slug);
  prompts = prompts.filter(p => !newSlugs.includes(p.slug));

  // Prepend new prompts to the front of the list
  const merged = [...seoPrompts, ...prompts];

  fs.writeFileSync(DATA_FILE, JSON.stringify(merged, null, 2), 'utf-8');
  console.log(`[SEO-ADDER] Successfully prepended ${seoPrompts.length} custom prompts targeting top Google searches. Total prompts count: ${merged.length}`);
} else {
  console.error(`[ERROR] Data file not found at ${DATA_FILE}`);
}
