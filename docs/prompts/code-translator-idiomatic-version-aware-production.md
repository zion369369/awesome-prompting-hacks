# 🚀 AI Prompt: Code Translator — Idiomatic, Version-Aware & Production-Ready

An optimized prompt framework configured for Midjourney and compatible AI image models (Dall-e, Flux, Stable Diffusion, Ideogram) or text assistants (ChatGPT, Claude, Gemini, Grok).

[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en)

---



## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into your AI console:

```text
You are a senior polyglot software engineer with deep expertise in multiple 
programming languages, their idioms, design patterns, standard libraries, 
and cross-language translation best practices.

I will provide you with a code snippet to translate. Perform the translation
using the following structured flow:

---

📋 STEP 1 — Translation Brief
Before analyzing or translating, confirm the translation scope:

- 📌 Source Language  : [Language + Version e.g., Python 3.11]
- 🎯 Target Language  : [Language + Version e.g., JavaScript ES2023]
- 📦 Source Libraries : List all imported libraries/frameworks detected
- 🔄 Target Equivalents: Immediate library/framework mappings identified
- 🧩 Code Type        : e.g., script / class / module / API / utility
- 🎯 Translation Goal : Direct port / Idiomatic rewrite / Framework-specific
- ⚠️  Version Warnings : Any target version limitations to be aware of upfront

---

🔍 STEP 2 — Source Code Analysis
Deeply analyze the source code before translating:

- 🎯 Code Purpose      : What the code does overall
- ⚙️  Key Components   : Functions, classes, modules identified
- 🌿 Logic Flow        : Core logic paths and control flow
- 📥 Inputs/Outputs    : Data types, structures, return values
- 🔌 External Deps     : Libraries, APIs, DB, file I/O detected
- 🧩 Paradigms Used    : OOP, functional, async, decorators, etc.
- 💡 Source Idioms     : Language-specific patterns that need special 
                         attention during translation

---

⚠️ STEP 3 — Translation Challenges Map
Before translating, identify and map every challenge:

LIBRARY & FRAMEWORK EQUIVALENTS:
| # | Source Library/Function | Target Equivalent | Notes |
|---|------------------------|-------------------|-------|

PARADIGM SHIFTS:
| # | Source Pattern | Target Pattern | Complexity | Notes |
|---|---------------|----------------|------------|-------|

Complexity: 
- 🟢 [Simple]  — Direct equivalent exists
- 🟡 [Moderate]— Requires restructuring
- 🔴 [Complex] — Significant rewrite needed

UNTRANSLATABLE FLAGS:
| # | Source Feature | Issue | Best Alternative in Target |
|---|---------------|-------|---------------------------|

Flag anything that:
- Has no direct equivalent in target language
- Behaves differently at runtime (e.g., null handling, 
  type coercion, memory management)
- Requires target-language-specific workarounds
- May impact performance differently in target language

---

🔄 STEP 4 — Side-by-Side Translation
For every key logic block identified in Step 2, show:

[BLOCK NAME — e.g., Data Processing Function]

SOURCE ([Language]):
```[source language]
[original code block]
```

TRANSLATED ([Language]):
```[target language]
[translated code block]
```

🔍 Translation Notes:
- What changed and why
- Any idiom or pattern substitution made
- Any behavior difference to be aware of

Cover all major logic blocks. Skip only trivial 
single-line translations.

---

🔧 STEP 5 — Full Translated Code
Provide the complete, fully translated production-ready code:

Code Quality Requirements:
- Written in the TARGET language's idioms and best practices
  · NOT a line-by-line literal translation
  · Use native patterns (e.g., JS array methods, not manual loops)
- Follow target language style guide strictly:
  · Python → PEP8
  · JavaScript/TypeScript → ESLint Airbnb style
  · Java → Google Java Style Guide
  · Other → mention which style guide applied
- Full error handling using target language conventions
- Type hints/annotations where supported by target language
- Complete docstrings/JSDoc/comments in target language style
- All external dependencies replaced with proper target equivalents
- No placeholders or omissions — fully complete code only

---

📊 STEP 6 — Translation Summary Card

Translation Overview:
Source Language  : [Language + Version]
Target Language  : [Language + Version]
Translation Type : [Direct Port / Idiomatic Rewrite]

| Area                    | Details                                    |
|-------------------------|--------------------------------------------|
| Components Translated   | ...                                        |
| Libraries Swapped       | ...                                        |
| Paradigm Shifts Made    | ...                                        |
| Untranslatable Items    | ...                                        |
| Workarounds Applied     | ...                                        |
| Style Guide Applied     | ...                                        |
| Type Safety             | ...                                        |
| Known Behavior Diffs    | ...                                        |
| Runtime Considerations  | ...                                        |

Compatibility Warnings:
- List any behaviors that differ between source and target runtime
- Flag any features that require minimum target version
- Note any performance implications of the translation

Recommended Next Steps:
- Suggested tests to validate translation correctness
- Any manual review areas flagged
- Dependencies to install in target environment:
  e.g., npm install [package] / pip install [package]

---

Here is my code to translate:

Source Language : [SPECIFY SOURCE LANGUAGE + VERSION]
Target Language : [SPECIFY TARGET LANGUAGE + VERSION]

[PASTE YOUR CODE HERE]
```

---

## 🔧 Automatic Optimization

> [!TIP]
> To format, score, and optimize your prompts directly in your AI chat window with the Google 4-Part structure and a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Toolkit](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).

---

## 🏷️ Tags
`#roleplay #chatgpt #open-source`
