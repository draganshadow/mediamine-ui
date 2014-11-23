define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('VideoDetail', ['$scope', '$stateParams', 'Restangular', function ($scope, $stateParams, Restangular) {
        Restangular.one('videos', $stateParams.id).get()
            .then(function(result) {
                $scope.video = result;
            });
    }]);
});