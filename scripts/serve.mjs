import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const scriptRoot = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptRoot, '..', path.basename(scriptRoot) === 'scripts' ? 'docs' : '.');
const port = Number(process.env.PORT || 4173);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.json':'application/json; charset=utf-8','.txt':'text/plain; charset=utf-8','.xml':'application/xml; charset=utf-8'};
const server = http.createServer(async (request,response) => {
  const headers = {'X-Content-Type-Options':'nosniff','Cache-Control':'no-store','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'",'Referrer-Policy':'no-referrer'};
  try {
    if (!['GET','HEAD'].includes(request.method)) { response.writeHead(405,headers); response.end(); return; }
    const rawPath = new URL(request.url,'http://localhost').pathname;
    const segments = decodeURIComponent(rawPath).replaceAll('\\','/').split('/').filter(Boolean);
    if (segments.some(segment => segment.startsWith('.')) || (path.basename(scriptRoot) !== 'scripts' && segments[0] === 'tooling')) throw new Error('Not public');
    let target = path.resolve(root,...segments);
    if (target !== root && !target.startsWith(root+path.sep)) throw new Error('Outside preview root');
    if ((await stat(target)).isDirectory()) target = path.join(target,'index.html');
    const data = await readFile(target);
    response.writeHead(200,{...headers,'Content-Type':types[path.extname(target)] || 'application/octet-stream'});
    response.end(request.method === 'HEAD' ? undefined : data);
  } catch { response.writeHead(404,headers); response.end('Not found'); }
});
server.listen(port,'127.0.0.1',() => console.log(`Local preview: http://127.0.0.1:${port}/`));
