define(['./../../index'], function (controllers) {
    'use strict';
    controllers.controller('SettingList', function ($scope, $location, Restangular) {
        Restangular.one('setting').getList()
            .then(function(result) {
                $scope.modules = result;
            });
    });
});