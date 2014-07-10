define(['./../../index'], function (controllers) {
    'use strict';
    controllers.controller('FilesMainAdmin', function ($scope, $location, Restangular) {
        $scope.actions = ['reset', 'install', 'scanFiles', 'searchMovies', 'searchSeries'];

        var getActions = function() {
            Restangular.all('action').getList()
                .then(function(result) {
                    $scope.actions = result;
                });
        };
        getActions();

        var executeActions = function(action) {
            action.post('execute', {action:action.name})
                .then(function(result) {
                    alert('EXECUTED');
                });
        };
        $scope.execute = function (action) {
            executeActions(action);
        };
    });
});
