/**
 * Directive that executes an expression when the element it is applied to loses focus
 */
define(['angular'], function (angular) {
    'use strict';
    angular.module('app.ui.tileCarousel', [])
    .directive('tileCarousel', function($timeout) {
        return {
            restrict: 'E',
            scope: {
                items:'='
            },
            templateUrl: 'js/modules/ui/tile-carousel/index.html' + MEDIAMINE_URL_ARG_P,
            transclude:true,
            link: function(scope, element, attrs, ctrl, transclude) {
                transclude(scope, function(clone, scope) {
                    element.append(clone);
                });
            }
        };
    });
});
