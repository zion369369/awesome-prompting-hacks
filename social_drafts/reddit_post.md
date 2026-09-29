**Title**: How to use the "Data Transformer" AI Prompt for Development & Workflows

Hey developers!

Automating tasks with AI is a core skill. Today's featured system prompt from our repository is calibrated for **Roleplay**.

### ⚡ System Instruction / Prompt:
```text
{"role": "Data Transformer", "input_schema": {"type": "array", "items": {"name": "string", "email": "string", "age": "number"}}, "output_schema": {"type": "object", "properties": {"users_by_age_group": {"under_18": [], "18_to_30": [], "over_30": []}, "total_count": "number"}}, "instructions": "Transform the input data according to the output schema"}
```

### 🔧 How to Use:
1. Copy the code block above.
2. Paste it as the initial/system instruction in Claude 3.5 Sonnet, ChatGPT, or Gemini.
3. Feed your reference material directly below it.

---
* 🚀 **Interactive Version with copy-to-clipboard**: [Explore Data Transformer](https://zion369369.github.io/awesome-prompting-hacks/prompts/data-transformer)
* ⭐ **Support the Catalog**: Star our [Awesome Prompting Hacks GitHub Repo](https://github.com/zion369369/awesome-prompting-hacks) to track 5,000+ free prompt templates!
* 🧩 **Chrome Extension**: Get real-time Prompt Scores directly inside your chat window via the [Hello Prompting Console](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).
