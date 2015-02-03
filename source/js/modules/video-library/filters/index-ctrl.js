define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('VideoFilters', ['$scope', '$stateParams', 'Restangular', '$rootScope', function ($scope, $stateParams, Restangular, $rootScope) {
        $scope.genres = [];
        $scope.types = [];
        $scope.years = [];

        Restangular.all('genres').getList({limit: 1000})
            .then(function(result) {
                $scope.genres = $scope.genres.concat(result);
            });

        Restangular.all('videotypes').getList()
            .then(function(result) {
                $scope.types = $scope.types.concat(result);
            });

        Restangular.all('videos').customGETLIST('enumerate', {field:'year'})
            .then(function(result) {
                $scope.years = $scope.years.concat(result);
            });

        $scope.resetGenre = function () {
            $rootScope.$emit('filter.video.genre', null);
        };
        $scope.selectGenre = function (genre) {
            $rootScope.$emit('filter.video.genre', genre);
        };

        $scope.resetYear = function () {
            $rootScope.$emit('filter.video.year', null);
        };
        $scope.selectYear = function (year) {
            $rootScope.$emit('filter.video.year', year);
        };

        $scope.resetType = function () {
            $rootScope.$emit('filter.video.type', null);
        };
        $scope.selectType = function (type) {
            $rootScope.$emit('filter.video.type', type);
        };
    }]);
});

