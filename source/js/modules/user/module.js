define([
    'angular',
    'ui.router',
    'restangular',
    '../../config',
    '../core/index',
    '../ui/index',
    'ui-bootstrap-modal',
    'ui-bootstrap-tabs'
], function (angular) {
    'use strict';

    return angular.module('app.user', [
    'app.constants',
    'app.core',
    'app.ui',
    'ui.router',
    'ui.bootstrap.modal',
    'ui.bootstrap.tabs',
    'restangular'
    ]).config(['$stateProvider', 'moduleManagerProvider', 'menuManagerProvider',
        function ($stateProvider, moduleManagerProvider, menuManagerProvider) {
        $stateProvider
            .state('mediamine.user', {
                url: '/user',
                views: {
                    "": {
                        templateUrl: 'js/modules/user/home.html?' + MEDIAMINE_URL_ARG,
                        controller: 'AdminHomeController'
                    }
                }
            })
            .state('mediamine.user.profile', {
                url: '/profile',
                views: {
                    "": {
                        templateUrl: 'js/modules/user/profile/main.html?' + MEDIAMINE_URL_ARG,
                        controller: 'UserProfileMain'
                    }
                }
            })
            .state('mediamine.user.config', {
                url: '/config',
                views: {
                    "": {
                        templateUrl: 'js/modules/user/config/main.html?' + MEDIAMINE_URL_ARG,
                        controller: 'UserConfigMain'
                    }
                }
            })
            .state('mediamine.user.logout', {
                url: '/logout',
                views: {
                    "": {
                        templateUrl: 'js/modules/user/logout/main.html?' + MEDIAMINE_URL_ARG,
                        controller: 'UserLogoutMain'
                    }
                }
            });

        menuManagerProvider.registerEntry({
            type: 'dropdown',
            order: 1001,
            preIcon: ['glyphicon', 'glyphicon-user'],
            labelExpr: 'user.username',
            class: 'navbar-right',
            subItems: [
                {
                    label: 'USER_PROFILE',
                    sref: 'mediamine.user.profile'
                },
                {
                    label: 'USER_CONFIG',
                    sref: 'mediamine.user.config'
                },
                {
                    label: 'LOGOUT',
                    sref: 'mediamine.user.logout'
                }
            ]
        });
    }]);
});
