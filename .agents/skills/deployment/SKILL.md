---
name: deployment
description: Explain, draft, or review DEPLOYMENT.md files. Use when documenting environments, release steps, configuration, rollback, migrations, or operational deployment checks.
---

# DEPLOYMENT.md

Use this skill when documenting how the project is released or operated.

## What It Is For

`DEPLOYMENT.md` explains how to move changes from local development to staging or production.

## How To Use It

- List environments and what they are for.
- Include release commands or pipeline steps.
- Document required configuration and secrets by name, not value.
- Include rollback steps.

## Example Content

```markdown
# Deployment

## Environments

| Environment | Purpose |
| --- | --- |
| Staging | Validate releases |
| Production | Live users |

## Release Checklist

- Tests pass.
- Configuration is reviewed.
- Database migrations are ready.
- Rollback plan is known.

## Rollback

Redeploy the previous known-good version.
```
