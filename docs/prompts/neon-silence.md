# 🚀 AI Prompt: Neon Silence

An optimized prompt framework configured for Midjourney and compatible AI image models (Dall-e, Flux, Stable Diffusion, Ideogram) or text assistants (ChatGPT, Claude, Gemini, Grok).

[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en)

---



## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into your AI console:

```text
{
  "task": "style_transfer_portrait_poster",
  "input": {
    "reference_image": "${reference_image_url_or_path}",
    "use_reference_as": "content_and_pose",
    "preserve": [
      "yüz ifadesi ve bakış yönü",
      "saç/siluet ve kıyafet formu",
      "kadraj (üst gövde portre)",
      "ışık yönü ve gölge dağılımı"
    ]
  },
  "prompt": {
    "language": "tr",
    "style_goal": "Referans görseldeki kişiyi/konuyu, aynı kompozisyonu koruyarak yüksek kontrastlı neon-ink poster illüstrasyonu stiline dönüştür.",
    "main": "Dikey (9:16) sinematik portre illüstrasyonu: referans görseldeki ana konu (kişi/figür) aynı poz ve kadrajda kalsın. Stil: koyu lacivert/siyah mürekkep dokuları ve kalın konturlar; yüz ve kıyafet üzerinde oyma/gravür benzeri ince çizgisel gölgelendirme (etched shading), cel-shading ile birleşen poster estetiği. Arka plan: düz, çok doygun sıcak neon pembe/kırmızı zemin; etrafında sıvı mürekkep/duman girdapları, akışkan alevimsi kıvrımlar ve parçacık sıçramaları. Vurgu rengi olarak neon pembe/kırmızı lekeler: yüzde çizik/iz gibi küçük vurgular, giyside ve duman dokusunda serpiştirilmiş parlak damlacıklar. Yüksek kontrast, sert kenarlar, dramatik karanlık tonlar, minimal ama güçlü renk paleti (koyu soğuk tonlar + neon sıcak arka plan). Hafif baskı grain’i ve poster dokusu; ultra net, yüksek çözünürlüklü kapak/poster görünümü.",
    "content_rules": [
      "Marka, model, logo, rozet, imza, watermark veya okunabilir metin EKLEME.",
      "Referans görselde yazı/logolar varsa okunabilirliğini kaldır: bulanıklaştır, soyut şekle çevir veya sil.",
      "Yeni kişi/obje ekleme; sadece referanstaki içeriği stilize et.",
      "Yüz anatomi oranlarını bozma; doğal ama stilize kalsın."
    ]
  },
  "negative_prompt": [
    "photorealistic",
    "lowres",
    "blurry",
    "muddy shading",
    "extra people",
    "extra limbs",
    "deformed face",
    "uncanny",
    "new text",
    "brand names",
    "logos",
    "watermark",
    "signature",
    "busy background details",
    "washed out neon",
    "color banding",
    "jpeg artifacts"
  ],
  "generation": {
    "mode": "image_to_image",
    "strength": 0.6,
    "style_transfer_weight": 0.85,
    "composition_lock": 0.8,
    "detail_level": "high",
    "resolution": {
      "width": 1080,
      "height": 1920
    },
    "guidance": {
      "cfg_scale": 7.0
    },
    "sampler": "auto",
    "seed": "auto"
  },
  "postprocess": {
    "sharpen": "medium_low",
    "grain": "subtle",
    "contrast": "high",
    "saturation": "high"
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
