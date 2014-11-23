define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminMaintenance', ['$scope', '$location', 'Restangular', '$timeout', function ($scope, $location, Restangular, $timeout) {
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
                    alert('EXECUTED');
                });
        };
        $scope.execute = function (action) {
            executeActions(action);
        };
    }]);
});
