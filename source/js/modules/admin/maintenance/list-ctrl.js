define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminMaintenance', ['$scope', '$location', 'Restangular', function ($scope, $location, Restangular) {
        $scope.filters = ['non_added_video_list'];

        var getActions = function() {
            Restangular.all('library').getList()
                .then(function(result) {
                    $scope.filters = result.video_library;
                });
        };
        getActions();

        var refreshList = function(action) {
            // /api/library/video?key=non_added_video_list
            Restangular.all('library').customGET('video', {key: action})
                .then(function(result) {
                    $scope.items = result;
                });
        };

        refreshList('non_added_video_list');

        $scope.execute = function (action) {
            refreshList(action);
        };
    }]);
});