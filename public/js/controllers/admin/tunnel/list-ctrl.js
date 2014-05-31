define(['./../../index'], function (controllers) {
    'use strict';
    controllers.controller('TunnelList', function ($scope, $location, Restangular) {
        Restangular.one('tunnel').getList()
            .then(function(result) {
                $scope.tunnels = result;
            });
    });
});