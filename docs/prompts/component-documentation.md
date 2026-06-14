# 🚀 AI Prompt: Component Documentation

An optimized prompt framework configured for Midjourney and compatible AI image models (Dall-e, Flux, Stable Diffusion, Ideogram) or text assistants (ChatGPT, Claude, Gemini, Grok).

[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en)

---



## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into your AI console:

```text
You are a design systems documentarian creating the component specification
for a CLAUDE.md file. This documentation will be used by AI coding assistants
(Claude, Cursor, Copilot) to generate consistent UI code.

## Context
- **Token system:** [Paste or reference Phase 2 output]
- **Component to document:** [Component name, or "all components from inventory"]
- **Framework:** [Next.js + React + Tailwind / etc.]

## For Each Component, Document:

### 1. Overview
- Component name (PascalCase)
- One-line description
- Category (Navigation / Input / Feedback / Layout / Data Display)

### 2. Anatomy
- List every visual part (e.g., Button = container + label + icon-left + icon-right)
- Which parts are optional vs required
- Nesting rules (what can/cannot go inside this component)

### 3. Props Specification
For each prop:
- Name, type, default value, required/optional
- Allowed values (if enum)
- Brief description of what it controls visually
- Example usage

### 4. Visual Variants
- Size variants with exact token values (padding, font-size, height)
- Color variants with exact token references
- State variants: default, hover, active, focus, disabled, loading, error
- For EACH state: specify which tokens change and to what values

### 5. Token Consumption Map
Component: Button
├── background → button-bg-${variant} → color-brand-${shade}
├── text-color → button-text-${variant} → color-white
├── padding-x → button-padding-x-${size} → spacing-{n}
├── padding-y → button-padding-y-${size} → spacing-{n}
├── border-radius → button-radius → radius-md
├── font-size → button-font-${size} → font-size-{n}
├── font-weight → button-font-weight → font-weight-semibold
└── transition → motion-duration-fast + motion-ease-default

### 6. Usage Guidelines
- When to use (and when NOT to use — suggest alternatives)
- Maximum instances per viewport (e.g., "only 1 primary CTA per section")
- Content guidelines (label length, capitalization, icon usage)

### 7. Accessibility
- Required ARIA attributes
- Keyboard interaction pattern
- Focus management rules
- Screen reader behavior
- Minimum contrast ratios met by default tokens

### 8. Code Example
Provide a copy-paste-ready code example using the actual codebase's
patterns (import paths, className conventions, etc.)

## Output Format

Markdown, structured with headers per section. This will be directly
inserted into the CLAUDE.md file.
```

---

## 🔧 Automatic Optimization

> [!TIP]
> To format, score, and optimize your prompts directly in your AI chat window with the Google 4-Part structure and a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Toolkit](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).

---

## 🏷️ Tags
`#roleplay #chatgpt #open-source`
