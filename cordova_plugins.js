cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.LowLatencyAudio/www/LowLatencyAudio.js",
        "id": "com.phonegap.LowLatencyAudio.LowLatencyAudio",
        "clobbers": [
            "window.LowLatencyAudio"
        ]
    },
    {
        "file": "plugins/com.phonegap.TapToScroll/www/taptoscroll.js",
        "id": "com.phonegap.TapToScroll.TapToScroll",
        "clobbers": [
            "window.TapToScroll"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/src/firefoxos/DeviceProxy.js",
        "id": "org.apache.cordova.device.DeviceProxy",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/src/firefoxos/notification.js",
        "id": "org.apache.cordova.dialogs.dialogs-impl",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/src/firefoxos/InAppBrowserProxy.js",
        "id": "org.apache.cordova.inappbrowser.InAppBrowserProxy",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.LowLatencyAudio": "0.1.0",
    "com.phonegap.TapToScroll": "0.1.0",
    "org.apache.cordova.console": "0.2.12-dev",
    "org.apache.cordova.device": "0.2.13-dev",
    "org.apache.cordova.dialogs": "0.2.11-dev",
    "org.apache.cordova.inappbrowser": "0.5.4-dev",
    "org.apache.cordova.splashscreen": "0.3.5-dev"
}
// BOTTOM OF METADATA
});