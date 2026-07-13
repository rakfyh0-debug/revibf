import os

home = os.path.expanduser('~')
index_path = os.path.join(home, 'ReviBF', 'index.html')

with open(index_path, 'r', encoding='utf-8') as f:
    html = f.read()

old_title = '<title>RéviBF — Réussir au Burkina Faso</title>'

new_meta = '''<title>RéviBF — Révision BEPC et BAC gratuit au Burkina Faso | Quiz, Annales PDF, Fiches</title>
  <meta name="description" content="Site gratuit de révision pour le BEPC et le BAC au Burkina Faso. Annales PDF, quiz interactifs, fiches de cours en maths, SVT, physique-chimie, français, philosophie. Séries A4 et D." />
  <meta name="keywords" content="BEPC Burkina Faso, BAC Burkina Faso, annales BEPC PDF, annales BAC PDF, quiz BEPC, quiz BAC, série D, série A4, révision examen Burkina Faso, sujet BEPC, sujet BAC, corrigé BEPC, corrigé BAC, cours en ligne Burkina Faso, fiches de révision gratuites" />
  <meta name="author" content="RéviBF" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://rakfyh0-debug.github.io/revibf/" />

  <!-- Open Graph (partage Facebook / WhatsApp) -->
  <meta property="og:title" content="RéviBF — Révision BEPC et BAC gratuit au Burkina Faso" />
  <meta property="og:description" content="Annales PDF, quiz interactifs et fiches de révision gratuites pour réussir le BEPC et le BAC au Burkina Faso." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://rakfyh0-debug.github.io/revibf/" />
  <meta property="og:image" content="https://rakfyh0-debug.github.io/revibf/images/hero-etude.jpg" />
  <meta property="og:locale" content="fr_FR" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="RéviBF — Révision BEPC et BAC gratuit au Burkina Faso" />
  <meta name="twitter:description" content="Annales PDF, quiz interactifs et fiches de révision gratuites pour réussir le BEPC et le BAC au Burkina Faso." />
  <meta name="twitter:image" content="https://rakfyh0-debug.github.io/revibf/images/hero-etude.jpg" />'''

if old_title in html:
    html = html.replace(old_title, new_meta)
    print("OK: metadonnees SEO ajoutees")
else:
    print("ATTENTION: titre original non trouve, verifier manuellement")

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(html)

print("Termine.")
