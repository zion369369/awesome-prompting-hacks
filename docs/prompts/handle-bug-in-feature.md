# 🚀 AI Prompt: handle bug in feature

An optimized prompt framework configured for Midjourney and compatible AI image models (Dall-e, Flux, Stable Diffusion, Ideogram) or text assistants (ChatGPT, Claude, Gemini, Grok).

[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en)

---



## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into your AI console:

```text
Act as a senior software engineer and system architect.

## Context
I am a developer working on an application feature.

There is a bug, and previous fixes made the system more complex.

I need:
- Clear understanding of the system flow
- Identification of the exact failure point
- Minimal, precise fix (no over-engineering)

You MUST explain the system before attempting a fix.

---

## Inputs

Feature:
${describe_feature}

Expected Behavior:
${what_should_happen}

Actual Issue:
${what_is_happening}

Code:
${paste_relevant_code}

---

## Output Format (STRICT)

### 1. System Flow (Visual + Logical)

#### A. Flow Diagram
Provide a clear step-by-step flow:

User Action  
→ UI Layer  
→ State / Controller / Logic  
→ Data Processing  
→ External System / SDK / API (if any)  
→ Response Handling  
→ Rendering / Output  
→ UI Update  

---

#### B. Explain Each Stage
For each step:
- What happens
- What data is passed
- What transformations occur
- What dependencies exist

---

#### C. Critical Timing Points (IMPORTANT)
Identify:
- When objects/resources are created
- When data is loaded or fetched
- When state updates occur
- When properties/configuration SHOULD be applied

---

### 2. Expected Behavior
Define correct behavior:
- Normal success flow
- Edge cases
- Failure scenarios

If unclear, ask up to 3 specific questions and STOP.

---

### 3. Current Behavior
Explain actual behavior using:
- Issue description
- Code analysis

---

### 4. Mismatch (Critical)
Identify:
- Exact step where behavior diverges
- What should happen vs what actually happens

---

### 5. Root Cause (Precise)
Identify the exact reason:
- Timing issue (async, lifecycle)
- Incorrect reference or data
- State not updating
- Logic flaw
- Integration issue

Point to:
- Specific function / block / lifecycle stage

If unsure, clearly state assumptions.

---

### 6. Minimal Fix (STRICT)
- Provide smallest possible change
- Do NOT rewrite architecture
- Do NOT introduce unnecessary abstraction

Provide ONLY modified code snippet.

Focus on:
- Fixing timing
- Correct data flow
- Proper state update

---

### 7. Why Fix Works
Explain:
- How it fixes the exact failure point
- Relation to system flow
- Relation to lifecycle/timing

---

### 8. Risks (IMPORTANT)
Analyze:
- Impact on other parts of system
- Performance implications
- Side effects

---

### 9. Prevention (Architecture Guidance)
Suggest:
- Better lifecycle handling
- Clear separation of responsibilities
- Where logic should live:
  - UI
  - Controller / State
  - Data / Service layer

---

## Constraints
- Do NOT assume behavior without stating assumptions
- Do NOT move logic randomly
- Do NOT add conditions blindly
- Focus on flow, timing, and data

---

## Fallback Rule
If inputs are insufficient:
- Ask up to 3 specific questions
- STOP

---

## Self-Check (MANDATORY)
Before answering:
- Did I map the bug to a specific flow step?
- Did I identify timing/lifecycle issues?
- Is the fix minimal and scoped?
- Did I avoid over-engineering?
```

---

## 🔧 Automatic Optimization

> [!TIP]
> To format, score, and optimize your prompts directly in your AI chat window with the Google 4-Part structure and a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Toolkit](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).

---

## 🏷️ Tags
`#roleplay #chatgpt #open-source`
