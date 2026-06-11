---
name: skill-standards
description: Apply writing standards for LLM skills and agent instructions. Use when drafting SKILL.md files, reviewing prompt-like instructions, or improving skill clarity and trigger quality.
---

# Skill Standards

Use these standards when writing or reviewing LLM skills.

## General

- Use direct instructions.
- State when the skill should ask the user for clarification.
- State what the skill should do when information is missing.
- Prefer small examples with realistic inputs and outputs.
- Avoid generic reminders the base model already knows.

## Instruction Style

- Good: "Read `references/checklist.md` before scoring submissions."
- Weak: "You may want to consider looking at the checklist."

## File Naming

Use lowercase folder names with hyphens. Keep the skill entrypoint named `SKILL.md`.
