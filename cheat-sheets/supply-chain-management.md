# 📋 Quick Copy Supply Chain Management Prompt Cheat Sheet

This file contains **10** curated prompt templates for **Supply Chain Management**. Copy and paste them directly into your AI chat window.

---

## 1. Demand Forecasting Analyst|OBJECTIVE: Generate a demand forecast for product ...

> **Tags**: `supply-chain-management`, `chatgpt`, `open-source` | **Slug**: `demand-forecasting-analystobjective-generate-a-dem`

### 📋 Template:
```text
ROLE: Demand Forecasting Analyst|OBJECTIVE: Generate a demand forecast for product **{product_sku}** for the next **{forecast_horizon_weeks}** weeks.|REQUIREMENTS: Use historical sales data from {sales_data_csv}.|The forecast should account for seasonality and the upcoming promotion on {promotion_date}.|Provide the forecast values along with 80% and 95% confidence intervals.|STYLE: Statistical, accurate, and includes uncertainty measures.|OUTPUT FORMAT: A CSV file with columns: Week, Forecast, Lower_80, Upper_80, Lower_95, Upper_95.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/demand-forecasting-analystobjective-generate-a-dem)

---

## 2. Inventory Optimization Planner|OBJECTIVE: Calculate the optimal reorder point...

> **Tags**: `supply-chain-management`, `chatgpt`, `open-source` | **Slug**: `inventory-optimization-plannerobjective-calculate`

### 📋 Template:
```text
ROLE: Inventory Optimization Planner|OBJECTIVE: Calculate the optimal reorder point and safety stock for the item **{item_id}** at the warehouse **{warehouse_location}**.|REQUIREMENTS: Use lead time demand data from {lead_time_data_file}.|The target service level is {service_level_percent}%.|Consider a lead time variability of {lead_time_std_dev} days.|STYLE: Data-driven, cost-conscious, and balances stockouts against holding costs.|OUTPUT FORMAT: JSON object with keys: reorder_point, safety_stock.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/inventory-optimization-plannerobjective-calculate)

---

## 3. Logistics Network Designer|OBJECTIVE: Propose an optimal location for a new d...

> **Tags**: `supply-chain-management`, `chatgpt`, `open-source` | **Slug**: `logistics-network-designerobjective-propose-an-opt`

### 📋 Template:
```text
ROLE: Logistics Network Designer|OBJECTIVE: Propose an optimal location for a new distribution center to serve the customer locations listed in **{customer_locations_csv}**.|REQUIREMENTS: The objective is to minimize the total weighted distance to all customers.|Consider the shipping volume for each customer.|The output should be the suggested city and state, along with the rationale.|STYLE: Analytical, strategic, and based on the center of gravity model.|OUTPUT FORMAT: Markdown report with the recommended location.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/logistics-network-designerobjective-propose-an-opt)

---

## 4. Transportation Cost Analyst|OBJECTIVE: Analyze the transportation costs in **...

> **Tags**: `supply-chain-management`, `chatgpt`, `open-source` | **Slug**: `transportation-cost-analystobjective-analyze-the-t`

### 📋 Template:
```text
ROLE: Transportation Cost Analyst|OBJECTIVE: Analyze the transportation costs in **{shipping_data_file}** and identify the top 3 opportunities for savings.|REQUIREMENTS: Compare costs across different carriers, such as {carrier_1} and {carrier_2}.|Identify lanes with unusually high cost-per-mile.|Recommend mode-shifting opportunities (e.g., from LTL to FTL) for certain routes.|STYLE: Investigative, quantitative, and focused on reducing logistics spend.|OUTPUT FORMAT: Markdown report with findings and recommendations.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/transportation-cost-analystobjective-analyze-the-t)

---

## 5. Warehouse Operations Manager|OBJECTIVE: Create an optimized picking route for...

> **Tags**: `supply-chain-management`, `chatgpt`, `open-source` | **Slug**: `warehouse-operations-managerobjective-create-an-op`

### 📋 Template:
```text
ROLE: Warehouse Operations Manager|OBJECTIVE: Create an optimized picking route for the list of orders in **{order_list_file}** for a warehouse with the layout defined in **{warehouse_layout_map}**.|REQUIREMENTS: The route should minimize the total travel time for the picker.|Use a serpentine (S-shape) picking path.|The output should be a sequenced list of picking locations (aisle, bay, level).|STYLE: Efficient, operational, and improves warehouse productivity.|OUTPUT FORMAT: A CSV file with the sequenced picking list.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/warehouse-operations-managerobjective-create-an-op)

---

## 6. Supply Chain Risk Assessor|OBJECTIVE: Identify and assess potential risks in ...

> **Tags**: `supply-chain-management`, `chatgpt`, `open-source` | **Slug**: `supply-chain-risk-assessorobjective-identify-and-a`

### 📋 Template:
```text
ROLE: Supply Chain Risk Assessor|OBJECTIVE: Identify and assess potential risks in the supply chain for the product **{product_name}**.|REQUIREMENTS: Analyze dependencies on single-source suppliers listed in {supplier_list_csv}.|Evaluate geopolitical risks in the regions where key suppliers like {key_supplier_name} are located.|Create a risk matrix plotting likelihood vs. impact for the top 5 risks.|STYLE: Proactive, comprehensive, and helps build resilience.|OUTPUT FORMAT: Markdown document with a risk matrix and mitigation suggestions.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/supply-chain-risk-assessorobjective-identify-and-a)

---

## 7. Procurement Specialist|OBJECTIVE: Draft a Request for Quotation (RFQ) to send...

> **Tags**: `supply-chain-management`, `chatgpt`, `open-source` | **Slug**: `procurement-specialistobjective-draft-a-request-fo`

### 📋 Template:
```text
ROLE: Procurement Specialist|OBJECTIVE: Draft a Request for Quotation (RFQ) to send to potential suppliers for the component **{component_part_number}**.|REQUIREMENTS: Specify the required annual volume of {annual_volume} units.|Include detailed technical specifications from the document {spec_sheet_path}.|Request pricing tiers for different order quantities.|STYLE: Formal, detailed, and enables clear comparison between suppliers.|OUTPUT FORMAT: A Word document-ready RFQ in Markdown.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/procurement-specialistobjective-draft-a-request-fo)

---

## 8. S&OP Meeting Preparer|OBJECTIVE: Generate a data pack for the monthly Sales a...

> **Tags**: `supply-chain-management`, `chatgpt`, `open-source` | **Slug**: `sop-meeting-preparerobjective-generate-a-data-pack`

### 📋 Template:
```text
ROLE: S&OP Meeting Preparer|OBJECTIVE: Generate a data pack for the monthly Sales and Operations Planning (S&OP) meeting for the product family **{product_family}**.|REQUIREMENTS: Include a comparison of last month's demand forecast vs. actual sales.|Provide current inventory levels against targets.|Highlight any supply constraints from the supplier {constrained_supplier}.|STYLE: Data-rich, concise, and facilitates executive decision-making.|OUTPUT FORMAT: A PowerPoint-ready presentation in Markdown (using slide separators).
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/sop-meeting-preparerobjective-generate-a-data-pack)

---

## 9. Sustainability Analyst|OBJECTIVE: Calculate the carbon footprint for the supp...

> **Tags**: `supply-chain-management`, `chatgpt`, `open-source` | **Slug**: `sustainability-analystobjective-calculate-the-carb`

### 📋 Template:
```text
ROLE: Sustainability Analyst|OBJECTIVE: Calculate the carbon footprint for the supply chain of product **{product_sku}** from raw material to final delivery.|REQUIREMENTS: Use emission factors from {emission_factors_db}.|Break down the emissions by transportation, manufacturing, and warehousing.|The analysis should cover the entire lifecycle as defined in {lifecycle_stages_doc}.|STYLE: Eco-conscious, quantitative, and identifies hotspots for reduction.|OUTPUT FORMAT: Markdown report with a summary of CO2e emissions.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/sustainability-analystobjective-calculate-the-carb)

---

## 10. Trade Compliance Officer|OBJECTIVE: Determine the correct Harmonized System (...

> **Tags**: `supply-chain-management`, `chatgpt`, `open-source` | **Slug**: `trade-compliance-officerobjective-determine-the-co`

### 📋 Template:
```text
ROLE: Trade Compliance Officer|OBJECTIVE: Determine the correct Harmonized System (HS) code for the product **{product_description}** being exported from **{export_country}** to **{import_country}**.|REQUIREMENTS: Provide the 6-digit HS code.|Justify the classification based on the General Rules of Interpretation.|List any import duties or tariffs associated with that code for the destination country.|STYLE: Accurate, compliant, and essential for international trade.|OUTPUT FORMAT: Markdown note with the HS code and justification.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/trade-compliance-officerobjective-determine-the-co)

---

