const CACHE='carcost-pro-v1';
const ASSETS=[
  './',
  './index.html','./css/style.css','./js/app.js','./js/i18n.js','./js/charts.js',
  './assets/logo.svg','./assets/icon-192.png','./assets/icon-512.png',
  './assets/lang/pt.json','./assets/lang/en.json','./assets/lang/fr.json','./assets/lang/es.json'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
