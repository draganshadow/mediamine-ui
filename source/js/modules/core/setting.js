/**
 * Setting Service
 */
define(['./module'], function (module) {
    'use strict';

    module.factory('SettingService', ['UserService', '$q', '$rootScope', 'Restangular', '$state', function (UserService, $q, $rootScope, Restangular, $state) {
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

        var load = function () {
            return Restangular.all('settings').getList()
                .then(function (result) {
                    angular.forEach(result, function (setting) {
                        setting.valueObject = valuesToObjects(setting.value);
                    });
                    settingsList = result;
                    settings = indexByGroupKey(settingsList);
                    return settings;
                }, function (err) {
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
        UserService.promise.then(function() {
            settingsPromise = load();
        });

        return {
            promise: settingsPromise,

            refresh: function () {
                this.promise = load();
                return this.promise;
            },
            save: function (setting) {
                this.promise = save(setting);
                return this.promise;
            },
            getSetting: function (group, key) {
                return settings[group][key];
            },
            getSettings: function (group) {
                return settings[group];
            },
            getAllSettings: function () {
                return settings;
            },
            getAllSettingsAsList: function () {
                return settingsList;
            }
        };
    }]);
});