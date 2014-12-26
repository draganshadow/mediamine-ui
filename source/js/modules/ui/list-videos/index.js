/**
 * Directive that executes an expression when the element it is applied to loses focus
 */
define(['angular'], function (angular) {
    'use strict';
    angular.module('app.ui.list.videos', [])
    .directive('listVideos', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                videos:'=',
                details:'='
            },
            templateUrl: 'js/modules/ui/list-videos/index.html?' + MEDIAMINE_URL_ARG
        };
    });
});
