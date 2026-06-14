# 📋 Quick Copy Computational Fluid Dynamics Prompt Cheat Sheet

This file contains **10** curated prompt templates for **Computational Fluid Dynamics**. Copy and paste them directly into your AI chat window.

---

## 1. LES Turbulence Modeler

> **Tags**: `computational-fluid-dynamics`, `chatgpt`, `open-source` | **Slug**: `les-turbulence-modeler`

### 📋 Template:
```text
ROLE: LES Turbulence Modeler.
OBJECTIVE: Configure a WALE sub-grid LES simulation in **{cfd_solver}** for flow over **{airfoil_name}** at Re={reynolds_number}.
REQUIREMENTS:
• Generate structured mesh with y+ < 1 using {mesher_tool}.
• Provide boundary conditions and time-step size for CFL < 0.5.
• Output Cp distribution and compare with experimental data from NACA database.
OUTPUT FORMAT: Markdown with code snippets and result charts.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/les-turbulence-modeler)

---

## 2. Multiphase CFD Engineer

> **Tags**: `computational-fluid-dynamics`, `chatgpt`, `open-source` | **Slug**: `multiphase-cfd-engineer`

### 📋 Template:
```text
ROLE: Multiphase CFD Engineer.
OBJECTIVE: Set up a VOF simulation of **{bubble_diameter}** mm air bubble rising in water column using **{openfoam_case}**.
REQUIREMENTS:
• Define phaseProperties and alpha.water fields with initial bubble region.
• Implement PIMPLE algorithm with Courant < 0.3.
• Capture bubble centroid trajectory and terminal velocity.
OUTPUT FORMAT: Markdown with OpenFOAM dict excerpts.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/multiphase-cfd-engineer)

---

## 3. Compressible Solver Developer

> **Tags**: `computational-fluid-dynamics`, `chatgpt`, `open-source` | **Slug**: `compressible-solver-developer`

### 📋 Template:
```text
ROLE: Compressible Solver Developer.
OBJECTIVE: Draft an equation derivation and discretization note for implementing AUSM+-up in **{code_base}**.
REQUIREMENTS:
• Include finite-volume formulation on unstructured meshes.
• Provide pseudocode for flux calculation and eigenvalue evaluation.
• Discuss stability criteria for transonic nozzle flow.
OUTPUT FORMAT: LaTeX technical note.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/compressible-solver-developer)

---

## 4. Wind Farm CFD Analyst

> **Tags**: `computational-fluid-dynamics`, `chatgpt`, `open-source` | **Slug**: `wind-farm-cfd-analyst`

### 📋 Template:
```text
ROLE: Wind Farm CFD Analyst.
OBJECTIVE: Model wake interaction of **{turbine_layout}** using actuator disk in **{fluid_solver}**.
REQUIREMENTS:
• Set inflow turbulence intensity and TI profile based on {liDAR_csv}.
• Run simulation for 10 min physical time with time-averaged outputs.
• Report power deficit and turbulence kinetic energy maps.
OUTPUT FORMAT: Markdown report with figures and tables.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/wind-farm-cfd-analyst)

---

## 5. Thermal Comfort Simulator

> **Tags**: `computational-fluid-dynamics`, `chatgpt`, `open-source` | **Slug**: `thermal-comfort-simulator`

### 📋 Template:
```text
ROLE: Thermal Comfort Simulator.
OBJECTIVE: Create CFD simulation predicting PMV for **{room_geometry}** under **{hvac_setting}** conditions.
REQUIREMENTS:
• Couple radiation model with SST k-ω turbulence.
• Include human body heat flux as boundary condition using {met_rate} met.
• Compare predicted PMV with ASHRAE acceptable range.
OUTPUT FORMAT: Markdown with section headers and plots.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/thermal-comfort-simulator)

---

## 6. Battery Thermal CFD Specialist

> **Tags**: `computational-fluid-dynamics`, `chatgpt`, `open-source` | **Slug**: `battery-thermal-cfd-specialist`

### 📋 Template:
```text
ROLE: Battery Thermal CFD Specialist.
OBJECTIVE: Develop a conjugate heat transfer model of **{battery_pack}** during fast charging at **{charge_rate}** C.
REQUIREMENTS:
• Use anisotropic thermal conductivity for cell jelly-roll.
• Implement joule heating source term and coolant flow channel.
• Report maximum cell temperature and temperature homogeneity index.
OUTPUT FORMAT: Markdown; include simulation setup table.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/battery-thermal-cfd-specialist)

---

## 7. Aeroacoustics Analyst

> **Tags**: `computational-fluid-dynamics`, `chatgpt`, `open-source` | **Slug**: `aeroacoustics-analyst`

### 📋 Template:
```text
ROLE: Aeroacoustics Analyst.
OBJECTIVE: Compute sound pressure level from LES data of **{fan_blade_design}** using FWH acoustic analogy.
REQUIREMENTS:
• Sample pressure on permeable surface grid exported from {post_processing_tool}.
• Post-process frequency spectrum up to 10 kHz.
• Compare predicted tonal peaks against wind-tunnel microphone array.
OUTPUT FORMAT: Markdown with code snippets and results plots.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/aeroacoustics-analyst)

---

## 8. Porous Media CFD Expert

> **Tags**: `computational-fluid-dynamics`, `chatgpt`, `open-source` | **Slug**: `porous-media-cfd-expert`

### 📋 Template:
```text
ROLE: Porous Media CFD Expert.
OBJECTIVE: Implement Darcy-Forchheimer source term in **{solver_name}** for flow through **{foam_material}** core.
REQUIREMENTS:
• Calibrate permeability and inertial coefficient from {pressure_drop_csv}.
• Validate velocity profile against ERCOFTAC benchmark.
• Include script for automated mesh sensitivity study.
OUTPUT FORMAT: Markdown with equations and validation plots.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/porous-media-cfd-expert)

---

## 9. CFD Uncertainty Quantification Lead

> **Tags**: `computational-fluid-dynamics`, `chatgpt`, `open-source` | **Slug**: `cfd-uncertainty-quantification-lead`

### 📋 Template:
```text
ROLE: CFD Uncertainty Quantification Lead.
OBJECTIVE: Set up a polynomial chaos expansion analysis on lift coefficient of **{wing_config}** varying AoA ± **{aoa_variation}**°.
REQUIREMENTS:
• Use non-intrusive spectral projection with 3rd-order Legendre polynomials.
• Generate CFD samples using {workflow_manager}.
• Report Sobol indices and confidence intervals.
OUTPUT FORMAT: Markdown with statistical result tables.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/cfd-uncertainty-quantification-lead)

---

## 10. GPU CFD Accelerator

> **Tags**: `computational-fluid-dynamics`, `chatgpt`, `open-source` | **Slug**: `gpu-cfd-accelerator`

### 📋 Template:
```text
ROLE: GPU CFD Accelerator.
OBJECTIVE: Port pressure-Poisson solver of **{openfoam_version}** to CUDA using **{gpu_library}**.
REQUIREMENTS:
• Provide profiling results identifying memory bottlenecks.
• Rewrite matrix-vector multiplication kernel using CSR format.
• Benchmark speedup against CPU on mesh with 10 M cells.
OUTPUT FORMAT: Markdown with code diff and benchmark chart.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/gpu-cfd-accelerator)

---

