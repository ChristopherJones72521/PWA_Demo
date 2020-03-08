We have two prompts

One will display for iOS devices instructing them how to install to home Screen

One will display for all other devices prompting them to install

The beforeinstallprompt event will fire if the app is installable. These requirements should be met (list requirements). This event will trigger a prompt to install as PWA.

There will be a check to see if the app has already been installed as a PWA (standalone mode)

There will be a check to see if it is an iOS devices

TODO: Find a way to remember user selection on iOS if they choose not to install to home screen

TODO: Do we restrict this to mobile Safari on iOS? Or display for all mobile browsers informing the user that it is something you have to do in mobile Safari

TODO: Make add to homescreen prompt dismissible

Issue: When the user makes a selection to install or dismiss the pop-up, the install prompt re-appears. To solve this I've created a variable which will be checked (userSelected) before triggering the install prompt flow again. 
