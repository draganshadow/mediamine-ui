define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('VideoFilters', ['$scope', '$stateParams', 'Restangular', '$rootScope', function ($scope, $stateParams, Restangular, $rootScope) {
        $scope.genres = [];
        $scope.types = [];

        Restangular.all('genre').getList()
            .then(function(result) {
                $scope.genres = $scope.genres.concat(result);
            });

        Restangular.all('video-type').getList()
            .then(function(result) {
                $scope.types = $scope.types.concat(result);
            });

        $scope.resetGenre = function () {
            $rootScope.$emit('filter.video.genre', null);
        };
        $scope.selectGenre = function (genre) {
            $rootScope.$emit('filter.video.genre', genre);
        };
        $scope.resetType = function () {
            $rootScope.$emit('filter.video.type', null);
        };
        $scope.selectType = function (type) {
            $rootScope.$emit('filter.video.type', type);
        };
    }]);
});

