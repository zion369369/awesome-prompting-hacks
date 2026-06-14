# 📋 Quick Copy Cloud Architecture Prompt Cheat Sheet

This file contains **10** curated prompt templates for **Cloud Architecture**. Copy and paste them directly into your AI chat window.

---

## 1. Infrastructure as Code (IaC) Architect|OBJECTIVE: Write a Terraform module to...

> **Tags**: `cloud-architecture`, `chatgpt`, `open-source` | **Slug**: `infrastructure-as-code-iac-architectobjective-writ`

### 📋 Template:
```text
ROLE: Infrastructure as Code (IaC) Architect|OBJECTIVE: Write a Terraform module to provision a scalable, three-tier web application on **{cloud_provider}**.|REQUIREMENTS: The module must create a VPC, subnets, security groups, an autoscaling group for the web tier using {instance_type}, and a managed database {db_service}.|Parameterize the environment name (e.g., staging, prod) using a variable {environment_name}.|Include a README.md file explaining how to use the module.|STYLE: Reusable, modular, and follows Terraform best practices.|OUTPUT FORMAT: A set of .tf files for the module.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/infrastructure-as-code-iac-architectobjective-writ)

---

## 2. Cloud Cost Optimization Expert|OBJECTIVE: Analyze the cloud bill for account ...

> **Tags**: `cloud-architecture`, `chatgpt`, `open-source` | **Slug**: `cloud-cost-optimization-expertobjective-analyze-th`

### 📋 Template:
```text
ROLE: Cloud Cost Optimization Expert|OBJECTIVE: Analyze the cloud bill for account **{account_id}** from **{billing_data_source}** and identify the top 3 areas for cost savings.|REQUIREMENTS: Focus on the top spending services, such as {service_1} and {service_2}.|Recommend specific actions, such as implementing savings plans, rightsizing instances, or deleting unused resources like {resource_id}.|Estimate the monthly savings for each recommendation.|STYLE: Data-driven, actionable, and impactful.|OUTPUT FORMAT: Markdown report with a summary of findings and recommendations.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/cloud-cost-optimization-expertobjective-analyze-th)

---

## 3. Serverless Application Designer|OBJECTIVE: Design a serverless architecture f...

> **Tags**: `cloud-architecture`, `chatgpt`, `open-source` | **Slug**: `serverless-application-designerobjective-design-a`

### 📋 Template:
```text
ROLE: Serverless Application Designer|OBJECTIVE: Design a serverless architecture for a real-time image processing service on **{cloud_provider}**.|REQUIREMENTS: Use an object storage service ({storage_service}) to trigger a serverless function ({function_service}) on image upload.|The function should perform {image_processing_task} and store the result in another bucket.|Include a managed queue service ({queue_service}) for handling processing failures.|STYLE: Event-driven, resilient, and pay-per-use.|OUTPUT FORMAT: An architecture diagram using Mermaid Markdown.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/serverless-application-designerobjective-design-a)

---

## 4. Cloud Security Policy Engineer|OBJECTIVE: Create a security policy in **{poli...

> **Tags**: `cloud-architecture`, `chatgpt`, `open-source` | **Slug**: `cloud-security-policy-engineerobjective-create-a-s`

### 📋 Template:
```text
ROLE: Cloud Security Policy Engineer|OBJECTIVE: Create a security policy in **{policy_language}** (e.g., IAM Policy, Azure Policy) that enforces security best practices for the service **{service_name}**.|REQUIREMENTS: The policy must deny public access to resources.|Enforce encryption at rest using a customer-managed key from {key_management_service}.|The policy should be auditable and include a description of its purpose.|STYLE: Least-privilege, preventative, and clearly documented.|OUTPUT FORMAT: JSON or YAML file containing the policy definition.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/cloud-security-policy-engineerobjective-create-a-s)

---

## 5. Disaster Recovery Planner|OBJECTIVE: Develop a disaster recovery (DR) plan fo...

> **Tags**: `cloud-architecture`, `chatgpt`, `open-source` | **Slug**: `disaster-recovery-plannerobjective-develop-a-disas`

### 📋 Template:
```text
ROLE: Disaster Recovery Planner|OBJECTIVE: Develop a disaster recovery (DR) plan for the application **{application_name}** running in region **{primary_region}**.|REQUIREMENTS: Define a Recovery Time Objective (RTO) of {rto_hours} hours and a Recovery Point Objective (RPO) of {rpo_minutes} minutes.|The plan should use a pilot light strategy, replicating data to the DR region {dr_region}.|Include step-by-step failover and failback procedures.|STYLE: Comprehensive, testable, and ensures business continuity.|OUTPUT FORMAT: Markdown document outlining the DR plan.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/disaster-recovery-plannerobjective-develop-a-disas)

---

## 6. Multi-Cloud Networking Specialist|OBJECTIVE: Design a secure and performant n...

> **Tags**: `cloud-architecture`, `chatgpt`, `open-source` | **Slug**: `multi-cloud-networking-specialistobjective-design`

### 📋 Template:
```text
ROLE: Multi-Cloud Networking Specialist|OBJECTIVE: Design a secure and performant network architecture to connect a VPC in **{cloud_1}** with a VNet in **{cloud_2}**.|REQUIREMENTS: Use a dedicated interconnect or VPN for the connection.|Configure firewall rules to only allow traffic on port {port_number} from a specific IP range {ip_range}.|The design must address DNS resolution between the two clouds.|STYLE: Secure, reliable, and considers latency.|OUTPUT FORMAT: A network topology diagram in Mermaid Markdown.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/multi-cloud-networking-specialistobjective-design)

---

## 7. Kubernetes Cluster Architect|OBJECTIVE: Generate a configuration plan for a p...

> **Tags**: `cloud-architecture`, `chatgpt`, `open-source` | **Slug**: `kubernetes-cluster-architectobjective-generate-a-c`

### 📋 Template:
```text
ROLE: Kubernetes Cluster Architect|OBJECTIVE: Generate a configuration plan for a production-grade Kubernetes cluster on **{cloud_k8s_service}** for microservices application **{app_name}**.|REQUIREMENTS: The cluster should have at least two node pools: one for general workloads and one for {specialized_workload} workloads.|Implement pod security policies to restrict privileged containers.|Configure cluster autoscaling and pod autoscaling for the main deployment.|STYLE: Production-ready, secure, and highly available.|OUTPUT FORMAT: A shell script with gcloud/aws/az CLI commands to create the cluster.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/kubernetes-cluster-architectobjective-generate-a-c)

---

## 8. Cloud Migration Strategist|OBJECTIVE: Create a phased migration plan to move ...

> **Tags**: `cloud-architecture`, `chatgpt`, `open-source` | **Slug**: `cloud-migration-strategistobjective-create-a-phase`

### 📋 Template:
```text
ROLE: Cloud Migration Strategist|OBJECTIVE: Create a phased migration plan to move the on-premise legacy application **{legacy_app_name}** to **{target_cloud_provider}**.|REQUIREMENTS: The plan should follow the '6 Rs' of migration, starting with a 'Rehost' (lift-and-shift) of the {app_server} server.|Phase 1 should be completed by {phase_1_deadline}.|Include a discovery checklist to gather information about the application's dependencies.|STYLE: Strategic, low-risk, and minimizes downtime.|OUTPUT FORMAT: Markdown document with a phased timeline and checklist.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/cloud-migration-strategistobjective-create-a-phase)

---

## 9. FinOps Analyst|OBJECTIVE: Create an automated tagging policy and enforcement ...

> **Tags**: `cloud-architecture`, `chatgpt`, `open-source` | **Slug**: `finops-analystobjective-create-an-automated-taggin`

### 📋 Template:
```text
ROLE: FinOps Analyst|OBJECTIVE: Create an automated tagging policy and enforcement mechanism for all resources in the cloud account **{account_name}**.|REQUIREMENTS: All resources must have tags for 'owner', 'cost-center', and 'environment'.|Use a serverless function triggered by {cloud_event_service} to check for non-compliant resources.|Non-compliant resources should be flagged and reported to the owner via {notification_channel}.|STYLE: Governance-focused, automated, and drives accountability.|OUTPUT FORMAT: A Python script for the serverless function and a Markdown policy document.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/finops-analystobjective-create-an-automated-taggin)

---

## 10. Well-Architected Framework Reviewer|OBJECTIVE: Conduct a Well-Architected Fra...

> **Tags**: `cloud-architecture`, `chatgpt`, `open-source` | **Slug**: `well-architected-framework-reviewerobjective-condu`

### 📋 Template:
```text
ROLE: Well-Architected Framework Reviewer|OBJECTIVE: Conduct a Well-Architected Framework review for the workload **{workload_name}** based on the **{framework_pillar}** pillar.|REQUIREMENTS: Generate a list of at least 10 questions based on the official AWS/Azure/GCP Well-Architected Framework.|For each question, provide the ideal answer and a RAG status (Red, Amber, Green).|Identify the top 3 highest-risk findings and suggest remediation actions.|STYLE: Thorough, best-practice oriented, and drives continuous improvement.|OUTPUT FORMAT: Markdown document with the review questions and findings.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/well-architected-framework-reviewerobjective-condu)

---

