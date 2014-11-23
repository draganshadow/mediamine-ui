define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('SeriesList', ['$scope', 'Restangular', function ($scope, Restangular) {
        Restangular.all('groups').getList()
            .then(function(result) {
                $scope.series = result;
            });
    }]);
});