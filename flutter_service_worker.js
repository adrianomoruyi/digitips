'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a2f613b8081a42cc0ff004f1191fe59e",
".git/config": "bce8c01fb2a52a2c0630cd1a4ffea27a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a56267bb5d835a47027bf4d22392e55d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "28888c0ef013b958f9fb2f91185baa12",
".git/logs/refs/heads/main": "6b8190d50315153346d0f69b255838dc",
".git/logs/refs/remotes/origin/main": "7f225edcc3242a1641cb0219255a1ff5",
".git/objects/00/bb8a7599a36df874ad6081b11161f6364322ab": "622ef89fa22af3f7d6451efcbd64e257",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/4773df82685a1bf88bc633267786a9d9ba1517": "f705bcf3a4dd6fd2d44053953b4968a9",
".git/objects/09/ea1626b60349daf60205026ae14e3a5d9b9bef": "359b7ec464aee14570ddf09cae7b1be0",
".git/objects/0a/0af111544287564f39097edbb06e45301e6ba9": "fee636147f3e4d0e7c032958ab53f809",
".git/objects/0b/c152fb34a351937a3e76d78c27c11ce97d7a30": "5ce1a3c1f95ac2f37755bc54c8d1c924",
".git/objects/30/566109ab28d4d4019ee82b2ae0256470916089": "623df5d6b12ee13fe98cab8ebd97e391",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3e/184c44f90460a365d290d856ff0efe9c9a3bc7": "7cb78211cbbc9fc70ab216d1f4c5b049",
".git/objects/42/f950f7e32348eef793b7af1eb256d8a2828483": "2d454c6e7a953ec88b87967852f53563",
".git/objects/44/4e92df779a206581c436ad1db9d51953522aed": "d880fa57ebbb4d568988b2ef23b88612",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/95b490ba8e74922ef456927f7b7e41ed1da38c": "24108c864720b618d61439b9b0e490d1",
".git/objects/50/2b8abd7502e15b56a9aafd0f97caa1a5f3231d": "7ebb13cc8ab4e69c4712fd567745200d",
".git/objects/55/5ddecc33aa7ea8561eca5e67a2f533abc8aae4": "c08a065140b7409648f30e2cbf02d4f8",
".git/objects/59/b72a09255b5141be14778b0090cf38e8f59b8c": "19de847350e2b70aa5ea4f36280eb5e7",
".git/objects/60/049707d046a35dc3418013e34d1f6648a34c1f": "050ab236185f3b07a615731491d91411",
".git/objects/68/6bf89bc5b52f2cc91ef6cf44911c3254cec4b9": "58ed3c1dcdd1fa82cee0085e4cfc58a4",
".git/objects/6b/69d25daf0e1ad0d3198a012df5aa7f8ff41773": "2dd62a6cff25f25eaf4d7e4c869181fd",
".git/objects/6c/06b84d7d256170dc272ffc01854df967ff0665": "30fa4848d1f6e54c3063c6672c7bb3ff",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/4c0b935f0b8267bd588fc566a694db37f56e1d": "e015b528f076f8952f57e570ed959e14",
".git/objects/7f/5b583d0d68ef8b359caf9f0ac83813444eb0c3": "9fabb3dcfc9cc876f830aec028a494dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/182e25ea266615344e9aa50501c40f68f92607": "64888f2bd9528767b59e52548eea15aa",
".git/objects/89/dae4ff870a6d7d4bb0ccf5fc5d1f7e56d0614e": "f185acf8a51e643c402b81e1b7cf5aae",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/94/9cab3e43de8b4bdde36c631849309feedd7226": "21d5e261cce6cd14f152cffa5151437a",
".git/objects/94/a8acdd6bda253a60a42dbd89357425951dc7c7": "5e9980fa4f2d43d3cab4eab04f45fbb1",
".git/objects/96/3c487a7217ca7980db57b3c973287526cf3c19": "24620681037b224bd34911d7475338da",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9d/99cd52fa3230fddc604af8fd5eac1f00ceebd5": "5b3f6e155769cabaa3e36ec5c4179d11",
".git/objects/a0/a67e2737e53d58017e769d0b74b528ebc931aa": "b1d68970890e8b3f019f89052f86fbff",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/534bb72ca6b5266c33ab60adcc9b24126fa1e0": "f6caeb15c2b9411f618e74309baed8f9",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/a18de830723d8ac6f0156da20d287e4d27fa31": "4af6f57dcaa99db2e76a70f8e1b906f9",
".git/objects/c9/a81f69b46a6783058e4d293d493571d66371ee": "a6a8638ae8d309ccc04c5e51f02ad427",
".git/objects/d1/ef4974c0473dd59d7aac2fa46da7b168f0a4fc": "753f69554014390607787e3ce2c835d1",
".git/objects/d2/3879d915bc63d9591b15bc280aa71d04f17e26": "37650d4fef6c7fe67a4b819489087885",
".git/objects/d5/7628bbf9fc2d3995733ed3b68e5e99fd2b456d": "3de0acf40cdf343d963ceaf5b8dffe52",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/de/e265b5458c9d76dfcabbc3c93d586fe1700196": "1d42638f7c12e8443de8916abaa924cf",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/4c1759ae4b49a5ed1421e7cdb3c17303317957": "e944588e4aeae9207d44d18ff67049e0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/17a1fba284571dcc29c7089dc567aee814660b": "ab18455044b6aab652f359cc447c85ac",
".git/objects/f3/589447792014848bbcfbf01091ec490575fb3f": "539fc0d074a9ca46e7f65e3ddf6086bd",
".git/objects/f7/b17d972aaa9037b1a8a4f4c896567677737c1a": "c9cc8c3342852ea75df9d09101dab168",
".git/objects/fd/e37fbf0156f8f34100fa59f6de081fa1fb1768": "ec0304d8611adf6fc3947abb3d9e340b",
".git/refs/heads/main": "3787461aa68fffb274d75cb017349c52",
".git/refs/remotes/origin/main": "3787461aa68fffb274d75cb017349c52",
"assets/AssetManifest.json": "c810bcc1f5351d2735e6f477966c4577",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/img/digitipsiconorange.png": "2a3ccc85b02349b147f638f7bb50a9d4",
"assets/img/digitipsiphonemockup.png": "e2a09a4e44e7da19430f0580758d1ac7",
"assets/img/digitipssamsungmockup.png": "c97186c068a492fabcde7bd136e35ea8",
"assets/img/digitipstextorange.png": "68be6f63aaee095507727124e075af41",
"assets/img/phonesphoto.png": "e97e74cccdc91adcd5edc350e523a3fe",
"assets/NOTICES": "a7721524c5a5835a704436e52f3749a4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0712b34b409f09c56ab0738babfdaa22",
"/": "0712b34b409f09c56ab0738babfdaa22",
"main.dart.js": "43760190c6c3d00fd078d75cb89d0145",
"manifest.json": "a78377067d4e67b99e58e500b6305f77",
"version.json": "24534dd37e3d4bda9ac467f8b0a07890"
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
