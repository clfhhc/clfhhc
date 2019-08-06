self.__precacheManifest = [
  {
    "url": "/clfhhc/_next/static/-7vZRHAoXVMpDVgo3u-S0/pages/_app.js",
    "revision": "63aa6d4c42f02139c12e"
  },
  {
    "url": "/clfhhc/_next/static/-7vZRHAoXVMpDVgo3u-S0/pages/_error.js",
    "revision": "021dfdba34373df0e20a"
  },
  {
    "url": "/clfhhc/_next/static/-7vZRHAoXVMpDVgo3u-S0/pages/about.js",
    "revision": "065e0cfebbfb243b0009"
  },
  {
    "url": "/clfhhc/_next/static/-7vZRHAoXVMpDVgo3u-S0/pages/index.js",
    "revision": "9f816a24698fd651cfe8"
  },
  {
    "url": "/clfhhc/_next/static/-7vZRHAoXVMpDVgo3u-S0/pages/stats.js",
    "revision": "e7a3b58d5c1db077740c"
  },
  {
    "url": "/clfhhc/_next/static/chunks/commons.c38b8a2d0425c03fa72c.js",
    "revision": "cae937e98804c93a6826"
  },
  {
    "url": "/clfhhc/_next/static/runtime/main-b8b5055defb9d0a99d75.js",
    "revision": "e5b386c2d60a5a51ce10"
  },
  {
    "url": "/clfhhc/_next/static/runtime/webpack-3df6523e264ff2ac6548.js",
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
