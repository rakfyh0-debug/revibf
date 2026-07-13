c = open('js/script.js', encoding='utf-8').read()

c = c.replace(
  "html += '<button class=\"btn btn-outline\" onclick=\"var d=document.getElementById(\\'apropos-texte\\'); d.style.display = d.style.display === \\'none\\' ? \\'block\\' : \\'none\\'; d.closest(\\'.page-section\\').style.maxWidth=\\'100%\\';\"><i class=\"fas fa-book-open\"></i> Lire À propos de RéviBF</button>';",
  "html += '<button class=\"btn btn-outline\" onclick=\"document.getElementById(\\'apropos-overlay\\').style.display=\\'flex\\'; document.body.style.overflow=\\'hidden\\';\"><i class=\"fas fa-book-open\"></i> Lire À propos de RéviBF</button>';"
)

c = c.replace(
  "html += '<div id=\"apropos-texte\" style=\"display:none; margin-top:1rem; font-size:0.9rem; color:var(--gris); line-height:1.6; background:var(--creme); border-radius:8px; padding:1rem; max-height:300px; overflow-y:auto; white-space:pre-line;\">';",
  "html += '<div id=\"apropos-overlay\" class=\"apropos-overlay\"><div class=\"apropos-overlay-header\"><strong>À propos de RéviBF</strong><button onclick=\"document.getElementById(\\'apropos-overlay\\').style.display=\\'none\\'; document.body.style.overflow=\\'\\';\">✕</button></div><div class=\"apropos-overlay-body\">';"
)

open('js/script.js', 'w', encoding='utf-8').write(c)
print("js/script.js patché")

css = """

/* Overlay plein écran pour À propos */
.apropos-overlay {
  display:none; position:fixed; inset:0; z-index:500;
  background:var(--creme); flex-direction:column;
}
.apropos-overlay-header {
  display:flex; justify-content:space-between; align-items:center;
  padding:1rem 1.2rem; background:var(--vert); color:#fff;
  font-size:1.05rem;
}
.apropos-overlay-header button {
  background:none; border:none; color:#fff; font-size:1.3rem; cursor:pointer;
}
.apropos-overlay-body {
  flex:1; overflow-y:auto; padding:1.2rem 1.5rem 2rem;
  font-size:0.95rem; line-height:1.7; color:var(--encre); white-space:pre-line;
}
"""
open('css/visuel_extra.css', 'a', encoding='utf-8').write(css)
print("css/visuel_extra.css patché")
