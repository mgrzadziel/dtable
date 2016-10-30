(function (angular) {
    function errorService() {
        var errorServiceObject = {};

        var data = {};

        errorServiceObject.Save = function (request) {
            data = request;
        };
        errorServiceObject.Load = function () {
            return data;
        };
        return errorServiceObject;
    }

    var moduleName = "app.errorService";
    angular.module(moduleName, []).factory("errorService", errorService);
    module.exports = moduleName;
})(window.angular)