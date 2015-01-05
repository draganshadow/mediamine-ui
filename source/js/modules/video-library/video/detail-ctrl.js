define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('VideoDetail', ['$scope', '$stateParams', 'Restangular', 'actions', function ($scope, $stateParams, Restangular, actions) {
        Restangular.one('videos', $stateParams.id).get()
            .then(function(result) {
                $scope.video = result;
            });
        $scope.scan = function () {
            actions.executeAction('scan', {'videos':[$stateParams.id]});
        };
    }]);
});