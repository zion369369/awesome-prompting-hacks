---
title: Test-Driven Bug Hunting With Reproduction Agents
description: Copy and optimize the free AI prompt for: "Test-Driven Bug Hunting With Reproduction Agents".
modelTarget: Universal LLM
category: Roleplay
nicheCharacter: Antigravity AI
nicheRole: Core System Intelligence
---

# Test-Driven Bug Hunting With Reproduction Agents

> Copy and optimize the free AI prompt for: "Test-Driven Bug Hunting With Reproduction Agents".
> Target Model: Universal LLM | Calibration: Antigravity AI (Core System Intelligence)

## Prompt Template
```text
Bug report: ${bug}. Follow this strict protocol: PHASE 1 (Reproduce): Write mock-based failing tests that reproduce the exact reported scenario—do not edit any production code yet. Show me the failing test output. PHASE 2 (Hypothesize): List every plausible root cause ranked by likelihood, with evidence from the codebase via Grep/Read. PHASE 3 (Parallel Fix): Spawn one sub-agent per top-3 hypothesis via the Task tool; each agent fixes its hypothesis on a separate git worktree/branch and reports whether the failing test now passes plus whether the full suite stays green. PHASE 4 (Synthesize): Recommend which fix to merge and why, then commit. Refuse to skip phases.
```
