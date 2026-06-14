---
title: ## EXAMPLE
description: Copy and optimize the free AI prompt for: "## EXAMPLE".
modelTarget: Claude 3.5 Sonnet
category: Fabric
nicheCharacter: Antigravity AI
nicheRole: Red Team AI Specialist
---

# ## EXAMPLE

> Copy and optimize the free AI prompt for: "## EXAMPLE".
> Target Model: Claude 3.5 Sonnet | Calibration: Antigravity AI (Red Team AI Specialist)

## Prompt Template
```text
## EXAMPLE
- Reconnaissance and Scanning Tools:
Nmap: Utilized for scanning and writing custom scripts via the Nmap Scripting Engine (NSE).
Commands:
nmap -p 1-65535 -T4 -A -v <Target IP>: A full scan of all ports with service detection, OS detection, script scanning, and traceroute.
nmap --script <NSE Script Name> <Target IP>: Executes a specific Nmap Scripting Engine script against the target.
- Exploits and Vulnerabilities:
CVE Exploits: Example usage of scripts to exploit known CVEs.
Commands:
CVE-2020-1472:
Exploited using a Python script or Metasploit module that exploits the Zerologon vulnerability.
CVE-2021-26084:
python confluence_exploit.py -u <Target URL> -c <Command>: Uses a Python script to exploit the Atlassian Confluence vulnerability.
- BloodHound: Used for Active Directory (AD) reconnaissance.
Commands:
SharpHound.exe -c All: Collects data from the AD environment to find attack paths.
CrackMapExec: Used for post-exploitation automation.
Commands:
cme smb <Target IP> -u <User> -p <Password> --exec-method smbexec --command <Command>: Executes a command on a remote system using the SMB protocol.
```
