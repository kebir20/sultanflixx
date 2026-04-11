const CACHE = "sultanflix-v3"

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

fetch(e.request)
.then(res => {

const clone = res.clone()

caches.open(CACHE).then(cache => cache.put(e.request, clone))

return res

})
.catch(() => caches.match(e.request))

)

})
