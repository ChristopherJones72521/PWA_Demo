/////////////////////////////////////////////////////////////////////////////////
// This script is meant to prompt the user to install this PWA to their device //
/////////////////////////////////////////////////////////////////////////////////

let deferredPrompt;

// Prevent default behavior and store the event
window.addEventListener('beforeinstallprompt', e => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault()
  // Stash the event so it can be triggered later.
  deferredPrompt = e
});

// Looks at the userAgent to determine if it is an iOS device
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test( userAgent );
}

// Detects if device is in standalone mode (already a PWA)
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
  // this.setState({ showInstallMessage: true });
  showIosInstall();
} else {
  addToHomeScreen();
}

// Display the iOS install prompt
function showIosInstall() {
  const iosPrompt = document.querySelector(".ios-prompt");
  iosPrompt.style.display = "block";
  iosPrompt.addEventListener("click", () => {
    iosPrompt.style.display = "none";
  });
}

// Triggers add to home screen prompt (non-iOS)
function addToHomeScreen() {
  const btnInstallApp = document.getElementById('a2hs-button');
  btnInstallApp.addEventListener('click', e => {
    btnInstallApp.style.display = 'none';
    deferredPrompt.prompt()
    deferredPrompt.userChoice
      .then(choiceResult => {
        if(choiceResult.outcome === 'accepted') {
          console.log('user accepted A2HS prompt')
        } else {
          console.log('user dismissed A2HS prompt')
        }
        deferredPrompt = null
      })
    });
}

// Listen for and confirm when the PWA is installed
window.addEventListener('appinstalled', (evt) => {
    console.log('add to home screen installed');
});
