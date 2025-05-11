const CACHE_NAME = 'portfolio-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/assets/main.css',
  '/assets/images/logo.webp',
  // Add other critical assets
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
