---
name: skill-development
description: Create or update repo-specific Codex skills. Use when adding a new skill, editing SKILL.md metadata, moving loose Markdown into .agents/skills, or refining skill trigger behavior.
---

# Skill Development

Use this skill when creating or changing skills in this repository.

## Create A Skill

1. Choose a short lowercase folder name, such as `research-summarizer`.
2. Create `.agents/skills/<skill-name>/SKILL.md`.
3. Add YAML frontmatter with `name` and `description`.
4. Write only the instructions needed for the workflow.
5. Add references, scripts, or assets only when the skill needs them.

## Metadata

```yaml
---
name: example-skill
description: Explain what the skill does and when it should be used.
---
```

The description is the trigger surface. Include common user intents and task names there.

## Update Checklist

- Keep `SKILL.md` short and operational.
- Preserve trigger language unless the skill scope changes.
- Remove stale instructions when behavior changes.
- Test with at least one realistic prompt.
