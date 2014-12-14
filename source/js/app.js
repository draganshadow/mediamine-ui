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
        ]).config(['CONFIG', '$urlRouterProvider', '$stateProvider', 'moduleManagerProvider', 'RestangularProvider', function (CONFIG, $urlRouterProvider, $stateProvider, moduleManagerProvider, RestangularProvider) {
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
