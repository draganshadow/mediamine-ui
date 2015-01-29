/**
 * Directive that executes an expression when the element it is applied to loses focus
 */
define(['angular'], function (angular) {
    'use strict';
    angular.module('app.ui.tile.video', [])
    .directive('tileVideo', ["deviceDetector", function(deviceDetector) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                tileClass : '@',
                video : '=',
                details : '='
            },
            templateUrl: 'js/modules/ui/tile-video/index.html' + MEDIAMINE_URL_ARG_P,
            compile: function(element, attrs){
                return function($scope, element, attrs) {
                    $scope.tileClass = $scope.tileClass ? $scope.tileClass + ' ' : '';
                    $scope.allowDrag = deviceDetector.isDesktop();
                };
            }
        };
    }]);
});
