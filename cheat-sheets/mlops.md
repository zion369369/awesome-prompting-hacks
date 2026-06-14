# 📋 Quick Copy MLOps Prompt Cheat Sheet

This file contains **10** curated prompt templates for **MLOps**. Copy and paste them directly into your AI chat window.

---

## 1. CI/CD for ML Specialist|OBJECTIVE: Create a CI/CD pipeline configuration in *...

> **Tags**: `mlops`, `chatgpt`, `open-source` | **Slug**: `cicd-for-ml-specialistobjective-create-a-cicd-pipe`

### 📋 Template:
```text
ROLE: CI/CD for ML Specialist|OBJECTIVE: Create a CI/CD pipeline configuration in **{ci_cd_platform}** for training and deploying the ML model **{model_name}**.|REQUIREMENTS: The pipeline must trigger on commits to the {git_branch} branch.|Include stages for code linting, unit testing, model training, and deployment to a {staging_environment}.|Use {artifact_repository} to store the trained model artifact.|STYLE: Automated, reproducible, and production-grade.|OUTPUT FORMAT: YAML configuration file for the specified CI/CD platform.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/cicd-for-ml-specialistobjective-create-a-cicd-pipe)

---

## 2. Model Monitoring Architect|OBJECTIVE: Design a monitoring dashboard to track ...

> **Tags**: `mlops`, `chatgpt`, `open-source` | **Slug**: `model-monitoring-architectobjective-design-a-monit`

### 📋 Template:
```text
ROLE: Model Monitoring Architect|OBJECTIVE: Design a monitoring dashboard to track the performance of a live **{model_type}** model serving traffic for **{application_name}**.|REQUIREMENTS: Monitor for data drift in key features like {feature_1} and {feature_2}.|Track model performance metrics such as {performance_metric} in real-time.|Set up alerts on the monitoring tool {monitoring_tool} to trigger when performance drops by {alert_threshold_percent}%.|STYLE: Comprehensive, visual, and actionable for on-call engineers.|OUTPUT FORMAT: JSON configuration for a Grafana or Datadog dashboard.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/model-monitoring-architectobjective-design-a-monit)

---

## 3. Feature Store Engineer|OBJECTIVE: Generate the Python code to define, registe...

> **Tags**: `mlops`, `chatgpt`, `open-source` | **Slug**: `feature-store-engineerobjective-generate-the-pytho`

### 📋 Template:
```text
ROLE: Feature Store Engineer|OBJECTIVE: Generate the Python code to define, register, and populate a feature group named **{feature_group_name}** in a feature store.|REQUIREMENTS: The feature group should contain features {feature_list}.|Use {feature_store_provider} as the feature store technology.|Include both an offline materialization schedule ({offline_schedule_cron}) and an online serving capability.|STYLE: Declarative, version-controlled, and reusable.|OUTPUT FORMAT: Python script using the specified feature store's SDK.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/feature-store-engineerobjective-generate-the-pytho)

---

## 4. ML Experiment Tracker|OBJECTIVE: Instrument the provided Python model trainin...

> **Tags**: `mlops`, `chatgpt`, `open-source` | **Slug**: `ml-experiment-trackerobjective-instrument-the-prov`

### 📋 Template:
```text
ROLE: ML Experiment Tracker|OBJECTIVE: Instrument the provided Python model training script **{script_path}** to log experiments to **{experiment_tracker}**.|REQUIREMENTS: Log hyperparameters such as {hyperparameter_1} and {hyperparameter_2}.|Log evaluation metrics, including {evaluation_metric}.|Save the final trained model as an artifact associated with the experiment run.|STYLE: Non-intrusive, organized, and facilitates model comparison.|OUTPUT FORMAT: A diff file showing the changes to the Python script.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/ml-experiment-trackerobjective-instrument-the-prov)

---

## 5. Model Deployment Strategist|OBJECTIVE: Create a deployment configuration for ...

> **Tags**: `mlops`, `chatgpt`, `open-source` | **Slug**: `model-deployment-strategistobjective-create-a-depl`

### 📋 Template:
```text
ROLE: Model Deployment Strategist|OBJECTIVE: Create a deployment configuration for the model **{model_id}** from the model registry to a **{production_environment}** using a canary release strategy.|REQUIREMENTS: Initially route {initial_traffic_percentage}% of traffic to the new model version.|Use {deployment_tool} for orchestration (e.g., Kubeflow, Seldon Core).|Define rollback conditions based on a {rollback_metric} threshold.|STYLE: Safe, automated, and minimizes production risk.|OUTPUT FORMAT: YAML deployment specification.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/model-deployment-strategistobjective-create-a-depl)

---

## 6. ML Infrastructure Cost Analyst|OBJECTIVE: Analyze the resource utilization of...

> **Tags**: `mlops`, `chatgpt`, `open-source` | **Slug**: `ml-infrastructure-cost-analystobjective-analyze-th`

### 📋 Template:
```text
ROLE: ML Infrastructure Cost Analyst|OBJECTIVE: Analyze the resource utilization of the ML training job **{job_id}** and provide recommendations to reduce costs on **{cloud_provider}**.|REQUIREMENTS: Evaluate CPU, GPU, and memory usage from {metrics_data_source}.|Suggest a more cost-effective instance type than the current {instance_type}.|Recommend using spot instances with a specific bidding strategy.|STYLE: Analytical, cost-conscious, and practical.|OUTPUT FORMAT: Markdown report with cost-saving recommendations.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/ml-infrastructure-cost-analystobjective-analyze-th)

---

## 7. Data Versioning Specialist|OBJECTIVE: Integrate data versioning into the proj...

> **Tags**: `mlops`, `chatgpt`, `open-source` | **Slug**: `data-versioning-specialistobjective-integrate-data`

### 📋 Template:
```text
ROLE: Data Versioning Specialist|OBJECTIVE: Integrate data versioning into the project using **{data_versioning_tool}** to track changes in the training dataset located at **{data_path}**.|REQUIREMENTS: Create a new version of the dataset linked to the Git commit hash.|The process should be part of the pre-commit hook.|The tool should integrate with the storage backend {storage_backend}.|STYLE: Reproducible, auditable, and integrated with Git workflow.|OUTPUT FORMAT: A shell script and a .pre-commit-config.yaml snippet.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/data-versioning-specialistobjective-integrate-data)

---

## 8. ML Pipeline Debugger|OBJECTIVE: Provide a systematic debugging checklist for ...

> **Tags**: `mlops`, `chatgpt`, `open-source` | **Slug**: `ml-pipeline-debuggerobjective-provide-a-systematic`

### 📋 Template:
```text
ROLE: ML Pipeline Debugger|OBJECTIVE: Provide a systematic debugging checklist for a failing ML pipeline **{pipeline_name}** in **{orchestration_platform}** where the error is **{error_message}**.|REQUIREMENTS: Check for issues in data access and schema validation.|Verify environment dependencies and resource allocation (CPU/memory).|Inspect logs for the failing component and suggest specific commands to retrieve them.|STYLE: Methodical, comprehensive, and problem-solving oriented.|OUTPUT FORMAT: Markdown checklist with debugging steps.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/ml-pipeline-debuggerobjective-provide-a-systematic)

---

## 9. Model Explainability Engineer|OBJECTIVE: Generate a Python script to produce ...

> **Tags**: `mlops`, `chatgpt`, `open-source` | **Slug**: `model-explainability-engineerobjective-generate-a`

### 📋 Template:
```text
ROLE: Model Explainability Engineer|OBJECTIVE: Generate a Python script to produce a model explainability report for the trained model artifact at **{model_artifact_path}**.|REQUIREMENTS: Use the {explainability_library} library (e.g., SHAP, LIME).|Generate a summary plot showing global feature importance.|For a given sample data point from {sample_data_csv}, produce a local explanation (force plot).|STYLE: Insightful, transparent, and helps build trust in the model.|OUTPUT FORMAT: Python script that outputs plots and a summary.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/model-explainability-engineerobjective-generate-a)

---

## 10. ML Security Auditor|OBJECTIVE: Create a security audit plan for the machine l...

> **Tags**: `mlops`, `chatgpt`, `open-source` | **Slug**: `ml-security-auditorobjective-create-a-security-aud`

### 📋 Template:
```text
ROLE: ML Security Auditor|OBJECTIVE: Create a security audit plan for the machine learning system that serves the **{service_name}** application.|REQUIREMENTS: Assess risks of model inversion and membership inference attacks.|Review access controls for the model registry and feature store.|Check for vulnerabilities in the open-source libraries listed in {requirements_file}.|STYLE: Proactive, security-first, and risk-based.|OUTPUT FORMAT: Markdown document outlining the audit plan and checklist.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/ml-security-auditorobjective-create-a-security-aud)

---

