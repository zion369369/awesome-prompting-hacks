# 📋 Quick Copy API Development Prompt Cheat Sheet

This file contains **10** curated prompt templates for **API Development**. Copy and paste them directly into your AI chat window.

---

## 1. RESTful API Designer|OBJECTIVE: Design a RESTful API for managing a collectio...

> **Tags**: `api-development`, `chatgpt`, `open-source` | **Slug**: `restful-api-designerobjective-design-a-restful-api`

### 📋 Template:
```text
ROLE: RESTful API Designer|OBJECTIVE: Design a RESTful API for managing a collection of **{resource_name}** resources.|REQUIREMENTS: Define standard CRUD operations (GET, POST, PUT, DELETE) for the resource.|The API must use proper HTTP status codes (e.g., 200, 201, 404).|Include support for filtering by {field_to_filter_by} and sorting by {field_to_sort_by}.|STYLE: RESTful, predictable, and follows standard conventions.|OUTPUT FORMAT: OpenAPI 3.0 specification in YAML.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/restful-api-designerobjective-design-a-restful-api)

---

## 2. GraphQL Schema Architect|OBJECTIVE: Create a GraphQL schema for querying **{d...

> **Tags**: `api-development`, `chatgpt`, `open-source` | **Slug**: `graphql-schema-architectobjective-create-a-graphql`

### 📋 Template:
```text
ROLE: GraphQL Schema Architect|OBJECTIVE: Create a GraphQL schema for querying **{data_domain}** data, including the types **{type_1}** and **{type_2}**.|REQUIREMENTS: The schema must define at least one query to fetch data and one mutation to modify data.|Implement a relationship between {type_1} and {type_2}.|Include documentation strings for all types and fields.|STYLE: Strongly-typed, efficient, and self-documenting.|OUTPUT FORMAT: A .graphql file containing the schema definition language (SDL).
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/graphql-schema-architectobjective-create-a-graphql)

---

## 3. API Security Specialist|OBJECTIVE: Outline a security plan to protect the pub...

> **Tags**: `api-development`, `chatgpt`, `open-source` | **Slug**: `api-security-specialistobjective-outline-a-securit`

### 📋 Template:
```text
ROLE: API Security Specialist|OBJECTIVE: Outline a security plan to protect the public-facing API endpoint **{api_endpoint_url}**.|REQUIREMENTS: Implement OAuth 2.0 with the {grant_type} grant type for authentication and authorization.|Add rate limiting of {requests_per_minute} requests per minute per user.|Include input validation to prevent injection attacks on parameter {parameter_name}.|STYLE: Secure-by-design, layered, and protects against common threats.|OUTPUT FORMAT: Markdown document detailing the security measures.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/api-security-specialistobjective-outline-a-securit)

---

## 4. API Gateway Configurator|OBJECTIVE: Generate the configuration for an API Gat...

> **Tags**: `api-development`, `chatgpt`, `open-source` | **Slug**: `api-gateway-configuratorobjective-generate-the-con`

### 📋 Template:
```text
ROLE: API Gateway Configurator|OBJECTIVE: Generate the configuration for an API Gateway (**{api_gateway_provider}**) to expose the backend microservice **{microservice_name}**.|REQUIREMENTS: Route incoming requests from the public path `/{public_path}` to the internal service URL.|Apply a JWT authorizer to validate tokens issued by {jwt_issuer}.|Enable caching for GET requests with a TTL of {cache_ttl_seconds} seconds.|STYLE: Centralized, manageable, and improves performance.|OUTPUT FORMAT: YAML or JSON configuration file for the specified API Gateway.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/api-gateway-configuratorobjective-generate-the-con)

---

## 5. gRPC Service Developer|OBJECTIVE: Write a Protocol Buffers (protobuf) definit...

> **Tags**: `api-development`, `chatgpt`, `open-source` | **Slug**: `grpc-service-developerobjective-write-a-protocol-b`

### 📋 Template:
```text
ROLE: gRPC Service Developer|OBJECTIVE: Write a Protocol Buffers (protobuf) definition for a gRPC service named **{service_name}** that includes the RPC method **{method_name}**.|REQUIREMENTS: The service should operate on a resource message named {resource_message}.|The {method_name} method should accept a {request_message} and return a {response_message}.|Use proto3 syntax.|STYLE: Performant, strongly-typed, and contract-first.|OUTPUT FORMAT: A .proto file with the service definition.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/grpc-service-developerobjective-write-a-protocol-b)

---

## 6. API Mocking Specialist|OBJECTIVE: Create a mock API server configuration for ...

> **Tags**: `api-development`, `chatgpt`, `open-source` | **Slug**: `api-mocking-specialistobjective-create-a-mock-api`

### 📋 Template:
```text
ROLE: API Mocking Specialist|OBJECTIVE: Create a mock API server configuration for the API defined in the OpenAPI spec **{openapi_spec_file}**.|REQUIREMENTS: The mock server should generate realistic data for all endpoints.|For the endpoint `/{endpoint_path}`, return a specific example response when the header `{header_name}` is present.|Use {mocking_tool} to run the mock server.|STYLE: Realistic, enables parallel development, and improves testing.|OUTPUT FORMAT: A configuration file for the specified mocking tool.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/api-mocking-specialistobjective-create-a-mock-api)

---

## 7. API Versioning Strategist|OBJECTIVE: Propose an API versioning strategy for t...

> **Tags**: `api-development`, `chatgpt`, `open-source` | **Slug**: `api-versioning-strategistobjective-propose-an-api`

### 📋 Template:
```text
ROLE: API Versioning Strategist|OBJECTIVE: Propose an API versioning strategy for the existing public API **{api_name}**.|REQUIREMENTS: The strategy should be {versioning_method} (e.g., URI path, header, query parameter).|Outline a plan for deprecating the old version, {old_version}, by {deprecation_date}.|Explain how breaking and non-breaking changes will be handled.|STYLE: Non-disruptive, clear to consumers, and allows for evolution.|OUTPUT FORMAT: Markdown document describing the versioning strategy.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/api-versioning-strategistobjective-propose-an-api)

---

## 8. Webhook Integration Engineer|OBJECTIVE: Design a system to reliably receive a...

> **Tags**: `api-development`, `chatgpt`, `open-source` | **Slug**: `webhook-integration-engineerobjective-design-a-sys`

### 📋 Template:
```text
ROLE: Webhook Integration Engineer|OBJECTIVE: Design a system to reliably receive and process incoming webhooks from the third-party service **{third_party_service}**.|REQUIREMENTS: Use a dedicated endpoint `/{webhook_endpoint}` to receive the webhooks.|Place incoming payloads onto a message queue ({message_queue_service}) for asynchronous processing to ensure immediate response.|Implement a signature verification mechanism using the secret key {secret_key_name} to authenticate webhooks.|STYLE: Asynchronous, resilient, and secure.|OUTPUT FORMAT: An architecture diagram in Mermaid Markdown and a Python/Node.js code snippet for the endpoint.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/webhook-integration-engineerobjective-design-a-sys)

---

## 9. API Documentation Writer|OBJECTIVE: Generate user-friendly documentation for ...

> **Tags**: `api-development`, `chatgpt`, `open-source` | **Slug**: `api-documentation-writerobjective-generate-user-fr`

### 📋 Template:
```text
ROLE: API Documentation Writer|OBJECTIVE: Generate user-friendly documentation for the API endpoint `POST /{resource_path}`.|REQUIREMENTS: Explain the purpose of the endpoint in simple terms.|Provide a clear example of the request body JSON object.|Document all possible response status codes, including {error_code_1} and {error_code_2}, with explanations.|STYLE: Clear, example-driven, and aimed at developers using the API.|OUTPUT FORMAT: Markdown formatted for a documentation site like Slate or ReadMe.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/api-documentation-writerobjective-generate-user-fr)

---

## 10. API Performance Test Scripter|OBJECTIVE: Create a performance test script usi...

> **Tags**: `api-development`, `chatgpt`, `open-source` | **Slug**: `api-performance-test-scripterobjective-create-a-pe`

### 📋 Template:
```text
ROLE: API Performance Test Scripter|OBJECTIVE: Create a performance test script using **{performance_test_tool}** to load test the API endpoint **{endpoint_to_test}**.|REQUIREMENTS: Simulate a load of {concurrent_users} concurrent users for a duration of {test_duration_minutes} minutes.|The test should assert that the p95 response time is below {p95_threshold_ms}ms.|Capture and report the error rate throughout the test.|STYLE: Realistic, repeatable, and helps identify performance bottlenecks.|OUTPUT FORMAT: A script file for the specified performance testing tool (e.g., k6, JMeter).
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/api-performance-test-scripterobjective-create-a-pe)

---

