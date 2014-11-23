define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminSettingList', ['$scope', '$location', 'Restangular', '$modal', function ($scope, $location, Restangular, $modal) {
        $scope.settings = settings.getAllSettingsAsList();

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
            setting.post('settings', {key:setting.key})
                .then(function(result) {
                    $scope.settings = settings.getAllSettingsAsList();
                });
        };

        $scope.settings = settings.getAllSettingsAsList();
    }]);
});