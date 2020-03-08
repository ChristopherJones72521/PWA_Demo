/////////////////////////////////////////////////////////////////////////////////
// This script is meant to prompt the user to install this PWA to their device //
/////////////////////////////////////////////////////////////////////////////////

let deferredPrompt;
const a2hsBtn = document.querySelector("#a2hs-prompt");
let userSelected = false;

// Triggers add to home screen prompt (non-iOS)
function addToHomeScreen() {
  a2hsBtn.style.display = 'none';
  deferredPrompt.prompt()
  deferredPrompt.userChoice
    .then(choiceResult => {
      if(choiceResult.outcome === 'accepted') {
        console.log('user accepted A2HS prompt')
        userSelected = true;
      } else {
        console.log('user dismissed A2HS prompt')
        userSelected = true;
      }
      console.log('setting deferredPrompt to NULL')
      deferredPrompt = null;
      console.log(deferredPrompt);
    })
}

const dismiss = document.querySelector(".dismiss");
console.log(dismiss);
dismiss.addEventListener("click", e => {
  console.log('the dismiss button was clicked');
  a2hsBtn.style.display = "none";
})

// Displays the prompt to install and will trigger installation if clicked
function showAddToHomeScreen() {
  console.log("the showAddToHomeScreen function is being called");
  // display is none by default. This will display the prompt
  a2hsBtn.style.display = "block";
  a2hsBtn.addEventListener("click", addToHomeScreen);
}

// Prevent default behavior and store the event
window.addEventListener('beforeinstallprompt', e => {
  // This if statment is only necessary to prevent the prompt from reappearing
  // Would be better to store this selection in a cookie
  if (!userSelected) {
    console.log('beforeinstallprompt fired');
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // This event doesn't fire in iOS, so we can trigger the alternative flow here
    showAddToHomeScreen();
  }
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
}

// Display the iOS install prompt
function showIosInstall() {
  const iosPrompt = document.querySelector(".ios-prompt");
  iosPrompt.style.display = "block";
  iosPrompt.addEventListener("click", () => {
    iosPrompt.style.display = "none";
    // We'll need to find a way to persist this selection
    // possibly save the user selection in cookie
  });
}

// Listen for and confirm when the PWA is installed
window.addEventListener('appinstalled', e => {
    console.log('add to home screen installed');
});
