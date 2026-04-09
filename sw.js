const CACHE="sultanflix-v1"

const assets=[
"/",
"/index.html",
"/iptv.html",
"/radio.html",
"/manifest.json"
]

self.addEventListener("install",e=>{

e.waitUntil(
caches.open(CACHE).then(cache=>cache.addAll(assets))
)

})

self.addEventListener("fetch",e=>{

e.respondWith(
caches.match(e.request).then(res=>res||fetch(e.request))
)

})
