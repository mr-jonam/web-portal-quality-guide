# Web Portal Quality Guide

Explore web portal testing, accessibility evaluation and cross-platform acceptance questions with a local journey discussion map.

**For:** Digital product owners, portal owners and QA leads discussing customer, employee or partner experiences.

**Decision in focus:** Which part of the user journey has an unresolved quality or accessibility question?

<!-- publication:links:start -->
[Read the guide on GitHub](GUIDE.md) · [Browse all eight guides](https://github.com/mr-jonam/digital-platform-testing-guide/blob/master/REPOSITORIES.md) · [Discuss professional support](https://www.linkedin.com/in/manoj-rollo/)

<a href="https://www.linkedin.com/in/manoj-rollo/"><img src="docs/assets/cta-discuss.svg" width="280" height="60" alt="Discuss your testing question on LinkedIn" /></a>
<!-- publication:links:end -->

## Start here

- [Decision guide](GUIDE.md): public-source context and original discussion questions.
- [Mini tool source / local page](docs/tool.html): portal journey conversation map.
- [Sources and retrieval limitations](docs/references.html).
- [Prepare a collaboration request](docs/contact.html): local copy/download, with a direct LinkedIn contact link.
- [Optional orientation skill](skills/web-portal-quality-guide/SKILL.md).

Open `docs/index.html` in a browser or use the local preview:

```sh
npm run preview
```

Then open [http://127.0.0.1:4173](http://127.0.0.1:4173). No package installation is needed. Node.js 22 or later is used for the optional preview and configuration commands. The static pages also work from local files.

## What you can learn

- Frame identity, business handovers, accessibility and performance questions together.
- Recognise the limits of automated accessibility evidence.
- Produce a safe first-contact brief about a portal journey.

The mini tool works in the browser without sign-up, cookies, analytics, external libraries, AI API calls or platform connections. Results reflect user selections or assumptions. Copying and text downloads are user initiated.

## From a useful question to a collaboration

1. Read the decision guide and official references.
2. Use the mini tool to identify what needs clarification.
3. Copy the questions you want to discuss and prepare a sanitised request.
4. [Send a short LinkedIn enquiry](https://www.linkedin.com/in/manoj-rollo/) naming the guide, broad platform and decision ahead.

A first conversation can clarify the evidence question, its scope and whether a further engagement would be useful. Assessment, testing delivery or ongoing support can be scoped after that discussion; reading the guide does not promise an engagement or outcome. Never post client context or assessment requests in public issues.

## Scope

This repository contains orientation material, a small local discussion aid and an optional assistant skill. It supplies no implementation playbook, operational test suite, platform connector, internal delivery method, customer artefact or empirical assessment. No score, certification or release approval is produced.

## Technology and maintenance

- Semantic, pre-rendered HTML; responsive CSS; browser JavaScript.
- Node.js built-in modules for local serving and publication configuration.
- Zero runtime dependencies, no lockfile required, no CI or paid service enabled.
- Entry point: `docs/index.html`; runtime: `docs/assets/tool.js`.
- Configuration: `site-config.json`; run `npm run configure` only after publication inputs are approved.
- Editorial/source review date: 2026-11-02. Recheck vendor sources before release and following a relevant vendor change.

## Search intent and GitHub discovery

Primary topic: **web portal testing**.

Related search phrases: web platform QA; digital portal testing; web portal accessibility testing; customer portal quality. These are editorial keyword hypotheses, not measured search-volume claims.

Suggested GitHub topics: `web-testing`, `web-portals`, `digital-products`, `accessibility`, `quality-assurance`, `web-performance`, `user-acceptance-testing`. Use only topics describing the actual content. Repository description and topics are provided in [github-metadata.json](github-metadata.json); description and topics are configured on GitHub.

## Publication status

**Public GitHub resource.** The guide is readable directly in [GUIDE.md](GUIDE.md); HTML navigation and mini tools run locally using the instructions above. No live website has been deployed. Site indexing stays disabled until a real hosting destination and hosting-specific notice are approved; this does not prevent GitHub discovery. See [PUBLISHING.md](PUBLISHING.md).

## Sources and attribution

- [W3C WAI — Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/)
- [web.dev — Web Vitals](https://web.dev/articles/vitals)

Read [SOURCES.md](SOURCES.md) for verification status. References are linked, not republished. Product names identify subject matter; no vendor affiliation, endorsement, logo or partner status is claimed.

## Licence and provenance

**LicenseRef-Proprietary — free internal orientation and local evaluation.** Read, privately annotate and run the supplied mini tools for internal use, including business use, under [LICENSE](LICENSE). External redistribution, public hosting and reuse in third-party deliverables require permission. This is not open source. GitHub viewing/forking terms still apply. See [NOTICE](NOTICE) and the component review in [LICENSE-DECISION.md](LICENSE-DECISION.md).

Transparent project identifiers and source/licence hashes are recorded in `.provenance/manifest.json`. Signing and encrypted identity are pending user-controlled inputs. Identifiers and hashes provide integrity/correlation evidence, not DRM or conclusive proof of ownership.
