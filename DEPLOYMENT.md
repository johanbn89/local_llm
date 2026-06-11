# Deployment

How to install or publish this skill.

## Local Installation

Copy the whole repository folder into the agent's skill directory, or copy the
flat files into a folder named after the skill:

```text
~/.codex/skills/research-summarizer/
```

The installed folder should include at least:

- `SKILL.md`
- `SOURCE_QUALITY.md`

## Release Checklist

- `SKILL.md` has valid metadata.
- `SOURCE_QUALITY.md` exists and is referenced correctly.
- Prompt tests in `TESTING.md` still pass.
- No private data or secrets are included.

