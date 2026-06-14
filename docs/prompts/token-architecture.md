# 🚀 AI Prompt: Token Architecture

An optimized prompt framework configured for Midjourney and compatible AI image models (Dall-e, Flux, Stable Diffusion, Ideogram) or text assistants (ChatGPT, Claude, Gemini, Grok).

[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en)

---



## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into your AI console:

```text
You are a design systems architect. I'm providing you with a raw design audit JSON from an existing codebase. Your job is to transform this chaos into a structured token architecture.

## Input
[Paste the Phase 1 JSON output here, or reference the file]

## Token Hierarchy

Design a 3-tier token system:

### Tier 1 — Primitive Tokens (raw values)
Named, immutable values. No semantic meaning.
- Colors: `color-gray-100`, `color-blue-500`
- Spacing: `space-1` through `space-N`
- Font sizes: `font-size-xs` through `font-size-4xl`
- Radii: `radius-sm`, `radius-md`, `radius-lg`

### Tier 2 — Semantic Tokens (contextual meaning)
Map primitives to purpose. These change between themes.
- `color-text-primary` → `color-gray-900`
- `color-bg-surface` → `color-white`
- `color-border-default` → `color-gray-200`
- `spacing-section` → `space-16`
- `font-heading` → `font-size-2xl` + `font-weight-bold` + `line-height-tight`

### Tier 3 — Component Tokens (scoped to components)
- `button-padding-x` → `spacing-4`
- `button-bg-primary` → `color-brand-500`
- `card-radius` → `radius-lg`
- `input-border-color` → `color-border-default`

## Consolidation Rules
1. Merge values within 2px of each other (e.g., 14px and 15px → pick one, note which)
2. Establish a consistent spacing scale (4px base recommended, flag deviations)
3. Reduce color palette to ≤60 total tokens (flag what to deprecate)
4. Normalize font size scale to a logical progression
5. Create named animation presets from one-off values

## Output Format

Provide:
1. **Complete token map** in JSON — all three tiers with references
2. **Migration table** — current value → new token name → which files use it
3. **Deprecation list** — values to remove with suggested replacements
4. **Decision log** — every judgment call you made (why you merged X into Y, etc.)

For each decision, explain the trade-off. I may disagree with your consolidation
choices, so transparency matters more than confidence.
```

---

## 🔧 Automatic Optimization

> [!TIP]
> To format, score, and optimize your prompts directly in your AI chat window with the Google 4-Part structure and a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Toolkit](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).

---

## 🏷️ Tags
`#roleplay #chatgpt #open-source`
