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
                            templateUrl: 'js/modules/search/main/index.html?' + MEDIAMINE_URL_ARG,
                            controller: 'Search'
                        }
                    }
                })
                .state('mediamine.searchVideo', {
                    url: '/search/:text/:param',
                    views: {
                        "": {
                            templateUrl: 'js/modules/search/video/index.html?' + MEDIAMINE_URL_ARG,
                            controller: 'SearchVideo'
                        },
                        "videoFilters@": {
                            templateUrl: 'js/modules/video-library/filters/index.html?' + MEDIAMINE_URL_ARG,
                            controller: 'VideoFilters'
                        }
                    }
                })
                .state('mediamine.searchSeries', {
                    url: '/search/:text/:param',
                    views: {
                        "": {
                            templateUrl: 'js/modules/search/series/index.html?' + MEDIAMINE_URL_ARG,
                            controller: 'SearchSeries'
                        }
                    }
                })
                .state('mediamine.searchPerson', {
                    url: '/search/:text/:param',
                    views: {
                        "": {
                            templateUrl: 'js/modules/search/person/index.html?' + MEDIAMINE_URL_ARG,
                            controller: 'SearchPerson'
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
