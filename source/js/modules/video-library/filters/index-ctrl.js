define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('VideoFilters', ['$scope', '$stateParams', 'Restangular', '$rootScope', function ($scope, $stateParams, Restangular, $rootScope) {
        $scope.genres = [];
        $scope.types = [];
        $scope.years = [];
        $scope.sliderYear = [0,0];
        $scope.slider = {
            min : 0,
            range : true,
            value : [0,0],
            step : 1,
            max : 100
        };
        $scope.pagination = {
            count: 1,
            page: 1,
            maxSize: 3
        };

        $scope.$watch("pagination.page", function () {
            $rootScope.$emit('list.video.page', $scope.pagination.page);
        });
        var unbindPaginationListener = $rootScope.$on('list.video.pagination', function(event, pagination) {
            $scope.pagination = angular.extend($scope.pagination, pagination);
        });

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
                $scope.years = result;
                var min = $scope.years[0].year;
                var max = $scope.years[$scope.years.length - 1].year;
                $scope.slider.min = min;
                $scope.slider.value = [min, max];
                $scope.slider.max = max;
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
        $scope.filterYear = function (sliderYear) {
            $rootScope.$emit('filter.video.year', sliderYear[0], sliderYear[1]);
        };

        $scope.resetType = function () {
            $rootScope.$emit('filter.video.type', null);
        };
        $scope.selectType = function (type) {
            $rootScope.$emit('filter.video.type', type);
        };
        $scope.$on('$destroy', function () {
            unbindPaginationListener();
        });
    }]);
});

