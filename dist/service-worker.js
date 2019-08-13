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

importScripts(
<<<<<<< HEAD
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

importScripts("/precache-manifest.08dfd6c55043290b90a32e618f6898bf.js");

workbox.core.setCacheNameDetails({ prefix: "webmobile-sub3" });
=======
  "/precache-manifest.abf8c7f041bfac1928dd974a0bb3ad14.js"
workbox.core.setCacheNameDetails({prefix: "webmobile-sub3"});
>>>>>>> 933052a5eb25f69b569002ef520416d73b2683b3

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
