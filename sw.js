/* Chèvra – cache des icônes et du manifeste. Incrémenter CACHE pour forcer la mise à jour de l'icône d'accueil.
   La page index.html n'est pas mise en cache, pour que les nouvelles questions arrivent tout de suite. */
const CACHE = 'chevra-icons-v2';
const ASSETS = [
  './manifest.webmanifest',
  './icons/favicon-32.png',
  './icons/favicon-64.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];
self.addEventListener('install', ev => {
  ev.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', ev => {
  ev.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', ev => {
  const req = ev.request;
  if (req.method !== 'GET') return;
  const u = req.url;
  if (!u.includes('/icons/') && !u.endsWith('manifest.webmanifest')) return;
  ev.respondWith(caches.match(req).then(cached => cached || fetch(req).then(res => {
    if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  })));
});
