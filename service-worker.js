const CACHE_NAME = 'revibf-cache-v13';
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./css/design_pro.css",
  "./css/hero_photo.css",
  "./css/app_nav.css",
  "./css/visuel_extra.css",
  "./js/script.js",
  "./js/culture_data.js",
  "./js/confettis.js",
  "./js/sons.js",
  "./images/logo.svg",
  "./images/logo-icone.svg",
  "./images/icon-192.png",
  "./images/icon-512.png",
  "./images/favicon-32.png",
  "./cours/physique/physique_electricite.html",
  "./cours/physique/physique_mecanique.html",
  "./cours/physique/physique_optique.html",
  "./cours/chimie/chimie_ions_metalliques.html",
  "./cours/chimie/chimie_corps_moleculaires.html",
  "./cours/chimie/chimie_corps_solides.html",
  "./cours/partie_1/chapitres_1_5.html",
  "./cours/partie_2/chapitres_6_10.html",
  "./cours/partie_3/chapitres_11_15.html",
  "./cours/partie_4/chapitres_16_20.html",
  "./robots.txt",
  "./cours/svt/partie0_1.html",
  "./cours/svt/partie2.html",
  "./cours/svt/partie3.html",
  "./cours/svt/partie4.html",
  "./cours/svt/partie5.html",
  "./cours/francais/bepc.html",
  "./cours/francais/recapitulatif.html",
  "./cours/anglais/bepc.html",
  "./cours/anglais/recapitulatif.html",
  "./cours/histoire/partie1.html",
  "./cours/histoire/partie2.html",
  "./cours/histoire/partie3.html",
  "./cours/histoire/geographie_partie1.html",
  "./cours/histoire/geographie_partie2.html",
  "./cours/histoire/geographie_partie3.html",
  "./cours/bac/allemand/bac.html",
  "./cours/bac/allemand/textes.html",
  "./cours/bac/anglais/bac.html",
  "./cours/bac/anglais/revision_complete.html",
  "./cours/bac/d/maths/analyse_ch1_3.html",
  "./cours/bac/d/maths/analyse_ch4_6.html",
  "./cours/bac/d/maths/complexes.html",
  "./cours/bac/d/maths/geometrie_espace.html",
  "./cours/bac/d/maths/probabilites.html",
  "./cours/bac/d/maths/statistiques.html",
  "./cours/bac/d/physique/partie1.html",
  "./cours/bac/d/physique/partie2.html",
  "./cours/bac/d/physique/partie3.html",
  "./cours/bac/d/physique_chimie/partie4.html",
  "./cours/bac/d/physique_chimie/partie5.html",
  "./cours/bac/d/svt/ecologie.html",
  "./cours/bac/d/svt/genetique.html",
  "./cours/bac/d/svt/immunologie.html",
  "./cours/bac/d/svt/reproduction.html",
  "./cours/bac/d/svt/systeme_nerveux_muscle.html",
  "./cours/bac/francais/methodologie_part1.html",
  "./cours/bac/francais/methodologie_part2.html",
  "./cours/bac/francais/programme_part1.html",
  "./cours/bac/francais/programme_part2.html",
  "./cours/bac/geographie/methodologie.html",
  "./cours/bac/geographie/partie1.html",
  "./cours/bac/geographie/partie2.html",
  "./cours/bac/geographie/partie3.html",
  "./cours/bac/histoire/methodologie.html",
  "./cours/bac/histoire/partie1.html",
  "./cours/bac/histoire/partie2.html",
  "./cours/bac/histoire/partie3.html",
  "./cours/bac/philosophie/methodologie.html",
  "./cours/bac/philosophie/partie1_connaissance.html",
  "./cours/bac/philosophie/partie2_homme.html",
  "./cours/bac/philosophie/partie3_valeurs_societe.html",
  "./cours/bac/philosophie/partie4_politique_pouvoir.html",

];

// Installation résiliente
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        ASSETS_TO_CACHE.map((url) => {
          return cache.add(url).catch((err) => {
            console.error('❌ [PWA Cache] Fichier introuvable :', url);
          });
        })
      );
    })
  );
});

// Interception des requêtes
const FONTS_CACHE = 'revibf-fonts-cache';

self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  const isGoogleFont = url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com');

  if (isGoogleFont) {
    event.respondWith(
      caches.open(FONTS_CACHE).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          }).catch(() => cachedResponse);
        });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME && key !== FONTS_CACHE).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
