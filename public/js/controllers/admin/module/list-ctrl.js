define(['./../../index'], function (controllers) {
    'use strict';
    controllers.controller('ModuleList', function ($scope, $location, Restangular) {

        var refreshList = function() {
            Restangular.all('module').getList()
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
    });

});