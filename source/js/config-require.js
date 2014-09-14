if (typeof define !== 'function') {
    // to be able to require file from node
    var define = require('amdefine')(module);
}

define({
    baseUrl: '.',
    // Here paths are set relative to `/source` folder
    paths: {
        'angular'       : 'vendor/angular/angular',
        'async'         : 'vendor/requirejs-plugins/src/async',
        'jquery'        : 'vendor/jquery/dist/jquery',
        'ngResource'    : 'vendor/angular-resource/angular-resource',
        'ui-bootstrap-dropdown': 'vendor/angular-ui-bootstrap/src/dropdown/dropdown',
        'ui-bootstrap-transition': 'vendor/angular-ui-bootstrap/src/transition/transition',
        'ui-bootstrap-modal': 'vendor/angular-ui-bootstrap/src/modal/modal',
        'ui-bootstrap-tabs': 'vendor/angular-ui-bootstrap/src/tabs/tabs',
        'ui-bootstrap-accordion': 'vendor/angular-ui-bootstrap/src/accordion/accordion',
        'ui-bootstrap-collapse': 'vendor/angular-ui-bootstrap/src/collapse/collapse',
        'ui-bootstrap-buttons': 'vendor/angular-ui-bootstrap/src/buttons/buttons',
        'ui.router'     : 'vendor/angular-ui-router/release/angular-ui-router',
        'restangular': 'vendor/restangular/dist/restangular',
        'showdown': 'vendor/showdown/src/showdown',
        'lodash': 'vendor/lodash/dist/lodash',
        'projekktor': 'vendor/projekktor/dist/projekktor-universal',
        'ngTranslate' : 'vendor/angular-translate/angular-translate',
        'app-partials'          : 'html2js/partials',
        'ui-bootstrap-partials' : 'html2js/ui.bootstrap.partials'
    },

    shim: {
        'angular': {
            'deps': ['jquery'],
            'exports': 'angular'
        },
        'ngResource': ['angular'],
        'restangular': ['angular', 'lodash'],
        'projekktor': ['jquery'],
        'ui.router' : ['angular'],
        'ui-bootstrap-dropdown' : ['angular'],
        'ui-bootstrap-transition' : ['angular'],
        'ui-bootstrap-modal' : ['angular', 'ui-bootstrap-transition'],
        'ui-bootstrap-tabs' : ['angular'],
        'ui-bootstrap-buttons' : ['angular'],
        'ui-bootstrap-accordion' : ['angular', 'ui-bootstrap-collapse'],
        'app-partials'          : ['angular'],
        'ui-bootstrap-partials' : ['angular'],
        'ngTranslate' : ['angular']
    }
});