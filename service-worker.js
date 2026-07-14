const CACHE_NAME = 'revibf-cache-v5';
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./css/design_pro.css",
  "./css/hero_photo.css",
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

];

// Installation résiliente
self.addEventListener('install', (event) => {
  self.skipWaiting();
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
self.addEventListener('fetch', (event) => {
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
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});
