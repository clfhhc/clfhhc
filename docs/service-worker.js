self.__precacheManifest = [
  {
    "url": "/clfhhc.github.io/_next/static/HQP8pQkycxn6Tu9wm8KYG/pages/_app.js",
    "revision": "392d3987ed1560db0667"
  },
  {
    "url": "/clfhhc.github.io/_next/static/HQP8pQkycxn6Tu9wm8KYG/pages/_error.js",
    "revision": "8a6110da42f9fa7753ed"
  },
  {
    "url": "/clfhhc.github.io/_next/static/HQP8pQkycxn6Tu9wm8KYG/pages/about.js",
    "revision": "495e42f1ec616f2bb6db"
  },
  {
    "url": "/clfhhc.github.io/_next/static/HQP8pQkycxn6Tu9wm8KYG/pages/index.js",
    "revision": "9fdf4a3ab45c4ea5db67"
  },
  {
    "url": "/clfhhc.github.io/_next/static/HQP8pQkycxn6Tu9wm8KYG/pages/stats.js",
    "revision": "753706b849b801263178"
  },
  {
    "url": "/clfhhc.github.io/_next/static/chunks/commons.c38b8a2d0425c03fa72c.js",
    "revision": "cae937e98804c93a6826"
  },
  {
    "url": "/clfhhc.github.io/_next/static/runtime/main-b7812def5cd3796aff6e.js",
    "revision": "e5924384090330c524dd"
  },
  {
    "url": "/clfhhc.github.io/_next/static/runtime/webpack-3df6523e264ff2ac6548.js",
    "revision": "b0a559ac8f238b6fd6f7"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
