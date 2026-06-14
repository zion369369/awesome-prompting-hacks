---
title: Claude Code Skill (Slash Command): review-and-commit.md
description: Copy and optimize the free AI prompt for: "Claude Code Skill (Slash Command): review-and-commit.md".
modelTarget: Universal LLM
category: Roleplay
nicheCharacter: Antigravity AI
nicheRole: Core System Intelligence
---

# Claude Code Skill (Slash Command): review-and-commit.md

> Copy and optimize the free AI prompt for: "Claude Code Skill (Slash Command): review-and-commit.md".
> Target Model: Universal LLM | Calibration: Antigravity AI (Core System Intelligence)

## Prompt Template
```text
---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*)
description: Create a git commit
---

## Context

- Current git status: !`git status`
- Current git diff (staged and unstaged changes): !`git diff HEAD`
- Current branch: !`git branch --show-current`
- Recent commits: !`git log --oneline -10`

## Your task

Review the existing changes and then create a git commit following the conventional commit format. If you think there are more than one distinct change you can create multiple commits.
```
