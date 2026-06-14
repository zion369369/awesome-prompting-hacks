# 📋 Quick Copy Cybersecurity & Threat Intelligence Prompt Cheat Sheet

This file contains **10** curated prompt templates for **Cybersecurity & Threat Intelligence**. Copy and paste them directly into your AI chat window.

---

## 1. Incident Response Playbook Author

> **Tags**: `cybersecurity-threat-intelligence`, `chatgpt`, `open-source` | **Slug**: `incident-response-playbook-author`

### 📋 Template:
```text
ROLE: Incident Response Playbook Author.
OBJECTIVE: Create a playbook for ransomware **{malware_family}** infiltration in **{environment_type}**.
REQUIREMENTS:
• Map actions to NIST IR phases: Preparation, Identification, Containment, Eradication, Recovery.
• Include command references for {edr_tool} and SOAR automation snippets.
• Specify KPIs and timeframes for each phase.
OUTPUT FORMAT: Markdown with tables and code blocks.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/incident-response-playbook-author)

---

## 2. Threat Hunting Query Designer

> **Tags**: `cybersecurity-threat-intelligence`, `chatgpt`, `open-source` | **Slug**: `threat-hunting-query-designer`

### 📋 Template:
```text
ROLE: Threat Hunting Query Designer.
OBJECTIVE: Draft Sigma rules to detect **{tactic_name}** in Windows Event Logs with IDs **{event_ids}**.
REQUIREMENTS:
• Provide at least 3 variations to reduce FPs in legacy systems.
• Include mapping to ATT&CK technique ID.
• Offer Splunk and Elastic translations.
OUTPUT FORMAT: YAML with accompanying Markdown explanation.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/threat-hunting-query-designer)

---

## 3. Reverse Engineering Mentor

> **Tags**: `cybersecurity-threat-intelligence`, `chatgpt`, `open-source` | **Slug**: `reverse-engineering-mentor`

### 📋 Template:
```text
ROLE: Reverse Engineering Mentor.
OBJECTIVE: Outline a Ghidra project walkthrough to unpack **{packed_binary}** using **{packer_type}**.
REQUIREMENTS:
• Identify anti-debugging tricks and bypass methods.
• Provide step-by-step screenshots placeholders and script snippets.
• Generate IOC list (hashes, strings, C2 domains).
OUTPUT FORMAT: Markdown lab guide.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/reverse-engineering-mentor)

---

## 4. Cloud Security Architect

> **Tags**: `cybersecurity-threat-intelligence`, `chatgpt`, `open-source` | **Slug**: `cloud-security-architect`

### 📋 Template:
```text
ROLE: Cloud Security Architect.
OBJECTIVE: Generate Terraform guardrails for **{cloud_provider}** to enforce encryption-at-rest on **{service_name}**.
REQUIREMENTS:
• Include policy as code OPA/Rego snippet.
• Add remediation actions with automated tagging.
• Document unit tests using Terratest.
OUTPUT FORMAT: Markdown with code fences.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/cloud-security-architect)

---

## 5. Digital Forensics Analyst

> **Tags**: `cybersecurity-threat-intelligence`, `chatgpt`, `open-source` | **Slug**: `digital-forensics-analyst`

### 📋 Template:
```text
ROLE: Digital Forensics Analyst.
OBJECTIVE: Plan a timeline analysis of disk image **{evidence_image}** focusing on **{compromise_window}**.
REQUIREMENTS:
• Use fls-bodyfile to extract file system event records.
• Correlate with $MFT and USN journal artifacts.
• Present results in a Gantt-style diagram.
OUTPUT FORMAT: Markdown report with timeline CSV attachment.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/digital-forensics-analyst)

---

## 6. Threat Intelligence Correlator

> **Tags**: `cybersecurity-threat-intelligence`, `chatgpt`, `open-source` | **Slug**: `threat-intelligence-correlator`

### 📋 Template:
```text
ROLE: Threat Intelligence Correlator.
OBJECTIVE: Compile a STIX 2.1 bundle linking **{actor_name}** campaigns with **{malware_ids}**.
REQUIREMENTS:
• Include attack patterns, infrastructure, and victims objects.
• Ensure relationship object types are correctly typed and dated.
• Export JSON file validated against Oasis schema.
OUTPUT FORMAT: JSON plus Markdown summary.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/threat-intelligence-correlator)

---

## 7. Penetration Testing Planner

> **Tags**: `cybersecurity-threat-intelligence`, `chatgpt`, `open-source` | **Slug**: `penetration-testing-planner`

### 📋 Template:
```text
ROLE: Penetration Testing Planner.
OBJECTIVE: Draft an engagement plan to test **{webapp_name}** for **{owasp_category}** vulnerabilities in **{testing_window}**.
REQUIREMENTS:
• Define in-scope endpoints and excluded assets.
• Provide Burp Suite and OWASP ZAP plugin configurations.
• Include risk rating matrix aligned with CVSS 4.0.
OUTPUT FORMAT: Markdown with tables and checklist.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/penetration-testing-planner)

---

## 8. ICS Security Engineer

> **Tags**: `cybersecurity-threat-intelligence`, `chatgpt`, `open-source` | **Slug**: `ics-security-engineer`

### 📋 Template:
```text
ROLE: ICS Security Engineer.
OBJECTIVE: Design a network segmentation scheme for **{scada_vendor}** PLCs controlling **{process_name}**.
REQUIREMENTS:
• Specify Purdue Model zones and conduits.
• Include firewall ACL examples for {firewall_model}.
• Document latency impact and redundancy considerations.
OUTPUT FORMAT: Markdown architecture diagram placeholders.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/ics-security-engineer)

---

## 9. Security Data Lake Builder

> **Tags**: `cybersecurity-threat-intelligence`, `chatgpt`, `open-source` | **Slug**: `security-data-lake-builder`

### 📋 Template:
```text
ROLE: Security Data Lake Builder.
OBJECTIVE: Create an OpenSearch index policy to retain **{log_type}** logs for **{retention_days}** days with ILM rollover.
REQUIREMENTS:
• Provide index template with mapping for ECS fields.
• Include curator job YAML for snapshot to {s3_bucket}.
• Describe alerting integration with PagerDuty.
OUTPUT FORMAT: Markdown with YAML blocks.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/security-data-lake-builder)

---

## 10. Zero Trust Strategist

> **Tags**: `cybersecurity-threat-intelligence`, `chatgpt`, `open-source` | **Slug**: `zero-trust-strategist`

### 📋 Template:
```text
ROLE: Zero Trust Strategist.
OBJECTIVE: Develop an identity-centric zero trust roadmap for **{enterprise_size}** employee organization migrating to **{idp_name}**.
REQUIREMENTS:
• Define phases: discovery, pilot, rollout with milestones.
• Map NIST 800-207 pillars to {existing_arch_diagram}.
• Quantify expected MFA adoption rate and risk reduction.
OUTPUT FORMAT: Markdown with timeline diagram placeholders.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/zero-trust-strategist)

---

