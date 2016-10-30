(function (angular) {
    "use strict";

 
    var jsonTable = require("./documents/jsonTable.js");

    var moduleName = "app.shared";

    angular.module(moduleName, [])
        .component("jsonTable", jsonTable);
    ;

    module.exports = moduleName;
})(window.angular);



