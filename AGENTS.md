# Codex Instructions for This Repository

This repository is a personal technical project showcase. Treat Markdown files in
`projects/*.md` as technical portfolio case studies, not casual notes.

## Project Markdown Writing Rules

When editing files in `projects/*.md`:

- Preserve factual accuracy and technical meaning.
- Improve clarity, structure, grammar, and professional tone.
- Keep the writing concise, specific, and outcome-focused.
- Use active voice where it reads naturally.
- Highlight the project problem, scope, technical actions, tools, architecture,
  challenges, solutions, and engineering or business impact.
- Do not invent metrics, tools, services, company names, timelines, diagrams,
  links, responsibilities, or results.
- If a useful detail is missing, add a short `TODO:` note or ask for
  confirmation instead of guessing.
- Prefer English for public-facing project write-ups unless the user asks for
  Indonesian.
- Keep Markdown simple so the React parser can read it correctly.

## Required Project Structure

Project files should use this heading pattern:

```md
# Project Title

## Overview

## Tech Stack

## Challenges & Solutions

## Architecture

## Results / Impact

## Links
```

The app parser recognizes English and Indonesian aliases, but these English
headings are preferred for consistency.

## Section Guidance

- `Overview`: Explain what was built or migrated, who it served, and the scope.
- `Tech Stack`: Use bullet points. List only technologies actually used.
- `Challenges & Solutions`: Use bold numbered challenge titles, followed by a
  concise explanation of the solution.
- `Architecture`: Describe the system layout, major AWS or platform components,
  traffic flow, storage, security controls, and provisioning approach.
- `Results / Impact`: Use bullet points. Focus on completed outcomes, risk
  reduction, delivery quality, operational visibility, or measurable impact.
- `Links`: Use Markdown links only when real links are available. Leave the
  section empty if there are no links.

## Preferred Editing Workflow

When asked to polish or improve a project Markdown file:

1. Read the current file before editing.
2. Keep the same facts and scope unless the user provides new information.
3. Rewrite for a technical recruiter, engineering manager, or cloud delivery
   audience.
4. Make the impact stronger without adding unsupported claims.
5. After editing, briefly summarize what changed and note any missing details
   that would make the write-up stronger.

## Examples of Safe Improvements

- Change vague wording like "worked on AWS setup" to "deployed AWS
  infrastructure for the application using Terraform" when the file already
  states those facts.
- Change passive or generic impact like "project completed" to "completed the
  migration with reduced downtime risk through dependency mapping and a staged
  runbook" when supported by the file.
- Do not change "7 servers" to "50+ servers" unless the user confirms it.
