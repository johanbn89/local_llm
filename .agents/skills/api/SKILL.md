---
name: api
description: Explain, draft, or review API.md files. Use when documenting endpoints, request and response schemas, authentication, errors, examples, or public interfaces.
---

# API.md

Use this skill when documenting an API or other public interface.

## What It Is For

`API.md` explains how other systems or developers interact with the project through endpoints, functions, events, or contracts.

## How To Use It

- Include base URLs or entrypoints.
- Document authentication.
- Show request and response examples.
- Define error formats.
- Keep examples realistic and valid.

## Example Content

````markdown
# API

## `GET /health`

Returns service health.

### Response

```json
{
  "status": "ok"
}
```

## Errors

```json
{
  "error": {
    "code": "not_found",
    "message": "The resource was not found."
  }
}
```
````
