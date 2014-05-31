define(['./../../index'], function (controllers) {
    'use strict';
    controllers.controller('ModuleList', function ($scope, $location, Restangular) {

        $scope.install = function (module) {
            console.log(module);
            module.post('install', {key:module.key})
                .then(function(result) {
                    console.log(result);
                });
        };

        Restangular.all('module').getList()
            .then(function(result) {
                $scope.modules = result;
            });
    });

});