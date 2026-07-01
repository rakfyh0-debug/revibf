const CACHE_NAME = 'revibf-cache-v1';
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
  "./robots.txt"
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
