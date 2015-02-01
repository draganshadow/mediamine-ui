define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminLibrary', ['$scope', '$location', 'Restangular', function ($scope, $location, Restangular) {
        $scope.params = {
            type : 'unknown',
            full : 1,
            limit : 10,
            page : 1
        };

        $scope.filters = ['non_added_video_list'];

        $scope.items = [];
        $scope.labels = [];
        $scope.data = [];
        $scope.allowPrev = $scope.params.page > 1;
        $scope.allowNext = $scope.items.length == $scope.params.limit;

        Restangular.all('videos').getList({type : 'unknown', count:true})
            .then(function(result) {
                $scope.labels.push('Unknown');
                $scope.data.push(parseInt(result,10));
            });
        Restangular.all('videos').getList({type : 'movie', count:true})
            .then(function(result) {
                $scope.labels.push('Movies');
                $scope.data.push(parseInt(result,10));
            });
        Restangular.all('videos').getList({type : 'series', count:true})
            .then(function(result) {
                $scope.labels.push('Episodes');
                $scope.data.push(parseInt(result,10));
            });
        var refreshList = function() {
            Restangular.all('videos').getList($scope.params)
                .then(function(result) {
                    $scope.items = result;
                    $scope.allowNext = $scope.items.length == $scope.params.limit;
                    $scope.allowPrev = $scope.params.page > 1;
                });
        };

        refreshList('non_added_video_list');

        $scope.prev = function () {
            $scope.allowPrev = $scope.params.page > 1;
            if ($scope.allowPrev) {
                $scope.params.page--;
                refreshList();
            }
            $scope.allowPrev = $scope.params.page > 1;
        };
        $scope.next = function () {
            $scope.allowNext = $scope.items.length == $scope.params.limit;
            if ($scope.allowNext) {
                $scope.params.page++;
                refreshList();
            }
        };
    }]);
});