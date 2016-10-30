(function (angular) {
    function requestModel() {
        var requestModelObject = {};
        
        requestModelObject.UserInfo = { 
            Department : '',
            Email: '',
            FullName: ''
        }
        
        requestModelObject.Rules = []


        return requestModelObject;
    }

    var moduleName = 'app.requestModel'
    angular.module(moduleName, []).factory('requestmodel', requestModel)
    module.exports = moduleName
})(window.angular)