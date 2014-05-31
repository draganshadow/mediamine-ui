/**
 * Directive that executes an expression when the element it is applied to loses focus
 */
define(['./index'], function (filters) {
    'use strict';
    filters.filter('imagePath', function() {
        return function (input, width, height, format) {
            if (input) {
                return 'images/' + width + '-' + height + '-' + input + '.' + format;
            } else {
                return input;
            }
        };
    });
});
