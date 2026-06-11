---
name: skill-manifest
description: Draft skill metadata, optional registry entries, and output contracts. Use when writing SKILL.md frontmatter, describing resources, or defining structured outputs for an LLM skill.
---

# Skill Manifest

Use this skill when defining metadata or structured contracts for skills.

## Minimal Skill Metadata

```yaml
---
name: research-summarizer
description: Summarize research from multiple sources with citations and uncertainty notes. Use for literature summaries, evidence reviews, and source comparison tasks.
---
```

## Optional Registry Entry

```json
{
  "name": "research-summarizer",
  "displayName": "Research Summarizer",
  "version": "0.1.0",
  "entrypoint": ".agents/skills/research-summarizer/SKILL.md",
  "resources": []
}
```

## Output Contract Example

```json
{
  "summary": "string",
  "key_findings": ["string"],
  "uncertainties": ["string"],
  "sources": ["url"]
}
```
