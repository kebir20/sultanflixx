const CACHE = "sultanflix-v2"

const assets = [
"/",
"/index.html",
"/iptv.html",
"/radio.html",
"/manifest.json",
"/icon.png"
]

self.addEventListener("install", e => {

self.skipWaiting()

e.waitUntil(
caches.open(CACHE).then(cache => cache.addAll(assets))
)

})

self.addEventListener("activate", e => {

e.waitUntil(
caches.keys().then(keys =>
Promise.all(
keys.filter(k => k !== CACHE)
.map(k => caches.delete(k))
)
)
)

})

self.addEventListener("fetch", e => {

e.respondWith(

caches.match(e.request).then(res => {

return res || fetch(e.request)

})

)

})
