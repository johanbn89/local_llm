# Troubleshooting

Common problems when creating or using this skill.

## Skill Does Not Trigger

The description may be too narrow or vague. Add common user intents and task
names to the metadata description in `SKILL.md`.

## Skill Triggers Too Often

The description may be too broad. Remove generic phrases that apply to many
writing, summary, or analysis tasks.

## Model Ignores Source Quality Rules

Make sure `SKILL.md` explicitly says when to read `SOURCE_QUALITY.md`.

## Skill Is Too Long

Move detailed source evaluation guidance out of `SKILL.md` and into
`SOURCE_QUALITY.md`.

## Output Is Inconsistent

Add a compact output template or checklist to `SKILL.md`. Test again with the
same prompt and compare behavior.

