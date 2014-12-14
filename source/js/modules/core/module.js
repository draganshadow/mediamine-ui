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
    })
    .factory('SettingService', ['$q', '$rootScope', 'Restangular', '$state', function ($q, $rootScope, Restangular, $state) {
            var settingsList = {};
            var settings = {};
            var settingsPromise;

            function valuesToObjects(a) {
                var b = [];
                angular.forEach(a, function (elem, i) {
                    b[i] = {value: elem};
                });
                return b;
            }

            function indexByGroupKey(a) {
                var b = [];
                angular.forEach(a, function (elem, i) {
                    if (!b[elem.groupKey]) {
                        b[elem.groupKey] = {};
                    }
                    b[elem.groupKey][elem.key] = elem;
                });
                return b;
            }
            function objectsToValues(a) {
                var b = [];
                angular.forEach(a, function (elem, i) {
                    b[i] = elem.value;
                });
                return b;
            }

            var load = function() {
                return Restangular.all('settings').getList()
                    .then(function(result) {
                        angular.forEach(result, function (setting) {
                            setting.valueObject = valuesToObjects(setting.value);
                        });
                        settingsList = result;
                        settings = indexByGroupKey(settingsList);
                        return settings;
                    },function (err) {
                        $state.go('mediamine.admin.maintenance', {});
                    });
            };

            var save = function (settings) {
                var promises = [];
                angular.forEach(settings, function (setting) {
                    var cleanValues = [];
                    angular.forEach(setting.valueObject, function (v) {
                        if (v.value.trim() !== '') {
                            cleanValues.push(v);
                        }
                    });
                    setting.valueObject = cleanValues;
                    setting.value = objectsToValues(setting.valueObject);
                    promises.push(setting.put());
                });
                return $q.all(promises).then(function () {
                    return load();
                });
            };
            settingsPromise = load();

            return settingsPromise.then(function() {
                return {
                    promise : settingsPromise,

                    refresh : function () {
                        this.promise = load();
                        return this.promise;
                    },
                    save : function (setting) {
                        this.promise = save(setting);
                        return this.promise;
                    },
                    getSetting : function (group, key) {
                        return settings[group][key];
                    },
                    getSettings : function (group) {
                        return settings[group];
                    },
                    getAllSettings : function () {
                        return settings;
                    },
                    getAllSettingsAsList : function () {
                        return settingsList;
                    }
                };
            });
    }])
    .factory('ActionService', ['$q', '$rootScope', 'Restangular', '$state', 'toaster', function ($q, $rootScope, Restangular, $state, toaster) {
            var actionMap = {}, actions;
            var getActions = function() {
                return Restangular.all('actions').getList()
                    .then(function(result) {
                        actions = result;
                        angular.forEach(actions, function (action) {
                            actionMap[action.name] = action;
                        });
                    });
            };
            var executeAction = function(actionName, params) {
                actionMap[actionName].post('execute', {action:actionName})
                    .then(function(result) {
                        toaster.pop('note', "Executed", actionName + " was executed. It may still be running in the background.");
                    });
            };

            var actionsPromise = getActions();

            return actionsPromise.then(function() {
                return {
                    promise : actionsPromise,

                    refresh : function () {
                        this.promise = getActions();
                        return this.promise;
                    },
                    getActions : function () {
                        return actions;
                    },
                    executeAction : function (action, params) {
                        return executeAction(action, params);
                    }
                };
            });
    }])
    ;
});
