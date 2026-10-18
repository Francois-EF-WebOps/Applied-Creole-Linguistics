# KIT.md — Linguistics App Run, Review and Handover Kit

**Scope:** safe, reproducible operation of the current application repository. Read the actual application before claiming its linguistic functions or results.

## Read first
1. `README.md`
2. `package.json` and the lockfile, if present
3. application entry points and existing tests
4. deployment and environment configuration
5. licence and any data/source notices

## Requirements and procurement
- Minimum requirement shown in the README: Node.js. Verify the version from project files before installing.
- Use a compatible free Node.js environment where available; no paid subscription is assumed.
- Required artefacts: purpose/use case, data inputs and provenance, expected output, failure behaviour, privacy notes, dependency inventory, and acceptance tests.
- If an external model/API is required, document its cost, limits and data handling before use. A no-API/manual fallback should be specified where feasible.

## Procedure
1. Inspect scripts with `npm run` and inspect dependencies before running project commands.
2. Confirm `.env.local` is ignored by Git. Use local environment variables only; never commit API keys or place secrets in browser-delivered code.
3. Install dependencies using the repository's documented lockfile-aware command.
4. Run the documented development command (`npm run dev` per the current README).
5. Exercise one normal input, one empty/invalid input and one error/network-unavailable case.
6. Verify that outputs do not invent linguistic evidence or lose source provenance.
7. Inspect the diff, console errors, network requests and browser-visible configuration for accidental secret exposure.
8. Record exact environment, commands, actual results and limitations.

## Acceptance
- [ ] App starts with documented steps.
- [ ] Required environment variables are documented without exposing values.
- [ ] Positive and negative cases have recorded outcomes.
- [ ] Linguistic claims are distinguishable from generated suggestions.
- [ ] Data source, rights and privacy boundaries are clear.
- [ ] Secrets are not committed or exposed to clients.
- [ ] Unrun tests are explicitly marked.

**Stop condition:** if a key is embedded in client code or a real credential appears in history, stop publishing and rotate/revoke the credential before proceeding.