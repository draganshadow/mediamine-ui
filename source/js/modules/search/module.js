define([
    'angular',
    'ui.router',
    'restangular',
    '../../config',
    '../ui/index',
    'ui-bootstrap-accordion',
    '../core/index',
    '../video-library/index'
], function (angular) {
    'use strict';

    return angular.module('app.search', [
            'app.constants',
            'app.core',
            'app.ui',
            'app.videolib',
            'ui.router',
            'ui.bootstrap.accordion',
            'restangular'
        ]).config(['$stateProvider', 'moduleManagerProvider', 'menuManagerProvider', function ($stateProvider, moduleManagerProvider, menuManagerProvider) {
            $stateProvider
                .state('mediamine.search', {
                    url: '/search/:text/:param',
                    views: {
                        "": {
                            templateUrl: 'js/modules/search/main/index.html',
                            controller: 'Search'
                        },
                        "videoFilters@": {
                            templateUrl: 'js/modules/video-library/filters/index.html',
                            controller: 'VideoFilters'
                        }
                    }
                });

            menuManagerProvider.registerEntry({
                type: 'partial',
                order: 1002,
                templateUrl: 'js/modules/search/widget/menu-search.html'
            });
        }]);
});
