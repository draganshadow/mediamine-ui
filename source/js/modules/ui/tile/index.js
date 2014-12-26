/**
 * Directive that executes an expression when the element it is applied to loses focus
 */
define(['angular'], function (angular) {
    'use strict';
    angular.module('app.ui.tile', [])
    .directive('tile', ['$timeout', function($timeout) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                image:'@',
                title:'@',
                index:'=?',
                tileClass:'@',
                imageHeight:'@'
            },
            templateUrl: 'js/modules/ui/tile/tile.html?' + MEDIAMINE_URL_ARG,
            compile: function(element, attrs){
                return function($scope, element, attrs) {
                    $scope.index = $scope.index || 0;
                    $scope.tileClass = $scope.tileClass ? $scope.tileClass + ' ' : '';
                    $scope.imageHeight = $scope.imageHeight ? $scope.imageHeight : 'xxl';
                    var delay = 100 + $scope.index * 50;
                    $timeout(function() {
                        element.children().addClass('in');
                    }, delay);
                };
            }
        };
    }]);
});
