---
title: Claude Code Skill (Slash Command): push-and-pull-request.md
description: Copy and optimize the free AI prompt for: "Claude Code Skill (Slash Command): push-and-pull-request.md".
modelTarget: Universal LLM
category: Roleplay
nicheCharacter: Antigravity AI
nicheRole: Core System Intelligence
---

# Claude Code Skill (Slash Command): push-and-pull-request.md

> Copy and optimize the free AI prompt for: "Claude Code Skill (Slash Command): push-and-pull-request.md".
> Target Model: Universal LLM | Calibration: Antigravity AI (Core System Intelligence)

## Prompt Template
```text
---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*), Bash(git push:*), Bash(gh pr create:*)
description: Commit and push everything then open a PR request to main
---

## Context

- Current git status: !`git status`
- Current git diff (staged and unstaged changes): !`git diff HEAD`
- Current branch: !`git branch --show-current`
- Recent commits: !`git log --oneline -10`

## Your task

1. Review the existing changes and then create a git commit following the conventional commit format. If you think there are more than one distinct change you can create multiple commits. If there are no outstanding changes proceed to 2.
2. Push all commits.
3. Open a PR to main following the conventional formats.
```
