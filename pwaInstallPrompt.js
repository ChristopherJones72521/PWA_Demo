/////////////////////////////////////////////////////////////////////////////////
// This script is meant to prompt the user to install this PWA to their device //
/////////////////////////////////////////////////////////////////////////////////

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Update UI to notify the user they can install the PWA
    userPromptInstallation(deferredPrompt);
});


function userPromptInstallation(deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
	    console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
    })
}

function showInstallPromotion(deferredPrompt) {
    let button = document.getElementById("clickButton");
    button.addEventListener("click", (e) => {
	userPromptInstallation(deferredPrompt);
   });
}

// Listen for and confirm when the PWA is installed
window.addEventListener('appinstalled', (evt) => {
    console.log('add to home screen installed');
});
