define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminSettingList', ['$scope', '$location', 'Restangular', '$modal', function ($scope, $location, Restangular, $modal) {
        var refreshList = function() {
            Restangular.all('setting').getList()
                .then(function(result) {
                    $scope.settings = result;
                });
        };

        var modalInstance = $modal.open({
            templateUrl: 'partials/admin/setting/edit.html',
            controller: ModalInstanceCtrl,
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        $scope.enable = function (setting) {
            setting.post('setting', {key:setting.key})
                .then(function(result) {
                    refreshList();
                });
        };

        refreshList();
    }]);
});