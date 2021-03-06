define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminModuleList', ['$scope', '$location', 'Restangular', function ($scope, $location, Restangular) {

        var refreshList = function() {
            Restangular.all('modules').getList()
                .then(function(result) {
                    $scope.modules = result;
                });
        };

        $scope.install = function (module) {
            module.post('install', {key:module.key})
                .then(function(result) {
                    refreshList();
                });
        };

        refreshList();
    }]);

});