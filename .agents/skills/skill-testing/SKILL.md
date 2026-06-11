---
name: skill-testing
description: Design and run prompt-based tests for LLM skills. Use when checking whether a skill triggers correctly, follows its workflow, avoids false positives, or handles uncertainty.
---

# Skill Testing

Use this skill to test that a skill behaves as intended.

## Prompt Tests

Create prompts that should trigger the skill:

```text
Summarize these three research papers and tell me where they disagree.
```

Create prompts that should not trigger it:

```text
Write a short thank-you email to my advisor.
```

## Evaluation Criteria

- Did the model load the right skill?
- Did it follow the workflow in `SKILL.md`?
- Did it avoid unrelated references?
- Did the output match the requested format?
- Did it handle uncertainty honestly?

## Regression Notes

When a skill fails, record the prompt, observed behavior, expected behavior, and the exact instruction changed.
