# Web Portal Quality Guide

- Stack: dependency-free static HTML/CSS/browser JS; Node.js 22+ scripts.
- Entry point: docs/index.html; interaction: docs/assets/tool.js.
- Preview: npm run preview. No installation required.
- Config: site-config.json; npm run configure validates approved publication metadata and updates pages without deploying.
- Validation: inspect relative links, browser tool states, input limits, contact behaviour and source status before release.
- CI: none. No automatic release, deployment, analytics or funding.
- No API calls, storage, external assets, internal methods, real customer data or invented benchmarks.
- Content is editorial orientation; official references and retrieval limits are in SOURCES.md.
- Rights are provisional private development; complete LICENSE-DECISION.md and provenance review before publication.
- Preserve .provenance records; refresh evidence deliberately after content or metadata changes.
- Initial local commits use a role identity, never a personal or employer identity inferred from the machine.
- Optional skill is orientation only; no privileged tools, connectors or automatic outbound messages.
- GitHub: private repository at https://github.com/mr-jonam/web-portal-quality-guide; creation/initial push authorised on 2026-11-02. Public visibility and deployment require separate approval.
