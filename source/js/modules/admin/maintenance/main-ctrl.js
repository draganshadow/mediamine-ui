define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminMaintenance', ['$scope', '$location', 'Restangular', '$timeout', 'actions',
        function ($scope, $location, Restangular, $timeout, actions) {
        $scope.actions = actions.getActions();
        $scope.execute = function (action) {
            actions.executeAction(action);
        };
    }]);
});
