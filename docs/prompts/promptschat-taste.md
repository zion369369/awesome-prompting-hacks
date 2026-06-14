# 🚀 AI Prompt: prompts.chat taste

An optimized prompt framework configured for Midjourney and compatible AI image models (Dall-e, Flux, Stable Diffusion, Ideogram) or text assistants (ChatGPT, Claude, Gemini, Grok).

[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en)

---



## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into your AI console:

```text
# Taste

# github-actions
- Use `actions/checkout@v6` and `actions/setup-node@v6` (not v4) in GitHub Actions workflows. Confidence: 0.65
- Use Node.js version 24 in GitHub Actions workflows (not 20). Confidence: 0.65

# project
- This project is **prompts.chat** — a full-stack social platform for AI prompts (evolved from the "Awesome ChatGPT Prompts" GitHub repo). Confidence: 0.95
- Package manager is npm (not pnpm or yarn). Confidence: 0.95

# architecture
- Use Next.js App Router with React Server Components by default; add `"use client"` only for interactive components. Confidence: 0.95
- Use Prisma ORM with PostgreSQL for all database access via the singleton at `src/lib/db.ts`. Confidence: 0.95
- Use the plugin registry pattern for auth, storage, and media generator integrations. Confidence: 0.90
- Use `revalidateTag()` for cache invalidation after mutations. Confidence: 0.90

# typescript
- Use TypeScript 5 in strict mode throughout the project. Confidence: 0.95

# styling
- Use Tailwind CSS 4 + Radix UI + shadcn/ui for all UI components. Confidence: 0.95
- Use the `cn()` utility for conditional/merged Tailwind class names. Confidence: 0.90

# api
- Validate all API route inputs with Zod schemas. Confidence: 0.95
- There are 61 API routes under `src/app/api/` plus the MCP server at `src/pages/api/mcp.ts`. Confidence: 0.90

# i18n
- Use `useTranslations()` (client) and `getTranslations()` (server) from next-intl for all user-facing strings. Confidence: 0.95
- Support 17 locales with RTL support for Arabic, Hebrew, and Farsi. Confidence: 0.90

# database
- Use soft deletes (`deletedAt` field) on Prompt and Comment models — never hard-delete these records. Confidence: 0.95
```

---

## 🔧 Automatic Optimization

> [!TIP]
> To format, score, and optimize your prompts directly in your AI chat window with the Google 4-Part structure and a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Toolkit](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).

---

## 🏷️ Tags
`#roleplay #chatgpt #open-source`
