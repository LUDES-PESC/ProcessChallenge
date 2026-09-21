const CACHE="processpanic-v0.2.0-r7";
const ASSETS=[
  "./",
  "./index.html",
  "./article.html",
  "./play/",
  "./play/index.html",
  "./processpanic.html",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install",event=>{
  event.waitUntil(
    caches.open(CACHE)
      .then(cache=>cache.addAll(ASSETS))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

async function networkFirst(request){
  try{
    const response=await fetch(request,{cache:"no-store"});
    if(response&&response.ok){
      const copy=response.clone();
      caches.open(CACHE).then(cache=>cache.put(request,copy));
    }
    return response;
  }catch(error){
    return (await caches.match(request)) || (await caches.match("./index.html"));
  }
}

async function cacheFirst(request){
  const cached=await caches.match(request);
  if(cached)return cached;
  const response=await fetch(request);
  if(response&&response.ok){
    const copy=response.clone();
    caches.open(CACHE).then(cache=>cache.put(request,copy));
  }
  return response;
}

self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  const accepts=event.request.headers.get("accept")||"";
  const isDocument=event.request.mode==="navigate" || event.request.destination==="document" || accepts.includes("text/html");
  event.respondWith(isDocument?networkFirst(event.request):cacheFirst(event.request));
});
