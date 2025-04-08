self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("melinda-cache").then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/animacao.js",
        "/manifest.json",
        "/foto-melinda.jpg",
        "/confete.gif",
        "/icon-192.png",
        "/icon-512.png",
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
