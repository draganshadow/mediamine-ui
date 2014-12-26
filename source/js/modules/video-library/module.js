define([
    'angular',
    'ui.router',
    'restangular',
    '../../config',
    '../ui/index',
    'ui-bootstrap-accordion',
    '../core/index'
], function (angular) {
    'use strict';

    return angular.module('app.videolib', [
            'app.constants',
            'app.core',
            'app.ui',
            'ui.router',
            'ui.bootstrap.accordion',
            'restangular'
        ]).config(['$stateProvider', 'moduleManagerProvider', 'menuManagerProvider', function ($stateProvider, moduleManagerProvider, menuManagerProvider) {
            moduleManagerProvider
                .registerView('left', 'videoFilters',
                {
                    templateUrl: 'js/modules/core/empty.html?' + MEDIAMINE_URL_ARG
                }
            );
            $stateProvider
                .state('mediamine.videolib', {
                    url: '/videolib',
                    abstract: true,
                    views:{
                        "" : {
                            templateUrl: 'js/modules/core/abstract.html?' + MEDIAMINE_URL_ARG
                        }
                    }
                })
                .state('mediamine.videolib.person', {
                    url: '/person/:id',
                    views: {
                        "": {
                            templateUrl: 'js/modules/video-library/person/detail.html?' + MEDIAMINE_URL_ARG,
                            controller: 'PersonDetail'
                        }
                    }
                })
                .state('mediamine.videolib.season', {
                    url: '/season/:id',
                    views: {
                        "": {
                            templateUrl: 'js/modules/video-library/season/detail.html?' + MEDIAMINE_URL_ARG,
                            controller: 'SeasonDetail'
                        }
                    }
                })
                .state('mediamine.videolib.series', {
                    url: '/series',
                    views: {
                        "": {
                            templateUrl: 'js/modules/video-library/series/list.html?' + MEDIAMINE_URL_ARG,
                            controller: 'SeriesList'
                        }
                    }
                })
                .state('mediamine.videolib.serie', {
                    url: '/serie/:id',
                    views: {
                        "": {
                            templateUrl: 'js/modules/video-library/series/detail.html?' + MEDIAMINE_URL_ARG,
                            controller: 'SeriesDetail'
                        }
                    }
                })
                .state('mediamine.videolib.videos', {
                    url: '/videos/:param',
                    views: {
                        "": {
                            templateUrl: 'js/modules/video-library/video/list.html?' + MEDIAMINE_URL_ARG,
                            controller: 'VideoList'
                        },
                        "videoFilters@": {
                            templateUrl: 'js/modules/video-library/filters/index.html?' + MEDIAMINE_URL_ARG,
                                controller: 'VideoFilters'
                        }
                    }
                })
                .state('mediamine.videolib.video', {
                    url: '/video/:id',
                    views: {
                        "": {
                            templateUrl: 'js/modules/video-library/video/detail.html?' + MEDIAMINE_URL_ARG,
                            controller: 'VideoDetail'
                        }
                    }
                });

            menuManagerProvider.registerEntry({
                type: 'link',
                order: 1,
                label: 'MENU_MOVIES',
                sref: 'mediamine.videolib.videos'
            });
            menuManagerProvider.registerEntry({
                type: 'link',
                order: 2,
                label: 'MENU_SERIES',
                sref: 'mediamine.videolib.series'
            });
        }]);
});
