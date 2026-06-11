---
name: security
description: Explain, draft, or review SECURITY.md files. Use when documenting vulnerability reporting, secret handling, supported versions, security review expectations, or safe disclosure process.
---

# SECURITY.md

Use this skill when documenting how security issues are handled.

## What It Is For

`SECURITY.md` tells users and contributors how to report vulnerabilities and what security practices the project follows.

## How To Use It

- Explain how to report issues privately.
- List supported versions if relevant.
- Describe secret handling rules.
- Include expectations for dependency updates and security reviews.

## Example Content

```markdown
# Security

## Reporting A Vulnerability

Please do not open a public issue for security vulnerabilities.
Send details to `security@example.com`.

## Supported Versions

| Version | Supported |
| --- | --- |
| 1.x | Yes |
| 0.x | No |

## Secrets

- Do not commit API keys, tokens, or passwords.
- Use environment variables for local secrets.
```
