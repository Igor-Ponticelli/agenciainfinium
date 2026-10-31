"""
Gera o subset das fontes das miniprévias (TODO 5) a partir dos pacotes do Fontsource.

Mantém só os caracteres que os textos em português e inglês usam: Latin básico, Latin-1 e a
pontuação que aparece nas prévias. Os eixos variáveis e o kerning ficam.

Rodar depois de `npm install`, com fontTools e brotli instalados (pip install fonttools brotli):
    python3 scripts/subsetar-fontes-previas.py
"""

from pathlib import Path

from fontTools import subset

RAIZ = Path(__file__).resolve().parent.parent
SAIDA = RAIZ / "src/assets/fontes-previas"
UNICODES = "U+0020-007E,U+00A0-00FF,U+2013,U+2018-201D,U+2022,U+2026,U+2039-203A,U+2192,U+2212"

FONTES = {
    "plus-jakarta-sans": "@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2",
    "young-serif": "@fontsource/young-serif/files/young-serif-latin-400-normal.woff2",
    "figtree": "@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2",
    "lexend-exa": "@fontsource-variable/lexend-exa/files/lexend-exa-latin-wght-normal.woff2",
    "lexend": "@fontsource-variable/lexend/files/lexend-latin-wght-normal.woff2",
    "montserrat": "@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2",
}

SAIDA.mkdir(parents=True, exist_ok=True)
for nome, origem in FONTES.items():
    destino = SAIDA / f"{nome}.woff2"
    opcoes = subset.Options()
    opcoes.flavor = "woff2"
    opcoes.layout_features = ["kern", "liga", "calt", "ccmp", "locl", "mark", "mkmk"]
    opcoes.unicodes = subset.parse_unicodes(UNICODES)
    fonte = subset.load_font(str(RAIZ / "node_modules" / origem), opcoes)
    subsetter = subset.Subsetter(opcoes)
    subsetter.populate(unicodes=opcoes.unicodes)
    subsetter.subset(fonte)
    subset.save_font(fonte, str(destino), opcoes)
    print(f"{nome}: {(RAIZ / 'node_modules' / origem).stat().st_size} -> {destino.stat().st_size} bytes")
