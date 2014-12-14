define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminFilesMain', ['$scope', '$location', 'Restangular', '$timeout', 'settings', 'actions', 'toaster',
        function ($scope, $location, Restangular, $timeout, settings, actions, toaster) {
        $scope.actions = [];
        $scope.paths = [];
        $scope.paths = settings.getSettings('paths');

        $scope.addFolder = function (pathArray) {
            pathArray.push({value:''});
        };

        $scope.save = function () {
            settings.save($scope.paths);
        };

        $scope.execute = function (action) {
            actions.executeAction(action);
        };
    }]);
});
