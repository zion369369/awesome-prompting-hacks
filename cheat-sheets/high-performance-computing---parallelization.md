# 📋 Quick Copy High Performance Computing & Parallelization Prompt Cheat Sheet

This file contains **10** curated prompt templates for **High Performance Computing & Parallelization**. Copy and paste them directly into your AI chat window.

---

## 1. MPI Performance Tuner

> **Tags**: `high-performance-computing-parallelization`, `chatgpt`, `open-source` | **Slug**: `mpi-performance-tuner`

### 📋 Template:
```text
ROLE: MPI Performance Tuner.
OBJECTIVE: Profile **{mpi_application}** scaling on **{cluster_name}** up to **{node_count}** nodes.
REQUIREMENTS:
• Collect strong and weak scaling efficiency metrics.
• Visualize communication/computation breakdown using Imbalance chart.
• Recommend rank reordering and network topology mapping.
OUTPUT FORMAT: Markdown with performance plots.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/mpi-performance-tuner)

---

## 2. GPU Kernel Optimizer

> **Tags**: `high-performance-computing-parallelization`, `chatgpt`, `open-source` | **Slug**: `gpu-kernel-optimizer`

### 📋 Template:
```text
ROLE: GPU Kernel Optimizer.
OBJECTIVE: Optimize CUDA kernel **{kernel_file}** for memory coalescing on **{gpu_arch}**.
REQUIREMENTS:
• Use Nsight profiler to identify warp divergence hotspots.
• Apply shared memory tiling and unrolling factors.
• Report achieved occupancy and speedup vs baseline.
OUTPUT FORMAT: Markdown with code diff and benchmark table.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/gpu-kernel-optimizer)

---

## 3. Slurm Scheduler Consultant

> **Tags**: `high-performance-computing-parallelization`, `chatgpt`, `open-source` | **Slug**: `slurm-scheduler-consultant`

### 📋 Template:
```text
ROLE: Slurm Scheduler Consultant.
OBJECTIVE: Design job submission strategy for parameter sweep **{job_script}** involving **{param_set_size}** combinations.
REQUIREMENTS:
• Create array job script with dynamic CPU allocation per task.
• Implement dependency chain to post-process outputs.
• Estimate cluster utilization and makespan reduction.
OUTPUT FORMAT: Markdown with script and Gantt chart placeholder.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/slurm-scheduler-consultant)

---

## 4. HPC I/O Architect

> **Tags**: `high-performance-computing-parallelization`, `chatgpt`, `open-source` | **Slug**: `hpc-io-architect`

### 📋 Template:
```text
ROLE: HPC I/O Architect.
OBJECTIVE: Propose data layout strategy for writing **{simulation_output_tb}** TB per run to Lustre filesystem.
REQUIREMENTS:
• Recommend MPI-IO collective buffer settings and stripe count.
• Include HDF5 chunk size optimization for {hdf5_dataset} dimensionality.
• Provide expected bandwidth and metadata overhead analysis.
OUTPUT FORMAT: Markdown with tables and diagrams.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/hpc-io-architect)

---

## 5. OpenACC Refactoring Lead

> **Tags**: `high-performance-computing-parallelization`, `chatgpt`, `open-source` | **Slug**: `openacc-refactoring-lead`

### 📋 Template:
```text
ROLE: OpenACC Refactoring Lead.
OBJECTIVE: Convert Fortran CFD solver loop **{source_file}** to OpenACC targeting **{gpu_model}**.
REQUIREMENTS:
• Insert directives ensuring data movement minimized.
• Validate numerical results vs original CPU run within 1e-6 tolerance.
• Measure runtime reduction and document compiler flags.
OUTPUT FORMAT: Markdown with code blocks and benchmark plot.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/openacc-refactoring-lead)

---

## 6. Distributed ML Engineer

> **Tags**: `high-performance-computing-parallelization`, `chatgpt`, `open-source` | **Slug**: `distributed-ml-engineer`

### 📋 Template:
```text
ROLE: Distributed ML Engineer.
OBJECTIVE: Set up Horovod training for **{model_arch}** on **{gpu_count}** GPUs across {node_count_dml} nodes.
REQUIREMENTS:
• Demonstrate ring-allreduce efficiency measurement scripts.
• Tune batch size and gradient prefetch to maximize throughput.
• Provide TensorBoard screenshot placeholder.
OUTPUT FORMAT: Markdown with commands and result metrics.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/distributed-ml-engineer)

---

## 7. Hybrid Parallelization Strategist

> **Tags**: `high-performance-computing-parallelization`, `chatgpt`, `open-source` | **Slug**: `hybrid-parallelization-strategist`

### 📋 Template:
```text
ROLE: Hybrid Parallelization Strategist.
OBJECTIVE: Outline MPI+OpenMP strategy to solve Poisson equation in **{mesh_size}** grid points.
REQUIREMENTS:
• Describe domain decomposition and OpenMP collapse hints.
• Present pseudo-code and expected memory usage per rank.
• Compute roofline model estimate on {cpu_model}.
OUTPUT FORMAT: Markdown with code and roofline chart.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/hybrid-parallelization-strategist)

---

## 8. Checkpointing Framework Designer

> **Tags**: `high-performance-computing-parallelization`, `chatgpt`, `open-source` | **Slug**: `checkpointing-framework-designer`

### 📋 Template:
```text
ROLE: Checkpointing Framework Designer.
OBJECTIVE: Design a scalable asynchronous checkpoint mechanism for **{simulation_code}** using SCR library.
REQUIREMENTS:
• Set redundancy level to XOR with 3 partner ranks.
• Include restart latency measurement methodology.
• Provide I/O traces and explain overhead percentage.
OUTPUT FORMAT: Markdown with configuration files and analysis.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/checkpointing-framework-designer)

---

## 9. HPC Containerization Specialist

> **Tags**: `high-performance-computing-parallelization`, `chatgpt`, `open-source` | **Slug**: `hpc-containerization-specialist`

### 📋 Template:
```text
ROLE: HPC Containerization Specialist.
OBJECTIVE: Build an Apptainer recipe for **{bioinformatics_pipeline}** with dependencies listed in **{conda_env_yml}**.
REQUIREMENTS:
• Enable GPU support and MPI passthrough.
• Test container on {test_dataset} and report runtime comparison.
• Publish recipe hash and registration instructions.
OUTPUT FORMAT: Markdown with recipe and results.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/hpc-containerization-specialist)

---

## 10. Exascale Ready Auditor

> **Tags**: `high-performance-computing-parallelization`, `chatgpt`, `open-source` | **Slug**: `exascale-ready-auditor`

### 📋 Template:
```text
ROLE: Exascale Ready Auditor.
OBJECTIVE: Evaluate algorithmic readiness of **{application_name}** for exascale architectures with **{precision_mode}** precision.
REQUIREMENTS:
• Analyze memory bandwidth requirements vs on-chip HBM limits.
• Identify synchronization hotspots and recommend task-based parallelism.
• Summarize compliance with OpenMP 5.2 features.
OUTPUT FORMAT: Markdown with checklist and performance projections.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/exascale-ready-auditor)

---

