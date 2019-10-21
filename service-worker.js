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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "741f5cd01ea89f1d4249d892ff8d39aa"
  },
  {
    "url": "assets/css/0.styles.f5964fc7.css",
    "revision": "e000cb881067eb2dbcdf2f0cc31014e6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.9802a842.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.2896703f.js",
    "revision": "4fb51c19543f42fd80960efc432428e2"
  },
  {
    "url": "assets/js/4.cf1a956e.js",
    "revision": "fea0453b59ad31d4edaf6ac124d9f113"
  },
  {
    "url": "assets/js/app.7d712931.js",
    "revision": "ef95b1e5544600c33cd9692e298cf3ae"
  },
  {
    "url": "index.html",
    "revision": "0ce28ba23f566c4d51b4e10976da50f1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
