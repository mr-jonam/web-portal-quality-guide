import {readFile,writeFile,readdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const escapeHTML = text => String(text).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const safeJSON = value => JSON.stringify(value).replaceAll('<','\\u003c');

export function validateConfig(config) {
  if (!config || config.publicationApproved !== true) throw new Error('Set publicationApproved to true only after owner, rights, content and contact review. This command does not publish.');
  for (const field of ['publisherName','rightsHolder','permissionContact','baseUrl','contactUrl']) {
    if (typeof config[field] !== 'string' || !config[field].trim()) throw new Error(`Missing required field: ${field}`);
    if (/[\r\n\u0000-\u001f]/.test(config[field]) || /[<>]/.test(config[field])) throw new Error(`Invalid characters in ${field}`);
    if (/example\.(com|org|net)|\.invalid\b|\b(todo|tbd|placeholder)\b|\[|\]/i.test(config[field])) throw new Error(`Replace placeholder in ${field}`);
  }
  for (const field of ['baseUrl','contactUrl']) {
    const url = new URL(config[field]);
    if (url.protocol !== 'https:' || url.username || url.password || url.hash || url.search) throw new Error(`${field} must be an absolute HTTPS URL without credentials, query or fragment.`);
    if (url.hostname === 'localhost' || /^127\./.test(url.hostname) || url.hostname.endsWith('.local')) throw new Error(`${field} must use an approved public host.`);
    if (field === 'baseUrl' && url.hostname.endsWith('.github.io')) throw new Error('Use an approved commercial hosting destination for this lead-generation site. Review GitHub Pages usage limits.');
  }
  if (!config.baseUrl.endsWith('/')) throw new Error('baseUrl must end with a slash.');
  if (!config.licenseReviewApproved || !config.provenanceReviewApproved) throw new Error('Complete and explicitly approve the final licence and provenance reviews before configuring public metadata.');
  return config;
}

export async function configure(repoRoot) {
  const config = validateConfig(JSON.parse(await readFile(path.join(repoRoot,'site-config.json'),'utf8')));
  const license = await readFile(path.join(repoRoot,'LICENSE'),'utf8');
  if (/PROVISIONAL|NOT FOR PUBLICATION|not finalised/i.test(license)) throw new Error('Replace the provisional LICENSE and complete LICENSE-DECISION.md before publication configuration.');
  const readmePath=path.join(repoRoot,'README.md');
  const readme=await readFile(readmePath,'utf8');
  if (!readme.includes('<!-- publication:links:start -->')) throw new Error('README publication-link markers are missing; review the public entry links.');
  const files = (await readdir(path.join(repoRoot,'docs'))).filter(file => file.endsWith('.html')).sort();
  const urls = [];
  for (const file of files) {
    const filePath = path.join(repoRoot,'docs',file); let html = await readFile(filePath,'utf8');
    const url = new URL(file === 'index.html' ? './' : file,config.baseUrl).href;
    const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
    const schema = {'@context':'https://schema.org','@type':file === 'index.html' ? 'CollectionPage' : 'WebPage',name:title,url,inLanguage:'en',publisher:{'@type':'Organization',name:config.publisherName}};
    const meta = `<meta name="robots" content="index, follow">\n<link rel="canonical" href="${escapeHTML(url)}">\n<meta property="og:url" content="${escapeHTML(url)}">\n<meta property="og:image" content="${escapeHTML(new URL('assets/share.svg',config.baseUrl).href)}">\n<script type="application/ld+json">${safeJSON(schema)}</script>`;
    html = html.replace(/<!-- publication:metadata:start -->[\s\S]*?<!-- publication:metadata:end -->/,`<!-- publication:metadata:start -->\n${meta}\n<!-- publication:metadata:end -->`);
    html = html.replace(/<!-- publication:banner:start -->[\s\S]*?<!-- publication:banner:end -->/, '<!-- publication:banner:start --><!-- publication:banner:end -->');
    html = html.replace(/<!-- publication:publisher:start -->[\s\S]*?<!-- publication:publisher:end -->/,`<!-- publication:publisher:start -->${escapeHTML(config.publisherName)}<!-- publication:publisher:end -->`);
    html = html.replace(/<!-- publication:contact:start -->[\s\S]*?<!-- publication:contact:end -->/,`<!-- publication:contact:start --><p><a class="button" href="${escapeHTML(config.contactUrl)}" rel="noreferrer">Contact ${escapeHTML(config.publisherName)}</a></p><p class="small">This opens the approved external contact channel. Copy your sanitised brief and choose what to share there. Nothing is submitted automatically.</p><!-- publication:contact:end -->`);
    await writeFile(filePath,html); urls.push(url);
  }
  await writeFile(path.join(repoRoot,'docs','robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml',config.baseUrl).href}\n`);
  await writeFile(path.join(repoRoot,'docs','sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url => `<url><loc>${escapeHTML(url)}</loc></url>`).join('')}</urlset>\n`);
  const liveLinks=`<!-- publication:links:start -->\n[Open the live guide](<${config.baseUrl}>) · [Try the mini tool](<${new URL('tool.html',config.baseUrl).href}>) · [Prepare a collaboration request](<${new URL('contact.html',config.baseUrl).href}>)\n<!-- publication:links:end -->`;
  await writeFile(readmePath,readme.replace(/<!-- publication:links:start -->[\s\S]*?<!-- publication:links:end -->/,liveLinks));
  console.log(`Configured ${files.length} static pages. Nothing deployed. Regenerate provenance after final edits and before an authorised release.`);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) configure(root).catch(error => {console.error(error.message);process.exitCode=1;});
