define([
    'angular',
    'ui.router',
    'restangular',
    '../../config',
    '../ui/index',
    'ui-bootstrap-accordion',
    'ui-bootstrap-pagination',
    'ngSlider',
    '../core/index'
], function (angular) {
    'use strict';

    return angular.module('app.videolib', [
            'app.constants',
            'app.core',
            'app.ui',
            'ui.router',
            'ui.bootstrap.accordion',
            'ui.bootstrap-slider',
            'ui.bootstrap.pagination',
            'restangular'
        ]).config(['$stateProvider', 'moduleManagerProvider', 'menuManagerProvider', function ($stateProvider, moduleManagerProvider, menuManagerProvider) {
            moduleManagerProvider
                .registerView('left', 'videoFilters',
                {
                    templateUrl: 'js/modules/core/empty.html' + MEDIAMINE_URL_ARG_P
                }
            );
            $stateProvider
                .state('mediamine.videolib', {
                    url: '/videolib',
                    abstract: true,
                    views:{
                        "" : {
                            templateUrl: 'js/modules/core/abstract.html' + MEDIAMINE_URL_ARG_P
                        }
                    }
                })
                .state('mediamine.videolib.person', {
                    url: '/person/:id',
                    views: {
                        "": {
                            templateUrl: 'js/modules/video-library/person/detail.html' + MEDIAMINE_URL_ARG_P,
                            controller: 'PersonDetail'
                        }
                    }
                })
                .state('mediamine.videolib.season', {
                    url: '/season/:id',
                    views: {
                        "": {
                            templateUrl: 'js/modules/video-library/season/detail.html' + MEDIAMINE_URL_ARG_P,
                            controller: 'SeasonDetail'
                        }
                    }
                })
                .state('mediamine.videolib.series_reset', {
                    url: '/series',
                    views: {
                        "": {
                            templateUrl: 'js/modules/video-library/series/list.html' + MEDIAMINE_URL_ARG_P,
                            controller: 'SeriesList'
                        }
                    }
                })
                .state('mediamine.videolib.series', {
                    url: '/series/:param',
                    views: {
                        "": {
                            templateUrl: 'js/modules/video-library/series/list.html' + MEDIAMINE_URL_ARG_P,
                            controller: 'SeriesList'
                        }
                    }
                })
                .state('mediamine.videolib.serie', {
                    url: '/serie/:id',
                    views: {
                        "": {
                            templateUrl: 'js/modules/video-library/series/detail.html' + MEDIAMINE_URL_ARG_P,
                            controller: 'SeriesDetail'
                        }
                    }
                })
                .state('mediamine.videolib.videos_reset', {
                    url: '/videos',
                    views: {
                        "": {
                            templateUrl: 'js/modules/video-library/video/list.html' + MEDIAMINE_URL_ARG_P,
                            controller: 'VideoList'
                        }
                    }
                })
                .state('mediamine.videolib.videos', {
                    url: '/videos/:param',
                    views: {
                        "": {
                            templateUrl: 'js/modules/video-library/video/list.html' + MEDIAMINE_URL_ARG_P,
                            controller: 'VideoList'
                        },
                        "videoFilters@": {
                            templateUrl: 'js/modules/video-library/filters/index.html' + MEDIAMINE_URL_ARG_P,
                            controller: 'VideoFilters'
                        }
                    }
                })
                .state('mediamine.videolib.video', {
                    url: '/video/:id',
                    views: {
                        "": {
                            templateUrl: 'js/modules/video-library/video/detail.html' + MEDIAMINE_URL_ARG_P,
                            controller: 'VideoDetail'
                        }
                    }
                });

            menuManagerProvider.registerEntry({
                type: 'link',
                order: 1,
                label: 'MENU_MOVIES',
                sref: 'mediamine.videolib.videos_reset'
            });
            menuManagerProvider.registerEntry({
                type: 'link',
                order: 2,
                label: 'MENU_SERIES',
                sref: 'mediamine.videolib.series_reset'
            });
        }]);
});
