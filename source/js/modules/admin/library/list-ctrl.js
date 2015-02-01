define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminLibrary', ['$scope', '$location', 'Restangular', function ($scope, $location, Restangular) {
        var params = {
            type : 'unknown',
            full : 1,
            page : 1
        };
        $scope.filters = ['non_added_video_list'];

        $scope.items = [];
        $scope.labels = [];
        $scope.data = [];

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
            Restangular.all('videos').getList(params)
                .then(function(result) {
                    $scope.items = $scope.items.concat(result);
                });
        };

        refreshList('non_added_video_list');

        $scope.execute = function (action) {
            refreshList(action);
        };
    }]);
});