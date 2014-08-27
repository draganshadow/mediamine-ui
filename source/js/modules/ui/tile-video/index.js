/**
 * Directive that executes an expression when the element it is applied to loses focus
 */
define(['angular'], function (angular) {
    'use strict';
    angular.module('app.ui.tile.video', [])
    .directive('tileVideo', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                video:'='
            },
            templateUrl: 'js/modules/ui/tile-video/index.html'
        };
    });
});
