# 📋 Quick Copy Biomedical Imaging & Diagnostics Prompt Cheat Sheet

This file contains **10** curated prompt templates for **Biomedical Imaging & Diagnostics**. Copy and paste them directly into your AI chat window.

---

## 1. Radiomics Feature Engineer

> **Tags**: `biomedical-imaging-diagnostics`, `chatgpt`, `open-source` | **Slug**: `radiomics-feature-engineer`

### 📋 Template:
```text
ROLE: Radiomics Feature Engineer.
OBJECTIVE: Extract IBSI-compliant texture features from **{dicom_series}** tumor ROI mask **{roi_mask}**.
REQUIREMENTS:
• Normalize intensities using z-score within {reference_tissue}.
• Provide Python code leveraging PyRadiomics and SimpleITK.
• Output CSV with first-order, GLCM, and wavelet features.
OUTPUT FORMAT: Markdown with CSV snippet and explanation.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/radiomics-feature-engineer)

---

## 2. Bayesian Segmentation Researcher

> **Tags**: `biomedical-imaging-diagnostics`, `chatgpt`, `open-source` | **Slug**: `bayesian-segmentation-researcher`

### 📋 Template:
```text
ROLE: Bayesian Segmentation Researcher.
OBJECTIVE: Design a probabilistic U-Net training plan on **{ct_dataset}** for organ **{target_organ}**.
REQUIREMENTS:
• Detail data preprocessing, augmentation, and evidence lower bound loss formulation.
• Specify training hyperparameters for {gpu_model} (memory limit).
• Include calibration assessment using expected calibration error.
OUTPUT FORMAT: Markdown with H2 headers and python code sections.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/bayesian-segmentation-researcher)

---

## 3. Digital Pathology Pipeline Lead

> **Tags**: `biomedical-imaging-diagnostics`, `chatgpt`, `open-source` | **Slug**: `digital-pathology-pipeline-lead`

### 📋 Template:
```text
ROLE: Digital Pathology Pipeline Lead.
OBJECTIVE: Create a WSI tiling and classification workflow to detect **{lesion_type}** in **{stain_type}** slides.
REQUIREMENTS:
• Define tile size, overlap, and stain normalization via Macenko method.
• Integrate {cnn_architecture} using TensorFlow-GPU, with inference batch size guidelines.
• Produce heatmap overlay and slide-level ROC metrics.
OUTPUT FORMAT: Markdown report and schematic workflow diagram.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/digital-pathology-pipeline-lead)

---

## 4. Functional MRI Analyst

> **Tags**: `biomedical-imaging-diagnostics`, `chatgpt`, `open-source` | **Slug**: `functional-mri-analyst`

### 📋 Template:
```text
ROLE: Functional MRI Analyst.
OBJECTIVE: Generate a GLM analysis for **{task_paradigm}** using **{fmriprep_output}** preprocessed BOLD data.
REQUIREMENTS:
• Specify design matrix with HRF convolution and motion regressors.
• Include contrasts for primary task vs baseline.
• Provide Nilearn python snippet and thresholded z-maps.
OUTPUT FORMAT: Markdown with code blocks and figure placeholders.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/functional-mri-analyst)

---

## 5. Photoacoustic Imaging Innovator

> **Tags**: `biomedical-imaging-diagnostics`, `chatgpt`, `open-source` | **Slug**: `photoacoustic-imaging-innovator`

### 📋 Template:
```text
ROLE: Photoacoustic Imaging Innovator.
OBJECTIVE: Draft a protocol to quantify oxygen saturation in **{pa_signal_file}** for **{animal_model}**.
REQUIREMENTS:
• Outline multispectral unmixing equations and speed-of-sound correction.
• Provide MATLAB code for fluence compensation.
• Include validation procedure using co-registered pulse-oximeter readings.
OUTPUT FORMAT: Markdown with equations and MATLAB block.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/photoacoustic-imaging-innovator)

---

## 6. Ultrasound Beamformer

> **Tags**: `biomedical-imaging-diagnostics`, `chatgpt`, `open-source` | **Slug**: `ultrasound-beamformer`

### 📋 Template:
```text
ROLE: Ultrasound Beamformer.
OBJECTIVE: Develop a delay-and-sum beamforming script processing raw RF data **{rf_dataset}** for probe **{probe_model}**.
REQUIREMENTS:
• Calculate dynamic focusing delays in microseconds.
• Implement apodization using Hanning window.
• Display reconstructed B-mode image and measure axial resolution.
OUTPUT FORMAT: Markdown with Python code and image placeholder.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/ultrasound-beamformer)

---

## 7. 3-D Echocardiography Quantifier

> **Tags**: `biomedical-imaging-diagnostics`, `chatgpt`, `open-source` | **Slug**: `3-d-echocardiography-quantifier`

### 📋 Template:
```text
ROLE: 3-D Echocardiography Quantifier.
OBJECTIVE: Plan a pipeline to compute LV ejection fraction from **{3d_echo_dicom}** dataset in **{software_framework}**.
REQUIREMENTS:
• Outline steps: preprocessing, active contour segmentation, surface mesh generation.
• Include GPU acceleration tips and memory footprint estimation.
• Provide sanity checks against Simpson-biplane method.
OUTPUT FORMAT: Markdown with numbered steps and tips.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/3-d-echocardiography-quantifier)

---

## 8. Optical Coherence Tomography Scientist

> **Tags**: `biomedical-imaging-diagnostics`, `chatgpt`, `open-source` | **Slug**: `optical-coherence-tomography-scientist`

### 📋 Template:
```text
ROLE: Optical Coherence Tomography Scientist.
OBJECTIVE: Generate attenuation coefficient maps for **{oct_volume}** corneal scan using depth-compensated algorithm.
REQUIREMENTS:
• Apply logarithmic intensity rescaling and axial registration.
• Provide code snippet in {language_choice} implementing exponential fit.
• Benchmark runtime vs simple slope method.
OUTPUT FORMAT: Markdown with code and result plots.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/optical-coherence-tomography-scientist)

---

## 9. Diffusion MRI Tractography Expert

> **Tags**: `biomedical-imaging-diagnostics`, `chatgpt`, `open-source` | **Slug**: `diffusion-mri-tractography-expert`

### 📋 Template:
```text
ROLE: Diffusion MRI Tractography Expert.
OBJECTIVE: Set up deterministic tracking for **{dwi_series}** with **{bvecs}** using FACT algorithm.
REQUIREMENTS:
• Compute tensor model, FA threshold 0.2, angle limit 45°.
• Visualize arcuate fasciculus using TrackVis compatible format.
• Report streamline count and average length.
OUTPUT FORMAT: Markdown with command examples.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/diffusion-mri-tractography-expert)

---

## 10. Spectral CT Material Decomposer

> **Tags**: `biomedical-imaging-diagnostics`, `chatgpt`, `open-source` | **Slug**: `spectral-ct-material-decomposer`

### 📋 Template:
```text
ROLE: Spectral CT Material Decomposer.
OBJECTIVE: Create dual-energy decomposition for **{spectral_ct_dataset}** into water and iodine basis images.
REQUIREMENTS:
• Use image-based material decomposition equations with beam hardening correction.
• Include {reconstruction_kernel} kernel description.
• Provide quantification of iodine concentration in mg/ml for ROI list.
OUTPUT FORMAT: Markdown with equations and results table.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/spectral-ct-material-decomposer)

---

