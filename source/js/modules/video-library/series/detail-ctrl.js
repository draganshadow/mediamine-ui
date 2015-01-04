define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('SeriesDetail', ['$scope', '$rootScope', '$stateParams', 'Restangular', function ($scope, $rootScope, $stateParams, Restangular) {
        $scope.serie = {};
        $scope.seasons = {};
        $scope.playRandom = function (serie) {
            Restangular
                .all('videos')
                .getList({group: serie.id})
                .then(function (result) {
                    $rootScope.$emit('playlist.addAll', result);
                    $rootScope.$emit('player.play');
                });
        };
        Restangular.one('groups', $stateParams.id).get()
            .then(function (result) {
                $scope.serie = result;
            });
        Restangular.all('seasons').getList({serie: $stateParams.id})
            .then(function (result) {
                $scope.seasons = result;
            });
    }]);
});