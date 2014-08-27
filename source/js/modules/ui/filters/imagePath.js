/**
 * Directive that executes an expression when the element it is applied to loses focus
 */
define(['./index'], function (filters) {
    'use strict';
    filters.filter('imagePath', ['$rootScope', function($rootScope) {
        return function (input, width, height, format, transformation, replacement, transformationR) {
            transformation = transformation ? (transformation == 'thumbnail' ? '' : transformation + '-') : '';
            replacement = replacement ? replacement : 'placeholder';
            if (input) {
                return $rootScope.config.serverUrl + 'images/resized/library/' + transformation + width + '-' + height + '-' + input + '.' + format;
            } else {
                return $rootScope.config.serverUrl + 'images/resized/template/' + (transformationR ? transformationR + '-' : transformation) + width + '-' + height + '-' + replacement + '.' + format;
            }
        };
    }]);
});
