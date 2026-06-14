# 📋 Quick Copy Legal Tech Prompt Cheat Sheet

This file contains **10** curated prompt templates for **Legal Tech**. Copy and paste them directly into your AI chat window.

---

## 1. Contract Analysis Specialist|OBJECTIVE: Extract key clauses from the legal ag...

> **Tags**: `legal-tech`, `chatgpt`, `open-source` | **Slug**: `contract-analysis-specialistobjective-extract-key`

### 📋 Template:
```text
ROLE: Contract Analysis Specialist|OBJECTIVE: Extract key clauses from the legal agreement text provided in **{contract_text_file}**.|REQUIREMENTS: Identify and extract the 'Limitation of Liability', 'Indemnification', and 'Confidentiality' clauses.|For the 'Limitation of Liability' clause, extract the liability cap amount.|The output should be structured for review by a paralegal.|STYLE: Accurate, structured, and focused on risk-relevant clauses.|OUTPUT FORMAT: JSON object with keys for each clause.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/contract-analysis-specialistobjective-extract-key)

---

## 2. eDiscovery Document Reviewer|OBJECTIVE: Classify a batch of documents from **...

> **Tags**: `legal-tech`, `chatgpt`, `open-source` | **Slug**: `ediscovery-document-reviewerobjective-classify-a-b`

### 📋 Template:
```text
ROLE: eDiscovery Document Reviewer|OBJECTIVE: Classify a batch of documents from **{document_set_path}** as 'Relevant' or 'Not Relevant' to the legal case **{case_name}**.|REQUIREMENTS: The classification should be based on the presence of keywords from the list {keyword_list}.|The review must also flag any documents containing privileged information using the term {privilege_indicator}.|Generate a CSV log of all documents and their classifications.|STYLE: Defensible, efficient, and reduces manual review time.|OUTPUT FORMAT: A CSV file with columns: DocumentID, Classification, PrivilegeFlag.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/ediscovery-document-reviewerobjective-classify-a-b)

---

## 3. Compliance Policy Drafter|OBJECTIVE: Draft a data retention policy for the co...

> **Tags**: `legal-tech`, `chatgpt`, `open-source` | **Slug**: `compliance-policy-drafterobjective-draft-a-data-re`

### 📋 Template:
```text
ROLE: Compliance Policy Drafter|OBJECTIVE: Draft a data retention policy for the company **{company_name}** that complies with the regulation **{regulation_name}**.|REQUIREMENTS: The policy must specify retention periods for different data types, such as {data_type_1} and {data_type_2}.|Include procedures for legal holds and data disposal.|The policy should be written in clear, unambiguous language for a non-legal audience.|STYLE: Compliant, operational, and easy to understand.|OUTPUT FORMAT: Markdown document for an internal policy portal.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/compliance-policy-drafterobjective-draft-a-data-re)

---

## 4. Legal Research Assistant|OBJECTIVE: Summarize the top 5 most relevant case la...

> **Tags**: `legal-tech`, `chatgpt`, `open-source` | **Slug**: `legal-research-assistantobjective-summarize-the-to`

### 📋 Template:
```text
ROLE: Legal Research Assistant|OBJECTIVE: Summarize the top 5 most relevant case law precedents related to the legal issue of **{legal_issue}** in the jurisdiction of **{jurisdiction}**.|REQUIREMENTS: For each case, provide the citation, a brief summary of the facts, and the court's holding.|The summary should focus on the legal reasoning most pertinent to the issue.|Use legal research database {legal_database} as the primary source.|STYLE: Concise, accurate, and useful for a practicing attorney.|OUTPUT FORMAT: Markdown report with a numbered list of case summaries.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/legal-research-assistantobjective-summarize-the-to)

---

## 5. Due Diligence Checklist Generator|OBJECTIVE: Create a legal due diligence che...

> **Tags**: `legal-tech`, `chatgpt`, `open-source` | **Slug**: `due-diligence-checklist-generatorobjective-create`

### 📋 Template:
```text
ROLE: Due Diligence Checklist Generator|OBJECTIVE: Create a legal due diligence checklist for a merger and acquisition (M&A) transaction where the target company is in the **{target_industry}** industry.|REQUIREMENTS: The checklist should cover key areas like corporate records, contracts, intellectual property, and litigation.|Include specific questions related to industry-specific regulations, such as {industry_regulation_1}.|The checklist should be organized by category and priority.|STYLE: Comprehensive, risk-aware, and tailored to the transaction.|OUTPUT FORMAT: Markdown checklist with nested categories.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/due-diligence-checklist-generatorobjective-create)

---

## 6. Deposition Summary Automator|OBJECTIVE: Generate a summary of the deposition ...

> **Tags**: `legal-tech`, `chatgpt`, `open-source` | **Slug**: `deposition-summary-automatorobjective-generate-a-s`

### 📋 Template:
```text
ROLE: Deposition Summary Automator|OBJECTIVE: Generate a summary of the deposition transcript located at **{transcript_file_path}** of the witness **{witness_name}**.|REQUIREMENTS: The summary should be in a 'page-line' format.|Extract key admissions and contradictory statements made by the witness.|The summary should not exceed {summary_page_limit} pages.|STYLE: Objective, concise, and highlights critical testimony.|OUTPUT FORMAT: Markdown document with a table for the summary.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/deposition-summary-automatorobjective-generate-a-s)

---

## 7. Intellectual Property (IP) Auditor|OBJECTIVE: Analyze the source code reposit...

> **Tags**: `legal-tech`, `chatgpt`, `open-source` | **Slug**: `intellectual-property-ip-auditorobjective-analyze`

### 📋 Template:
```text
ROLE: Intellectual Property (IP) Auditor|OBJECTIVE: Analyze the source code repository at **{repo_url}** to identify potential IP risks.|REQUIREMENTS: Scan for the use of third-party libraries with restrictive licenses, such as {license_type_1} and {license_type_2}.|Identify any hard-coded credentials or API keys.|Check for files with missing copyright headers.|STYLE: Proactive, risk-mitigating, and automated.|OUTPUT FORMAT: A summary report in Markdown listing all findings.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/intellectual-property-ip-auditorobjective-analyze)

---

## 8. Legal Billing Analyst|OBJECTIVE: Review a legal invoice file **{invoice_csv}*...

> **Tags**: `legal-tech`, `chatgpt`, `open-source` | **Slug**: `legal-billing-analystobjective-review-a-legal-invo`

### 📋 Template:
```text
ROLE: Legal Billing Analyst|OBJECTIVE: Review a legal invoice file **{invoice_csv}** and flag any billing entries that violate the company's billing guidelines.|REQUIREMENTS: Flag entries that are block-billed (lumped together).|Identify any time entries from unapproved legal staff listed in {unapproved_staff_list}.|Calculate the total amount of the flagged entries.|STYLE: Analytical, detail-oriented, and focused on cost control.|OUTPUT FORMAT: Markdown report with a table of flagged entries and a summary total.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/legal-billing-analystobjective-review-a-legal-invo)

---

## 9. Redaction Automation Specialist|OBJECTIVE: Create a redacted version of the d...

> **Tags**: `legal-tech`, `chatgpt`, `open-source` | **Slug**: `redaction-automation-specialistobjective-create-a`

### 📋 Template:
```text
ROLE: Redaction Automation Specialist|OBJECTIVE: Create a redacted version of the document at **{document_path}** by removing all personally identifiable information (PII).|REQUIREMENTS: Redact names, addresses, phone numbers, and social security numbers.|Also redact the specific project name {project_codename}.|The output should be a new PDF file with the redactions applied as black boxes.|STYLE: Accurate, irreversible, and protects sensitive information.|OUTPUT FORMAT: A new PDF file (conceptual output). The prompt should generate the instructions for a tool.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/redaction-automation-specialistobjective-create-a)

---

## 10. Regulatory Change Monitor|OBJECTIVE: Generate a summary of recent regulatory ...

> **Tags**: `legal-tech`, `chatgpt`, `open-source` | **Slug**: `regulatory-change-monitorobjective-generate-a-summ`

### 📋 Template:
```text
ROLE: Regulatory Change Monitor|OBJECTIVE: Generate a summary of recent regulatory changes related to **{regulatory_topic}** from the government source **{source_url}**.|REQUIREMENTS: The summary should cover changes within the last {time_period_days} days.|Explain the potential impact of the changes on a company operating in the {industry_sector} sector.|Include links to the full text of the new regulations.|STYLE: Timely, relevant, and provides actionable intelligence.|OUTPUT FORMAT: An email-ready newsletter in Markdown.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/regulatory-change-monitorobjective-generate-a-summ)

---

