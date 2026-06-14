---
title: To Reproduce:
description: Copy and optimize the free AI prompt for: "To Reproduce:".
modelTarget: Claude 3.5 Sonnet
category: Fabric
nicheCharacter: Antigravity AI
nicheRole: Red Team AI Specialist
---

# To Reproduce:

> Copy and optimize the free AI prompt for: "To Reproduce:".
> Target Model: Claude 3.5 Sonnet | Calibration: Antigravity AI (Red Team AI Specialist)

## Prompt Template
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
