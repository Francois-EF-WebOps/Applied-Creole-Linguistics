# Applied Creole Linguistics

**Status:** Research and application scaffold; convergence research plan documented, implementation and speaker validation not yet verified.

## Purpose

Applied Creole Linguistics is the research and experimentation layer for the Convergent Creole Tree vision. It investigates how evidence-backed comparisons and practical bridges can improve understanding between Creoles, and whether particular shared forms or conventions are learnable and useful when tested with speakers.

This project does not assume all Creoles are one language, that a proposed common form is already in use, or that a small sample represents an entire community.

## Start here

- [Convergence research and validation plan](docs/convergence-research-and-validation-plan.md) — research questions, source requirements, experiment design, evaluation and decision rules.
- [BabelGlobalKreole architecture](https://github.com/Francois-EF-WebOps/BabelGlobalKreole/blob/main/docs/convergent-creole-tree-architecture.md) — canonical framework and data responsibilities.
- [Mascarene Knowledge Commons discovery brief](https://github.com/Francois-EF-WebOps/mascarene-knowledge-commons/blob/main/docs/CONVERGENT_CREOLE_DISCOVERY.md) — reader-facing discovery and usability goals.

## Current application scaffold

The current repository includes a Google AI Studio application scaffold. The scaffold is not, by itself, proof that the research workflow, comparative corpus, evaluation instruments or language features are implemented or validated.

- [Open the Google AI Studio app](https://ai.studio/apps/drive/1AXdzr7yY8xM6_AtRHm2MURoO4b8mhKTb)

## Run locally

**Prerequisite:** Node.js.

1. Install dependencies: `npm install`
2. Set `GEMINI_API_KEY` in `.env.local` as required by the application.
3. Run the development server: `npm run dev`
4. Before publishing, verify build status, API-key handling, mobile accessibility, source attribution and the app's actual behaviour. Do not expose API keys in client code or committed files.

## Research principles

- Source every claim about real-language usage and identify its scope.
- Preserve original forms, meanings, spelling variation and context.
- Treat similarity as a question to investigate, not proof of common ancestry.
- Keep attested usage, scholarly interpretation, bridge explanation and proposed convergence separate.
- Predefine tasks and scoring before collecting evaluation results.
- Obtain informed consent for participant data and audio; minimise personal data.
- Publish limitations, disagreements and negative results.
- Do not claim speaker validation or community endorsement until evidence exists.

## First milestone

Produce a small reproducible, source-grounded comparison and evaluation protocol. If participant recruitment is unavailable, mark speaker testing as **not yet performed** rather than substituting model output or maintainer intuition.

## Related resources

- [CreoleVal](https://github.com/hclent/creoleval)
- [APiCS Online](https://apics-online.info/)
- [CLDF APiCS dataset](https://github.com/cldf-datasets/apics)

Inspect each resource's current scope, version, licence and provenance before reuse.