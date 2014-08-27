define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('SeasonDetail', ['$scope', '$stateParams', 'Restangular', function ($scope, $stateParams, Restangular) {
        $scope.season = {};
        $scope.videos = {};
        Restangular.one('season', $stateParams.id).get()
            .then(function(result) {
                $scope.season = result;
            });
        Restangular.all('video').getList({
            season: $stateParams.id,
            orderBy: 'episode'
        })
            .then(function(result) {
                $scope.videos = result;
            });
    }]);
});