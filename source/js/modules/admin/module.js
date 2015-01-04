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

    return angular.module('app.admin', [
    'app.constants',
    'app.core',
    'app.ui',
    'ui.router',
    'ui.bootstrap.modal',
    'ui.bootstrap.tabs',
    'restangular'
    ]).config(['$stateProvider', 'moduleManagerProvider', 'menuManagerProvider', function ($stateProvider, moduleManagerProvider, menuManagerProvider) {
        $stateProvider
            .state('mediamine.admin', {
                url: '/admin',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/home.html?' + MEDIAMINE_URL_ARG,
                        controller: 'AdminHomeController'
                    }
                }
            })
            .state('mediamine.admin.files', {
                url: '/files',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/files/main.html?' + MEDIAMINE_URL_ARG,
                        controller: 'AdminFilesMain'
                    }
                }
            })
            .state('mediamine.admin.users', {
                url: '/users',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/user/list.html?' + MEDIAMINE_URL_ARG,
                        controller: 'AdminUserList'
                    }
                }
            })
            .state('mediamine.admin.library', {
                url: '/library',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/library/list.html?' + MEDIAMINE_URL_ARG,
                        controller: 'AdminLibrary'
                    }
                }
            })
            .state('mediamine.admin.maintenance', {
                url: '/maintenance',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/maintenance/main.html?' + MEDIAMINE_URL_ARG,
                        controller: 'AdminMaintenance'
                    }
                }
            })
            .state('mediamine.admin.maintenance.install', {
                url: '/maintenance/install',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/maintenance/main.html?' + MEDIAMINE_URL_ARG,
                        controller: 'AdminMaintenance'
                    }
                }
            })
            .state('mediamine.admin.module', {
                url: '/module',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/module/list.html?' + MEDIAMINE_URL_ARG,
                        controller: 'AdminModuleList'
                    }
                }
            })
            .state('mediamine.admin.module.detail', {
                url: '/detail',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/module/detail.html?' + MEDIAMINE_URL_ARG,
                        controller: 'AdminModuleDetail'
                    }
                }
            })
            .state('mediamine.admin.setting', {
                url: '/setting',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/setting/list.html?' + MEDIAMINE_URL_ARG,
                        controller: 'AdminSettingList'
                    }
                }
            })
            .state('mediamine.admin.setting.edit', {
                url: '/edit',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/setting/edit.html?' + MEDIAMINE_URL_ARG,
                        controller: 'AdminSettingEdit'
                    }
                }
            })
            .state('mediamine.admin.job', {
                url: '/jobs',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/jobs/main.html?' + MEDIAMINE_URL_ARG,
                        controller: 'AdminJobsMain'
                    }
                }
            })
            .state('mediamine.admin.tunnel', {
                url: '/tunnel',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/tunnel/list.html?' + MEDIAMINE_URL_ARG,
                        controller: 'AdminTunnelList'
                    }
                }
            });

            menuManagerProvider.registerEntry({
                type: 'dropdown',
                order: 1001,
                class: 'navbar-right',
                preIcon: 'glyphicon glyphicon-cog',
                preIconTitle: 'Admin',
                condition: function ($rootScope) {
                    return $rootScope.user.roles.indexOf('ROLE_SUPER_ADMIN') !== -1;
                },
                subItems: [
                    {
                        label: 'ADMIN_MENU_FILES',
                        sref: 'mediamine.admin.files'
                    },
                    {
                        label: 'ADMIN_MENU_USERS',
                        sref: 'mediamine.admin.users'
                    },
                    {
                        label: 'ADMIN_MENU_MODULES',
                        sref: 'mediamine.admin.module'
                    },
                    {
                        label: 'ADMIN_MENU_TUNNELS',
                        sref: 'mediamine.admin.tunnel'
                    },
                    {
                        label: 'ADMIN_MENU_SETTINGS',
                        sref: 'mediamine.admin.setting'
                    },
                    {
                        label: 'ADMIN_MENU_TASKS',
                        sref: 'mediamine.admin.job'
                    },
                    {
                        label: 'ADMIN_MENU_MAINTENANCE',
                        sref: 'mediamine.admin.maintenance'
                    }
                ]
            });
    }]);
});
