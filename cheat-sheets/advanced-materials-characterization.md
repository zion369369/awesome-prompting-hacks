# 📋 Quick Copy Advanced Materials Characterization Prompt Cheat Sheet

This file contains **10** curated prompt templates for **Advanced Materials Characterization**. Copy and paste them directly into your AI chat window.

---

## 1. XRD Phase Identifier

> **Tags**: `advanced-materials-characterization`, `chatgpt`, `open-source` | **Slug**: `xrd-phase-identifier`

### 📋 Template:
```text
ROLE: XRD Phase Identifier.
OBJECTIVE: Identify crystalline phases in **{diffraction_pattern}** using PDF-4+ database and Rietveld refinement.
REQUIREMENTS:
• Provide refined lattice parameters and crystallite size.
• Include goodness-of-fit indicators (Rwp, χ²).
• Output CIF file and plotted obs-calc difference.
OUTPUT FORMAT: Markdown with plots and CIF block.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/xrd-phase-identifier)

---

## 2. TEM Image Analyst

> **Tags**: `advanced-materials-characterization`, `chatgpt`, `open-source` | **Slug**: `tem-image-analyst`

### 📋 Template:
```text
ROLE: TEM Image Analyst.
OBJECTIVE: Measure dislocation density in **{tem_image}** of {alloy_name} using line intercept method.
REQUIREMENTS:
• Calibrate scale bar to nm accuracy.
• Analyze at least 5 regions to compute average and std dev.
• Provide annotated image overlays.
OUTPUT FORMAT: Markdown with images and Python code.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/tem-image-analyst)

---

## 3. Atomic Force Microscopy Specialist

> **Tags**: `advanced-materials-characterization`, `chatgpt`, `open-source` | **Slug**: `atomic-force-microscopy-specialist`

### 📋 Template:
```text
ROLE: Atomic Force Microscopy Specialist.
OBJECTIVE: Generate force-distance curve analysis for **{afm_forcefile}** on sample **{sample_id}**.
REQUIREMENTS:
• Fit Hertz-Sneddon model to determine elastic modulus.
• Correct baseline drift and cantilever deflection sensitivity.
• Report modulus histogram with n>200 curves.
OUTPUT FORMAT: Markdown with plots and table.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/atomic-force-microscopy-specialist)

---

## 4. Raman Spectroscopy Interpreter

> **Tags**: `advanced-materials-characterization`, `chatgpt`, `open-source` | **Slug**: `raman-spectroscopy-interpreter`

### 📋 Template:
```text
ROLE: Raman Spectroscopy Interpreter.
OBJECTIVE: Assign vibrational modes in **{raman_spectrum}** of **{compound_name}** between 200-1800 cm⁻¹.
REQUIREMENTS:
• Subtract fluorescence background via polynomial fitting.
• Compare peak positions with {reference_spectra}.
• Output annotated spectrum and assignments table.
OUTPUT FORMAT: Markdown with figure and table.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/raman-spectroscopy-interpreter)

---

## 5. Nanoindentation Data Scientist

> **Tags**: `advanced-materials-characterization`, `chatgpt`, `open-source` | **Slug**: `nanoindentation-data-scientist`

### 📋 Template:
```text
ROLE: Nanoindentation Data Scientist.
OBJECTIVE: Process load-displacement data **{indentation_csv}** to extract hardness and modulus for **{coating_name}**.
REQUIREMENTS:
• Apply Oliver-Pharr method with area function calibration.
• Exclude pop-ins and surface roughness outliers.
• Plot hardness vs depth and summary statistics.
OUTPUT FORMAT: Markdown with code and plots.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/nanoindentation-data-scientist)

---

## 6. Neutron Scattering Modeler

> **Tags**: `advanced-materials-characterization`, `chatgpt`, `open-source` | **Slug**: `neutron-scattering-modeler`

### 📋 Template:
```text
ROLE: Neutron Scattering Modeler.
OBJECTIVE: Fit SANS data **{sans_file}** for **{polymer_system}** to core-shell sphere model.
REQUIREMENTS:
• Estimate shell thickness and contrast match point.
• Provide SasView .ses file parameters.
• Include χ² goodness-of-fit comparison with Guinier model.
OUTPUT FORMAT: Markdown with figures and parameter table.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/neutron-scattering-modeler)

---

## 7. XPS Quantification Expert

> **Tags**: `advanced-materials-characterization`, `chatgpt`, `open-source` | **Slug**: `xps-quantification-expert`

### 📋 Template:
```text
ROLE: XPS Quantification Expert.
OBJECTIVE: Quantify surface composition of **{xps_survey}** using sensitivity factors from **{sf_database}**.
REQUIREMENTS:
• Subtract Shirley background and fit Voigt profiles.
• Calculate atomic percentages with 2 % precision.
• Report high-resolution C1s deconvolution.
OUTPUT FORMAT: Markdown with plots and summary table.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/xps-quantification-expert)

---

## 8. Thermogravimetric Analyst

> **Tags**: `advanced-materials-characterization`, `chatgpt`, `open-source` | **Slug**: `thermogravimetric-analyst`

### 📋 Template:
```text
ROLE: Thermogravimetric Analyst.
OBJECTIVE: Determine activation energy of **{catalyst_sample}** decomposition using TGA **{tga_csv}** at multiple heating rates.
REQUIREMENTS:
• Apply Ozawa-Flynn-Wall model.
• Plot ln β vs 1/T for conversion fractions 0.1-0.9.
• Report average Ea and 95 % CI.
OUTPUT FORMAT: Markdown with plots and calculations.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/thermogravimetric-analyst)

---

## 9. FTIR Chemometrician

> **Tags**: `advanced-materials-characterization`, `chatgpt`, `open-source` | **Slug**: `ftir-chemometrician`

### 📋 Template:
```text
ROLE: FTIR Chemometrician.
OBJECTIVE: Develop PLS-R model predicting **{property_name}** from FTIR dataset **{ftir_matrix}**.
REQUIREMENTS:
• Preprocess spectra with SNV and Savitzky-Golay 1st derivative.
• Determine optimal latent variables via cross-validation.
• Provide regression coefficients plot and prediction R².
OUTPUT FORMAT: Markdown with code and results.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/ftir-chemometrician)

---

## 10. Mössbauer Spectroscopy Analyst

> **Tags**: `advanced-materials-characterization`, `chatgpt`, `open-source` | **Slug**: `mssbauer-spectroscopy-analyst`

### 📋 Template:
```text
ROLE: Mössbauer Spectroscopy Analyst.
OBJECTIVE: Interpret 57Fe Mössbauer spectrum **{mossbauer_data}** of **{iron_phase}** at {temperature_k} K.
REQUIREMENTS:
• Fit sextet and doublet components including isomer shift, quadrupole splitting.
• Discuss magnetic ordering conclusions.
• Provide goodness-of-fit (χ²) and model comparison.
OUTPUT FORMAT: Markdown with figure and analysis text.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/mssbauer-spectroscopy-analyst)

---

