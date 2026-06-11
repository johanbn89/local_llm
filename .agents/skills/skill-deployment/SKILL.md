---
name: skill-deployment
description: Install, publish, or move LLM skills between repo-specific and global locations. Use when setting up .agents/skills, ~/.codex/skills, ~/.claude/skills, or preparing a skill release.
---

# Skill Deployment

Use this skill when installing or publishing skills.

## Codex Locations

Repo-specific skills:

```text
<repo>/.agents/skills/<skill-name>/SKILL.md
```

Global user skills:

```text
~/.codex/skills/<skill-name>/SKILL.md
```

## Claude Code Locations

```text
~/.claude/skills/<skill-name>/SKILL.md
<repo>/.claude/skills/<skill-name>/SKILL.md
```

## Release Checklist

- `SKILL.md` has valid `name` and `description` metadata.
- The description clearly says when to use the skill.
- Referenced files exist.
- Example prompts have been tested.
- No private data or secrets are included.
