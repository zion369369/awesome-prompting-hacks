# 📋 Quick Copy Financial Risk Modeling Prompt Cheat Sheet

This file contains **10** curated prompt templates for **Financial Risk Modeling**. Copy and paste them directly into your AI chat window.

---

## 1. Credit Risk Quant

> **Tags**: `financial-risk-modeling`, `chatgpt`, `open-source` | **Slug**: `credit-risk-quant`

### 📋 Template:
```text
ROLE: Credit Risk Quant.
OBJECTIVE: Build a PD model for **{loan_portfolio}** using logistic regression and **{macro_variables_csv}**.
REQUIREMENTS:
• Perform WoE binning and IV calculation for categorical predictors.
• Apply 5-fold cross-validation and report ROC AUC, KS statistic.
• Generate scorecard scaling with PDO 20 and base score 600.
OUTPUT FORMAT: Markdown with tables and Python code blocks.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/credit-risk-quant)

---

## 2. XVA Analyst

> **Tags**: `financial-risk-modeling`, `chatgpt`, `open-source` | **Slug**: `xva-analyst`

### 📋 Template:
```text
ROLE: XVA Analyst.
OBJECTIVE: Calculate CVA for **{irs_portfolio}** trades under **{cs01_curve}** CSA rules.
REQUIREMENTS:
• Run Monte Carlo simulation with 50k paths using Hull-White interest rate model.
• Implement exposure regression using least-squares Monte Carlo.
• Provide sensitivity to CS01 and wrong-way risk discussion.
OUTPUT FORMAT: Markdown report with equations and result tables.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/xva-analyst)

---

## 3. Market Microstructure Researcher

> **Tags**: `financial-risk-modeling`, `chatgpt`, `open-source` | **Slug**: `market-microstructure-researcher`

### 📋 Template:
```text
ROLE: Market Microstructure Researcher.
OBJECTIVE: Analyze limit order book resiliency for **{ticker_symbol}** around **{event_timestamp}**.
REQUIREMENTS:
• Download depth-10 order book data via {lob_api}.
• Compute bid-ask spread recovery time and order flow imbalance.
• Plot normalized liquidity metrics ± 30 min of event.
OUTPUT FORMAT: Markdown with code snippets and plots.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/market-microstructure-researcher)

---

## 4. Portfolio Optimization Advisor

> **Tags**: `financial-risk-modeling`, `chatgpt`, `open-source` | **Slug**: `portfolio-optimization-advisor`

### 📋 Template:
```text
ROLE: Portfolio Optimization Advisor.
OBJECTIVE: Construct a risk-parity portfolio of **{asset_list}** using daily returns from **{start_date}** to **{end_date}**.
REQUIREMENTS:
• Estimate covariance matrix with Ledoit-Wolf shrinkage.
• Enforce leverage limit of 150 % and transaction cost of 5 bps.
• Backtest annualized Sharpe ratio vs equal-weight benchmark.
OUTPUT FORMAT: Markdown with tables and Matplotlib code.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/portfolio-optimization-advisor)

---

## 5. Climate Risk Modeler

> **Tags**: `financial-risk-modeling`, `chatgpt`, `open-source` | **Slug**: `climate-risk-modeler`

### 📋 Template:
```text
ROLE: Climate Risk Modeler.
OBJECTIVE: Quantify physical risk VaR for **{real_estate_portfolio}** given RCP **{rcp_code}** flood projections.
REQUIREMENTS:
• Integrate hazard maps with property geolocations using {gis_shapefile}.
• Apply damage functions to estimate loss distribution.
• Provide 99th percentile VaR for 2030 and 2050 horizons.
OUTPUT FORMAT: Markdown with maps and summary table.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/climate-risk-modeler)

---

## 6. Basel III Capital Calculator

> **Tags**: `financial-risk-modeling`, `chatgpt`, `open-source` | **Slug**: `basel-iii-capital-calculator`

### 📋 Template:
```text
ROLE: Basel III Capital Calculator.
OBJECTIVE: Compute standardized approach capital charges for **{trading_book}** market risk exposures.
REQUIREMENTS:
• Map instruments to risk classes and buckets.
• Calculate sensitivities-based method delta and vega charges using {fx_rates_csv}.
• Summarize total capital requirement and explain diversification benefits.
OUTPUT FORMAT: Markdown with formulae and tables.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/basel-iii-capital-calculator)

---

## 7. Structural Credit Model Engineer

> **Tags**: `financial-risk-modeling`, `chatgpt`, `open-source` | **Slug**: `structural-credit-model-engineer`

### 📋 Template:
```text
ROLE: Structural Credit Model Engineer.
OBJECTIVE: Implement a Merton-KKV multi-period model for **{firm_ticker}** equity and debt structure.
REQUIREMENTS:
• Estimate asset volatility using historical returns from {data_provider}.
• Calibrate default barrier and recovery rate.
• Plot distance-to-default trajectory over 5 years.
OUTPUT FORMAT: Markdown with code blocks and chart.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/structural-credit-model-engineer)

---

## 8. Commodity Derivatives Quant

> **Tags**: `financial-risk-modeling`, `chatgpt`, `open-source` | **Slug**: `commodity-derivatives-quant`

### 📋 Template:
```text
ROLE: Commodity Derivatives Quant.
OBJECTIVE: Price an Asian options strip on **{commodity_symbol}** with seasonality adjustment using **{pricing_grid}** time steps.
REQUIREMENTS:
• Model spot dynamics with Schwartz-Smith two-factor model.
• Implement lattice method and Monte Carlo validation.
• Report Greeks (delta, vega) at valuation date.
OUTPUT FORMAT: Markdown with valuation table.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/commodity-derivatives-quant)

---

## 9. Operational Risk Scenario Builder

> **Tags**: `financial-risk-modeling`, `chatgpt`, `open-source` | **Slug**: `operational-risk-scenario-builder`

### 📋 Template:
```text
ROLE: Operational Risk Scenario Builder.
OBJECTIVE: Generate stress scenarios for **{business_line}** cyber attack losses using **{loss_distribution_file}**.
REQUIREMENTS:
• Fit severity with Lognormal-GPD hybrid distribution.
• Simulate annual loss distribution via compound Poisson.
• Provide 95 % quantile and narrative description for top scenarios.
OUTPUT FORMAT: Markdown with statistics and narrative section.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/operational-risk-scenario-builder)

---

## 10. Liquidity Risk Reporter

> **Tags**: `financial-risk-modeling`, `chatgpt`, `open-source` | **Slug**: `liquidity-risk-reporter`

### 📋 Template:
```text
ROLE: Liquidity Risk Reporter.
OBJECTIVE: Draft a LCR calculation for **{bank_name}** using daily cash-flow data **{cashflow_csv}**.
REQUIREMENTS:
• Classify inflows/outflows into HQLA categories per Basel guidelines.
• Compute 30-day stressed net cash outflow and LCR ratio.
• Visualize time series of HQLA buffer vs requirement.
OUTPUT FORMAT: Markdown with tables and line chart.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/liquidity-risk-reporter)

---

