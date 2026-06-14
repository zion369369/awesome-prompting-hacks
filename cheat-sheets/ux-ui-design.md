# 📋 Quick Copy UX/UI Design Prompt Cheat Sheet

This file contains **10** curated prompt templates for **UX/UI Design**. Copy and paste them directly into your AI chat window.

---

## 1. UI Component Generator|OBJECTIVE: Generate the HTML and CSS code for a reusab...

> **Tags**: `uxui-design`, `chatgpt`, `open-source` | **Slug**: `ui-component-generatorobjective-generate-the-html`

### 📋 Template:
```text
ROLE: UI Component Generator|OBJECTIVE: Generate the HTML and CSS code for a reusable **{component_name}** component based on the design specifications.|REQUIREMENTS: The component must be responsive and work on screen sizes from {min_width}px to {max_width}px.|Follow the BEM (Block, Element, Modifier) naming convention for CSS classes.|The design should adhere to the style guide defined by the brand color {brand_color_hex}.|STYLE: Pixel-perfect, clean code, and production-ready.|OUTPUT FORMAT: An HTML file with embedded CSS.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/ui-component-generatorobjective-generate-the-html)

---

## 2. Accessibility Auditor|OBJECTIVE: Audit the web page at **{page_url}** for com...

> **Tags**: `uxui-design`, `chatgpt`, `open-source` | **Slug**: `accessibility-auditorobjective-audit-the-web-page`

### 📋 Template:
```text
ROLE: Accessibility Auditor|OBJECTIVE: Audit the web page at **{page_url}** for compliance with WCAG 2.1 AA accessibility standards.|REQUIREMENTS: Check for issues with color contrast, missing alt text for images, and keyboard navigation.|Use an automated tool like {accessibility_tool} as a starting point.|Provide a prioritized list of issues to fix, with code snippets for remediation.|STYLE: User-advocate, thorough, and focused on inclusivity.|OUTPUT FORMAT: Markdown report with a list of accessibility violations and fixes.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/accessibility-auditorobjective-audit-the-web-page)

---

## 3. User Flow Mapper|OBJECTIVE: Create a user flow diagram for a user trying to c...

> **Tags**: `uxui-design`, `chatgpt`, `open-source` | **Slug**: `user-flow-mapperobjective-create-a-user-flow-diagr`

### 📋 Template:
```text
ROLE: User Flow Mapper|OBJECTIVE: Create a user flow diagram for a user trying to complete the task of **{user_task}** in the application **{app_name}**.|REQUIREMENTS: The diagram should show all steps, decision points, and screens the user interacts with.|Start from the entry point {entry_point} and end at the success screen.|Identify at least two potential points of friction or drop-off in the flow.|STYLE: Visual, user-centric, and helps identify usability issues.|OUTPUT FORMAT: A diagram using Mermaid Markdown's graph syntax.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/user-flow-mapperobjective-create-a-user-flow-diagr)

---

## 4. Design System Documenter|OBJECTIVE: Write the documentation for the **{compon...

> **Tags**: `uxui-design`, `chatgpt`, `open-source` | **Slug**: `design-system-documenterobjective-write-the-docume`

### 📋 Template:
```text
ROLE: Design System Documenter|OBJECTIVE: Write the documentation for the **{component_name}** component in our design system.|REQUIREMENTS: Include sections for 'When to use', 'When not to use', and 'Anatomy'.|Provide at least 3 examples of the component in different states (e.g., default, hover, disabled).|Reference the corresponding component in the Figma library {figma_component_link}.|STYLE: Clear, comprehensive, and enables consistent use of the component.|OUTPUT FORMAT: Markdown page for the design system website.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/design-system-documenterobjective-write-the-docume)

---

## 5. Usability Test Script Writer|OBJECTIVE: Create a script for a moderated usabi...

> **Tags**: `uxui-design`, `chatgpt`, `open-source` | **Slug**: `usability-test-script-writerobjective-create-a-scr`

### 📋 Template:
```text
ROLE: Usability Test Script Writer|OBJECTIVE: Create a script for a moderated usability test to evaluate the new feature **{feature_name}**.|REQUIREMENTS: The script should include an introduction, pre-test questions about user habits, a list of tasks for the user to perform, and post-test follow-up questions.|The primary task should be to {primary_user_goal}.|The target user persona for the test is {user_persona_name}.|STYLE: Unbiased, open-ended, and encourages users to think aloud.|OUTPUT FORMAT: Markdown document containing the full test script.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/usability-test-script-writerobjective-create-a-scr)

---

## 6. Microcopy Writer|OBJECTIVE: Write clear and concise microcopy for the user in...

> **Tags**: `uxui-design`, `chatgpt`, `open-source` | **Slug**: `microcopy-writerobjective-write-clear-and-concise`

### 📋 Template:
```text
ROLE: Microcopy Writer|OBJECTIVE: Write clear and concise microcopy for the user interface element **{ui_element_name}** (e.g., a button, an error message).|REQUIREMENTS: The copy should guide the user and align with the brand voice, which is {brand_voice_description}.|For the error state, explain what went wrong and how to fix it.|The copy for the button must be a strong call to action and under {word_limit} words.|STYLE: Conversational, helpful, and concise.|OUTPUT FORMAT: A JSON object with keys for each state (e.g., 'label', 'error_message', 'tooltip').
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/microcopy-writerobjective-write-clear-and-concise)

---

## 7. Persona Creator|OBJECTIVE: Create a detailed user persona for the target audi...

> **Tags**: `uxui-design`, `chatgpt`, `open-source` | **Slug**: `persona-creatorobjective-create-a-detailed-user-pe`

### 📋 Template:
```text
ROLE: Persona Creator|OBJECTIVE: Create a detailed user persona for the target audience of the product **{product_name}**.|REQUIREMENTS: The persona should be based on user research findings summarized in {research_summary_doc}.|Include demographic information, goals, frustrations, and a short bio.|Give the persona a name, like {persona_name}, and a stock photo.|STYLE: Empathetic, research-backed, and brings the user to life.|OUTPUT FORMAT: Markdown file with a standard persona layout.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/persona-creatorobjective-create-a-detailed-user-pe)

---

## 8. Information Architect|OBJECTIVE: Propose a new sitemap and navigation structu...

> **Tags**: `uxui-design`, `chatgpt`, `open-source` | **Slug**: `information-architectobjective-propose-a-new-sitem`

### 📋 Template:
```text
ROLE: Information Architect|OBJECTIVE: Propose a new sitemap and navigation structure for the website **{website_name}** to improve findability.|REQUIREMENTS: The structure should be based on the results of a card sorting exercise detailed in {card_sorting_results}.|The main navigation should have no more than {max_nav_items} top-level items.|Create a visual sitemap diagram.|STYLE: Logical, user-centered, and scalable.|OUTPUT FORMAT: A tree diagram using Mermaid Markdown.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/information-architectobjective-propose-a-new-sitem)

---

## 9. Visual Asset Exporter|OBJECTIVE: Generate instructions for exporting all nece...

> **Tags**: `uxui-design`, `chatgpt`, `open-source` | **Slug**: `visual-asset-exporterobjective-generate-instructio`

### 📋 Template:
```text
ROLE: Visual Asset Exporter|OBJECTIVE: Generate instructions for exporting all necessary image assets for the screen design located on the Figma page **{figma_page_link}**.|REQUIREMENTS: Export all icons in SVG format.|Export all raster images (e.g., photos) in JPG and WebP formats at 2x resolution.|The assets should be named according to the convention {naming_convention}.|STYLE: Precise, organized, and bridges the gap between design and development.|OUTPUT FORMAT: Markdown checklist for a developer to follow.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/visual-asset-exporterobjective-generate-instructio)

---

## 10. Interaction Design Specialist|OBJECTIVE: Describe the interaction and animati...

> **Tags**: `uxui-design`, `chatgpt`, `open-source` | **Slug**: `interaction-design-specialistobjective-describe-th`

### 📋 Template:
```text
ROLE: Interaction Design Specialist|OBJECTIVE: Describe the interaction and animation for the UI element **{element_name}** as it transitions between its states.|REQUIREMENTS: The transition from default to hover state should take {duration_ms}ms.|Use an {easing_function} easing function for a natural feel.|The description should be detailed enough for a developer to implement using a library like {animation_library}.|STYLE: Dynamic, functional, and enhances the user experience.|OUTPUT FORMAT: A detailed description in Markdown, similar to a spec.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/interaction-design-specialistobjective-describe-th)

---

