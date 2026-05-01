# Project Showcase

A static React + Vite project showcase built from Markdown files in `projects/`.

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The production-ready static site is generated in `dist/`. Upload the contents of
that folder to an S3 bucket configured for static website hosting.

## Content

Add new projects as Markdown files in `projects/` using the same heading pattern
as the existing project notes. `projects/example-project.md` is treated as a
local template and is excluded from the public build.
