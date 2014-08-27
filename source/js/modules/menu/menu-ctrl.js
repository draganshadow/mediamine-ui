/**
 * Menu controller definition
 */
define(['./module'], function (module) {
    'use strict';
    module.controller('MenuController', ['$scope', 'menuManager', function ($scope, menuManager) {
        $scope.menuItems = menuManager.getEntries();
    }]);
});
