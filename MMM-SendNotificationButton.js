/* global Module */

/* MMM-SendNotificationButton.js
 *
 * Magic Mirror
 * Module: MMM-SendNotificationButton
 * MIT Licensed.
 *
 * See README.md for details on this.
 */
Module.register("MMM-SendNotificationButton", {

    getStyles: function() {
        return [ "MMM-SendNotificationButton.css" ];
    },


    getDom: function() {
        var div = document.createElement("div");
        div.className = "sendNotificationButton";

        div.appendChild(document.createTextNode("Notification Type:"));
        div.appendChild(document.createElement("br"));
        var label = document.createElement("input");
        div.appendChild(label);
        label.id = "sendNotificationButtonLabel";
        div.appendChild(document.createElement("br"));

        div.appendChild(document.createTextNode("Body / payload:"));
        div.appendChild(document.createElement("br"));
        var payload = document.createElement("textarea");
        div.appendChild(payload);
        payload.id = "sendNotificationButtonPayload";
        div.appendChild(document.createElement("br"));

        var btn = document.createElement("input");
        div.appendChild(btn);
        btn.type = "button";
        btn.value = "Submit";
        btn.onclick = event => {
            var label = document.getElementById("sendNotificationButtonLabel").value;
            var payloadStr = document.getElementById("sendNotificationButtonPayload").value;
            if (payloadStr.length > 0) {
                var payload = JSON.parse(payloadStr);
                this.sendNotification(label, payload); // not sure why this isn't found
            } else {
                this.sendNotification(label); // not sure why this isn't found
            }
        };
        return div;
    }
});
