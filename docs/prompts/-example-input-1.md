# 🚀 AI Prompt: ### Example Input:

An optimized prompt framework configured for Midjourney and compatible AI image models (Dall-e, Flux, Stable Diffusion, Ideogram) or text assistants (ChatGPT, Claude, Gemini, Grok).

[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en)

---



## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into your AI console:

```text
### Example Input:
```
<Insert security news publication here>
```
### Example Output:
#### Sigma Rule: Suspicious PowerShell Execution
```yaml
title: Suspicious PowerShell Encoded Command Execution
id: e3f8b2a0-5b6e-11ec-bf63-0242ac130002
description: Detects suspicious PowerShell execution commands
status: experimental
author: Your Name
logsource:
  category: process_creation
  product: windows
detection:
  selection:
    Image: 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe'
    CommandLine|contains|all:
      - '-nop'
      - '-w hidden'
      - '-enc'
  condition: selection
falsepositives:
  - Legitimate administrative activity
level: high
tags:
  - attack.execution
  - attack.t1059.001
```
#### End of Sigma Rule
#### Sigma Rule: Unusual Sysmon Network Connection
```yaml
title: Unusual SMB External Sysmon Network Connection
id: e3f8b2a1-5b6e-11ec-bf63-0242ac130002
description: Detects unusual network connections via Sysmon
status: experimental
author: Your Name
logsource:
  category: network_connection
  product: sysmon
detection:
  selection:
    EventID: 3
    DestinationPort: 
      - 139
      - 445
  filter
    DestinationIp|startswith:
      - '192.168.'
      - '10.'
  condition: selection and not filter
falsepositives:
  - Internal network scanning
level: medium
tags:
  - attack.command_and_control
  - attack.t1071.001
```
#### End of Sigma Rule
Please ensure that each Sigma rule is well-documented and follows the standard Sigma rule format.
```

---

## 🔧 Automatic Optimization

> [!TIP]
> To format, score, and optimize your prompts directly in your AI chat window with the Google 4-Part structure and a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Toolkit](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).

---

## 🏷️ Tags
`#fabric #chatgpt #open-source`
