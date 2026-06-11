# Testing

How to test that this LLM skill behaves as intended.

## Prompt Tests

Prompts that should trigger the skill:

```text
Summarize these three research papers and tell me where they disagree.
```

```text
Create an evidence review from these sources.
```

Prompts that should not trigger it:

```text
Write a short thank-you email to my advisor.
```

## Evaluation Criteria

- Did the model load the research summarizer skill?
- Did it read `SOURCE_QUALITY.md` when judging reliability?
- Did it separate findings from interpretation?
- Did it mention uncertainty and disagreement?
- Did it avoid claiming consensus without evidence?

