# 🚀 AI Prompt: Bookstore Aisle (artsy, quiet luxury)

An optimized prompt framework configured for Midjourney and compatible AI image models (Dall-e, Flux, Stable Diffusion, Ideogram) or text assistants (ChatGPT, Claude, Gemini, Grok).

[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en)

---



## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into your AI console:

```text
{
  "category": "BOOKSTORE_AISLE_ARTSY",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Preserve the exact identity from the reference image (face geometry, features, skin tone, marks). Adult 21+ only. No beautification or identity changes."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, Turkish-looking (must match reference).",
    "hair": {
      "color": "Match reference exactly.",
      "style": "Loose waves tucked behind one ear",
      "texture": "Real strands; slight frizz; flyaways visible",
      "movement": "Hair rests naturally on shoulders"
    },
    "face": {
      "eyes": "Exact reference eyes; thoughtful gaze; natural catchlights",
      "skin_details": "Pores visible, realistic tone variation",
      "micro_details": "Preserve all reference marks precisely"
    },
    "clothing": {
      "outfit": "Minimal black coat or cardigan over a neutral top (no logos/text).",
      "fabric": "Wool/knit texture visible, slight wrinkles at elbows"
    },
    "accessories": {
      "jewelry": ["Small silver hoops"],
      "props": ["One hardcover book with no readable title (blur/spine turned away)"]
    }
  },
  "pose": {
    "type": "Candid browsing",
    "orientation": "Half-body",
    "head_position": "Chin slightly down, eyes up toward camera",
    "hands": "One hand holding a book near chest; other hand touching a shelf edge (hands correct)",
    "gaze": "Near-direct eye contact, calm and confident",
    "expression": "Soft neutral with micro-smile"
  },
  "setting": {
    "environment": "Bookstore aisle",
    "background_elements": [
      "Shelves of books with spines turned away or blurred (NO readable text)",
      "Warm indoor lighting",
      "Soft depth layers down the aisle"
    ],
    "depth": "Shallow DOF: face sharp, shelves softly blurred"
  },
  "camera": {
    "shot_type": "Half-body portrait",
    "angle": "Eye level or slightly above",
    "focal_length_equivalent": "35-50mm pro OR 26mm phone",
    "framing": "4:5, asymmetrical with leading lines from shelves",
    "focus": "Eyes sharp, hands reasonably sharp, background soft"
  },
  "lighting": {
    "source": "Warm overhead bookstore lights + soft fill",
    "direction": "Gentle top/side",
    "highlights": "Soft highlights on eyes and cheekbones",
    "shadows": "Subtle under-chin shadow, realistic contrast"
  },
  "mood_and_expression": {
    "tone": "Artsy, calm, 'quiet luxury'",
    "atmosphere": "Cozy and intimate, candid"
  },
  "style_and_realism": {
    "style": "Photoreal lifestyle/editorial",
    "fidelity": "High detail, no airbrushing"
  },
  "colors_and_tone": {
    "palette": "Warm browns + neutral blacks + creamy highlights",
    "white_balance": "Warm indoor",
    "contrast": "Medium"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Mild indoor grain",
    "mode_variants": {
      "amateur": "Slightly crooked handheld framing, mild noise, imperfect WB",
      "pro": "Cleaner exposure, controlled highlights, crisp micro-contrast"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_book_titles": true
  },
  "negative_prompt": [
    "readable text", "logos", "watermark",
    "identity drift", "face morphing",
    "plastic skin", "over-smoothing",
    "extra fingers", "warped hands",
    "cgi", "cartoon", "anime"
  ]
}
```

---

## 🔧 Automatic Optimization

> [!TIP]
> To format, score, and optimize your prompts directly in your AI chat window with the Google 4-Part structure and a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Toolkit](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).

---

## 🏷️ Tags
`#roleplay #chatgpt #open-source`
