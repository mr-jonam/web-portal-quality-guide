# Publication and maintenance

## GitHub repository

Public visibility requested by the account owner on 2026-11-04. Publish the reviewed master branch at https://github.com/mr-jonam/web-portal-quality-guide. GUIDE.md provides a native GitHub reading experience; README links to related resources and the approved [LinkedIn contact](https://www.linkedin.com/in/manoj-rollo/). The repository's package.json stays private:true to prevent accidental npm publishing; that field does not control GitHub visibility.

## Website is a separate step

No site is deployed and no domain/base URL is invented. site-config.publicationApproved remains false because it controls website configuration. repositoryPublicationApproved records the separate GitHub approval. The HTML pages have the approved publisher/contact, but keep noindex/nofollow and robots exclusion.

Before a future website deployment, choose suitable hosting, review its terms/privacy notice and any commercial-use limits, enter the actual HTTPS baseUrl and approved contactUrl, review licence/provenance again, and run npm run configure with website approval. This only writes files; it does not deploy. Recheck official references against the platform release in scope.

## Boundaries

No customer material, secrets, internal methods, case histories, credentials or invented results. No public assessment requests through issues. No funding, workflows, paid services, telemetry, release tags or deployment are enabled. Preserve existing provenance; add a new record after source/licence changes. Signature/encrypted identity remain unavailable without user-controlled inputs.
