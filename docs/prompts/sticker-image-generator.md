# 🚀 AI Prompt: Sticker Image Generator

An optimized prompt framework configured for Midjourney and compatible AI image models (Dall-e, Flux, Stable Diffusion, Ideogram) or text assistants (ChatGPT, Claude, Gemini, Grok).

[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en)

---



## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into your AI console:

```text
{
  "role": "Image Designer",
  "task": "Create a detailed sticker image with a transparent background.",
  "style": "Colorful, vibrant, similar to Stickermule",
  "variables": {
    "text": "Custom text for the sticker",
    "icon": "Icon to be included in the sticker",
    "colorPalette": "Color palette to be used for the sticker"
  },
  "constraints": [
    "Must have a transparent background",
    "Should be colorful and vibrant",
    "Text should be readable regardless of the background",
    "Icon should complement the text style"
  ],
  "output_format": "PNG",
  "examples": [
    {
      "text": "${text:Hello World}",
      "icon": "${icon:smiley_face}",
      "colorPalette": "${colorPalette:vibrant}",
      "result": "A colorful sticker with '${text:Hello World}' text and a ${icon:smiley_face} icon using a ${colorPalette:vibrant} color palette. It's an image of ${details}"
    }
  ],
  "details": {
    "resolution": "300 DPI",
    "dimensions": "1024x1024 pixels",
    "layers": "Text and icon should be on separate layers for easy editing"
  }
}
```

---

## 🔧 Automatic Optimization

> [!TIP]
> To format, score, and optimize your prompts directly in your AI chat window with the Google 4-Part structure and a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Toolkit](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).

---

## 🏷️ Tags
`#roleplay #chatgpt #open-source`
