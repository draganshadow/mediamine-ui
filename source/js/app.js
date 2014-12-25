/**
 * loads sub modules and wraps them up into the main module.
 * This should be used for top-level module definitions only.
 */
define([
    'angular',
    'ngAnimate',
    'ngLoading',
    'ngToaster',
    'ui.router',
    './config',
    './translation',
    'restangular',
    'app-partials',
    'ui-bootstrap-partials',
    './modules/menu/index',
    './modules/player/index',
    './modules/home/index',
    './modules/search/index',
    './modules/admin/index',
    './modules/video-library/index',
    './modules/ui/index'
], function (angular) {
    'use strict';

    return angular.module('app', [
            'ngAnimate',
            'app.constants',
            'app.translation',
            'app.menu',
            'app.partials',
            'ui.bootstrap.partials',
            'app.admin',
            'app.home',
            'app.search',
            'app.videolib',
            'app.ui',
            'app.player',
            'restangular',
            'ui.router',
            'angular-loading-bar',
            'toaster'
        ])
        .constant('toasterConfig', {
            'limit': 0,                   // limits max number of toasts
            'tap-to-dismiss': true,
            'close-button': true,
            'newest-on-top': true,
            //'fade-in': 1000,            // done in css
            //'on-fade-in': undefined,    // not implemented
            //'fade-out': 1000,           // done in css
            // 'on-fade-out': undefined,  // not implemented
            //'extended-time-out': 1000,    // not implemented
            'time-out': 3000, // Set timeOut and extendedTimeout to 0 to make it sticky
            'icon-classes': {
                error: 'toast-error',
                info: 'toast-info',
                wait: 'toast-wait',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            'body-output-type': '', // Options: '', 'trustedHtml', 'template'
            'body-template': 'toasterBodyTmpl.html',
            'icon-class': 'toast-info',
            'position-class': 'toast-top-right',
            'title-class': 'toast-title',
            'message-class': 'toast-message'
        })
        .config(['CONFIG', '$urlRouterProvider', '$stateProvider', 'moduleManagerProvider', 'RestangularProvider', function (CONFIG, $urlRouterProvider, $stateProvider, moduleManagerProvider, RestangularProvider) {
            RestangularProvider.setBaseUrl(CONFIG.apiUrl);

            $urlRouterProvider.otherwise('/mediamine/home');
            var viewConfig = {
                "" : {
                    templateUrl: 'js/modules/core/abstract.html'
                }
            };
            angular.extend(viewConfig, moduleManagerProvider.getViewConfigs());
            $stateProvider
                .state('mediamine', {
                    resolve: {
                        settings: 'SettingService',
                        actions: 'ActionService'
                    },
                    abstract: true,
                    url: '/mediamine',
                    views: viewConfig
                });
        }]);

});
