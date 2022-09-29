if (!cacheBust) {
    cacheBust = -1;
}
requirejs.config({
    waitSeconds: 14,
    baseUrl: JS_CONFIG.baseUrl,
    paths: {
        "app": "..",
        "jquery": "jquery-1.10.2.min",
        "rsModules": "royalslider/modules",
        "gapi": "https://apis.google.com/js/client.js?onload=onGoogleLoad",
        "lib": ".",
        "commonModules": "../commonModules",
        "validate": "./jquery.validate",
        "waypoints": "./waypoints",
        "typeahead": "./typeahead.jquery",
        "picker": "datepicker/picker",
    },
    map: {
        "app/Events/*": "lib/Events/*",
        "picker": "datepicker/picker",
    },
    shim: {
        validate: "jquery",
        typeahead: {
            deps: ['jquery']
        }
    },
    bundles: {
        "lib/datepicker/datepicker-build": [
            "lib/datepicker/picker",
            "lib/datepicker/picker.date",
            "lib/datepicker/picker.time",
            "lib/datepicker/legacy"
        ],
    },
    urlArgs: "v=" + cacheBust
});
requirejs(['jquery'], function ($jq) {
    window.$ = window.jQuery = $jq;
    requirejs(['app/AnalyticsJS'], function (analyticsExport) {
        var anaJS = new analyticsExport.AnalyticsJS();
        anaJS.ConfigureYouTubePlayers();
    });
});
//# sourceMappingURL=main.js.map