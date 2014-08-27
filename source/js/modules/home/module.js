define([
    'angular',
    'ui.router',
    '../../config',
    '../core/index',
    '../search/index'
], function (angular) {
    'use strict';

    return angular.module('app.home', [
    'app.constants',
            'app.core',
            'app.search',
    'ui.router'
    ]).config(['$stateProvider', 'moduleManagerProvider', 'menuManagerProvider', function ($stateProvider, moduleManagerProvider, menuManagerProvider) {
        $stateProvider
            .state('mediamine.home', {
                url: '/home',
                views: {
                    "": {
                        templateUrl: 'js/modules/home/home.html',
                        controller: 'HomeController'
                    }
                }
            });
    }]);
});
