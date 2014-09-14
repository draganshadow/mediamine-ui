define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('SeriesDetail', ['$scope', '$stateParams', 'Restangular', function ($scope, $stateParams, Restangular) {
        $scope.serie = {};
        $scope.seasons = {};
        Restangular.one('series', $stateParams.id).get()
            .then(function(result) {
                $scope.serie = result;
            });
        Restangular.all('season').getList({serie: $stateParams.id})
            .then(function(result) {
                $scope.seasons = result;
            });
    }]);
});