define([
    'angular',
    'ui.router',
    '../../config'
], function (angular) {
    'use strict';

    function ModuleManager($rootScope, views) {
        this.views = views;

        this.getViewNames = function(type) {
            var viewNames = [];
            for(var name in views[type]) {
                viewNames.push(name);
            }
            return viewNames;
        };

        this.getViews = function(type) {
            var viewConfs = [];
            for(var name in views[type]) {
                viewConfs.push(views[type][name]);
            }
            return viewConfs;
        };
    }

    return angular.module('app.core', [
    'app.constants',
    'ui.router'
    ])
    .provider('moduleManager',
        function ModuleManagerProvider() {
            var views = {};
            this.registerView = function(type, name, config) {
                config.name = name;
                if(!(type in views)){
                    views[type] = {};
                }
                views[type][name] = config;
            };

            this.getViewConfigs = function() {
                var allViews = {};
                for (var t in views) {
                    angular.extend(allViews, views[t]);
                }
                return allViews;
            };

            this.$get = ['$rootScope', function moduleManagerFactory($rootScope) {
                return new ModuleManager($rootScope, views);
            }];
    });
});
