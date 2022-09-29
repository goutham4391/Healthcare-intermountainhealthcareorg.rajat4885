var JS_CONFIG = {
    debug: false,
    baseUrl: "/assets/org/js/lib"
};
//# sourceMappingURL=config-prod.js.map
var cacheBust = -1;
try {
    if (JS_CONFIG.debug) // JS_CONFIG not on page early enough
        cacheBust = Date.now();
    else if (SERVER_INFO)
        cacheBust = SERVER_INFO.Version + SERVER_INFO.ManualCacheBustAdditionalUrlArgs;
    else
        cacheBust = 4;
}catch(e){
    cacheBust = 4;
}
