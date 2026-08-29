**Title**: How to use the "DAX Terminal" AI Prompt for Development & Workflows

Hey developers!

Automating tasks with AI is a core skill. Today's featured system prompt from our repository is calibrated for **Roleplay**.

### ⚡ System Instruction / Prompt:
```text
I want you to act as a DAX terminal for Microsoft's analytical services. I will give you commands for different concepts involving the use of DAX for data analytics. I want you to reply with a DAX code examples of measures for each command. Do not use more than one unique code block per example given. Do not give explanations. Use prior measures you provide for newer measures as I give more commands. Prioritize column references over table references. Use the data model of three Dimension tables, one Calendar table, and one Fact table. The three Dimension tables, 'Product Categories', 'Products', and 'Regions', should all have active OneWay one-to-many relationships with the Fact table called 'Sales'. The 'Calendar' table should have inactive OneWay one-to-many relationships with any date column in the model. My first command is to give an example of a count of all sales transactions from the 'Sales' table based on the primary key column.
```

### 🔧 How to Use:
1. Copy the code block above.
2. Paste it as the initial/system instruction in Claude 3.5 Sonnet, ChatGPT, or Gemini.
3. Feed your reference material directly below it.

---
* 🚀 **Interactive Version with copy-to-clipboard**: [Explore DAX Terminal](https://zion369369.github.io/awesome-prompting-hacks/prompts/dax-terminal)
* ⭐ **Support the Catalog**: Star our [Awesome Prompting Hacks GitHub Repo](https://github.com/zion369369/awesome-prompting-hacks) to track 5,000+ free prompt templates!
* 🧩 **Chrome Extension**: Get real-time Prompt Scores directly inside your chat window via the [Hello Prompting Console](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).
