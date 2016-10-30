(function (angular) {
    "use strict";
    var dashboardHome = require("./dashboardHome.js");

    var moduleName = "app.Dashboard";
    angular
        .module(moduleName, [])
            .component("dashboardHome", dashboardHome);

    module.exports = moduleName;
})(window.angular);