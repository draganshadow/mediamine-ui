define([
    'angular',
    'ui.router',
    'restangular',
    '../../config',
    '../ui/index',
    'ui-bootstrap-buttons',
    '../core/index'
], function (angular) {
    'use strict';

    return angular.module('app.player', [
            'app.constants',
            'app.core',
            'app.ui',
            'ui.router',
            'ui.bootstrap.buttons',
            'restangular'
        ]).config(['$stateProvider', 'moduleManagerProvider', 'menuManagerProvider', function ($stateProvider, moduleManagerProvider, menuManagerProvider) {
            moduleManagerProvider
                .registerView('right', 'videoPlayer',
                {
                    templateUrl: 'js/modules/player/player/index.html',
                    class: 'height-30',
                    controller: 'Player'
                });
            moduleManagerProvider.registerView('right', 'videoPlaylist',
                {
                    templateUrl: 'js/modules/player/playlist/index.html',
                    class: 'height-70',
                    controller: 'Playlist'
                });
        }]);
});
