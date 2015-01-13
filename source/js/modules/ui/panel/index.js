/**
 * Directive that executes an expression when the element it is applied to loses focus
 */
define(['angular'], function (angular) {
    'use strict';
    angular.module('app.ui.panel', [])
        .directive('panel', ['$timeout', function($timeout) {
            return {
                restrict: 'E',
                transclude: true,
                scope: {
                    heading:'@',
                    class: '@'
                },
                templateUrl: 'js/modules/ui/panel/panel.html' + MEDIAMINE_URL_ARG_P,
                controller: function($scope, $element) {
                    this.setHeading = function(element) {
                        this.heading = element;
                    };
                },
                link: function($scope, element, attrs) {
                    $timeout(function() {
                        element.children().addClass('in');
                    }, 500);
                }
            };
        }])
        .directive('panelHeading', function() {
            return {
                restrict: 'EA',
                transclude: true,   // Grab the contents to be used as the heading
                template: '',       // In effect remove this element!
                replace: true,
                require: '^panel',
                link: function(scope, element, attr, panelCtrl, transclude) {
                    // Pass the heading to the accordion-group controller
                    // so that it can be transcluded into the right place in the template
                    // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
                    panelCtrl.setHeading(transclude(scope, function() {}));
                }
            };
        })
        .directive('panelTransclude', function() {
            return {
                require: '^panel',
                link: function(scope, element, attr, controller) {
                    scope.$watch(function() { return controller[attr.panelTransclude]; }, function(heading) {
                        if ( heading ) {
                            element.html('');
                            element.append(heading);
                        }
                    });
                }
            };
        });
});
