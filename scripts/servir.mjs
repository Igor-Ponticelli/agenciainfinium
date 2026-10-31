// Servidor estático do dist/ para inspeção, testes e Lighthouse, com o que a Hostinger faz pelo
// .htaccess: os cabeçalhos de segurança (lidos do próprio arquivo), gzip nos textos, cache longo
// em /_astro/ e a 404 do Astro. Sem a barra de ferramentas do `astro dev`.
// Uso: node scripts/servir.mjs [porta]
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { gzipSync } from 'node:zlib';

const raiz = new URL('../dist/', import.meta.url).pathname;
// A porta só vale quando o script roda direto; importado, quem chama `servidor.listen(porta)`
const porta = Number(process.env.PORTA) || 4321;

const tipos = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};
const comprimir = new Set([
  '.html',
  '.css',
  '.js',
  '.mjs',
  '.json',
  '.webmanifest',
  '.xml',
  '.txt',
  '.svg',
]);

/** Os `Header always set` do .htaccess, para o teste ver os mesmos cabeçalhos da Hostinger. */
async function cabecalhosDoHtaccess() {
  const htaccess = await readFile(join(raiz, '.htaccess'), 'utf8').catch(() => '');
  const linhas = htaccess.split('\n').filter((l) => l.trim().startsWith('Header always set'));
  const cabecalhos = {};
  for (const linha of linhas) {
    const m = linha.match(/Header always set (\S+) "(.*)"$/);
    if (m) cabecalhos[m[1]] = m[2];
  }
  return cabecalhos;
}

const cabecalhos = await cabecalhosDoHtaccess();

export const servidor = createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', `http://${req.headers.host ?? 'localhost'}`);
  let caminho = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, '');
  if (caminho.endsWith('/')) caminho += 'index.html';
  let arquivo = join(raiz, caminho);
  let status = 200;
  // Diretório sem barra: redireciona como o Apache
  if (existsSync(arquivo) && (await stat(arquivo)).isDirectory()) {
    res.writeHead(301, { Location: `${url.pathname}/${url.search}` });
    res.end();
    return;
  }
  if (!existsSync(arquivo)) {
    arquivo = join(raiz, '404.html');
    status = 404;
  }
  const ext = extname(arquivo);
  const tipo = tipos[ext] ?? 'application/octet-stream';
  const cache = caminho.startsWith('/_astro/')
    ? 'public, max-age=31536000, immutable'
    : ext === '.html'
      ? 'no-cache'
      : 'public, max-age=2592000';
  let corpo = await readFile(arquivo);
  const extras = { 'Content-Type': tipo, 'Cache-Control': cache, ...cabecalhos };
  if (comprimir.has(ext) && /\bgzip\b/.test(req.headers['accept-encoding'] ?? '')) {
    corpo = gzipSync(corpo);
    extras['Content-Encoding'] = 'gzip';
    extras.Vary = 'Accept-Encoding';
  }
  res.writeHead(status, extras);
  res.end(corpo);
});

if (import.meta.url === `file://${process.argv[1]}`) {
  const escolhida = Number(process.argv[2]) || porta;
  servidor.listen(escolhida, () => console.log(`dist/ em http://localhost:${escolhida}/`));
}
