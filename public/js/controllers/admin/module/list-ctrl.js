define(['./../../index'], function (controllers) {
    'use strict';
    controllers.controller('ModuleList', function ($scope, $location, Restangular) {
        Restangular.one('module').getList()
            .then(function(result) {
                $scope.modules = result;
            });
    });
});