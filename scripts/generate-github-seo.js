/**
 * scripts/generate-github-seo.js
 * Programmatic SEO Markdown Engine for GitHub (DA 99).
 * 
 * Re-branded to focus entirely on Prompt Engineering Templates.
 */

import fs from 'fs';
import path from 'url';
import nodePath from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);

// Target Directories focusing on Prompts
const DOCS_DIR = nodePath.join(__dirname, '../docs');
const COMPARE_DIR = nodePath.join(DOCS_DIR, 'prompts/compare-saas');
const TAX_DIR = nodePath.join(DOCS_DIR, 'prompts/tax-planning');
const ALTERNATIVE_DIR = nodePath.join(DOCS_DIR, 'prompts/saas-alternatives');
const BESTFOR_DIR = nodePath.join(DOCS_DIR, 'prompts/role-workflows');

// Ensure output directories exist
[DOCS_DIR, COMPARE_DIR, TAX_DIR, ALTERNATIVE_DIR, BESTFOR_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Load Datasets
const saasData = JSON.parse(fs.readFileSync(nodePath.join(__dirname, '../src/data/saas_comparisons.json'), 'utf-8'));
const taxData = JSON.parse(fs.readFileSync(nodePath.join(__dirname, '../src/data/tax_calculators.json'), 'utf-8'));

// Extension reference - Branded organically as an Awesome Prompting utility
const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/Hello%20Prompting:%20Best%20AI%20Prompt%20Optimizer/idfecahooccghgkjohelhjecjeeeapah?hl=en";
const EXTENSION_BADGE = `[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](${CHROME_STORE_URL})`;

/**
 * Generate SaaS comparison markdown page
 */
function generateSaasMarkdown(item) {
  const sa = item.software_a.toLowerCase().replace(/\s+/g, '-');
  const sb = item.software_b.toLowerCase().replace(/\s+/g, '-');
  const ind = item.industry.toLowerCase().replace(/\s+/g, '-');
  const filename = `compare-${sa}-vs-${sb}-for-${ind}.md`;

  const mdContent = `# 📋 Prompt Template: Compare ${item.software_a} vs ${item.software_b} for ${item.industry}

An elite prompt framework configured to evaluate systems in the **${item.industry}** sector.

${EXTENSION_BADGE}

---

## ⚡ Target Comparative Metrics

Use this template to generate objective matrices including:
*   **Pricing Ranges**: ${item.average_pricing_a} vs ${item.average_pricing_b}
*   **Onboarding Phase**: ${item.setup_time}
*   **Difficulty Threshold**: ${item.difficulty_score}/10

---

## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into ChatGPT, Claude, Gemini, or Grok:

\`\`\`text
"Act as a professional SaaS Integration Consultant. Compare ${item.software_a} and ${item.software_b} for a business operating in ${item.industry}. Detail licensing structures, implementation costs, and feature matrices. Analyze key strengths such as '${item.best_feature_a}' vs '${item.best_feature_b}'. Output as a markdown table with a final verdict recommendation."
\`\`\`

---

## 🔧 Automatic Optimization

> [!TIP]
> To auto-generate, audit, and score these checklists directly within your AI window, deploy the [Prompt Engineering Console tool](${CHROME_STORE_URL}).
`;

  fs.writeFileSync(nodePath.join(COMPARE_DIR, filename), mdContent, 'utf-8');
  return `docs/prompts/compare-saas/${filename}`;
}

/**
 * Generate Tax calculator markdown page
 */
function generateTaxMarkdown(item) {
  const asset = item.asset_type.toLowerCase().replace(/\s+/g, '-');
  const bracket = item.tax_bracket.replace(/%/g, '');
  const filename = `calculate-${asset}-bracket-${bracket}-zip-${item.zip_code}.md`;

  const mdContent = `# 💸 Prompt Template: Calculate ${item.asset_type} Tax for ${item.tax_bracket} Bracket (Zip ${item.zip_code})

An advanced prompt schema mapping marginal returns and local surcharges for region: **${item.region}**.

${EXTENSION_BADGE}

---

## 📈 Localized Model Context

*   **Asset Type**: ${item.asset_type}
*   **Base Rate**: ${(item.base_rate * 100).toFixed(1)}%
*   **Local Surcharge**: ${(item.local_surcharge * 100).toFixed(1)}%
*   **Target Zip Code**: ${item.zip_code}

---

## 🤖 The Prompt Engineering Code

Copy and paste this structured prompt into ChatGPT, Claude, Gemini, or Grok:

\`\`\`text
"Act as a CPA and Corporate Tax Attorney. Detail a tax mitigation checklist for ${item.asset_type} assets in Zip Code ${item.zip_code} (${item.region}). Incorporate standard write-offs like ${item.deductions_available} and evaluate a ${item.recommended_entity} structure. Outline standard tax mitigation strategies."
\`\`\`

---

## 🔧 Automatic Optimization

> [!IMPORTANT]
> To compile audits instantly without manual drafting, integrate the browser-level [Prompt Optimization toolkit](${CHROME_STORE_URL}) directly in your console.
`;

  fs.writeFileSync(nodePath.join(TAX_DIR, filename), mdContent, 'utf-8');
  return `docs/prompts/tax-planning/${filename}`;
}

/**
 * Generate Alternatives page
 */
function generateAlternativeMarkdown(software) {
  const filename = `find-best-${software}-alternatives.md`;
  const name = software.charAt(0).toUpperCase() + software.slice(1);
  const competitors = saasData.filter(item => 
    item.software_a.toLowerCase() === software || 
    item.software_b.toLowerCase() === software
  ).map(item => item.software_a.toLowerCase() === software ? item.software_b : item.software_a);

  const mdContent = `# 🔍 Prompt Template: Find Best ${name} Alternatives & Competitors

A high-fidelity prompt template to discover cost-effective competitor solutions replacing **${name}**.

${EXTENSION_BADGE}

---

## 🔍 Context Parameters

*   **Target Software**: ${name}
*   **Competitors List**: ${competitors.join(', ')}

---

## 🤖 The Prompt Engineering Code

Copy and paste this structured prompt into ChatGPT, Claude, Gemini, or Grok:

\`\`\`text
"Act as an Enterprise System Administrator. Write a database migration script and transition checklists to migrate all operations from ${name} to ${competitors[0] || 'alternative software'}. Structure as step-by-step tasks."
\`\`\`

---

## 🔧 Automatic Optimization

> [!TIP]
> To expand system transition scripts dynamically, activate the [browser-level prompt optimizer tool](${CHROME_STORE_URL}).
`;

  fs.writeFileSync(nodePath.join(ALTERNATIVE_DIR, filename), mdContent, 'utf-8');
  return `docs/prompts/saas-alternatives/${filename}`;
}

/**
 * Generate Best-For pages
 */
function generateBestForMarkdown(item) {
  const filename = `best-${item.category}-for-${item.role}.md`;
  const mdContent = `# 🏆 Prompt Template: Best ${item.category.toUpperCase()} Platforms for ${item.role.replace(/-/g, ' ')}

An analytical prompt template to evaluate software suites for target persona profiles.

${EXTENSION_BADGE}

---

## 🏆 Context Parameters

*   **Role Class**: ${item.role}
*   **Product Type**: ${item.category}

---

## 🤖 The Prompt Engineering Code

Copy and paste this structured prompt into ChatGPT, Claude, Gemini, or Grok:

\`\`\`text
"Act as a professional software auditor. Analyze the best ${item.category} suites specifically matching user workflow requirements for ${item.role}."
\`\`\`

---

## 🔧 Automatic Optimization

> [!IMPORTANT]
> Score, expand, and refine comparative prompts automatically in your window via the [browser-level prompt optimizer tool](${CHROME_STORE_URL}).
`;

  fs.writeFileSync(nodePath.join(BESTFOR_DIR, filename), mdContent, 'utf-8');
  return `docs/prompts/role-workflows/${filename}`;
}

/**
 * Write master README.md index sitemap as an Awesome Prompting list
 */
function writeMasterReadme(saasUrls, taxUrls, altUrls, bestForUrls) {
  const readmeContent = `# 🚀 Awesome Prompting Hacks: The Ultimate Prompt Engineering Guide

A curated list of production-grade prompt templates, SaaS alternative cheat sheets, tax calculator frameworks, and AI workflows for ChatGPT, Claude, Gemini, and Grok.

All templates are optimized for execution using the [Awesome Prompting Console toolkit](${CHROME_STORE_URL}).

---

## 🔧 Prompt Optimization Console Toolkit

[![Awesome Prompting Console](https://img.shields.io/badge/Awesome_Prompting-Console_Toolkit-blue?style=for-the-badge)](${CHROME_STORE_URL})

**Awesome Prompting Console** acts as an AI prompt engineer in your browser:
*   **Prompt Score™ Live**: Health checks on prompt clarity.
*   **Google 4-Part Framework**: Automatic structure injection (Persona, Task, Context, Format).
*   **One-Click Super Prompts**: Upgrading generic inputs instantly.

---

## 📊 SaaS Evaluation & Comparison Prompts

Copy-paste templates to compare enterprise software:

${saasUrls.map(url => `*   [${nodePath.basename(url, '.md').toUpperCase().replace(/COMPARE-/g, '')}](${url})`).join('\n')}

---

## 💸 Tax Planning & Computation Prompts

Templates to calculate localized liabilities:

${taxUrls.map(url => `*   [${nodePath.basename(url, '.md').toUpperCase().replace(/CALCULATE-/g, '')}](${url})`).join('\n')}

---

## 🔍 Competitor Assessment & Alternatives Prompts

Templates to discover software alternatives:

${altUrls.map(url => `*   [${nodePath.basename(url, '.md').toUpperCase().replace(/FIND-BEST-/g, '')}](${url})`).join('\n')}

---

## 🏆 Role-Based Workflow Prompts

Templates to audit tool categories by user persona:

${bestForUrls.map(url => `*   [${nodePath.basename(url, '.md').toUpperCase().replace(/BEST-/g, '')}](${url})`).join('\n')}
`;

  fs.writeFileSync(nodePath.join(__dirname, '../README.md'), readmeContent, 'utf-8');
  
  // Format index file for GitHub Pages (stripping the /docs/ folder prefix from links)
  const docsIndexContent = readmeContent.replaceAll('docs/', '');
  fs.writeFileSync(nodePath.join(DOCS_DIR, 'index.md'), docsIndexContent, 'utf-8');
  
  console.log(`[SUCCESS] Compiled root README.md and docs/index.md files.`);
}

function run() {
  console.log('[STARTING] Compiling GitHub Markdown directories...');
  
  const saasUrls = saasData.map(item => generateSaasMarkdown(item));
  const taxUrls = taxData.map(item => generateTaxMarkdown(item));
  
  const softwareList = ["salesforce", "hubspot", "clickup", "jira", "quickbooks", "xero"];
  const altUrls = softwareList.map(software => generateAlternativeMarkdown(software));
  
  const bestForList = [
    { category: "crm", role: "developer" },
    { category: "crm", role: "real-estate-agent" },
    { category: "project-management", role: "developer" },
    { category: "accounting", role: "ecommerce-seller" }
  ];
  const bestForUrls = bestForList.map(item => generateBestForMarkdown(item));
  
  writeMasterReadme(saasUrls, taxUrls, altUrls, bestForUrls);
  console.log(`[COMPLETED] Generated ${saasUrls.length + taxUrls.length + altUrls.length + bestForUrls.length} markdown pages successfully.`);
}

run();
