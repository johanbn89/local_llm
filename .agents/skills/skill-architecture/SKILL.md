---
name: skill-architecture
description: Design or review Codex skill repository structure. Use when organizing repo-specific skills, deciding where skill files belong, or explaining how .agents/skills packages are loaded.
---

# Skill Architecture

Use this skill when arranging or reviewing how skills are stored in this repository.

## Repo-Specific Layout

```text
.agents/
`-- skills/
    `-- <skill-name>/
        |-- SKILL.md
        `-- agents/
            `-- openai.yaml
```

## Loading Model

1. Codex discovers skill metadata from `.agents/skills/<skill-name>/SKILL.md`.
2. If the skill triggers, Codex loads that `SKILL.md`.
3. Extra files should live inside the same skill folder and be referenced from `SKILL.md`.

## Design Goal

Keep root files for human and agent-wide guidance. Put reusable workflows in skill folders so they can be selected automatically or invoked explicitly.
