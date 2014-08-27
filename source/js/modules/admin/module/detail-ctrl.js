define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminModuleDetail', ['$scope', '$location', 'Restangular', function ($scope, $routeParams, Restangular) {
        $scope.module = {};
    }]);
});