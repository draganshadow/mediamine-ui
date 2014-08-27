define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('SeriesList', ['$scope', 'Restangular', function ($scope, Restangular) {
        Restangular.all('series').getList()
            .then(function(result) {
                $scope.series = result;
            });
    }]);
});