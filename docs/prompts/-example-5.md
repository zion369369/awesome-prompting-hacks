---
title: ### Example
description: Copy and optimize the free AI prompt for: "### Example".
modelTarget: Claude 3.5 Sonnet
category: Fabric
nicheCharacter: Antigravity AI
nicheRole: Red Team AI Specialist
---

# ### Example

> Copy and optimize the free AI prompt for: "### Example".
> Target Model: Claude 3.5 Sonnet | Calibration: Antigravity AI (Red Team AI Specialist)

## Prompt Template
```text
### Example 
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
