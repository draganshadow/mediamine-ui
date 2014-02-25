require(['./bootstrap'], function () {
    //nothing to do here...see bootstrap.js
});

// let Angular know that we're bootstrapping manually
// https://github.com/angular/angular.js/commit/603fe0d19608ffe1915d8bc23bf412912e7ee1ac
window.name = "NG_DEFER_BOOTSTRAP!";

/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        /*named modules for src*/
        'async': './libs/requirejs-plugins/src/async',
        'domReady': './libs/requirejs-domready/domReady',
        'angular': './libs/angular/angular',
        'angular-route': './libs/angular-route/angular-route',
        'angular-resource': './libs/angular-resource/angular-resource',
        'restangular': './libs/restangular/dist/restangular',
        'bootstrap3': './libs/bootstrap/dist/js/bootstrap',
        'lodash': './libs/lodash/dist/lodash',
        'jquery': './libs/jquery/jquery',
        'projekktor': './vendor/projekktor/projekktor-1.3.03'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-mocks': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'restangular': {
            deps: ['angular', 'lodash']
        },
        'projekktor': {
            deps: ['jquery']
        }
    }
});