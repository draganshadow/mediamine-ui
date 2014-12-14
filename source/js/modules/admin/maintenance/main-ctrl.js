define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminMaintenance', ['$scope', '$location', 'Restangular', '$timeout', 'toaster',
        function ($scope, $location, Restangular, $timeout, toaster) {
        $scope.actions = [];
        var actionMap = {};
        var getActions = function() {
            Restangular.all('actions').getList()
                .then(function(result) {
                    $scope.actions = result;
                    angular.forEach($scope.actions, function (action) {
                        actionMap[action.name] = action;
                    });
                });
        };
        getActions();
        var executeActions = function(actionName) {
            actionMap[actionName].post('execute', {action:actionName})
                .then(function(result) {
                    toaster.pop('note', "Executed", actionName + " was executed. It may still be running in the background.");
                });
        };
        $scope.execute = function (action) {
            executeActions(action);
        };
    }]);
});
