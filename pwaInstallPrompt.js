/////////////////////////////////////////////////////////////////////////////////
// This script is meant to prompt the user to install this PWA to their device //
/////////////////////////////////////////////////////////////////////////////////

let deferredPrompt;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault()
  deferredPrompt = e
});

let btnInstallApp = document.getElementById('clickButton')

if(btnInstallApp) {
  btnInstallApp.addEventListener('click', e => {
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
    })
}


// Listen for and confirm when the PWA is installed
window.addEventListener('appinstalled', (evt) => {
    console.log('add to home screen installed');
});


