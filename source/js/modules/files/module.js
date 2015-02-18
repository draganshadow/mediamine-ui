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

    return angular.module('app.files', [
            'app.constants',
            'app.core',
            'app.ui',
            'ui.router',
            'ui.bootstrap.accordion',
            'ui.bootstrap-slider',
            'ui.bootstrap.pagination',
            'restangular'
        ]).config(['$stateProvider', 'moduleManagerProvider', 'menuManagerProvider', function ($stateProvider, moduleManagerProvider, menuManagerProvider) {
            $stateProvider
                .state('mediamine.files', {
                    url: '/files',
                    abstract: true,
                    views:{
                        "" : {
                            templateUrl: 'js/modules/core/abstract.html' + MEDIAMINE_URL_ARG_P
                        }
                    }
                })
                .state('mediamine.files.directory', {
                    url: '/directory/:id',
                    views: {
                        "": {
                            templateUrl: 'js/modules/files/directory/detail.html' + MEDIAMINE_URL_ARG_P,
                            controller: 'DirectoryDetail'
                        }
                    }
                });
            menuManagerProvider.registerEntry({
                type: 'link',
                order: 3,
                label: 'MENU_FILES',
                sref: 'mediamine.files.directory'
            });
        }]);
});
