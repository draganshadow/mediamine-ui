define(['../module','./edit-ctrl'], function (controllers) {
    'use strict';
    controllers.controller('AdminSettingList', ['$scope', '$location', 'Restangular', '$modal', function ($scope, $location, Restangular, $modal) {
        var refreshList = function() {
            Restangular.all('setting').getList()
                .then(function(result) {
                    $scope.settings = result;
                });
        };

        $scope.edit = function (setting) {


            var modalInstance = $modal.open({
                templateUrl: 'js/modules/admin/setting/edit.html',
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
                            value.push(intVal);
                        } else {
                            value.push(res[i]);
                        }
                    }
                }
                setting.value = value;
                setting.put()
                    .then(function(result) {
                        refreshList();
                    });
            });
        };

        refreshList();
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