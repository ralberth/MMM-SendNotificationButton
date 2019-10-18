# MMM-SendNotificationButton
Web form with button that calls sendNotification() to all other modules

![Screenshot](/screenshot.png?raw=true "Example screenshot")

This shows the MMM-SendNotificationButton module below the [MMM-ViewNotifications](https://github.com/glitch452/MMM-ViewNotifications) module.  The top module shows a line anytime any module calls `this.sendNotification()`, which sends a message to all modules in MagicMirror.

The SendNotificationButton module has a web form you can fill out with the arguments to `sendNotification()`.  Clicking the button just calls `sendNotification()`.

Use this for testing your own modules that respond to broadcast messages via `sendNotification()`.

The "Notification type:" text box at top is the first argument taken unchanged as an arbitrary string.  The bottom "Body / payload:" textarea must either be empty, or be a valid JSON document.  This module converts the text from the textarea into a JavaScript object and sends it.

Check the web browser's console for any error messages or faults sending to `this.sendNotification()`.  No errors appear in the browser main window.
