# 📋 Quick Copy Data Engineering Prompt Cheat Sheet

This file contains **10** curated prompt templates for **Data Engineering**. Copy and paste them directly into your AI chat window.

---

## 1. ETL Pipeline Architect|OBJECTIVE: Design a robust and scalable ETL pipeline t...

> **Tags**: `data-engineering`, `chatgpt`, `open-source` | **Slug**: `etl-pipeline-architectobjective-design-a-robust-an`

### 📋 Template:
```text
ROLE: ETL Pipeline Architect|OBJECTIVE: Design a robust and scalable ETL pipeline to move data from **{source_system}** to data warehouse **{target_warehouse}**.|REQUIREMENTS: The pipeline must handle a daily volume of {daily_volume_gb} GB.|Use {etl_tool} for orchestration and transformation.|Implement data quality checks for null values and schema validation.|STYLE: Modular, idempotent, and well-documented.|OUTPUT FORMAT: A sequence diagram in Mermaid Markdown and a YAML configuration skeleton.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/etl-pipeline-architectobjective-design-a-robust-an)

---

## 2. Data Warehouse Modeler|OBJECTIVE: Generate the DDL SQL for a star schema data...

> **Tags**: `data-engineering`, `chatgpt`, `open-source` | **Slug**: `data-warehouse-modelerobjective-generate-the-ddl-s`

### 📋 Template:
```text
ROLE: Data Warehouse Modeler|OBJECTIVE: Generate the DDL SQL for a star schema data model to support analytics on **{business_process}**.|REQUIREMENTS: Create a central fact table for metrics like {metric_1} and {metric_2}.|Design at least 4 dimension tables, including {dimension_1} and {dimension_2}.|The schema must be optimized for query performance in {database_flavor}.|STYLE: Normalized (for dimensions), clear, and includes primary/foreign key constraints.|OUTPUT FORMAT: SQL file with DDL statements.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/data-warehouse-modelerobjective-generate-the-ddl-s)

---

## 3. Data Quality Automation Engineer|OBJECTIVE: Create a reusable data quality te...

> **Tags**: `data-engineering`, `chatgpt`, `open-source` | **Slug**: `data-quality-automation-engineerobjective-create-a`

### 📋 Template:
```text
ROLE: Data Quality Automation Engineer|OBJECTIVE: Create a reusable data quality testing suite for the database table **{table_name}** using **{dq_framework}**.|REQUIREMENTS: Implement tests for uniqueness, non-null constraints, and referential integrity.|Add a custom test to validate that values in {column_name} match the regex pattern {regex_pattern}.|The suite should output results in JUnit XML format for CI/CD integration.|STYLE: Declarative, maintainable, and comprehensive.|OUTPUT FORMAT: Python script using the specified framework.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/data-quality-automation-engineerobjective-create-a)

---

## 4. Streaming Data Processor|OBJECTIVE: Develop a streaming data pipeline using *...

> **Tags**: `data-engineering`, `chatgpt`, `open-source` | **Slug**: `streaming-data-processorobjective-develop-a-stream`

### 📋 Template:
```text
ROLE: Streaming Data Processor|OBJECTIVE: Develop a streaming data pipeline using **{streaming_platform}** to process real-time events from topic **{source_topic}**.|REQUIREMENTS: The pipeline must perform a windowed aggregation of {aggregation_function} over a {window_duration_seconds}-second tumbling window.|Filter out events where the {field_name} is empty.|Write the aggregated results to the output topic {destination_topic}.|STYLE: Resilient, low-latency, and stateful.|OUTPUT FORMAT: Python/Scala code snippet for the specified platform.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/streaming-data-processorobjective-develop-a-stream)

---

## 5. Data Governance Steward|OBJECTIVE: Draft a data dictionary and governance pol...

> **Tags**: `data-engineering`, `chatgpt`, `open-source` | **Slug**: `data-governance-stewardobjective-draft-a-data-dict`

### 📋 Template:
```text
ROLE: Data Governance Steward|OBJECTIVE: Draft a data dictionary and governance policy for the dataset **{dataset_name}** containing PII.|REQUIREMENTS: For each column, define the data type, description, and PII classification (e.g., Direct, Indirect).|Specify data retention policy: {retention_period_days} days.|Outline access control rules for different user roles, such as {user_role_1} and {user_role_2}.|STYLE: Formal, compliant with GDPR/CCPA, and unambiguous.|OUTPUT FORMAT: Markdown document with a table for the data dictionary.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/data-governance-stewardobjective-draft-a-data-dict)

---

## 6. Database Optimization Specialist|OBJECTIVE: Analyze the slow query **{query_s...

> **Tags**: `data-engineering`, `chatgpt`, `open-source` | **Slug**: `database-optimization-specialistobjective-analyze`

### 📋 Template:
```text
ROLE: Database Optimization Specialist|OBJECTIVE: Analyze the slow query **{query_sql}** on the **{database_engine}** database and provide optimization recommendations.|REQUIREMENTS: Generate the query execution plan.|Suggest at least three optimizations, such as adding an index on {column_to_index}, rewriting a join, or denormalizing data.|Provide the rewritten, optimized SQL query.|STYLE: Analytical, evidence-based, and actionable.|OUTPUT FORMAT: Markdown report with execution plan analysis and optimized SQL.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/database-optimization-specialistobjective-analyze)

---

## 7. Data Lake Architect|OBJECTIVE: Design the folder structure and partitioning s...

> **Tags**: `data-engineering`, `chatgpt`, `open-source` | **Slug**: `data-lake-architectobjective-design-the-folder-str`

### 📋 Template:
```text
ROLE: Data Lake Architect|OBJECTIVE: Design the folder structure and partitioning strategy for a data lake on **{cloud_storage_service}** for the data domain **{data_domain}**.|REQUIREMENTS: The structure should support both raw and processed data zones.|Partition the data by {partition_key_1} and {partition_key_2} to optimize query performance.|Recommend a file format ({file_format}) that supports schema evolution.|STYLE: Scalable, cost-effective, and query-friendly.|OUTPUT FORMAT: Markdown with a tree-style diagram of the folder structure.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/data-lake-architectobjective-design-the-folder-str)

---

## 8. Backfill Pipeline Developer|OBJECTIVE: Write a script to perform a historical...

> **Tags**: `data-engineering`, `chatgpt`, `open-source` | **Slug**: `backfill-pipeline-developerobjective-write-a-scrip`

### 📋 Template:
```text
ROLE: Backfill Pipeline Developer|OBJECTIVE: Write a script to perform a historical backfill of data for the period **{start_date}** to **{end_date}** for the ETL job **{job_name}**.|REQUIREMENTS: The script must be idempotent, allowing it to be re-run safely.|It should process data in parallel by {parallelization_unit} (e.g., day, month).|Use the orchestration tool {orchestration_tool} to manage the backfill workflow.|STYLE: Robust, efficient, and observable.|OUTPUT FORMAT: Python script with clear logging and error handling.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/backfill-pipeline-developerobjective-write-a-scrip)

---

## 9. Change Data Capture (CDC) Implementer|OBJECTIVE: Configure a Change Data Capt...

> **Tags**: `data-engineering`, `chatgpt`, `open-source` | **Slug**: `change-data-capture-cdc-implementerobjective-confi`

### 📋 Template:
```text
ROLE: Change Data Capture (CDC) Implementer|OBJECTIVE: Configure a Change Data Capture pipeline from a **{source_database_type}** database to a **{target_message_queue}** topic.|REQUIREMENTS: Use {cdc_tool} to capture row-level changes (inserts, updates, deletes).|The message format in the topic must be JSON.|Ensure the pipeline has at-least-once delivery semantics.|STYLE: Real-time, reliable, and low-impact on the source database.|OUTPUT FORMAT: YAML configuration file for the specified CDC tool.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/change-data-capture-cdc-implementerobjective-confi)

---

## 10. Data API Designer|OBJECTIVE: Design a REST API for exposing the dataset **{da...

> **Tags**: `data-engineering`, `chatgpt`, `open-source` | **Slug**: `data-api-designerobjective-design-a-rest-api-for-e`

### 📋 Template:
```text
ROLE: Data API Designer|OBJECTIVE: Design a REST API for exposing the dataset **{dataset_name}** to internal consumers.|REQUIREMENTS: The API must support pagination and filtering by {filterable_field}.|Implement an endpoint to retrieve a single record by its {primary_key}.|Document the API using the OpenAPI 3.0 specification.|STYLE: RESTful, consistent, and self-documenting.|OUTPUT FORMAT: YAML file containing the OpenAPI specification.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/data-api-designerobjective-design-a-rest-api-for-e)

---

