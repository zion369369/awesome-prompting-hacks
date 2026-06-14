# 📋 Quick Copy DevOps & SRE Prompt Cheat Sheet

This file contains **10** curated prompt templates for **DevOps & SRE**. Copy and paste them directly into your AI chat window.

---

## 1. Site Reliability Engineer (SRE)|OBJECTIVE: Define Service Level Objectives (S...

> **Tags**: `devops-sre`, `chatgpt`, `open-source` | **Slug**: `site-reliability-engineer-sreobjective-define-serv`

### 📋 Template:
```text
ROLE: Site Reliability Engineer (SRE)|OBJECTIVE: Define Service Level Objectives (SLOs) and Service Level Indicators (SLIs) for the user-facing service **{service_name}**.|REQUIREMENTS: Define an availability SLI based on the success rate of {health_check_endpoint}.|Define a latency SLI where 99% of requests to {critical_endpoint} are faster than {latency_ms}ms.|Set an availability SLO of {slo_percentage}% over a 28-day rolling window.|STYLE: User-centric, measurable, and actionable.|OUTPUT FORMAT: YAML file in the format used by the OpenSLO specification.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/site-reliability-engineer-sreobjective-define-serv)

---

## 2. Observability Platform Engineer|OBJECTIVE: Create a structured logging policy...

> **Tags**: `devops-sre`, `chatgpt`, `open-source` | **Slug**: `observability-platform-engineerobjective-create-a`

### 📋 Template:
```text
ROLE: Observability Platform Engineer|OBJECTIVE: Create a structured logging policy for all microservices in the **{system_name}** ecosystem.|REQUIREMENTS: All logs must be in JSON format.|Each log entry must include a unique {correlation_id} for tracing requests across services.|Standardize key names for common fields like 'user_id', 'service_name', and 'log_level'.|STYLE: Consistent, machine-parsable, and enables effective debugging.|OUTPUT FORMAT: Markdown document defining the logging policy with JSON examples.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/observability-platform-engineerobjective-create-a)

---

## 3. Incident Postmortem Facilitator|OBJECTIVE: Generate a blameless postmortem te...

> **Tags**: `devops-sre`, `chatgpt`, `open-source` | **Slug**: `incident-postmortem-facilitatorobjective-generate`

### 📋 Template:
```text
ROLE: Incident Postmortem Facilitator|OBJECTIVE: Generate a blameless postmortem template for the production incident that occurred on **{incident_date}** affecting **{impacted_service}**.|REQUIREMENTS: The template must include sections for Summary, Impact, Timeline, Root Causes, and Action Items.|The timeline should be detailed to the minute, using data from {monitoring_system}.|Action items must be SMART (Specific, Measurable, Achievable, Relevant, Time-bound) and assigned to an owner.|STYLE: Blameless, learning-oriented, and focused on preventing recurrence.|OUTPUT FORMAT: Markdown template pre-filled with incident details.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/incident-postmortem-facilitatorobjective-generate)

---

## 4. Dockerfile Optimization Specialist|OBJECTIVE: Rewrite the provided Dockerfile...

> **Tags**: `devops-sre`, `chatgpt`, `open-source` | **Slug**: `dockerfile-optimization-specialistobjective-rewrit`

### 📋 Template:
```text
ROLE: Dockerfile Optimization Specialist|OBJECTIVE: Rewrite the provided Dockerfile at **{dockerfile_path}** to create a smaller and more secure container image for the **{application_type}** application.|REQUIREMENTS: Use a multi-stage build to separate the build environment from the runtime environment.|Run the application as a non-root user.|Minimize the number of layers by combining RUN commands.|STYLE: Efficient, secure, and follows containerization best practices.|OUTPUT FORMAT: The optimized Dockerfile content.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/dockerfile-optimization-specialistobjective-rewrit)

---

## 5. Kubernetes Operator Developer|OBJECTIVE: Generate the boilerplate code for a ...

> **Tags**: `devops-sre`, `chatgpt`, `open-source` | **Slug**: `kubernetes-operator-developerobjective-generate-th`

### 📋 Template:
```text
ROLE: Kubernetes Operator Developer|OBJECTIVE: Generate the boilerplate code for a Kubernetes Operator for the application **{app_name}** using **{operator_sdk_version}**.|REQUIREMENTS: The Operator should manage a Custom Resource Definition (CRD) named {crd_name}.|The reconciliation logic should ensure that a deployment with {replica_count} replicas is always running.|Include basic RBAC permissions for the Operator to manage deployments and pods.|STYLE: Declarative, automated, and extends Kubernetes functionality.|OUTPUT FORMAT: A Go source file for the main controller.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/kubernetes-operator-developerobjective-generate-th)

---

## 6. On-Call Playbook Author|OBJECTIVE: Create a playbook for the on-call engineer...

> **Tags**: `devops-sre`, `chatgpt`, `open-source` | **Slug**: `on-call-playbook-authorobjective-create-a-playbook`

### 📋 Template:
```text
ROLE: On-Call Playbook Author|OBJECTIVE: Create a playbook for the on-call engineer responding to the alert **{alert_name}** from the monitoring system **{monitoring_provider}**.|REQUIREMENTS: Include initial triage steps to assess the impact.|Provide specific commands to diagnose the issue, such as checking logs with {log_query_command}.|List escalation procedures, including who to contact ({escalation_contact}) if the issue is not resolved within {resolution_time_minutes} minutes.|STYLE: Actionable, easy to follow under pressure, and reduces mean time to resolution (MTTR).|OUTPUT FORMAT: Markdown document for the playbook.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/on-call-playbook-authorobjective-create-a-playbook)

---

## 7. Chaos Engineering Lead|OBJECTIVE: Design a chaos engineering experiment to te...

> **Tags**: `devops-sre`, `chatgpt`, `open-source` | **Slug**: `chaos-engineering-leadobjective-design-a-chaos-eng`

### 📋 Template:
```text
ROLE: Chaos Engineering Lead|OBJECTIVE: Design a chaos engineering experiment to test the resiliency of the **{service_name}** to a failure of its dependency, **{dependency_service}**.|REQUIREMENTS: The experiment will inject latency up to {max_latency_ms}ms into the dependency calls.|Define a steady-state hypothesis: the service's p95 latency should not increase by more than {latency_increase_percent}%.|Use {chaos_engineering_tool} to run the experiment in the {target_environment} environment.|STYLE: Proactive, controlled, and builds confidence in system resilience.|OUTPUT FORMAT: YAML configuration for the specified chaos engineering tool.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/chaos-engineering-leadobjective-design-a-chaos-eng)

---

## 8. GitOps Evangelist|OBJECTIVE: Create the directory structure and configuration...

> **Tags**: `devops-sre`, `chatgpt`, `open-source` | **Slug**: `gitops-evangelistobjective-create-the-directory-st`

### 📋 Template:
```text
ROLE: GitOps Evangelist|OBJECTIVE: Create the directory structure and configuration for managing the Kubernetes cluster **{cluster_name}** using a GitOps approach with **{gitops_tool}**.|REQUIREMENTS: The Git repository {git_repo_url} will be the single source of truth.|Create separate directories for cluster-wide infrastructure (e.g., ingress controller) and application deployments.|Include a sample application deployment for {app_name} in the appropriate directory.|STYLE: Declarative, version-controlled, and fully automated.|OUTPUT FORMAT: A shell script that creates the directory structure and sample YAML files.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/gitops-evangelistobjective-create-the-directory-st)

---

## 9. Capacity Planning Analyst|OBJECTIVE: Forecast the resource needs for the **{s...

> **Tags**: `devops-sre`, `chatgpt`, `open-source` | **Slug**: `capacity-planning-analystobjective-forecast-the-re`

### 📋 Template:
```text
ROLE: Capacity Planning Analyst|OBJECTIVE: Forecast the resource needs for the **{service_name}** for the next **{forecast_horizon_months}** months based on historical usage data from **{usage_data_csv}**.|REQUIREMENTS: Project future CPU, memory, and storage requirements.|Identify the point at which the current capacity will be exhausted.|Recommend a scaling plan, including trigger points for adding new capacity.|STYLE: Predictive, data-driven, and ensures service availability.|OUTPUT FORMAT: Markdown report with forecast charts and a capacity plan.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/capacity-planning-analystobjective-forecast-the-re)

---

## 10. Secret Management Architect|OBJECTIVE: Design a secret management strategy fo...

> **Tags**: `devops-sre`, `chatgpt`, `open-source` | **Slug**: `secret-management-architectobjective-design-a-secr`

### 📋 Template:
```text
ROLE: Secret Management Architect|OBJECTIVE: Design a secret management strategy for the application **{app_name}** running on Kubernetes.|REQUIREMENTS: Use {secret_manager_tool} as the central secret store.|Secrets should be injected into pods as environment variables or files at runtime.|Implement automatic rotation for the database password {db_secret_name} every {rotation_period_days} days.|STYLE: Secure, auditable, and removes secrets from Git repositories.|OUTPUT FORMAT: Markdown document describing the architecture and a sample Kubernetes manifest.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/secret-management-architectobjective-design-a-secr)

---

