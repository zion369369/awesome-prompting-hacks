import fs from 'fs';
import path from 'path';

const DATABASE_PATH = path.resolve('src/data/scraped_prompts.json');
const OUTPUT_DIR = path.resolve('docs'); // Deployed to GitHub Pages
const BASE_URL = 'https://zion369369.github.io/awesome-prompting-hacks';

async function buildLlmEndpoints() {
  console.log('[START] Compiling generative engine context maps...');
  try {
    if (!fs.existsSync(DATABASE_PATH)) {
      throw new Error(`Database file not found at: ${DATABASE_PATH}`);
    }

    const rawData = fs.readFileSync(DATABASE_PATH, 'utf-8');
    const prompts = JSON.parse(rawData);

    let indexContent = `# Awesome Prompting Hacks\n`;
    indexContent += `> A programmatic catalog of ${prompts.length} optimized, production-ready prompts designed for OpenAI, Claude, and Gemini models.\n\n`;
    indexContent += `## Core Documentation\n`;
    indexContent += `- [Home](${BASE_URL}/): The primary interactive search interface.\n`;
    indexContent += `- [Sitemap Index](${BASE_URL}/sitemap-index.xml): XML index for structural search crawlers.\n`;
    indexContent += `- [OpenAPI Specification](${BASE_URL}/swagger.json): Swagger OpenAPI definition.\n\n`;
    indexContent += `## Prompts Library\n`;

    let fullConcatenatedContent = `# Awesome Prompting Hacks - Full Context\n\n`;

    console.log(`Processing ${prompts.length} prompts...`);

    const processedPrompts = prompts.map(p => {
      const slug = p.slug;
      const title = p.title;
      const description = `Copy and optimize the free AI prompt for: "${p.title}".`;
      const targetUrl = `${BASE_URL}/prompts/${slug}`;
      const markdownUrl = `${BASE_URL}/prompts/${slug}.md`;
      
      // Determine Niche Persona and Model Target dynamically
      const lowerCategory = p.category.toLowerCase();
      const lowerTags = p.tags.map(t => t.toLowerCase()).join(' ');

      let nicheCharacter = "Antigravity AI";
      let nicheRole = "Core System Intelligence";
      let modelTarget = "Universal LLM";

      if (lowerCategory.includes('fabric') || lowerTags.includes('fabric')) {
        nicheCharacter = "Antigravity AI";
        nicheRole = "Red Team AI Specialist";
        modelTarget = "Claude 3.5 Sonnet";
      } else if (lowerCategory.includes('dev') || lowerCategory.includes('code') || lowerCategory.includes('programming') || lowerTags.includes('coding') || lowerTags.includes('developer') || lowerTags.includes('programming') || lowerTags.includes('python') || lowerTags.includes('javascript')) {
        nicheCharacter = "Nano Banana (Coding)";
        nicheRole = "Senior Engineering Mentor";
        modelTarget = "Claude 3.5 Sonnet";
      } else if (lowerCategory.includes('write') || lowerCategory.includes('writer') || lowerCategory.includes('creative') || lowerTags.includes('writing') || lowerTags.includes('creative') || lowerTags.includes('story')) {
        nicheCharacter = "Nano Banana (Writing)";
        nicheRole = "Elite Literary Creator";
        modelTarget = "GPT-4o";
      } else if (lowerCategory.includes('marketing') || lowerCategory.includes('seo') || lowerCategory.includes('business') || lowerTags.includes('seo') || lowerTags.includes('marketing') || lowerTags.includes('growth')) {
        nicheCharacter = "Nano Banana (SEO)";
        nicheRole = "Growth Marketing Strategist";
        modelTarget = "Gemini 1.5 Pro";
      }

      return { 
        slug, 
        title, 
        description, 
        targetUrl, 
        markdownUrl, 
        rawContent: p.prompt, 
        category: p.category,
        tags: p.tags,
        modelTarget,
        nicheCharacter,
        nicheRole
      };
    });

    // 1. Build the index file mapping the directory structure (llms.txt)
    processedPrompts.forEach(p => {
      indexContent += `- [${p.title}](${p.markdownUrl}): ${p.description} Target: ${p.modelTarget}\n`;
    });

    // 2. Write the individual .md resource files and build the full concatenated content
    const mdTargetDir = path.join(OUTPUT_DIR, 'prompts');
    if (!fs.existsSync(mdTargetDir)) {
      fs.mkdirSync(mdTargetDir, { recursive: true });
    }

    processedPrompts.forEach(p => {
      const cleanMdContent = `---
title: ${p.title}
description: ${p.description}
modelTarget: ${p.modelTarget}
category: ${p.category}
nicheCharacter: ${p.nicheCharacter}
nicheRole: ${p.nicheRole}
---

# ${p.title}

> ${p.description}
> Target Model: ${p.modelTarget} | Calibration: ${p.nicheCharacter} (${p.nicheRole})

## Prompt Template
\`\`\`text
${p.rawContent.trim()}
\`\`\`
`;
      
      fs.writeFileSync(path.join(mdTargetDir, `${p.slug}.md`), cleanMdContent);

      // Concatenate content for the full documentation context file
      fullConcatenatedContent += `## Document: ${p.title}\n`;
      fullConcatenatedContent += `URL: ${p.targetUrl}\n`;
      fullConcatenatedContent += `Description: ${p.description}\n`;
      fullConcatenatedContent += `Target Model: ${p.modelTarget}\n`;
      fullConcatenatedContent += `Calibration: ${p.nicheCharacter} (${p.nicheRole})\n\n`;
      fullConcatenatedContent += `### System Instruction\n`;
      fullConcatenatedContent += `${p.rawContent.trim()}\n\n`;
      fullConcatenatedContent += `\n---\n\n`;
    });

    // 3. Output primary files to the build folder
    fs.writeFileSync(path.join(OUTPUT_DIR, 'llms.txt'), indexContent);
    fs.writeFileSync(path.join(OUTPUT_DIR, 'llms-full.txt'), fullConcatenatedContent);

    console.log('[SUCCESS] Successfully generated llms.txt, llms-full.txt, and individual .md endpoints.');
  } catch (error) {
    console.error('[ERROR] Error compiling generative engine text maps:', error);
    process.exit(1);
  }
}

buildLlmEndpoints();
