# Skill Manifest Examples

Examples of structured metadata an LLM platform might use to discover this skill.

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
  "entrypoint": "SKILL.md",
  "resources": [
    "SOURCE_QUALITY.md"
  ]
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

