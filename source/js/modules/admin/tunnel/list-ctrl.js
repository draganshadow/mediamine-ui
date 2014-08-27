define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminTunnelList', ['$scope', '$location', 'Restangular', function ($scope, $location, Restangular) {
        var refreshList = function() {
            Restangular.all('tunnel').getList()
                .then(function(result) {
                    $scope.tunnels = result;
                });
        };

        $scope.enable = function (tunnel) {
            tunnel.post('enable', {key:tunnel.key})
                .then(function(result) {
                    refreshList();
                });
        };

        $scope.disable = function (tunnel) {
            tunnel.post('disable', {key:tunnel.key})
                .then(function(result) {
                    refreshList();
                });
        };

        refreshList();
    }]);
});