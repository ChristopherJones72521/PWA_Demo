# Installable Progressive Web App POC 

View working demo at: https://pwa.hackathonmentors.dev/

### Considerations
There are several checks which need to take place before presenting install prompt
* Is the user already browsing this website using a PWA? (do not prompt to install)
* Is the user using an iOS device? (Apple does not support JS events like beforeinstallprompt. A different flow is required)
* Has the user dismissed this prompt before? (will need to store user selection in cookie. Did not do this for POC)

### Approach
* Will display one pop-up for iOS devices instructing them how to install to home Screen
* Will display another pop-up for all other devices prompting them to install


The beforeinstallprompt event will fire if the app is installable. These requirements should be met (list requirements). This event will trigger a prompt to install as PWA.
https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent

**TODO:** Do we restrict this to mobile Safari on iOS? Or display for all mobile browsers informing the user that it is something you have to do in mobile Safari

**Issue:** When the user makes a selection to install or dismiss the pop-up, the install prompt re-appears. To solve this I've created a variable which will be checked (userSelected) before triggering the install prompt flow again. I just feel like this isn't supposed to happen in the first place.
