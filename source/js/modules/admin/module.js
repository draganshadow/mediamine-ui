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
                        templateUrl: 'js/modules/admin/home.html',
                        controller: 'AdminHomeController'
                    }
                }
            })
            .state('mediamine.admin.files', {
                url: '/files',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/files/main.html',
                        controller: 'AdminFilesMain'
                    }
                }
            })
            .state('mediamine.admin.maintenance', {
                url: '/maintenance',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/maintenance/list.html',
                        controller: 'AdminMaintenance'
                    }
                }
            })
            .state('mediamine.admin.module', {
                url: '/module',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/module/list.html',
                        controller: 'AdminModuleList'
                    }
                }
            })
            .state('mediamine.admin.module.detail', {
                url: '/detail',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/module/detail.html',
                        controller: 'AdminModuleDetail'
                    }
                }
            })
            .state('mediamine.admin.setting', {
                url: '/setting',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/setting/list.html',
                        controller: 'AdminSettingList'
                    }
                }
            })
            .state('mediamine.admin.setting.edit', {
                url: '/edit',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/setting/edit.html',
                        controller: 'AdminSettingEdit'
                    }
                }
            })
            .state('mediamine.admin.task', {
                url: '/tasks',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/tasks/main.html',
                        controller: 'AdminTasksMain'
                    }
                }
            })
            .state('mediamine.admin.tunnel', {
                url: '/tunnel',
                views: {
                    "": {
                        templateUrl: 'js/modules/admin/tunnel/list.html',
                        controller: 'AdminTunnelList'
                    }
                }
            });

            menuManagerProvider.registerEntry({
                type: 'dropdown',
                order: 0,
                label: 'Admin',
                class: 'navbar-right',
                subItems: [
                    {
                        label: 'Files',
                        sref: 'mediamine.admin.files'
                    },
                    {
                        label: 'Modules',
                        sref: 'mediamine.admin.module'
                    },
                    {
                        label: 'Tunnels',
                        sref: 'mediamine.admin.tunnel'
                    },
                    {
                        label: 'Settings',
                        sref: 'mediamine.admin.setting'
                    },
                    {
                        label: 'Tasks',
                        sref: 'mediamine.admin.task'
                    },
                    {
                        label: 'Maintenance',
                        sref: 'mediamine.admin.maintenance'
                    }
                ]
            });
    }]);
});
