"""Gera variantes coloridas, favicons, tokens e o manual (brand-guide.html) a partir de src/."""
import json, re, pathlib
root = pathlib.Path(__file__).parent
src = root / "src"

MASTERS = {  # arquivo base -> pasta de saída
    "logo": "logo", "logo-horizontal": "logo",
    "symbol": "symbol", "symbol-compact": "symbol", "symbol-micro": "symbol",
}
COLORS = {"primary": "#39135F", "white": "#FFFFFF", "ink": "#211F26", "lilac": "#E9D5FE"}
base = {k: (src / f"{k}.svg").read_text() for k in MASTERS}
for kind, folder in MASTERS.items():
    out = root / folder; out.mkdir(exist_ok=True)
    for name, hexv in COLORS.items():
        (out / f"{kind}-{name}.svg").write_text(base[kind].replace("currentColor", hexv))

# favicons e ícone de app: quadro quadrado centrado no símbolo
def inner(svg): return svg.split(">", 1)[1].rsplit("</svg>", 1)[0].strip()
CX, CY = 369.2, 118.25
def square(body, side, bg=None):
    x, y = CX - side / 2, CY - side / 2
    rect = f'<rect x="{x:g}" y="{y:g}" width="{side}" height="{side}" fill="{bg}"/>\n' if bg else ""
    return (f'<svg width="{side}" height="{side}" viewBox="{x:g} {y:g} {side} {side}" fill="none" '
            f'xmlns="http://www.w3.org/2000/svg">\n{rect}{body}\n</svg>\n')
theme = "<style>path{stroke:#39135F}@media (prefers-color-scheme:dark){path{stroke:#E9D5FE}}</style>\n"
fav = root / "favicon"; fav.mkdir(exist_ok=True)
(fav / "favicon.svg").write_text(square(theme + inner(base["symbol-micro"]).replace(' stroke="currentColor"', ""), 562))
(fav / "favicon-compact.svg").write_text(square(theme + inner(base["symbol-compact"]).replace(' stroke="currentColor"', ""), 562))
(fav / "apple-touch-icon.svg").write_text(square(inner(base["symbol"]).replace("currentColor", "#FFFFFF"), 693, "#280D40"))

tokens = {
  "color": {
    "violet-50": "#F8F5FE", "violet-100": "#E9D5FE", "violet-200": "#CEB8F3", "violet-300": "#B292E3",
    "violet-400": "#946ACD", "violet-500": "#7546AE", "violet-600": "#582B89", "violet-700": "#39135F",
    "violet-800": "#280D40", "violet-900": "#200A34",
    "primary": "#39135F", "primary-hover": "#280D40", "lilac": "#E9D5FE",
    "ink": "#211F26", "text": "#625F68", "line": "#D9D6DE", "body": "#F1EFF4", "white": "#FFFFFF",
  },
  "gradient": {"brand": "linear-gradient(135deg, #39135F 0%, #200A34 100%)"},
  "surface": {  # novembro de 2026: as superfícies nascidas no site
    "veio": {
      "base": "#F1EFF4",
      "veins": "radial-gradient(70% 34% at 15% 26%, rgb(233 213 254 / 0.55), transparent 72%), radial-gradient(55% 28% at 86% 70%, rgb(233 213 254 / 0.40), transparent 72%)",
      "grain": "feTurbulence fractalNoise 0.65, 2 oitavas, em #39135F; opacidade 0.11 (0.05 em leitura longa, sem os veios)",
    },
    "aurora": {
      "base": "#200A34",
      "lights": "radial-gradient(closest-side, rgb(117 70 174 / 0.7), transparent 70%) 20% 30% / 70% 70% no-repeat, radial-gradient(closest-side, rgb(233 213 254 / 0.35), transparent 70%) 80% 80% / 60% 60% no-repeat",
      "motion": "translate(-6%, -4%) rotate(0deg) a translate(6%, 6%) rotate(25deg), 9s ease-in-out, alternado; parado com movimento reduzido",
      "use": "só em cartões, nunca em faixas, rodapé ou atrás de foto",
    },
    "icon": {
      "stroke": "2px em #E9D5FE a 45%, ladrilho de 48px com canto de 12px",
      "light": "28% do traço a 2.4px correndo em 2.4s por volta",
    },
  },
  "font": {"family": "Roboto, 'Helvetica Neue', Arial, sans-serif"},
  "type": {
    "display": {"weight": 700, "size": "56px", "line-height": 1.0, "tracking": "-0.025em"},
    "title": {"weight": 700, "size": "32px", "line-height": 1.15, "tracking": "-0.015em"},
    "subtitle": {"weight": 500, "size": "20px", "line-height": 1.3, "tracking": "0"},
    "body": {"weight": 400, "size": "16px", "line-height": 1.6, "tracking": "0"},
    "label": {"weight": 500, "size": "12px", "line-height": 1.4, "tracking": "0.08em", "transform": "uppercase"},
  },
}
(root / "tokens.json").write_text(json.dumps(tokens, indent=2, ensure_ascii=False) + "\n")
css = [":root {"]
for k, v in tokens["color"].items(): css.append(f"  --infinium-{k}: {v};")
css.append(f"  --infinium-gradient: {tokens['gradient']['brand']};")
css.append(f"  --infinium-veio-veins: {tokens['surface']['veio']['veins']};")
css.append(f"  --infinium-aurora-lights: {tokens['surface']['aurora']['lights']};")
css.append(f"  --infinium-font: {tokens['font']['family']};")
for role, t in tokens["type"].items():
    css.append(f"  --infinium-{role}: {t['weight']} {t['size']}/{t['line-height']} var(--infinium-font);")
    css.append(f"  --infinium-{role}-tracking: {t['tracking']};")
css.append("}")
(root / "tokens.css").write_text("\n".join(css) + "\n")

def inline(svg):
    svg = re.sub(r'\s(width|height)="[\d.]+"', "", svg, count=2)
    return svg.replace("<svg ", '<svg aria-hidden="true" ', 1).strip()
# área de proteção: x = altura do "n" (118,8u), em volta do contorno do logo
vb = [float(v) for v in re.search(r'viewBox="([^"]+)"', base["logo"]).group(1).split()]
x = 118.8
cvb = [vb[0] - x, vb[1] - x, vb[2] + 2 * x, vb[3] + 2 * x]
clear = (f'<svg aria-hidden="true" viewBox="{" ".join(f"{v:g}" for v in cvb)}" fill="none" xmlns="http://www.w3.org/2000/svg">'
         f'<rect x="{cvb[0]:g}" y="{cvb[1]:g}" width="{cvb[2]:g}" height="{cvb[3]:g}" style="stroke:var(--line)" stroke-width="2"/>'
         f'<rect x="{vb[0]:g}" y="{vb[1]:g}" width="{vb[2]:g}" height="{vb[3]:g}" style="stroke:var(--measure)" stroke-width="2" stroke-dasharray="8 8"/>'
         f'<g style="fill:var(--measure)" opacity=".16"><rect x="{cvb[0]:g}" y="{cvb[1]:g}" width="{x}" height="{x}"/>'
         f'<rect x="{vb[0]+vb[2]:g}" y="{vb[1]+vb[3]:g}" width="{x}" height="{x}"/></g>'
         f'<g font-family="Roboto Mono, monospace" font-size="30" text-anchor="middle" style="fill:var(--measure)">'
         f'<text x="{cvb[0]+x/2:g}" y="{cvb[1]+x/2+10:g}">x</text><text x="{vb[0]+vb[2]+x/2:g}" y="{vb[1]+vb[3]+x/2+10:g}">x</text></g>'
         f'{inner(base["logo"])}</svg>')
html = (src / "guide.template.html").read_text()
for key, val in {"{{LOGO}}": inline(base["logo"]), "{{LOGO_H}}": inline(base["logo-horizontal"]),
                 "{{SYMBOL}}": inline(base["symbol"]), "{{SYMBOL_C}}": inline(base["symbol-compact"]),
                 "{{SYMBOL_M}}": inline(base["symbol-micro"]), "{{CLEAR}}": clear,
                 "{{SVG_JSON}}": json.dumps({k: v.strip() for k, v in base.items()})}.items():
    html = html.replace(key, val)
(root / "brand-guide.html").write_text(html)
print("ok", len(html))
