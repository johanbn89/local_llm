# Global Agent Instructions

Use these instructions when an LLM agent edits, reviews, or creates skills in
this repository.

## Principles

- Treat every skill as instructions for another model, not as user-facing docs.
- Keep `SKILL.md` concise; put detailed reference material in separate root files.
- Write operational instructions, not marketing copy.
- Prefer concrete workflows and examples over broad advice.
- Avoid duplicating the same rule across multiple files.
- Keep changes small and focused.

## Common Workflow

1. Read the skill's `SKILL.md`.
2. Read only the extra root files needed for the task.
3. Update instructions or resources.
4. Validate that the skill still has clear trigger conditions.
5. Test the skill with one or more realistic prompts.

## Skill Writing Style

- Use imperative verbs: "Check", "Ask", "Read", "Summarize".
- Tell the model when to load extra files.
- Include failure behavior and escalation rules.
- Keep examples short enough to fit comfortably in context.
