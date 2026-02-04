const CACHE_NAME = 'istikbal-emergency-reset-v999';

// 1. INSTALL: Force kill all old caches immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// 2. ACTIVATE: Delete EVERYTHING that matters
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((key) => caches.delete(key)));
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// 3. FETCH: Bypass cache and go direct to network for this emergency revert
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
