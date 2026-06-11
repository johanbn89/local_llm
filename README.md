# Guide to Running Local LLMs

A plain local LLM usually only does this:

```text
input text -> model -> output text
```

It does not automatically know how to edit files, run commands, search your
project, call APIs, use your terminal, or browse documentation.

Those abilities come from the application around the model, for example:

```text
VS Code Copilot / Continue / Claude Code / Codex / Cline
```

These apps provide the "skills" or tools, such as:

- read files
- edit files
- search workspace
- run terminal commands
- run tests
- inspect errors
- call external APIs

The model decides what to do, but the app actually provides and controls the
tools.

So the layers are:

```text
Model:
Phi-4, Llama, Qwen, Mistral, Claude, GPT, etc.

Runtime/backend:
Ollama, Foundry Local, LM Studio, llama.cpp, vLLM, etc.

Agent/app/tool layer:
VS Code Copilot agent mode, Claude Code, Codex, Continue, Cline, Aider, etc.
```

There are many ways to run and interact with an LLM locally, for example
through VS Code, the Codex app, or the Claude Code desktop app.

For desktop applications, you can often change the model by switching the
backend. One common backend is Ollama, a framework for running models locally.

For example, you can use Ollama to run a Llama model and connect it to
applications that support local model backends:

https://ollama.com/library/llama3.1

You need to install Ollama first before using it as a backend.

Another alternative is to use VS Code and install the Microsoft Foundry Toolkit
extension. Press `Ctrl + Alt + L` to open the chat window, then choose one of
the local LLMs.

<img width="457" height="259" alt="image" src="https://github.com/user-attachments/assets/736bffd0-a70b-466d-ada2-198a5288b6b8" />

Remark:
Agent mode means the AI can do more than just answer questions.

In normal chat mode, you ask something and the model replies with text.

In agent mode, the model can act more like a coding assistant that works
through a task. In VS Code/Copilot, it can inspect your workspace, decide which
files need changes, suggest or make edits, propose terminal commands, and
iterate until the task is done.

## LLM Skills And Instructions

Skills are reusable instruction packages for agent workflows. They sit above
the model and inside the agent/app/tool layer: the model still reasons, but the
skill gives it task-specific steps, references, and sometimes helper scripts.

Plain `.md` files are useful only when an agent knows to read them. Different
coding agents discover skills and instructions in different ways.

## Codex Skills

Codex supports both global skills and repo-specific skills.

Use global skills for personal workflows you want available across projects:

```text
~/.codex/skills/<skill-name>/SKILL.md
```

On Windows, that is usually:

```text
C:\Users\<you>\.codex\skills\<skill-name>\SKILL.md
```

Use repo-specific skills for workflows that should travel with a project:

```text
<repo>/.agents/skills/<skill-name>/SKILL.md
```

A Codex skill is a folder, not just a loose Markdown file. The required file is
`SKILL.md`, and it should start with metadata:

```yaml
---
name: research-summarizer
description: Summarize research from multiple sources with citations, uncertainty notes, and clear conclusions. Use when the user asks for literature summaries, evidence reviews, source comparisons, paper digests, or research briefings.
---
```

This repository uses repo-specific Codex skills:

```text
local_llm/
|-- README.md
|-- AGENTS.md
`-- .agents/
    `-- skills/
        |-- research-summarizer/
        |   `-- SKILL.md
        |-- source-quality/
        |   `-- SKILL.md
        |-- skill-architecture/
        |   `-- SKILL.md
        |-- skill-development/
        |   `-- SKILL.md
        |-- skill-standards/
        |   `-- SKILL.md
        |-- skill-testing/
        |   `-- SKILL.md
        |-- skill-deployment/
        |   `-- SKILL.md
        |-- skill-manifest/
        |   `-- SKILL.md
        |-- skill-troubleshooting/
        |   `-- SKILL.md
        `-- skill-maintainer/
            `-- SKILL.md
```

Each former topic Markdown file is now a skill folder with its own `SKILL.md`.
`README.md` remains the human-facing overview, and `AGENTS.md` remains broad
repo guidance for coding agents.

Codex can select a skill automatically from the prompt, or you can invoke one
explicitly. In Codex, explicit skill invocation is usually done with
`$skill-name`, such as `$research-summarizer`. In the Codex CLI, you can also
use `/skills` to pick a skill from a menu.

## Claude Code Skills

Claude Code also uses skill folders with a `SKILL.md` file.

Common locations are:

```text
~/.claude/skills/<skill-name>/SKILL.md
```

or project-local:

```text
<repo>/.claude/skills/<skill-name>/SKILL.md
```

The same basic pattern applies: one folder per skill, with `SKILL.md` as the
entrypoint and optional supporting files beside it.

Claude Code skills can be selected automatically, and they can also be invoked
manually with slash commands such as `/research-summarizer`. The command name
usually comes from the skill folder location, not only from the frontmatter
`name`.

## VS Code Copilot Instructions

VS Code Copilot does not use `SKILL.md` as a general skill system. It uses
custom instruction files.

Use this file for project-wide Copilot guidance:

```text
<repo>/.github/copilot-instructions.md
```

Use path-specific instruction files like this:

```text
<repo>/.github/instructions/research.instructions.md
```

Example:

```markdown
---
applyTo: "**/*.md"
---

When summarizing research, separate findings from interpretation and call out
uncertainty.
```

Copilot instruction files are not normally invoked like `/the-skill`. They are
applied by Copilot based on the workspace and matching file patterns.

## AGENTS.md

Use `AGENTS.md`, plural, for general repository guidance for coding agents.
`AGENT.md`, singular, is not the common convention.

`AGENTS.md` is useful for rules that apply to all work in the repo, such as
setup commands, test commands, code style, architecture notes, and project
gotchas. It is not the same thing as a Codex or Claude skill.

Common support:

| Tool | Uses `AGENTS.md`? | Notes |
| --- | --- | --- |
| Codex | Yes | Codex reads global and project `AGENTS.md` files before doing work. |
| GitHub Copilot coding agent | Yes | GitHub supports one or more `AGENTS.md` files in a repo; the nearest file takes precedence. |
| VS Code Copilot Chat/Agent | Yes | VS Code can apply a root `AGENTS.md`; nested support can be enabled separately. |
| Claude Code | Not as the main convention | Claude Code primarily uses `CLAUDE.md` for repo instructions and `SKILL.md` for skills. |
| Other coding agents | Sometimes | `AGENTS.md` is an emerging shared convention, but each tool must explicitly support it. |

Helpful docs:

- Codex: https://developers.openai.com/codex/guides/agents-md
- GitHub Copilot: https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot
- VS Code Copilot: https://code.visualstudio.com/docs/agent-customization/custom-instructions
- Shared convention: https://agents.md/

## Quick Rule

```text
Codex skill = folder + SKILL.md in ~/.codex/skills or .agents/skills
Codex manual invocation = $skill-name, or /skills in the CLI
Claude Code skill = folder + SKILL.md in ~/.claude/skills or .claude/skills
Claude Code manual invocation = /skill-name
Copilot instruction = .github/copilot-instructions.md or .github/instructions/*.instructions.md
AGENTS.md = broad repo guidance for coding agents
Plain .md file = only useful if the agent is told to read it; it is not a skill by itself
```
