---
name: research-summarizer
description: Summarize research from multiple sources with citations, uncertainty notes, and clear conclusions. Use when the user asks for literature summaries, evidence reviews, source comparisons, paper digests, or research briefings.
---

# Research Summarizer

Use this skill to turn multiple research sources into a concise, evidence-aware summary.

## Workflow

1. Identify the user's research question and desired depth.
2. Gather or inspect the provided sources.
3. Apply the source-quality checks from the `source-quality` skill when judging reliability.
4. Separate findings from interpretation.
5. Note disagreements, limitations, and uncertainty.
6. Produce a concise synthesis with source references.

## Output Shape

Use this structure unless the user requests another format:

```markdown
## Summary
One short paragraph with the main answer.

## Key Findings
- Finding with source.
- Finding with source.

## Disagreements Or Gaps
- Where sources conflict, are weak, or leave open questions.

## Bottom Line
One or two practical takeaways.
```

## Rules

- Do not claim consensus unless the sources support it.
- Prefer primary sources over commentary when both are available.
- Say when evidence is old, incomplete, or indirect.
- Keep quotes short and use paraphrase for most content.
