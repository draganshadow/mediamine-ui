define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminFilesMain', ['$scope', '$location', 'Restangular', '$timeout', 'settings', function ($scope, $location, Restangular, $timeout, settings) {
        $scope.actions = [];
        $scope.paths = [];
        $scope.paths = settings.getSettings('paths');

        $scope.addFolder = function (pathArray) {
            pathArray.push({value:''});
        };

        $scope.save = function () {
            settings.save($scope.paths);
        };

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
