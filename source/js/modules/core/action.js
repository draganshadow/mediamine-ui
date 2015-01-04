/**
 * Action Service
 */
define(['./module'], function (module) {
    'use strict';

    module.factory('ActionService', ['$q', '$rootScope', 'UserService', 'Restangular', '$state', 'toaster', function ($q, $rootScope, UserService, Restangular, $state, toaster) {
        var actionMap = {}, actions;
        var executeAction = function (actionName, params) {
            return actionMap[actionName].post('execute', {action: actionName})
                .then(function (result) {
                    toaster.pop('note', "Executed", actionName + " was executed. It may still be running in the background.");
                });
        };

        var getActions = function () {
            return Restangular.all('actions').getList()
                .then(function (result) {
                    actions = result;
                    angular.forEach(actions, function (action) {
                        actionMap[action.name] = action;
                    });
                    actionMap['check'].post('execute', {action: 'check'}).then(function (result) {
                        if (!result.schema) {
                            actionMap['createdb']
                                .post('execute', {action: 'createdb'})
                                .then(function (result) {
                                    console.log('DB CREATED');
                                    actionMap['install']
                                        .post('execute', {action: 'install'})
                                        .then(function (result) {
                                            console.log('INSTALLED');
                                        });
                                });
                        }
                    });
                }, function (error) {
                    if ($rootScope.oauth_token) {
                        UserService.logout();
                    }
                });
        };
        var actionsPromise = getActions();

        return actionsPromise.then(function () {
            return {
                promise: actionsPromise,

                refresh: function () {
                    this.promise = getActions();
                    return this.promise;
                },
                getActions: function () {
                    return actions;
                },
                executeAction: function (action, params) {
                    return executeAction(action, params);
                }
            };
        });
    }]);
});