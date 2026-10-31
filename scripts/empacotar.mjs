// Zipa o conteúdo de dist/ (com o .htaccess) para subir em public_html na Hostinger.
// Uso: npm run empacotar   (gera infinium-site.zip na raiz do repositório)
// Sem dependência: usa o zipfile do Python 3, que vem com o sistema.
import { execFileSync } from 'node:child_process';
import { existsSync, rmSync, statSync } from 'node:fs';

const raiz = new URL('../', import.meta.url).pathname;
const dist = `${raiz}dist`;
const zip = `${raiz}infinium-site.zip`;
if (!existsSync(`${dist}/.htaccess`)) {
  console.error('dist/ não tem o .htaccess: rode npm run build antes.');
  process.exit(1);
}
rmSync(zip, { force: true });

const python = `
import os, sys, zipfile
dist, saida = sys.argv[1], sys.argv[2]
with zipfile.ZipFile(saida, 'w', zipfile.ZIP_DEFLATED) as z:
    for pasta, _, arquivos in os.walk(dist):
        for nome in sorted(arquivos):
            caminho = os.path.join(pasta, nome)
            z.write(caminho, os.path.relpath(caminho, dist))
`;
execFileSync('python3', ['-I', '-c', python, dist, zip], { stdio: 'inherit' });
const kb = Math.round(statSync(zip).size / 1024);
console.log(
  `pronto: infinium-site.zip (${kb} KB, conteúdo de dist/ com o .htaccess; descompactar dentro de public_html)`,
);
