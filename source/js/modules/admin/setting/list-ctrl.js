define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminSettingList', ['$scope', '$location', 'Restangular', '$modal', 'settings', function ($scope, $location, Restangular, $modal, settings) {
        $scope.settings = settings.getAllSettingsAsList();
        $scope.edit = function (setting) {


            var modalInstance = $modal.open({
                templateUrl: 'js/modules/admin/setting/edit.html' + MEDIAMINE_URL_ARG_P,
                controller: EditCtrl,
                size: 400,
                resolve: {
                    setting: function () {
                        return {
                            groupKey: setting.groupKey,
                            key: setting.key,
                            value: setting.value
                        };
                    }
                }
            });
            modalInstance.result.then(function (newSetting) {
                var res = newSetting.value.split(',');
                var value = [];
                for (var i=0, tot=res.length; i < tot; i++) {
                    res[i] = res[i].trim();
                    if (res[i] !== '') {
                        var intVal = parseInt(res[i], 10);
                        if (!isNaN(intVal)) {
                            value.push({value: intVal});
                        } else {
                            value.push({value: res[i]});
                        }
                    }
                }
                setting.valueObject = value;
                settings.save([setting])
                    .then(function() {
                        $scope.settings = settings.getAllSettingsAsList();
                    });
            });
        };
    }]);


    var EditCtrl = function ($scope, $modalInstance, setting) {
        $scope.setting = setting;
        $scope.ok = function () {
            $modalInstance.close($scope.setting);
        };
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
});