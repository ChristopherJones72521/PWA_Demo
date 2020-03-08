/////////////////////////////////////////////////////////////////
// This script will register the service worker if none exists //
/////////////////////////////////////////////////////////////////

if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log("Active service worker found, no need to register");
  } else {
    navigator.serviceWorker
      .register("serviceWorker.js", {
        scope: "./"
      })
      .then(function (reg) {
        console.log("Service worker has been registered for scope: " + reg.scope);
      })
      .catch(err => console.error('Error', err));
  }
}

// This checks if the protocol is https and displays a warning if not
// Probably not necessary for nyrr.org
if (window.location.protocol === 'http:') {
	  const requireHTTPS = document.getElementById('requireHTTPS');
	  const link = requireHTTPS.querySelector('a');
	  link.href = window.location.href.replace('http://', 'https://');
	  requireHTTPS.classList.remove('hidden');
}
