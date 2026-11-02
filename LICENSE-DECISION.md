# Component rights review

Review date: 2026-11-02. Status: inception and private GitHub transfer reviews complete; public release review pending.

| Component | Present content | Current profile | Candidate after owner approval | Reason |
| --- | --- | --- | --- | --- |
| Browser UI and Node utility scripts | Original small orientation interface, static preview/config tools | LicenseRef-Proprietary, private provisional | MIT | Small non-differentiating interface; permissive reuse can aid discovery without exposing delivery methods. |
| Guides, questions, briefs and optional SKILL.md | Original editorial orientation, prepared with AI assistance | LicenseRef-Proprietary, private provisional | CC-BY-4.0 | Attribution-based sharing suits useful lead-generation material; protect delivery scope through content selection. |
| Source catalogue | Short reference descriptions and links | LicenseRef-Proprietary, private provisional | CC-BY-4.0 for original annotations only | No vendor text, logos or datasets are relicensed. |
| Vendor documents, trademarks | Linked references only | Respective owners’ terms | No outbound grant | Recheck quotation, trademark and platform rules before release. |

The candidate licences above are recommendations, not effective grants. MIT would cover software only and CC BY 4.0 would cover original non-software material only. Their complete unmodified legal texts must be supplied after approval.

## Alternatives and rationale

Apache-2.0 adds an express patent grant but is not selected provisionally while ownership is unknown. MPL/GPL/AGPL reciprocity does not implement the commercial content boundary: the useful material itself must remain at orientation level. A restrictive public licence would reduce reuse and is not automatically appropriate merely because this is a lead magnet. CC BY-NC/ND could constrain legitimate business sharing or translation; they are not selected. EUPL is not required by the currently described distribution scenario.

## Inbound review

- No third-party runtime dependencies, copied code, fonts, platform logos, datasets or models.
- Original short explanatory text and public URLs; no proprietary training materials or internal project history.
- No human external contributions accepted. Substantial future contributions require an explicit rights review.
- No real personal data or contractual client material is intentionally included.
- Actual employer/contractor ownership and AI-service terms cannot be inferred from the workspace; legal holder must confirm them.

## Before publication

Confirm legal holder, permission contact, commercial reuse/modification/redistribution permissions, jurisdiction and contributor rights; recheck inbound compatibility and hosting/platform terms. Replace LICENSE, update NOTICE/README/package metadata, and approve the review in site-config.json only after completion.

A public GitHub repository may be viewed and forked under GitHub platform terms even without broader reuse permissions. If even a platform fork must need permission, keep it private or use another distribution channel. Licensing cannot replace omission of proprietary material.

## Provenance

.provenance/manifest.json holds a random UUID, public random project token, tracked-source digest and licence digest. A token is a public correlation marker, not a credential. No signing key or public encryption recipient has been supplied; signature and encrypted identity are explicitly pending. Do not create a private key or plaintext identity record in this repository. A later user-controlled signature/timestamp can strengthen integrity evidence, not establish conclusive ownership or guaranteed tracing.

## Private GitHub transfer review — 2026-11-02

The user authorised repository creation and push. Transfer is to an access-controlled private repository under the authenticated GitHub account; the account name is a hosting destination, not an assertion of legal ownership. All components retain LicenseRef-Proprietary and the existing provisional notices. No public reuse grant, external contributor access, website deployment or final publisher identity is approved. The reviewed inventory remains original code and editorial content with linked third-party references; this transfer adds only repository metadata, status documentation and an unsigned integrity record. No vendor material or runtime dependency is introduced. Existing licence alternatives and unresolved holder/contact facts remain unchanged. The inception record is preserved; a separate private-transfer record hashes the current tracked sources and licence. No signature or encrypted identity can be verified because user-controlled inputs have not been supplied.
