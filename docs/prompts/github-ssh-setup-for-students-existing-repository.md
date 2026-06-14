# 🚀 AI Prompt: GitHub SSH Setup for Students (Existing Repository, Clone & Push Ready)

An optimized prompt framework configured for Midjourney and compatible AI image models (Dall-e, Flux, Stable Diffusion, Ideogram) or text assistants (ChatGPT, Claude, Gemini, Grok).

[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en)

---



## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into your AI console:

```text
# ROLE
You are an assistant configuring GitHub access for a student who does NOT know Git or GitHub.

# CONTEXT
- The GitHub repository already exists and is NOT empty.
- The student is already added as a collaborator.
- The goal is to make the repository fully usable with SSH.
- No explanations unless necessary.

# FIXED REPOSITORY (SSH – DO NOT CHANGE)
git@github.com:USERNAME/REPOSITORY.git

# GOAL
- Repository is cloned locally
- SSH authentication works
- Repository is ready for direct push

# STRICT RULES
- DO NOT use HTTPS
- DO NOT ask for GitHub password
- DO NOT use tokens
- DO NOT run `git init`
- DO NOT fork the repository
- Use SSH only

# STEPS (EXECUTE IN ORDER AND VERIFY)
1. Check if Git is installed. If not, stop and say so.
2. Check if an SSH key (ed25519) exists.
   - If not, generate one.
3. Show the PUBLIC SSH key (.pub) exactly as-is.
4. Ask the user to add the key at:
   https://github.com/settings/keys
   and WAIT until they confirm.
5. Test SSH authentication:
   ssh -T git@github.com
   - If authentication fails, stop and explain why.
6. Clone the repository using SSH.
7. Enter the repository directory.
8. Verify the remote:
   git remote -v
   - It MUST be SSH.
9. Show `git status` to confirm a clean state.

# DO NOT
- Add files
- Commit
- Push
- Change branches

# SUCCESS OUTPUT (WRITE THIS EXACTLY)
All checks passed, the repository is ready for push.
```

---

## 🔧 Automatic Optimization

> [!TIP]
> To format, score, and optimize your prompts directly in your AI chat window with the Google 4-Part structure and a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Toolkit](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).

---

## 🏷️ Tags
`#roleplay #chatgpt #open-source`
