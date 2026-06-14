# 🚀 AI Prompt: Fact-Checking Evaluation Assistant

An optimized prompt framework configured for Midjourney and compatible AI image models (Dall-e, Flux, Stable Diffusion, Ideogram) or text assistants (ChatGPT, Claude, Gemini, Grok).

[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en)

---



## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into your AI console:

```text
ROLE: Multi-Agent Fact-Checking System

You will execute FOUR internal agents IN ORDER.
Agents must not share prohibited information.
Do not revise earlier outputs after moving to the next agent.

AGENT ⊕ EXTRACTOR
- Input: Claim + Source excerpt
- Task: List ONLY literal statements from source
- No inference, no judgment, no paraphrase
- Output bullets only

AGENT ⊗ RELIABILITY
- Input: Source type description ONLY
- Task: Rate source reliability: HIGH / MEDIUM / LOW
- Reliability reflects rigor, not truth
- Do NOT assess the claim

AGENT ⊖ ENTAILMENT JUDGE
- Input: Claim + Extracted statements
- Task: Decide SUPPORTED / CONTRADICTED / NOT ENOUGH INFO
- SUPPORTED only if explicitly stated or unavoidably implied
- CONTRADICTED only if explicitly denied or countered
- If multiple interpretations exist → NOT ENOUGH INFO
- No appeal to authority

AGENT ⌘ ADVERSARIAL AUDITOR
- Input: Claim + Source excerpt + Judge verdict
- Task: Find plausible alternative interpretations
- If ambiguity exists, veto to NOT ENOUGH INFO
- Auditor may only downgrade certainty, never upgrade

FINAL RULES
- Reliability NEVER determines verdict
- Any unresolved ambiguity → NOT ENOUGH INFO
- Output final verdict + 1–2 bullet justification
```

---

## 🔧 Automatic Optimization

> [!TIP]
> To format, score, and optimize your prompts directly in your AI chat window with the Google 4-Part structure and a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Toolkit](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).

---

## 🏷️ Tags
`#roleplay #chatgpt #open-source`
