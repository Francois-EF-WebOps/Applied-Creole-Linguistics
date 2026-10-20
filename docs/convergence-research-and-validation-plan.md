# Convergent Creole Research and Validation Plan

**Status:** Research plan; no results claimed  
**Purpose:** Turn the convergent Creole vision into testable linguistic questions and speaker-centred experiments.

## 1. Role of this project

Applied Creole Linguistics is the research and experimentation layer in the wider portfolio:

- BabelGlobalKreole defines the shared evidence model, record schemas, statuses and interoperability contracts.
- Applied Creole Linguistics investigates questions, compares sourced language evidence, designs evaluation tasks and records results.
- Mascarene Knowledge Commons makes vetted findings discoverable, contextualised and useful to readers.

This repository currently contains a Google AI Studio application scaffold. The existence of the scaffold does not establish that the research workflows below are implemented. Keep this plan explicit until a working implementation and its tests are verified.

## 2. Research question

Can a carefully designed bridge improve comprehension between selected Creole varieties, and can a proposed shared form or rule improve communication without erasing the meaning, variation or identity of the source varieties?

This question contains two distinct hypotheses:

- **H1 — Bridge hypothesis:** sourced explanations, glosses, paraphrases or contextual examples improve comprehension compared with a bare word-for-word mapping.
- **H2 — Convergence hypothesis:** for some selected concepts or tasks, a transparently designed common candidate may be learnable and usable across participating speaker groups.

Neither hypothesis is assumed true. A bridge may work well without a single shared form being preferable. Results may differ by task, variety, register or participant.

## 3. Evidence before experiments

For every candidate item, capture:
- exact form and meaning;
- language and variety as supported by evidence;
- source title, creator/institution, URL, version/date and access date;
- exact page, section, entry or timestamp;
- context, register and orthographic variants where documented;
- licence, attribution, consent and permitted operations;
- evidence label and reviewer status;
- competing forms, meanings or analyses;
- what the source does not establish.

Do not infer a shared meaning from spelling similarity. Do not assume all Creoles share ancestry or structure. Treat Haitian Kreyòl and Mauritian Kreol as separate language varieties whose relationship for each feature must be investigated and sourced.

## 4. Small pilot design

### Stage A — select tasks

Choose a small number of practical concepts or communicative tasks with adequate source evidence. Prefer items where meaning can be explained clearly and risk is low. Avoid culturally sensitive, medical, legal or safety-critical content in the first pilot.

### Stage B — create comparison conditions

For each task, prepare alternatives such as:
1. **Baseline:** the source-language form with a plain explanation.
2. **Bridge:** a cross-variety gloss, paraphrase, or contextual example.
3. **Candidate convergence:** a proposed shared form or rule, only if the evidence justifies testing one.

Record the design rationale and do not silently change source forms to fit the candidate.

### Stage C — write tasks before collecting responses

Possible tasks:
- choose the intended meaning of an unseen sentence;
- paraphrase a short message;
- follow a simple instruction;
- produce a response for a stated context;
- identify ambiguity or a false friend;
- learn a candidate after a short teaching sequence and apply it to a new example.

Avoid evaluating only familiar memorised examples. Use matched task difficulty where possible and document how scoring works.

### Stage D — recruit and protect participants

Recruit volunteers with relevant language experience and describe the study plainly. Do not imply that a small sample represents an entire community. Record only information needed to interpret results. Obtain informed consent before collecting responses, audio or demographic data. Do not publish identifiable voice recordings or personal details without explicit permission and an appropriate rights basis.

Where recruitment is not yet possible, use the protocol as a design review only and mark speaker validation **not yet performed**.

## 5. Evaluation dimensions

| Dimension | What to observe |
|---|---|
| Comprehension | Correct interpretation of the intended meaning |
| Production | Whether the response communicates the intended meaning |
| Naturalness | Speaker judgement in the stated context and register |
| Learnability | Improvement after a defined short learning exposure |
| Ambiguity | Multiple plausible readings or false-friend risks |
| Cross-variety coverage | Results separated by relevant variety and participant group |
| Accessibility | Performance in text/audio and on low-bandwidth mobile devices where relevant |
| Acceptance | Reasons for accepting, rejecting or preferring alternatives |
| Retention/use | Whether voluntary use continues in a later, separately documented test |

Use descriptive results for small pilots; do not claim statistical generality without an appropriate sample and analysis plan. Report missing responses, task-order effects, recruitment bias and uncertainty.

## 6. Decision rules

- **Keep bridge only:** when explanations improve comprehension and no common form adds demonstrated value.
- **Revise candidate:** when a candidate is promising but ambiguous, unnatural or hard to learn.
- **Keep multiple alternatives:** when preferences or performance differ by variety or context.
- **Reject candidate:** when it systematically distorts meaning, causes harmful confusion or performs worse than the bridge.
- **Defer:** when source evidence, rights, consent or sample quality is insufficient.
- **Do not claim adoption:** unless sustained use is documented beyond a one-time evaluation.

A speaker's preference is valuable evidence, but a single person's preference is not universal community consensus. Record disagreements rather than manufacturing agreement.

## 7. Required experiment record

Each experiment should contain:
- experiment ID and version;
- research question and hypotheses;
- language/variety scope;
- source and rights records;
- candidate forms and comparison conditions;
- participant eligibility and recruitment method;
- consent and privacy plan;
- task instructions and scoring rubric;
- results by relevant group, with sample size;
- limitations, counterexamples and disagreement;
- decision, reviewer status and next step;
- affected BabelGlobalKreole records and MKC resource links.

Do not store raw personal data in a public repository. Publish aggregate results and anonymised examples only where consent and rights permit.

## 8. Research-to-framework handoff

When a result is ready to share:
1. Create or update a sourced research record.
2. Submit the relevant evidence and proposal IDs to BabelGlobalKreole.
3. Keep proposed forms labelled as proposals until the framework's review requirements are met.
4. Provide MKC with a plain-language summary, scope, source links, uncertainty and a useful next step.
5. Add regression examples so later changes do not silently undo a validated result.
6. Record the exact version tested.

## 9. First milestone

The first milestone is a reproducible, small pilot—not a claim to have created or validated a universal language.

- [ ] One narrow research question.
- [ ] A small set of inspected, rights-cleared or metadata-only source records.
- [ ] At least two comparison conditions where justified.
- [ ] Tasks and scoring rubric defined before data collection.
- [ ] Privacy and consent procedure.
- [ ] Results explicitly marked not yet collected until they exist.
- [ ] A clear decision path: retain bridge, revise, reject, defer or continue testing.
- [ ] A cross-link to the Babel architecture and MKC discovery brief.

## 10. Related projects and resources

- BabelGlobalKreole architecture: https://github.com/Francois-EF-WebOps/BabelGlobalKreole/blob/main/docs/convergent-creole-tree-architecture.md
- Mascarene Knowledge Commons: https://github.com/Francois-EF-WebOps/mascarene-knowledge-commons
- CreoleVal: https://github.com/hclent/creoleval
- APiCS Online: https://apics-online.info/

Inspect each resource's scope, version, licence and source provenance before reuse.