/* ═══════════════════════════════════════
   SONS — RéviBF
   Generes via Web Audio API, aucun fichier externe requis.
   ═══════════════════════════════════════ */

var __audioCtx = null;

function getAudioCtx() {
  if (!__audioCtx) {
    try {
      __audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch(e) {
      return null;
    }
  }
  return __audioCtx;
}

function jouerSonBonneReponse() {
  var ctx = getAudioCtx();
  if (!ctx) return;
  var maintenant = ctx.currentTime;

  // Deux notes ascendantes, son "ding" agreable
  [523.25, 783.99].forEach(function(freq, i) {
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    osc.connect(gain);
    gain.connect(ctx.destination);

    var debut = maintenant + i * 0.09;
    gain.gain.setValueAtTime(0, debut);
    gain.gain.linearRampToValueAtTime(0.18, debut + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, debut + 0.28);

    osc.start(debut);
    osc.stop(debut + 0.3);
  });
}

function jouerSonMauvaiseReponse() {
  var ctx = getAudioCtx();
  if (!ctx) return;
  var maintenant = ctx.currentTime;

  var osc = ctx.createOscillator();
  var gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(220, maintenant);
  osc.frequency.exponentialRampToValueAtTime(140, maintenant + 0.25);
  osc.connect(gain);
  gain.connect(ctx.destination);

  gain.gain.setValueAtTime(0.15, maintenant);
  gain.gain.exponentialRampToValueAtTime(0.001, maintenant + 0.3);

  osc.start(maintenant);
  osc.stop(maintenant + 0.3);
}

function jouerSonVictoire() {
  var ctx = getAudioCtx();
  if (!ctx) return;
  var maintenant = ctx.currentTime;

  // Petite fanfare montante
  var notes = [523.25, 659.25, 783.99, 1046.50];
  notes.forEach(function(freq, i) {
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    osc.connect(gain);
    gain.connect(ctx.destination);

    var debut = maintenant + i * 0.11;
    gain.gain.setValueAtTime(0, debut);
    gain.gain.linearRampToValueAtTime(0.16, debut + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, debut + 0.35);

    osc.start(debut);
    osc.stop(debut + 0.4);
  });
}

function jouerSonClic() {
  var ctx = getAudioCtx();
  if (!ctx) return;
  var maintenant = ctx.currentTime;

  var osc = ctx.createOscillator();
  var gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.value = 700;
  osc.connect(gain);
  gain.connect(ctx.destination);

  gain.gain.setValueAtTime(0.06, maintenant);
  gain.gain.exponentialRampToValueAtTime(0.001, maintenant + 0.06);

  osc.start(maintenant);
  osc.stop(maintenant + 0.07);
}
