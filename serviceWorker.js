///////////////////////////////////////////////////////
// This script will register a simple service worker //
// We will want to make this more rubust in prod     //
// For the purpose of the POC, this should suffice   //
//                                                   //
// Google has a tool for this                        //
// https://developers.google.com/web/tools/workbox/  //
///////////////////////////////////////////////////////

self.addEventListener('install', (event) => {
  console.log('👷', 'install', event);
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('👷', 'activate', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  // console.log('👷', 'fetch', event);
  event.respondWith(fetch(event.request));
});
