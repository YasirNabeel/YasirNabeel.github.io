'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4c4bbb3d08d446af6858327df33eb167",
"index.html": "e366be01a73d9e6a6ad2bcb22dddbea9",
"/": "e366be01a73d9e6a6ad2bcb22dddbea9",
"main.dart.js": "aeac06b3ad96955c55b7c58e29fe648d",
"favicon.png": "bfbe8b1cebff26c292a6560d2d53f756",
"canvaskit.js": "ba3d2525a8057a9649db1616d9f74014",
"icons/Icon-192.png": "712004e57d598346b662352b53629955",
"icons/Icon-512.png": "57107c6c3ddb57a0c00ce35814ce80b2",
"manifest.json": "d3dae83a1db81a34931d5612336d0df3",
"canvaskit.wasm": "349321bc0b7cff10bc3d0fa1c195379a",
"assets/AssetManifest.json": "83692ef11838643b3e15baa12a35ee19",
"assets/NOTICES": "8e9acfe021d3a9c9f9e70b82b5451813",
"assets/FontManifest.json": "65e6e9c07b99112e403efae63ba6f779",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/info.png": "afc69408062baea6dcff306874389ba9",
"assets/assets/images/subscription.png": "5167ab40b1d2567e5e4f02bb38dabb9e",
"assets/assets/images/maintenance.png": "256247c57f12c861e62024b2d173d4f4",
"assets/assets/images/exchange.png": "5cee42b18adba7406339b8878733f6fb",
"assets/assets/images/ip_tv.png": "ee8839f30be664f14d531dbb46af4af8",
"assets/assets/images/download.png": "569979da6d65e3768c86bcf3d9a41ddf",
"assets/assets/images/profile_image.png": "8f0a5a6900ef5d46a8a486b52d2ad8b3",
"assets/assets/images/iq_old_logo.png": "4df564897d5244e70ee26ac1a1401bc1",
"assets/assets/images/ic_insta_light.png": "5cdd3cba14629032a6ee9124e4b83173",
"assets/assets/images/call_center.png": "c99121d9181b173da2e0ae07a2305eab",
"assets/assets/images/credit_card.png": "a6b378d2df4ad10ad85a1402547d2fcf",
"assets/assets/images/ic_web_light.png": "9924f5090a85959d295d23982a352b60",
"assets/assets/images/intro_4.png": "765d661248eac32d8c3c81086ae1f812",
"assets/assets/images/ic_tw_light.png": "644c191718d0a4556affd214bf2382c4",
"assets/assets/images/translate.png": "4718b04a54b2c7b931b673ecaae6ce81",
"assets/assets/images/customer_service.png": "2301739d069fe08d00ff18251cf2b775",
"assets/assets/images/checked.png": "1d1a8a983263fefe1e3488f5351e92a1",
"assets/assets/images/ic_insta.png": "045244589b830a16652e51e90208ffb3",
"assets/assets/images/intro_1.png": "2d0bb6163d84acc289924d56cacaa23c",
"assets/assets/images/intro_3.png": "ac29d5087b8ac71ddcc1af52ffef670d",
"assets/assets/images/intro_2.png": "54c6ab9665c1da7ddf9b8d66749d33cf",
"assets/assets/images/moon.png": "178cd8478411d4e21dcbdbd743a1ae77",
"assets/assets/images/iq_logo.png": "e1cba04e376536c98344883b8e520521",
"assets/assets/images/cancel_image.png": "70e7a8b2b93def2f29b4ad3aa031cc2d",
"assets/assets/images/splash.png": "b9b9a85ee19e3393b649c79ea552cde8",
"assets/assets/images/notification_bell.png": "f86073d4db7785e2d707702bd191ef28",
"assets/assets/images/ic_fb.png": "67aa01b1f77685959fc0c441da7d2736",
"assets/assets/images/pay.png": "afcdebbd092763dc0074e24b27ab5d89",
"assets/assets/images/alarm-off_light.png": "60b6aeaaeaf2491acd330d4d6334d2a5",
"assets/assets/images/alarm-off.png": "5832c6f6dbea067494bddaad05deb8a8",
"assets/assets/images/ic_fb_light.png": "2d542ef8b0870fb219dedd5b4e227e0a",
"assets/assets/images/sun.png": "a09df52d70a0b73008ff5a0cdf1b762d",
"assets/assets/images/iq_logo_full.png": "1fdd06d56c9ec37093b67deaa218d34e",
"assets/assets/images/ic_tw.png": "e454e3a27286c6ebc8ec686a35c6aad6",
"assets/assets/images/speed_rocket.png": "9374c94707e5323bed7c623b895ee6b3",
"assets/assets/images/notification.png": "46dd901d6bf73b690db8ba8b83b833ad",
"assets/assets/images/marker.png": "b0a2b8c17f1a1125e31a35709c5f3b0b",
"assets/assets/images/error_image.png": "e5566bbce996bc30a522e3ad9c3a88a4",
"assets/assets/images/ic_web.png": "4b07088a656f225e1803f1947ff58a20",
"assets/assets/fonts/Rabar_014.ttf": "4c388e5b5097622cc1c346c7916bdb03",
"assets/assets/fonts/Rabar_015.ttf": "e2e30bede8cd0ec8ea741ecaa8fb2a12",
"assets/assets/fonts/Rabar_013.ttf": "feb65e7e64300884bb9231a641f390b7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
