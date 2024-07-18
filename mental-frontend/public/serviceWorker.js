// serviceWorker.js

// This is a basic service worker implementation that
// precaches your site's assets and keeps them up to date.
// Refer to the Workbox documentation for more details:
// https://developers.google.com/web/tools/workbox/modules/workbox-sw

// Adjust the version number whenever you update your service worker
const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Add other assets that you want to cache offline
  // Example: '/static/css/main.6f42d16e.chunk.css',
  // Example: '/static/js/bundle.04ca8f72.js',
];

// Install service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch resources from the cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Activate the service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
          return null;
        })
      );
    })
  );
});
