/**
 * Setting Service
 */
define(['./module'], function (module) {
    'use strict';

    module.controller('LoginModalCtrl', ['$scope', '$rootScope', '$http', '$modalInstance', function ($scope, $rootScope, $http, $modalInstance) {
        $scope.login = {
            username: null,
            password: null
        };
        $scope.submit = function () {
            $http.post(window.mediamine.serverUrl + 'oauth/v2/token', {
                client_id: $rootScope.oauth_client.client_id,
                client_secret: $rootScope.oauth_client.client_secret,
                grant_type: 'password',
                username: $scope.login.username,
                password: $scope.login.password
            })
                .success(function (data, status, headers, config) {
                    $modalInstance.close(data);
                })
                .error(function (data, status, headers, config) {
                    console.log(data);
                });
        };
    }])
        .factory('UserService', ['$cookieStore', '$http', '$q', '$rootScope', 'Restangular', '$state', '$modal',
            function ($cookieStore, $http, $q, $rootScope, Restangular, $state, $modal) {
                var settingsList = {};
                var settings = {};
                var settingsPromise;
                var user;
                var token;
                var deferred = $q.defer();

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

                function refreshToken() {
                    $http.post(window.mediamine.serverUrl + 'oauth/v2/token', {
                        client_id: $rootScope.oauth_client.client_id,
                        client_secret: $rootScope.oauth_client.client_secret,
                        grant_type: 'refresh_token',
                        refresh_token: $rootScope.access_token.refresh_token
                    })
                        .success(function (data, status, headers, config) {
                            token = data;
                            $rootScope.access_token = token;
                            Restangular.setDefaultRequestParams({access_token: $rootScope.oauth_token.access_token});
                            setTimeout(function () {
                                refreshToken();
                            }, 3000000);
                        })
                        .error(function (data, status, headers, config) {
                            console.log(data);
                        });
                }

                function logout() {
                    $rootScope.oauth_token = null;
                    $rootScope.user = null;
                    $cookieStore.put('token', false);
                    window.location.assign("")
                }

                function applyUserCustomizations(settings) {
                    var backgroundType = settings.background.type.value[0];
                    if (backgroundType == 'random') {
                        angular.element('body').addClass('random-background');
                    }
                    if (backgroundType == 'fixed') {
                        angular.element('body').removeClass('random-background');
                    }
                    if (backgroundType == 'color') {
                        angular.element('body').removeClass('random-background');
                    }
                }

                function login() {
                    var def = $q.defer();
                    var logprom = def.promise;

                    if ($cookieStore.get('token')) {
                        def.resolve($cookieStore.get('token'));
                    } else {
                        var modalInstance = $modal.open({
                            templateUrl: 'js/modules/core/login.html?' + MEDIAMINE_URL_ARG,
                            controller: 'LoginModalCtrl',
                            size: 'sm',
                            backdrop: 'static',
                            resolve: {
                                setting: function () {
                                    return {};
                                }
                            }
                        });
                        logprom = modalInstance.result;
                    }

                    logprom.
                        then(function (atoken) {
                            token = atoken
                            $rootScope.oauth_token = token;

                            Restangular.setDefaultRequestParams({access_token: $rootScope.oauth_token.access_token});
                            Restangular.setErrorInterceptor(
                                function (response) {
                                    if (response.status == 401) {
                                        console.log("Login required... ");
                                        $cookieStore.put('token', false);
                                        login();
                                        return false;
                                    }
                                }
                            );

                            setTimeout(function () {
                                refreshToken();
                            }, 3000000);
                            $cookieStore.put('token', token);
                            return Restangular.one('users', 'current').get();
                        })
                        .then(function (result) {
                            user = result;
                            $rootScope.user = user;
                            return user.all('settings').getList();
                        })
                        .then(function (result) {
                            angular.forEach(result, function (setting) {
                                setting.valueObject = valuesToObjects(setting.value);
                            });
                            settingsList = result;
                            settings = indexByGroupKey(settingsList);
                            deferred.resolve(token);
                            applyUserCustomizations(settings);
                            return settings;
                        });

                }

                var load = function () {
                    return $http.get(window.mediamine.client + '?' + MEDIAMINE_URL_ARG)
                        .success(function (data, status, headers, config) {
                            var client = angular.fromJson(data);
                            $rootScope.oauth_client = client;
                            return login();
                        })
                        .error(function (data, status, headers, config) {
                            console.log(data, status, headers, config);
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

                load();

                return {
                    promise: deferred.promise,

                    logout: logout,

                    getToken: function () {
                        return token;
                    },
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