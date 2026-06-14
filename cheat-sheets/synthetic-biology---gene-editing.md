# 📋 Quick Copy Synthetic Biology & Gene Editing Prompt Cheat Sheet

This file contains **10** curated prompt templates for **Synthetic Biology & Gene Editing**. Copy and paste them directly into your AI chat window.

---

## 1. CRISPR gRNA Designer

> **Tags**: `synthetic-biology-gene-editing`, `chatgpt`, `open-source` | **Slug**: `crispr-grna-designer`

### 📋 Template:
```text
ROLE: CRISPR gRNA Designer.
OBJECTIVE: Generate optimal sgRNA sequences targeting **{gene_symbol}** exon **{exon_number}** in **{organism_name}**.
REQUIREMENTS:
• Avoid off-targets with fewer than 4 mismatches across genome build {genome_build}.
• Score guides using Rule Set 2 and CFD scores.
• Provide CSV with PAM sequence, GC content, and predicted efficiency.
OUTPUT FORMAT: Markdown with CSV code block.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/crispr-grna-designer)

---

## 2. Metabolic Pathway Engineer

> **Tags**: `synthetic-biology-gene-editing`, `chatgpt`, `open-source` | **Slug**: `metabolic-pathway-engineer`

### 📋 Template:
```text
ROLE: Metabolic Pathway Engineer.
OBJECTIVE: Design a synthetic operon to overproduce **{target_metabolite}** in **{microbe_species}**.
REQUIREMENTS:
• Select promoters and RBS parts from {parts_registry} to balance flux.
• Provide SBOL XML snippet.
• Include flux balance analysis predicting yield improvement.
OUTPUT FORMAT: Markdown with SBOL code and tables.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/metabolic-pathway-engineer)

---

## 3. Protein Engineering Specialist

> **Tags**: `synthetic-biology-gene-editing`, `chatgpt`, `open-source` | **Slug**: `protein-engineering-specialist`

### 📋 Template:
```text
ROLE: Protein Engineering Specialist.
OBJECTIVE: Plan a site-saturation mutagenesis library for **{protein_pdb}** at positions **{residue_range}**.
REQUIREMENTS:
• Use degenerate codon scheme minimizing stop codons.
• Provide primer sequences with Tm within ±2 °C of 60 °C.
• Estimate library size and sequencing depth coverage.
OUTPUT FORMAT: Markdown with primer table.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/protein-engineering-specialist)

---

## 4. Cell-Free Expression Optimizer

> **Tags**: `synthetic-biology-gene-editing`, `chatgpt`, `open-source` | **Slug**: `cell-free-expression-optimizer`

### 📋 Template:
```text
ROLE: Cell-Free Expression Optimizer.
OBJECTIVE: Outline a DoE matrix to maximize **{protein_name}** yield in TX-TL using **{lysate_type}**.
REQUIREMENTS:
• Choose 3 factors: Mg2+, energy mix, DNA concentration with 3 levels each.
• Include randomization plan and replication strategy.
• Provide R script to analyze ANOVA results.
OUTPUT FORMAT: Markdown with R code block.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/cell-free-expression-optimizer)

---

## 5. Biosensor Circuit Designer

> **Tags**: `synthetic-biology-gene-editing`, `chatgpt`, `open-source` | **Slug**: `biosensor-circuit-designer`

### 📋 Template:
```text
ROLE: Biosensor Circuit Designer.
OBJECTIVE: Develop a quorum-sensing biosensor for **{analyte_name}** detection range **{detection_ppm}** ppm.
REQUIREMENTS:
• Select input promoter responsive to analyte and LuxR-based amplifier.
• Simulate dose-response using {simulation_tool}.
• Output transfer function plot and ON/OFF ratio.
OUTPUT FORMAT: Markdown with plots and SBML snippet.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/biosensor-circuit-designer)

---

## 6. Gene Drive Risk Assessor

> **Tags**: `synthetic-biology-gene-editing`, `chatgpt`, `open-source` | **Slug**: `gene-drive-risk-assessor`

### 📋 Template:
```text
ROLE: Gene Drive Risk Assessor.
OBJECTIVE: Evaluate containment strategies for CRISPR gene drive in **{target_species}** release scenario **{release_scenario}**.
REQUIREMENTS:
• Model allelic frequency spread using {population_model} over 10 generations.
• Assess ecological impact metrics and mitigation measures.
• Summarize risk matrix with likelihood vs consequence.
OUTPUT FORMAT: Markdown with model equations and tables.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/gene-drive-risk-assessor)

---

## 7. Synthetic Promoter Miner

> **Tags**: `synthetic-biology-gene-editing`, `chatgpt`, `open-source` | **Slug**: `synthetic-promoter-miner`

### 📋 Template:
```text
ROLE: Synthetic Promoter Miner.
OBJECTIVE: Identify de-novo promoters in **{rna_seq_dataset}** for **{tissue_type}** under stress **{stress_condition}**.
REQUIREMENTS:
• Use differential expression threshold log2FC > 2 and FDR < 0.01.
• Predict promoter regions upstream −400 bp to +50 bp.
• Output FASTA file and motif logo.
OUTPUT FORMAT: Markdown with FASTA block.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/synthetic-promoter-miner)

---

## 8. Genome-Scale Model Curator

> **Tags**: `synthetic-biology-gene-editing`, `chatgpt`, `open-source` | **Slug**: `genome-scale-model-curator`

### 📋 Template:
```text
ROLE: Genome-Scale Model Curator.
OBJECTIVE: Update GEM for **{organism_strain}** with new reaction **{reaction_id}** kinetics parameters.
REQUIREMENTS:
• Validate mass balance and charge using COBRApy.
• Provide SBML diff and MEMOTE score delta.
• Run FBA to confirm growth phenotype unchanged.
OUTPUT FORMAT: Markdown with code and result summary.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/genome-scale-model-curator)

---

## 9. Optogenetic Tool Developer

> **Tags**: `synthetic-biology-gene-editing`, `chatgpt`, `open-source` | **Slug**: `optogenetic-tool-developer`

### 📋 Template:
```text
ROLE: Optogenetic Tool Developer.
OBJECTIVE: Design an optogenetic switch controlling **{target_gene}** expression in **{cell_line}** using **{light_wavelength}** nm LED.
REQUIREMENTS:
• Choose LOV vs CRY2 photosensor comparison with response curves.
• Simulate activation kinetics in {modeling_software}.
• Include cloning strategy and plasmid map features.
OUTPUT FORMAT: Markdown with diagrams and SBOL snippet.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/optogenetic-tool-developer)

---

## 10. Epigenome Editor Planner

> **Tags**: `synthetic-biology-gene-editing`, `chatgpt`, `open-source` | **Slug**: `epigenome-editor-planner`

### 📋 Template:
```text
ROLE: Epigenome Editor Planner.
OBJECTIVE: Propose dCas-KRAB-MeCP2 construct targeting **{enhancer_region}** to silence **{oncogene_name}**.
REQUIREMENTS:
• Design gRNAs avoiding CpG islands using {crispr_tool}.
• Assess off-target chromatin marks via ChIP-seq datasets.
• Outline lentiviral delivery protocol and controls.
OUTPUT FORMAT: Markdown with table and protocol steps.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/epigenome-editor-planner)

---

