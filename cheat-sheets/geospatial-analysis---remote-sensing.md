# 📋 Quick Copy Geospatial Analysis & Remote Sensing Prompt Cheat Sheet

This file contains **10** curated prompt templates for **Geospatial Analysis & Remote Sensing**. Copy and paste them directly into your AI chat window.

---

## 1. SAR Interferometry Specialist

> **Tags**: `geospatial-analysis-remote-sensing`, `chatgpt`, `open-source` | **Slug**: `sar-interferometry-specialist`

### 📋 Template:
```text
ROLE: SAR Interferometry Specialist.
OBJECTIVE: Generate a processing workflow to derive ground deformation map from **{sentinel_pair}** SLC images over **{aoi_bbox}**.
REQUIREMENTS:
• Include steps: co-registration, phase unwrapping, atmospheric correction using {gnss_tropo_data}.
• Provide bash commands using ISCE2 and snaphu.
• Output cumulative displacement GeoTIFF and QC plots.
OUTPUT FORMAT: Markdown with code blocks and command snippets.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/sar-interferometry-specialist)

---

## 2. Hyperspectral Mineralogist

> **Tags**: `geospatial-analysis-remote-sensing`, `chatgpt`, `open-source` | **Slug**: `hyperspectral-mineralogist`

### 📋 Template:
```text
ROLE: Hyperspectral Mineralogist.
OBJECTIVE: Classify lithology in **{hypercube_file}** using spectral angle mapper with **{reference_library}** signatures.
REQUIREMENTS:
• Perform atmospheric correction (FLAASH) and noise subspace elimination.
• Output mineral abundance maps with color legend.
• Provide Python code using the spectral library path.
OUTPUT FORMAT: Jupyter Markdown with H3 headers.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/hyperspectral-mineralogist)

---

## 3. LiDAR Forestry Analyst

> **Tags**: `geospatial-analysis-remote-sensing`, `chatgpt`, `open-source` | **Slug**: `lidar-forestry-analyst`

### 📋 Template:
```text
ROLE: LiDAR Forestry Analyst.
OBJECTIVE: Estimate above-ground biomass for **{forest_region_name}** from **{lidar_pointcloud}** data.
REQUIREMENTS:
• Compute canopy height model at 1 m resolution.
• Apply allometric equations from {species_eq_dataset}.
• Report total biomass in Mg and uncertainty ± 10 %.
OUTPUT FORMAT: Markdown plus JSON summary block.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/lidar-forestry-analyst)

---

## 4. Urban Heat Mapping Engineer

> **Tags**: `geospatial-analysis-remote-sensing`, `chatgpt`, `open-source` | **Slug**: `urban-heat-mapping-engineer`

### 📋 Template:
```text
ROLE: Urban Heat Mapping Engineer.
OBJECTIVE: Produce a high-resolution UHI map for **{city_name}** using **{landsat_collection}** thermal bands.
REQUIREMENTS:
• Perform radiometric calibration and emissivity correction.
• Validate surface temperature with {met_station_csv} readings.
• Highlight hotspots exceeding 2 °C over baseline.
OUTPUT FORMAT: ArcGIS-ready GeoPackage and Markdown report.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/urban-heat-mapping-engineer)

---

## 5. Marine GIS Consultant

> **Tags**: `geospatial-analysis-remote-sensing`, `chatgpt`, `open-source` | **Slug**: `marine-gis-consultant`

### 📋 Template:
```text
ROLE: Marine GIS Consultant.
OBJECTIVE: Model oil spill drift trajectory from **{spill_latlon}** on **{start_date}** for {simulation_hours} h using HYCOM data.
REQUIREMENTS:
• Incorporate wind forcing from {noaa_grib} and Stokes drift.
• Provide Python code using Parcels library.
• Output shapefile of centroid path and probability envelope.
OUTPUT FORMAT: Markdown with map snapshot placeholders.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/marine-gis-consultant)

---

## 6. Climate Downscaling Expert

> **Tags**: `geospatial-analysis-remote-sensing`, `chatgpt`, `open-source` | **Slug**: `climate-downscaling-expert`

### 📋 Template:
```text
ROLE: Climate Downscaling Expert.
OBJECTIVE: Downscale CMIP6 temperature projections for **{rcp_scenario}** to 1 km resolution over **{country_iso}**.
REQUIREMENTS:
• Use bias-correction spatial disaggregation (BCSD) against ERA5 baseline.
• Provide shell script orchestrating CDO operations.
• Visualize monthly anomalies 2040-2060.
OUTPUT FORMAT: Markdown plus NetCDF metadata block.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/climate-downscaling-expert)

---

## 7. GNSS Reflectometry Researcher

> **Tags**: `geospatial-analysis-remote-sensing`, `chatgpt`, `open-source` | **Slug**: `gnss-reflectometry-researcher`

### 📋 Template:
```text
ROLE: GNSS Reflectometry Researcher.
OBJECTIVE: Derive soil moisture estimates at **{site_code}** using SNR data from **{gnss_receiver_id}**.
REQUIREMENTS:
• Compute reflected signal peak frequency and convert to dielectric constant.
• Correlate results with in-situ {sm_instrument} sensors.
• Include Python matplotlib plots of diurnal variability.
OUTPUT FORMAT: Markdown report with equations.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/gnss-reflectometry-researcher)

---

## 8. Photogrammetry Pipeline Engineer

> **Tags**: `geospatial-analysis-remote-sensing`, `chatgpt`, `open-source` | **Slug**: `photogrammetry-pipeline-engineer`

### 📋 Template:
```text
ROLE: Photogrammetry Pipeline Engineer.
OBJECTIVE: Outline steps to build a 3-D mesh of **{monument_name}** from **{image_folder}** UAV photos.
REQUIREMENTS:
• Specify camera calibration using OpenCV charuco board images.
• Use OpenDroneMap commands for sparse, dense, and texturing stages.
• Export OBJ and 10k-face decimated glTF for web.
OUTPUT FORMAT: Markdown with command snippets and checklist.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/photogrammetry-pipeline-engineer)

---

## 9. Land-Use Change Modeler

> **Tags**: `geospatial-analysis-remote-sensing`, `chatgpt`, `open-source` | **Slug**: `land-use-change-modeler`

### 📋 Template:
```text
ROLE: Land-Use Change Modeler.
OBJECTIVE: Calibrate a CLUE-S model predicting urban expansion of **{metro_area}** to **{year_target}**.
REQUIREMENTS:
• Derive driving factors from {dem_raster}, roads, and population density layers.
• Include Monte Carlo runs (n=100) to quantify allocation uncertainty.
• Report kappa statistics and ROC curves.
OUTPUT FORMAT: Markdown with section headers and tables.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/land-use-change-modeler)

---

## 10. Ocean Color Algorithm Developer

> **Tags**: `geospatial-analysis-remote-sensing`, `chatgpt`, `open-source` | **Slug**: `ocean-color-algorithm-developer`

### 📋 Template:
```text
ROLE: Ocean Color Algorithm Developer.
OBJECTIVE: Implement a remote-sensing reflectance to chlorophyll-a algorithm for **{sensor_name}** data over **{region_bbox}**.
REQUIREMENTS:
• Validate model against {insitu_dataset} cruise measurements.
• Provide Python code using xarray and rioxarray.
• Map chlorophyll anomaly relative to 2003-2020 climatology.
OUTPUT FORMAT: Markdown with code and result figures.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/ocean-color-algorithm-developer)

---

