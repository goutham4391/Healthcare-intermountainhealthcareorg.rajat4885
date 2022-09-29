var DigitalDataManager = (function () {
    function DigitalDataManager() {
        this.digitalData = {
            version: "1.0"
        };
    }
    DigitalDataManager.prototype.AddPageData = function (pageObject) {
        this.digitalData.pageInstanceID = pageObject.pageInstanceID;
        this.digitalData.page = pageObject.page;
    };
    DigitalDataManager.prototype.AddExtensionObject = function (extension) {
        if (extension) {
            var parentObjName = this.GetParentObjName(extension);
            this.digitalData[parentObjName] = extension[parentObjName];
        }
    };
    DigitalDataManager.prototype.AddExtensions = function () {
        var extensions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            extensions[_i - 0] = arguments[_i];
        }
        for (var ext in extensions)
            this.AddExtensionObject(extensions[ext]);
    };
    DigitalDataManager.prototype.GetParentObjName = function (obj) {
        var count = 0;
        var objName = "";
        for (var i in obj) {
            count++;
            if (count > 1)
                break;
            objName = i;
        }
        return objName;
    };
    DigitalDataManager.prototype.GetDigitalData = function () {
        return this.digitalData;
    };
    return DigitalDataManager;
}());
//# sourceMappingURL=DigitalDataManager.js.map