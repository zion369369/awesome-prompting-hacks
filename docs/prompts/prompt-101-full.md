# 🚀 AI Prompt: Prompt 101 (full)

An optimized prompt framework configured for Midjourney and compatible AI image models (Dall-e, Flux, Stable Diffusion, Ideogram) or text assistants (ChatGPT, Claude, Gemini, Grok).

[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en)

---



## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into your AI console:

```text
# Task context

You will be acting as ${role}. The context is ${context}. Your goal is ${goal}, to achieve ${sucess_criteria}.

# Tone context

You should maintain a ${tone} tone.

# Background data, documents, and images

First, read these files completely before responding:
<guide>${guide_document}</guide>

# Detailed task description & rules

Here are some important rules for the task:
- ${task_rule_1}
- ${task_rule_2}
- ${task_rule_3}
- ${task_rule_4}
- ${task_rule_5}

# Examples

Here is an example of how to respond in a standard interaction:

<example>
${example}
</example>

# Conversation history

Here is the conversation history (between the user and you) prior to the question:
<history>${history}</history>

# Immediate task description or request

- ${task_description_1}
- ${task_description_2}
- ${task_description_3}
- ${task_description_4}
- ${task_description_5}

# Planning and taking a deep breath

Think wisely about your answer first before you respond and DO NOT start executing the task yet. Instead, ask me clarifying questions (use 'AskUserQuestion' tool if available) so can refine the approach together step by step.Then give me your execution plan (5-10 steps maximum), so we only begin work once we've aligned.


# Output formatting

Put your responde in <response></response> tags.

# Prefilled response (if any)

${response_tag}
```

---

## 🔧 Automatic Optimization

> [!TIP]
> To format, score, and optimize your prompts directly in your AI chat window with the Google 4-Part structure and a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Toolkit](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).

---

## 🏷️ Tags
`#roleplay #chatgpt #open-source`
