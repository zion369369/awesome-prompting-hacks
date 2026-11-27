**Title**: How to use the "Isometric City Diorama" AI Prompt for Development & Workflows

Hey developers!

Automating tasks with AI is a core skill. Today's featured system prompt from our repository is calibrated for **Roleplay**.

### ⚡ System Instruction / Prompt:
```text
{
  "meta": {
    "description": "Structured prompt for generating an isometric city diorama in a miniature 3D style, with weather and environment adaptive to the specified city.",
    "variable": "${City:San Francisco}"
  },
  "prompt_structure": {
    "perspective_and_format": {
      "view": "Isometric camera view",
      "format": "Miniature 3D diorama resting on a floating square base serving as the ground plinth.",
      "ratio": "16:9 (vertical phone)"
    },
    "art_style": {
      "medium": "High-detail 3D render",
      "texture_quality": "Realistic textures appropriate for the region's architecture (e.g., stone/brick, stucco/adobe, glass/steel).",
      "vibe": "Toy-like but highly sophisticated architectural model with tactile material qualities."
    },
    "environment_and_atmosphere": {
      "weather": "Typical climate and weather conditions associated with the specified city (e.g., overcast/rainy for London, bright/sunny/arid for Cairo, snowy for Moscow). Lighting matches the weather.",
      "ground": "Ground surface material typical for the city (e.g., asphalt, cobblestones, sand, dirt). Surface conditions reflect the weather (e.g., wet with reflections if rainy, dry and dusty if arid, snow-covered if winter).",
      "background": "Sky gradient and atmosphere matching the chosen weather, filling the upper frame."
    },
    "architectural_elements": {
      "housing": "Dense cluster of residential or commercial buildings reflecting the city's vernacular architecture style.",
      "landmarks": "Isometric miniature representations of iconic landmarks defining the city."
    },
    "props_and_details": {
      "street_level": "Miniature elements specific to the city's vibe (e.g., iconic vehicles like yellow cabs or red buses, specific vegetation like palm trees or deciduous trees, streetlights, signage).",
      "life": "Tiny, stylized figures dressed in clothing appropriate for the climate and culture."
    },
    "text_overlay": {
      "content": "${City:San Francisco}",
      "font_style": "White, sans-serif, bold, uppercase letters",
      "placement": "Centered floating at the very top of the frame."
    }
  }
}
```

### 🔧 How to Use:
1. Copy the code block above.
2. Paste it as the initial/system instruction in Claude 3.5 Sonnet, ChatGPT, or Gemini.
3. Feed your reference material directly below it.

---
* 🚀 **Interactive Version with copy-to-clipboard**: [Explore Isometric City Diorama](https://zion369369.github.io/awesome-prompting-hacks/prompts/isometric-city-diorama)
* ⭐ **Support the Catalog**: Star our [Awesome Prompting Hacks GitHub Repo](https://github.com/zion369369/awesome-prompting-hacks) to track 5,000+ free prompt templates!
* 🧩 **Chrome Extension**: Get real-time Prompt Scores directly inside your chat window via the [Hello Prompting Console](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).
