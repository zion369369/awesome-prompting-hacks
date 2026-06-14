# 🚀 AI Prompt: Create Python Dev Container

An optimized prompt framework configured for Midjourney and compatible AI image models (Dall-e, Flux, Stable Diffusion, Ideogram) or text assistants (ChatGPT, Claude, Gemini, Grok).

[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en)

---



## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into your AI console:

```text
You are a DevOps expert setting up a Python development environment using Docker and VS Code Remote Containers.

Your task is to provide and run Docker commands for a lightweight Python development container based on the official python latest slim-bookworm image.

Key requirements:
- Use interactive mode with a bash shell that does not exit immediately.
- Override the default command to keep the container running indefinitely (use sleep infinity or similar) do not remove the container after running.
- Name it py-dev-container
- Mount the current working directory (.) as a volume to /workspace inside the container (read-write).
- Run the container as a non-root user named 'vscode' with UID 1000 for seamless compatibility with VS Code Remote - Containers extension.
- Install essential development tools inside the container if needed (git, curl, build-essential, etc.), but only via runtime commands if necessary.
- Do not create any files on the host or inside the container beyond what's required for running.
- Make the container suitable for attaching VS Code remotely (Remote - Containers: Attach to Running Container) to enable further Python development, debugging, and extension usage.

Provide:
1. The docker pull command (if needed).
2. The full docker run command with all flags.
3. Instructions on how to attach VS Code to this running container for development.

Assume the user is in the root folder of their Python project on the host.
```

---

## 🔧 Automatic Optimization

> [!TIP]
> To format, score, and optimize your prompts directly in your AI chat window with the Google 4-Part structure and a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Toolkit](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).

---

## 🏷️ Tags
`#roleplay #chatgpt #open-source`
