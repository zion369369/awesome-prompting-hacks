# 📋 Quick Copy Renewable Energy Systems Optimization Prompt Cheat Sheet

This file contains **10** curated prompt templates for **Renewable Energy Systems Optimization**. Copy and paste them directly into your AI chat window.

---

## 1. PV System Yield Analyst

> **Tags**: `renewable-energy-systems-optimization`, `chatgpt`, `open-source` | **Slug**: `pv-system-yield-analyst`

### 📋 Template:
```text
ROLE: PV System Yield Analyst.
OBJECTIVE: Simulate annual energy yield for **{pv_array_capacity}** kWp rooftop system in **{city_latlon}** orientation **{tilt_angle}**°.
REQUIREMENTS:
• Use PVLIB with TMY data and losses (soiling, mismatch) totaling 8 %.
• Provide hourly output CSV and monthly summary bar chart.
• Estimate LCOE with given CAPEX {capex_per_kw} €/kW.
OUTPUT FORMAT: Markdown with code and results plots.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/pv-system-yield-analyst)

---

## 2. Wind Turbine Control Engineer

> **Tags**: `renewable-energy-systems-optimization`, `chatgpt`, `open-source` | **Slug**: `wind-turbine-control-engineer`

### 📋 Template:
```text
ROLE: Wind Turbine Control Engineer.
OBJECTIVE: Design an individual pitch control law for **{turbine_model}** to minimize fatigue loads in IEC Class **{wind_class}**.
REQUIREMENTS:
• Implement gain-scheduled PI controller using FAST-Simulink co-simulation.
• Include tuning procedure using singular value decomposition of MIMO system.
• Present load reduction metrics on blade root bending.
OUTPUT FORMAT: Markdown with MATLAB/Simulink snippets.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/wind-turbine-control-engineer)

---

## 3. Hydrogen Electrolyzer Optimizer

> **Tags**: `renewable-energy-systems-optimization`, `chatgpt`, `open-source` | **Slug**: `hydrogen-electrolyzer-optimizer`

### 📋 Template:
```text
ROLE: Hydrogen Electrolyzer Optimizer.
OBJECTIVE: Create a dispatch algorithm for **{electrolyzer_capacity}** MW PEM unit linked to PV profile **{solar_profile_csv}**.
REQUIREMENTS:
• Respect ramp rate 10 %/min and minimum load 20 %.
• Use mixed-integer linear programming in Pyomo.
• Report weekly hydrogen output, utilization factor, and curtailed energy.
OUTPUT FORMAT: Markdown with code and result tables.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/hydrogen-electrolyzer-optimizer)

---

## 4. Battery Degradation Modeler

> **Tags**: `renewable-energy-systems-optimization`, `chatgpt`, `open-source` | **Slug**: `battery-degradation-modeler`

### 📋 Template:
```text
ROLE: Battery Degradation Modeler.
OBJECTIVE: Set up a calendar-cycling degradation model for **{lithium_cell_type}** at **{storage_temperature}** °C.
REQUIREMENTS:
• Use Arrhenius relation and SEI growth equations.
• Calibrate model with {aging_dataset} experimental data.
• Predict capacity retention at 5-year mark with ±2 % accuracy.
OUTPUT FORMAT: Markdown with equations and plots.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/battery-degradation-modeler)

---

## 5. Microgrid Power Flow Planner

> **Tags**: `renewable-energy-systems-optimization`, `chatgpt`, `open-source` | **Slug**: `microgrid-power-flow-planner`

### 📋 Template:
```text
ROLE: Microgrid Power Flow Planner.
OBJECTIVE: Balance load demand vs generation in **{microgrid_id}** using **{opendss_model}** for next **{horizon_hours}** h.
REQUIREMENTS:
• Include diesel genset fuel consumption curve and battery SOC constraints.
• Optimize objective: minimize NPV of fuel cost and O&M.
• Provide JSON schedule for each DER.
OUTPUT FORMAT: Markdown with optimization results and JSON snippet.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/microgrid-power-flow-planner)

---

## 6. Wave Energy Converter Analyst

> **Tags**: `renewable-energy-systems-optimization`, `chatgpt`, `open-source` | **Slug**: `wave-energy-converter-analyst`

### 📋 Template:
```text
ROLE: Wave Energy Converter Analyst.
OBJECTIVE: Model PTO damping optimization for **{wec_device}** in sea state **{hs_tp}** using WEC-SIM.
REQUIREMENTS:
• Perform time-domain simulation for 3-h duration.
• Include spectral moments calculation.
• Report absorbed power vs damping curve.
OUTPUT FORMAT: Markdown with MATLAB code and plot.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/wave-energy-converter-analyst)

---

## 7. Bioenergy Supply Scheduler

> **Tags**: `renewable-energy-systems-optimization`, `chatgpt`, `open-source` | **Slug**: `bioenergy-supply-scheduler`

### 📋 Template:
```text
ROLE: Bioenergy Supply Scheduler.
OBJECTIVE: Plan a feedstock delivery schedule for **{biomass_plant}** requiring **{dry_tonnes}** t/year.
REQUIREMENTS:
• Use GIS road network analysis to optimize trucking routes.
• Include emission factors and cost per tonne-km.
• Provide monthly delivery table and GHG savings estimate.
OUTPUT FORMAT: Markdown with maps and tables.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/bioenergy-supply-scheduler)

---

## 8. Heat Pump System Designer

> **Tags**: `renewable-energy-systems-optimization`, `chatgpt`, `open-source` | **Slug**: `heat-pump-system-designer`

### 📋 Template:
```text
ROLE: Heat Pump System Designer.
OBJECTIVE: Size a ground-source heat pump for **{building_area}** m² office in climate zone **{ashrae_zone}**.
REQUIREMENTS:
• Calculate heating/cooling loads using hourly bin method.
• Determine borehole depth and spacing with {ghx_software}.
• Estimate COP seasonal performance factor.
OUTPUT FORMAT: Markdown with calculation steps and summary table.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/heat-pump-system-designer)

---

## 9. Electric Vehicle Fleet Scheduler

> **Tags**: `renewable-energy-systems-optimization`, `chatgpt`, `open-source` | **Slug**: `electric-vehicle-fleet-scheduler`

### 📋 Template:
```text
ROLE: Electric Vehicle Fleet Scheduler.
OBJECTIVE: Optimize charging schedule for **{fleet_size}** EVs with route data **{route_csv}** at depot **{charger_power}** kW each.
REQUIREMENTS:
• Use MILP minimizing electricity cost with TOU tariff file {tariff_csv}.
• Enforce state-of-charge constraints before departure.
• Provide Gantt-chart style schedule and cost summary.
OUTPUT FORMAT: Markdown with pandas code and plot.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/electric-vehicle-fleet-scheduler)

---

## 10. Solar Thermal CSP Analyst

> **Tags**: `renewable-energy-systems-optimization`, `chatgpt`, `open-source` | **Slug**: `solar-thermal-csp-analyst`

### 📋 Template:
```text
ROLE: Solar Thermal CSP Analyst.
OBJECTIVE: Evaluate thermal storage dispatch strategy for **{csp_plant_name}** with molten salt tank **{storage_hours}** h.
REQUIREMENTS:
• Simulate dispatch to maximize revenue under {market_price_csv}.
• Use SAM or equivalent Python model.
• Report annual capacity factor and revenue uplift.
OUTPUT FORMAT: Markdown with results table and plot.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/solar-thermal-csp-analyst)

---

