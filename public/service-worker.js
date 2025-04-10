// service-worker.js
const CACHE_NAME = "melinda-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/animacao.js",
  "/manifest.json",
  "/foto_crianca.jpg",
  "/icon-192.png",
  "/icon-512.png",
  // Adicione outros arquivos críticos que você quer cachear
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
