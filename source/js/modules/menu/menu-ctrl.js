/**
 * Menu controller definition
 */
define(['./module'], function (module) {
    'use strict';
    module.controller('MenuController', ['$rootScope', '$scope', 'menuManager', function ($rootScope, $scope, menuManager) {
        $scope.menuItems = menuManager.getEntries();
    }]);
});
