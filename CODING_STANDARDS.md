# Coding Standards

Standards for writing LLM skills and agent instructions.

## General

- Use direct instructions.
- State when the skill should ask the user for clarification.
- State what the skill should do when information is missing.
- Prefer small examples with realistic inputs and outputs.
- Avoid generic reminders the base model already knows.

## Instruction Style

- Good: "Read `SOURCE_QUALITY.md` before ranking or comparing sources."
- Weak: "You may want to consider looking at the source quality notes."

## File Naming

Use clear uppercase names for root documentation files. Keep `SKILL.md` as the
main entrypoint.

