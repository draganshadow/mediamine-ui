define(['./../index', './../../directives/whenScrolled'], function (controllers) {
    'use strict';
    controllers.controller('VideoList', function ($scope, $routeParams, Restangular, $rootScope) {
        var params = {type : 'movie'};
        params.page = 0;
        if (typeof $routeParams.page !== 'undefined') {
            params.page = $routeParams.page;
        }
        $scope.videos = [];
        $scope.genres = [];

        Restangular.all('genre').getList(params)
            .then(function(result) {
                $scope.genres = $scope.genres.concat(result);
            });

        $scope.loadMore = function() {
            params.page++;
            Restangular.all('video').getList(params)
                .then(function(result) {
                    $scope.videos = $scope.videos.concat(result);
                });
        };
        $scope.loadMore();

        $rootScope.search = {text:''};
        $rootScope.searchClick = function () {
            if ($scope.search.text) {
                params.page = 0;
                Restangular.all('video').getList({
                    text : $scope.search.text
                }).then(function(result) {
                        $scope.videos = result;
                    });
            }
        };

        $scope.$watch("search.genre", function () {
            if ($scope.search.genre) {
                params.page = 1;
                params.genre = $scope.search.genre;
                Restangular.all('video').getList(params)
                    .then(function(result) {
                        $scope.videos = result;
                    });

            }
        });
    });
});

