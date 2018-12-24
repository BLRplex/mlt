/* global self, location */
/* eslint no-restricted-globals: ["error"] */

const STATIC_CACHE = 'medlab-static-cache';
const DYNAMIC_CACHE = 'medlab-dynamic-cache';

const staticAssets = [
  './',
  './static/js/bundle.js',
  './static/js/0.chunk.js',
  './static/js/main.chunk.js',
];

self.addEventListener('install', async (event) => {
  const cache = await caches.open(STATIC_CACHE);

  cache.addAll(staticAssets);
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (url.protocol === 'chrome-extension:') {
    return;
  }

  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(req));
  } else {
    event.respondWith(networkFirst(req));
  }
});

const cacheFirst = async (req) => {
  const cachedResponse = await caches.match(req);

  return cachedResponse || fetch(req);
};

const networkFirst = async (req) => {
  const cache = await caches.open(DYNAMIC_CACHE);

  try {
    const res = await fetch(req);
    const url = new URL(req.url);

    if (url.protocol.indexOf('http') === -1) {
      return;
    }

    cache.put(req, res.clone());

    return res;
  } catch (error) {
    return await cache.match(req);
  }
};
