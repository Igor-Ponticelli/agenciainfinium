// Zipa o conteúdo de dist/ (com o .htaccess) para subir em public_html na Hostinger.
// Uso: npm run empacotar   (gera infinium-site.zip na raiz do repositório)
import { execFileSync } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';

const raiz = new URL('../', import.meta.url).pathname;
const zip = `${raiz}infinium-site.zip`;
if (!existsSync(`${raiz}dist/.htaccess`)) {
  console.error('dist/ não tem o .htaccess: rode npm run build antes.');
  process.exit(1);
}
rmSync(zip, { force: true });
execFileSync('zip', ['-r', '-q', zip, '.', '-x', '*.DS_Store'], {
  cwd: `${raiz}dist`,
  stdio: 'inherit',
});
console.log(
  `pronto: ${zip} (conteúdo de dist/, com o .htaccess; descompactar dentro de public_html)`,
);
