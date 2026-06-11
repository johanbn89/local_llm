---
name: ai-instructions
description: Explain, draft, or review AI_INSTRUCTIONS.md and AGENTS.md files. Use when defining repository guidance for coding agents, AI assistants, Codex, Copilot coding agent, or similar tools.
---

# AI_INSTRUCTIONS.md / AGENTS.md

Use this skill when documenting how AI coding agents should work in a repository.

## What It Is For

`AGENTS.md` is a common convention for repository-level coding-agent instructions. Some teams use `AI_INSTRUCTIONS.md` for the same purpose, but support depends on the tool.

## How To Use It

- Put broad repo guidance here, not one-off task instructions.
- Include setup, test, and validation commands.
- Explain repo-specific architecture or gotchas.
- Tell agents what not to touch without approval.
- Keep reusable workflows as skills under `.agents/skills/<skill-name>/SKILL.md`.

## Example Content

```markdown
# Agent Instructions

## Workflow

1. Read relevant files before editing.
2. Keep changes focused.
3. Run tests when behavior changes.
4. Do not rewrite unrelated files.

## Commands

- Test: `npm test`
- Lint: `npm run lint`

## Boundaries

- Do not edit generated files manually.
- Ask before changing deployment configuration.
```
