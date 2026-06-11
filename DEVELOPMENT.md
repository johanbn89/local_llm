# Development

How to update this LLM skill.

## Edit The Skill

1. Update `SKILL.md` when the core workflow changes.
2. Update `SOURCE_QUALITY.md` when source evaluation rules change.
3. Update support files when process, testing, deployment, or troubleshooting
   guidance changes.

## Metadata

The skill starts with YAML frontmatter:

```yaml
---
name: research-summarizer
description: Summarize research from multiple sources with citations, uncertainty notes, and clear conclusions. Use when the user asks for literature summaries, evidence reviews, source comparisons, paper digests, or research briefings.
---
```

The description is the trigger surface. Keep it specific enough to avoid
triggering on unrelated writing tasks.

## Update Checklist

- Keep `SKILL.md` short and operational.
- Link any extra root files by exact filename.
- Remove stale instructions when behavior changes.
- Test with at least one realistic prompt.

