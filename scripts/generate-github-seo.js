/**
 * scripts/generate-github-seo.js
 * Programmatic SEO Markdown Engine for GitHub (DA 99).
 * 
 * ES-Module compliant version compiling all playbooks.
 */

import fs from 'fs';
import path from 'url';
import nodePath from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);

// Target Directories
const DOCS_DIR = nodePath.join(__dirname, '../docs');
const COMPARE_DIR = nodePath.join(DOCS_DIR, 'compare');
const TAX_DIR = nodePath.join(DOCS_DIR, 'tax');
const ALTERNATIVE_DIR = nodePath.join(DOCS_DIR, 'alternatives');
const BESTFOR_DIR = nodePath.join(DOCS_DIR, 'best-for');

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
  const filename = `${sa}-vs-${sb}-for-${ind}.md`;

  const mdContent = `# ${item.software_a} vs ${item.software_b} for ${item.industry}

An objective comparative matrix compiled for operations in the **${item.industry}** sector.

${EXTENSION_BADGE}

---

## 📊 Comparison Summary Matrix

| Dimension | ${item.software_a} | ${item.software_b} |
| :--- | :--- | :--- |
| **Pricing** | ${item.average_pricing_a} | ${item.average_pricing_b} |
| **Setup** | ${item.setup_time} | - |
| **Rating** | **${item.difficulty_score}/10** | - |

---

## 💡 Prompt Optimization Hack

### Naive SaaS Prompt
\`\`\`text
"${item.software_a} vs ${item.software_b} comparison for my company"
\`\`\`
*Prompt Score™: 35%*

### Optimized Super Prompt
\`\`\`text
"Act as a professional SaaS Integration Consultant. Compare ${item.software_a} and ${item.software_b} for a business operating in ${item.industry}. Detail licensing structures, implementation costs, and feature matrices."
\`\`\`
*Prompt Score™: 98%*

> [!TIP]
> To auto-generate, audit, and score these checklists directly within your AI window, deploy the [Prompt Engineering Console tool](${CHROME_STORE_URL}).
`;

  fs.writeFileSync(nodePath.join(COMPARE_DIR, filename), mdContent, 'utf-8');
  return `docs/compare/${filename}`;
}

/**
 * Generate Tax calculator markdown page
 */
function generateTaxMarkdown(item) {
  const asset = item.asset_type.toLowerCase().replace(/\s+/g, '-');
  const bracket = item.tax_bracket.replace(/%/g, '');
  const filename = `${asset}-bracket-${bracket}-zip-${item.zip_code}.md`;

  const mdContent = `# Marginal Tax Calculator for ${item.asset_type} (${item.tax_bracket} Bracket, Zip ${item.zip_code})

A localized marginal liability model mapping asset returns for region: **${item.region}**.

${EXTENSION_BADGE}

---

## 📈 Localized Tax Parameters

*   **Asset Type**: ${item.asset_type}
*   **Base Rate**: ${(item.base_rate * 100).toFixed(1)}%
*   **Local Surcharge**: ${(item.local_surcharge * 100).toFixed(1)}%
*   **Target Zip Code**: ${item.zip_code}

---

## 🤖 Prompt Engineering Helper

### Naive Tax Prompt
\`\`\`text
"how to save taxes in ${item.zip_code}"
\`\`\`
*Prompt Score™: 22%*

### Optimized Super Prompt
\`\`\`text
"Act as a CPA and Corporate Tax Attorney. Detail a tax mitigation checklist for ${item.asset_type} assets in Zip Code ${item.zip_code} (${item.region}). Incorporate standard write-offs like ${item.deductions_available} and evaluate a ${item.recommended_entity} structure."
\`\`\`
*Prompt Score™: 95%*

> [!IMPORTANT]
> To compile audits instantly without manual drafting, integrate the browser-level [Prompt Optimization toolkit](${CHROME_STORE_URL}) directly in your console.
`;

  fs.writeFileSync(nodePath.join(TAX_DIR, filename), mdContent, 'utf-8');
  return `docs/tax/${filename}`;
}

/**
 * Generate Alternatives page
 */
function generateAlternativeMarkdown(software) {
  const filename = `best-${software}-alternatives.md`;
  const name = software.charAt(0).toUpperCase() + software.slice(1);
  const competitors = saasData.filter(item => 
    item.software_a.toLowerCase() === software || 
    item.software_b.toLowerCase() === software
  ).map(item => item.software_a.toLowerCase() === software ? item.software_b : item.software_a);

  const mdContent = `# Best ${name} Alternatives & Competitors

Explore top replacement options for **${name}** software.

${EXTENSION_BADGE}

---

## 🔍 Top Market Competitors

*   **Direct alternatives identified**: ${competitors.join(', ')}

---

## 🤖 Workspace Prompt Optimizer

Before migrating tool databases, write a transition plan:
\`\`\`text
"Act as a System Administrator. Write a database migration script and transition checklists to migrate all operations from ${name} to ${competitors[0] || 'alternative software'}. Structure as step-by-step tasks."
\`\`\`

> [!TIP]
> To expand system transition scripts dynamically, activate the [browser-level prompt optimizer tool](${CHROME_STORE_URL}).
`;

  fs.writeFileSync(nodePath.join(ALTERNATIVE_DIR, filename), mdContent, 'utf-8');
  return `docs/alternatives/${filename}`;
}

/**
 * Generate Best-For pages
 */
function generateBestForMarkdown(item) {
  const filename = `best-${item.category}-for-${item.role}.md`;
  const mdContent = `# Best ${item.category.toUpperCase()} Platforms for ${item.role.replace(/-/g, ' ')}

An objective evaluation of platforms for target persona profiles.

${EXTENSION_BADGE}

---

## 🏆 Recommendation Matrix

*   **Role Class**: ${item.role}
*   **Product Type**: ${item.category}

---

## 🤖 Prompt Optimizer Helper

\`\`\`text
"Act as a professional software auditor. Analyze the best ${item.category} suites specifically matching user workflow requirements for ${item.role}."
\`\`\`

> [!IMPORTANT]
> Score, expand, and refine comparative prompts automatically in your window via the [browser-level prompt optimizer tool](${CHROME_STORE_URL}).
`;

  fs.writeFileSync(nodePath.join(BESTFOR_DIR, filename), mdContent, 'utf-8');
  return `docs/best-for/${filename}`;
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

## 📊 Software Comparison Indexes

${saasUrls.map(url => `*   [${nodePath.basename(url, '.md').toUpperCase()}](${url})`).join('\n')}

---

## 💸 Localized Tax Estimators

${taxUrls.map(url => `*   [${nodePath.basename(url, '.md').toUpperCase()}](${url})`).join('\n')}

---

## 🔍 Alternatives Directory

${altUrls.map(url => `*   [${nodePath.basename(url, '.md').toUpperCase()}](${url})`).join('\n')}

---

## 🏆 Persona Best-For Guides

${bestForUrls.map(url => `*   [${nodePath.basename(url, '.md').toUpperCase()}](${url})`).join('\n')}
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
