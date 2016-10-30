var angular = require("angular");

require("../../../scratch/templates.js");
var ngTags = require("ng-tags-input");

angular

    .module("ngApp",
    [
        require("ngcomponentrouter"),

        //moduke
        require("../home/home"),
        require("../dashboard/dashboardModule"),
        require("../notfound/notfound"),

        //shared
        require("../shared/sharedModule"),

      

        "ui.bootstrap",
        "app.templates",
        "angular-loading-bar",
        "ngSanitize"

    ])

    .value("$routerRootComponent", "app")
    .value("appSettings", {})
    .component("app",
    {
        templateUrl: "components/app/app.html",
        $routeConfig: [
            { path: "/", component: "home", name: "Home" },

            { path: "/Dashboard/:id", component: "dashboardHome", name: "Dashboard" },

            { path: "/**", component: "notfound", name: "NotFound" }
        ],
        controller: function (cfpLoadingBar, $rootScope) {
        }
    })

        .config([
        "$httpProvider", "cfpLoadingBarProvider", function ($httpProvider, cfpLoadingBarProvider) {
            $httpProvider.defaults.withCredentials = true;

            if (!$httpProvider.defaults.headers.get) {
                $httpProvider.defaults.headers.get = {};
            }
            $httpProvider.defaults.headers.get["Cache-Control"] = "no-cache";
            $httpProvider.defaults.headers.get["Pragma"] = "no-cache";
        }
        ]);