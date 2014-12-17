define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('RightPanelController', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
        $scope.hide = function() {
            $rootScope.showRightViews = false;
        };
        $scope.show = function() {
            $rootScope.showRightViews = true;
        };
    }]);
});

