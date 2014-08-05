/**
 * This is where you add new components to the application
 * you don't need to sweat the dependency order (that is what RequireJS is for)
 * but implementations' `define`s placed elsewhere void the warranty
 */
define([
    'controllers/mediamine',
    'controllers/series/list-ctrl',
    'controllers/series/detail-ctrl',
    'controllers/season/detail-ctrl',
    'controllers/person/detail-ctrl',
    'controllers/video/detail-ctrl',
    'controllers/video/list-ctrl',
    'controllers/admin/files/main-ctrl',
    'controllers/admin/tasks/main-ctrl',
    'controllers/admin/module/detail-ctrl',
    'controllers/admin/module/list-ctrl',
    'controllers/admin/setting/list-ctrl',
    //'controllers/admin/setting/edit-ctrl',
    'controllers/admin/tunnel/list-ctrl',
    'directives/activeLink'
], function () {});
