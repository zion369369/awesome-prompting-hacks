# 📋 Quick Copy Quantum Computing & Simulation Prompt Cheat Sheet

This file contains **10** curated prompt templates for **Quantum Computing & Simulation**. Copy and paste them directly into your AI chat window.

---

## 1. Quantum Error Mitigation Specialist

> **Tags**: `quantum-computing-simulation`, `chatgpt`, `open-source` | **Slug**: `quantum-error-mitigation-specialist`

### 📋 Template:
```text
ROLE: Quantum Error Mitigation Specialist.
OBJECTIVE: Draft a detailed protocol to apply zero-noise extrapolation on raw counts from **{qubit_device}** running **{circuit_name}**.
REQUIREMENTS:
• Include calibrated gate error rates and readout assignment matrices from {qubit_device}.
• Provide Python code using the {sdk} SDK that implements noise scaling and Richardson extrapolation.
• Summarize expected fidelity gains in a table comparing baseline vs mitigated results.
OUTPUT FORMAT: Markdown with H2 headers (Background | Code | Results).
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/quantum-error-mitigation-specialist)

---

## 2. Quantum Compiler Optimizer

> **Tags**: `quantum-computing-simulation`, `chatgpt`, `open-source` | **Slug**: `quantum-compiler-optimizer`

### 📋 Template:
```text
ROLE: Quantum Compiler Optimizer.
OBJECTIVE: Generate an optimized QASM for **{algorithm}** targeting **{target_hardware}** minimizing two-qubit gate depth.
REQUIREMENTS:
• Use ZX-calculus transformations to reduce CNOT count by at least 30 %.
• Annotate each optimization pass with before-after gate counts.
• Provide final circuit diagram in ASCII and OpenQASM code.
OUTPUT FORMAT: Markdown; separate code blocks for QASM and diagrams.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/quantum-compiler-optimizer)

---

## 3. Topological Qubit Theorist

> **Tags**: `quantum-computing-simulation`, `chatgpt`, `open-source` | **Slug**: `topological-qubit-theorist`

### 📋 Template:
```text
ROLE: Topological Qubit Theorist.
OBJECTIVE: Produce a LaTeX mini-review of anyonic braiding statistics for **{platform}** within **{word_limit}** words.
REQUIREMENTS:
• Explain SU(2)_k fusion rules relevant to {platform}.
• Compare Fibonacci vs Ising anyons in tabular form.
• Cite at least 5 peer-reviewed papers in APS style.
OUTPUT FORMAT: LaTeX article skeleton.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/topological-qubit-theorist)

---

## 4. Quantum Monte Carlo Analyst

> **Tags**: `quantum-computing-simulation`, `chatgpt`, `open-source` | **Slug**: `quantum-monte-carlo-analyst`

### 📋 Template:
```text
ROLE: Quantum Monte Carlo Analyst.
OBJECTIVE: Design a VMC study of 2-D Hubbard model at **{filling_factor}** using **{ansatz_type}** wavefunction.
REQUIREMENTS:
• Specify lattice size, boundary conditions, and J/t values.
• Provide pseudocode for Metropolis sampling with sign problem mitigation.
• Report expected energy convergence criteria and runtime estimates.
OUTPUT FORMAT: Markdown report with code blocks and math formulae.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/quantum-monte-carlo-analyst)

---

## 5. Quantum Machine Learning Engineer

> **Tags**: `quantum-computing-simulation`, `chatgpt`, `open-source` | **Slug**: `quantum-machine-learning-engineer`

### 📋 Template:
```text
ROLE: Quantum Machine Learning Engineer.
OBJECTIVE: Outline a hybrid classifier combining QSVC on **{backend_name}** with classical SVM for **{dataset_name}**.
REQUIREMENTS:
• Detail feature map encoding and circuit depth budget (< 60 gates).
• Include training loop in {ml_framework} integrating qiskit-runtime.
• Plot decision boundary and report balanced accuracy.
OUTPUT FORMAT: Jupyter-ready Markdown.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/quantum-machine-learning-engineer)

---

## 6. NISQ Benchmark Designer

> **Tags**: `quantum-computing-simulation`, `chatgpt`, `open-source` | **Slug**: `nisq-benchmark-designer`

### 📋 Template:
```text
ROLE: NISQ Benchmark Designer.
OBJECTIVE: Create a benchmark suite to evaluate coherence-limited performance of **{hardware_series}** across varying circuit widths.
REQUIREMENTS:
• Select 4 representative algorithms (QFT, Grover, VQE, GHZ) with parameterized depths.
• Provide YAML spec describing each job submission via {api_endpoint}.
• Define KPIs: average EPG, SPAM error, and circuit success rate.
OUTPUT FORMAT: Markdown with YAML code blocks.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/nisq-benchmark-designer)

---

## 7. Quantum Error Correction Simulator

> **Tags**: `quantum-computing-simulation`, `chatgpt`, `open-source` | **Slug**: `quantum-error-correction-simulator`

### 📋 Template:
```text
ROLE: Quantum Error Correction Simulator.
OBJECTIVE: Setup a surface-code simulation for **{code_distance}** distance using **{noise_model}** in Stim.
REQUIREMENTS:
• Show logical error rate vs physical error probability curve (log-log).
• Include Python snippet to generate lattice and match syndrome.
• Discuss thresholds relative to current NV-center qubits.
OUTPUT FORMAT: Markdown plus matplotlib figure placeholder.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/quantum-error-correction-simulator)

---

## 8. Quantum Finance Strategist

> **Tags**: `quantum-computing-simulation`, `chatgpt`, `open-source` | **Slug**: `quantum-finance-strategist`

### 📋 Template:
```text
ROLE: Quantum Finance Strategist.
OBJECTIVE: Propose a quantum amplitude estimation workflow for pricing **{exotic_option}** using **{oracle_type}** oracle.
REQUIREMENTS:
• Derive analytic payoff function and encode in controlled unitary.
• Estimate required number of evals to reach 1 % error with 95 % confidence.
• Provide Qiskit code and classical baseline comparison.
OUTPUT FORMAT: Markdown with equations and code sections.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/quantum-finance-strategist)

---

## 9. Quantum Metrology Architect

> **Tags**: `quantum-computing-simulation`, `chatgpt`, `open-source` | **Slug**: `quantum-metrology-architect`

### 📋 Template:
```text
ROLE: Quantum Metrology Architect.
OBJECTIVE: Design a Ramsey interference experiment achieving Heisenberg-limited scaling on **{sensor_platform}** for frequency **{target_frequency}**.
REQUIREMENTS:
• Specify pulse sequence and optimal interrogation time.
• Include error sources and their mitigation strategies in table.
• Predict SNR improvement factor over SQL baselines.
OUTPUT FORMAT: Markdown report with schematic SVG reference.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/quantum-metrology-architect)

---

## 10. Quantum Networking Protocol Engineer

> **Tags**: `quantum-computing-simulation`, `chatgpt`, `open-source` | **Slug**: `quantum-networking-protocol-engineer`

### 📋 Template:
```text
ROLE: Quantum Networking Protocol Engineer.
OBJECTIVE: Draft an entanglement swapping protocol spec for nodes **{node_count}** over **{fiber_length}** km with {bell_measurement} measurements.
REQUIREMENTS:
• Describe timing synchronization requirements to sub-nanosecond accuracy.
• Provide NS-3 simulation configuration snippet.
• List security vulnerabilities and mitigation controls.
OUTPUT FORMAT: RFC-style Markdown.
```

[View interactive details page](https://zion369369.github.io/awesome-prompting-hacks/prompts/quantum-networking-protocol-engineer)

---

