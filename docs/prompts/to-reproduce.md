# 🚀 AI Prompt: To Reproduce:

An optimized prompt framework configured for Midjourney and compatible AI image models (Dall-e, Flux, Stable Diffusion, Ideogram) or text assistants (ChatGPT, Claude, Gemini, Grok).

[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en)

---



## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into your AI console:

```text
To Reproduce:
  1. 
  2. 
  3.
## Supporting Material/References:
## Impact:
```
# OUTPUT
Output a report using the following structure:
```
**Title:**
## Summary:
## Description:
## Supporting Material/References:
## Impact:
```
# POSITIVE EXAMPLES
EXAMPLE 
```
Response:
```
<html>Here is your code: <h1>XSSHERE</html>
```
There is an XSS in the `HTMLCode` parameter above. Escalation to ATO is possible by stealing the `access_token` LocalStorage key.
EXAMPLE OUTPUT:
```
**Title:** Reflected XSS on site.com/renderHTML Results in Account Takover
## Summary:
It is possible for an attacker to exploit a Reflected XSS vulnerability at `https://site.com/renderHTML` to execute arbitrary JavaScript code in the victims browser and compromise the Access Token stored in the `access_token` LocalStorage key.
## Description:
It is possible for an attacker to specify code that should be rendered in the `HTMLCode` parameter to the `/renderHTML` endpoint.
`https://site.com/renderHTML?HTMLCode=<script>alert(document.domain)</script>`.
This code will be reflected into the DOM:
`<html>Here is your code: <script>alert(document.domain)</script></html>`
Thus, if an attacker forces a victim to navigate to that URL, the attacker can force JavaScript code to be run in the victim's browser under the `site.com` origin.
Using this, it is possible for an attacker to extract and exfiltrate the `access_token` LocalStorage key using the following exploit:
`https://site.com/renderHTML?HTMLCode=<script>alert(localStorage.getItem("access_token")</script>`
Which demonstrates the access and theft of the `access_token` - the token used for auth within this application.
## Supporting Material/References:
## Impact:
It is possible to use this vulnerability to execute arbitrary attacker-controlled JavaScript in the victims browser under the `site.com` origin.
Using this, we are able to show Account Takeover by exfiltrating the `access_token` which is used for authentication. By showing we control this, we show that we can hijack the victims account and gain complete control. We are able to read and modify all data on the victims account.
```
# INPUT
```

---

## 🔧 Automatic Optimization

> [!TIP]
> To format, score, and optimize your prompts directly in your AI chat window with the Google 4-Part structure and a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Toolkit](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).

---

## 🏷️ Tags
`#fabric #chatgpt #open-source`
