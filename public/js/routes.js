/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app', './config'], function (app) {
    'use strict';
    app.config(function ($routeProvider) {

        $routeProvider.when('/', {redirectTo: '/movies'});

        $routeProvider.when('/series', {
            templateUrl: 'partials/series/list.html',
            controller: 'SeriesList'
        });

        $routeProvider.when('/series/:id', {
            templateUrl: 'partials/series/detail.html',
            controller: 'SeriesDetail'
        });

        $routeProvider.when('/season/:id', {
            templateUrl: 'partials/season/detail.html',
            controller: 'SeasonDetail'
        });

        $routeProvider.when('/person/:id', {
            templateUrl: 'partials/person/detail.html',
            controller: 'PersonDetail'
        });

        $routeProvider.when('/video/:id', {
            templateUrl: 'partials/video/detail.html',
            controller: 'VideoDetail'
        });

        $routeProvider.when('/movies', {
            templateUrl: 'partials/video/list.html',
            controller: 'VideoList'
        });

        $routeProvider.when('/movies/:page', {
            templateUrl: 'partials/video/list.html',
            controller: 'VideoList'
        });

        $routeProvider.when('/admin/module', {
            templateUrl: 'partials/admin/module/list.html',
            controller: 'ModuleList'
//            resolve: resolveController('controllers/admin/module/list-ctrl.js')
        });

        $routeProvider.when('/admin/module/:name', {
            templateUrl: 'partials/admin/module/detail.html',
            controller: 'ModuleDetail'
        });

        $routeProvider.when('/admin/setting', {
            templateUrl: 'partials/admin/setting/list.html',
            controller: 'SettingList'
        });

        $routeProvider.when('/admin/tunnel', {
            templateUrl: 'partials/admin/tunnel/list.html',
            controller: 'TunnelList'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });

        //$locationProvider.html5Mode(true);
    });
});