/* ═══════════════════════════════════════
   CONFETTIS — RéviBF
   Déclenché automatiquement quand le score est ≥ 80%
   ═══════════════════════════════════════ */

function lancerConfettis() {
  var ancien = document.getElementById('confetti-canvas');
  if (ancien) ancien.remove();

  var canvas = document.createElement('canvas');
  canvas.id = 'confetti-canvas';
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  var couleurs = ['#1B6B3A', '#F5A623', '#C0392B', '#FDF8F0', '#1a6b8a'];
  var particules = [];
  var total = 90;

  for (var i = 0; i < total; i++) {
    particules.push({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height * 0.3,
      taille: 5 + Math.random() * 6,
      couleur: couleurs[Math.floor(Math.random() * couleurs.length)],
      vitesseY: 2 + Math.random() * 3,
      vitesseX: (Math.random() - 0.5) * 2,
      rotation: Math.random() * 360,
      vitesseRotation: (Math.random() - 0.5) * 10,
    });
  }

  var debut = Date.now();
  var dureeMax = 3200;

  function animer() {
    var ecoule = Date.now() - debut;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particules.forEach(function(p) {
      p.y += p.vitesseY;
      p.x += p.vitesseX;
      p.rotation += p.vitesseRotation;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation * Math.PI / 180);
      ctx.fillStyle = p.couleur;
      ctx.fillRect(-p.taille/2, -p.taille/2, p.taille, p.taille * 0.6);
      ctx.restore();
    });

    if (ecoule < dureeMax) {
      requestAnimationFrame(animer);
    } else {
      canvas.style.transition = 'opacity .5s ease';
      canvas.style.opacity = '0';
      setTimeout(function() {
        canvas.remove();
        window.removeEventListener('resize', resize);
      }, 550);
    }
  }
  animer();
}
