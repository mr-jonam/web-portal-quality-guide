# Web Portal Quality Guide

- Stack: dependency-free static HTML/CSS/browser JS; Node.js 22+ scripts.
- Entry point: docs/index.html; interaction: docs/assets/tool.js.
- Preview: npm run preview. No installation required.
- Config: site-config.json; npm run configure validates approved publication metadata and updates pages without deploying.
- Validation: inspect relative links, browser tool states, input limits, contact behaviour and source status before release.
- CI: none. No automatic release, deployment, analytics or funding.
- No API calls, storage, external assets, internal methods, real customer data or invented benchmarks.
- Content is editorial orientation; official references and retrieval limits are in SOURCES.md.
- Rights: LicenseRef-Proprietary; internal orientation/local software evaluation permitted. Review per-component LICENSE-DECISION.md before publication; preserve existing records.
- Preserve .provenance records; refresh evidence deliberately after content or metadata changes.
- Initial local commits use a role identity, never a personal or employer identity inferred from the machine.
- Optional skill is orientation only; no privileged tools, connectors or automatic outbound messages.
- GitHub: https://github.com/mr-jonam/web-portal-quality-guide; public visibility authorised 2026-11-04. Repository publication is separate from website deployment; site-config.publicationApproved remains false until hosting is configured. GUIDE.md is the GitHub reading entrypoint.
