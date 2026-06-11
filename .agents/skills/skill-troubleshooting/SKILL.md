---
name: skill-troubleshooting
description: Diagnose and fix LLM skill problems. Use when a skill does not trigger, triggers too often, ignores instructions, references missing files, or produces inconsistent output.
---

# Skill Troubleshooting

Use this skill when a skill is not behaving as expected.

## Skill Does Not Trigger

The description may be too narrow or vague. Add common user intents and task names to the metadata description.

## Skill Triggers Too Often

The description may be too broad. Remove generic phrases that apply to many unrelated tasks.

## Model Ignores Reference Files

Make sure `SKILL.md` explicitly says when to read each reference file.

## Skill Is Too Long

Move long examples, policies, schemas, and background information into a reference file inside the skill folder.

## Output Is Inconsistent

Add a compact output template or checklist. Test again with the same prompt and compare behavior.
