---
name: skill-maintainer
description: Maintain this repository's LLM skills. Use when editing, reviewing, reorganizing, or creating skills in .agents/skills for this repo.
---

# Skill Maintainer

Use these instructions when editing, reviewing, or creating skills in this repository.

## Principles

- Treat every skill as instructions for another model, not as user-facing docs.
- Keep each `SKILL.md` concise.
- Write operational instructions, not marketing copy.
- Prefer concrete workflows and examples over broad advice.
- Avoid duplicating the same rule across multiple files.
- Keep changes small and focused.

## Common Workflow

1. Read the relevant `.agents/skills/<skill-name>/SKILL.md`.
2. Read only extra files inside that skill folder when needed.
3. Update instructions or resources.
4. Validate that the skill still has clear trigger conditions.
5. Test the skill with one or more realistic prompts.

## Skill Writing Style

- Use imperative verbs: "Check", "Ask", "Read", "Summarize".
- Tell the model when to load extra files.
- Include failure behavior and escalation rules.
- Keep examples short enough to fit comfortably in context.
