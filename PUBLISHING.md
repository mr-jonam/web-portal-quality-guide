# Publication handoff

No remote repository, publication, deployment, external message, workflow, paid service or Sponsor button has been created.

1. Approve a public publisher name, legal rights holder and permission contact. Do not infer an identity from local paths or Git settings.
2. Complete LICENSE-DECISION.md; replace the provisional LICENSE with the complete approved component licences. Update NOTICE, README and package metadata.
3. Choose an approved HTTPS domain and hosting destination. These sites are designed as commercial lead-generation material: do not assume GitHub Pages is eligible. Review [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits). The public GitHub repo can remain a discovery/documentation channel.
4. Set a legitimate HTTPS private-contact URL; use no public issue intake. Confirm the destination’s privacy notice and an accurate hosting-specific privacy notice. This static site never submits answers.
5. Fill site-config.json and set its approval booleans only after the actual reviews. Run `npm run configure`; verify canonicals, sitemap, metadata, contact destination and indexability. Keep the initial draft noindex until ready.
6. Add approved URLs for related projects as genuine editorial cross-links; the current preview lists project titles without inventing addresses.
7. Recheck official references, review the diff and scan content and Git history for secrets, identities, customer context and unsupported claims.
8. Refresh provenance after all final content/licence/configuration edits, preserving the inception record. Supply only a public encryption recipient and user-controlled signing configuration if stronger evidence is requested.
9. Review GitHub topics/description from github-metadata.json. Keep issues and wiki disabled initially. Obtain explicit authorisation before creating the GitHub repository, pushing or deploying.
10. On an approved host, publish only docs/ for the site and configure noindex on staging. Add the approved repository link and related path URLs. Submit sitemap through an authorised Search Console account. Nothing in this file activates these steps.

## Local commands

- `npm run preview`: loopback-only preview, default port 4173.
- `npm run configure`: validation plus local metadata generation. Fails closed with incomplete or provisional rights. No network access.

## Cost and operations

No CI is enabled: the small static site has no build dependency and a pipeline is unnecessary at this stage. No Actions jobs, caches, artifacts, LFS, Packages, Codespaces, scheduled jobs or external subscriptions are configured. Evaluate actual hosting cost before selecting a provider. Funding remains unconfigured; no payment profile is inferred.
