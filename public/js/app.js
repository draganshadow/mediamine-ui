/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 * (in other words... you probably don't need to do stuff here)
 */
define([
    'angular', 'angular-route', 'restangular',
    './config',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (ng) {
    'use strict';

    var app = ng.module('app', ['ngRoute', 'restangular',
        'app.constants',
        'app.services',
        'app.controllers',
        'app.filters',
        'app.directives'
    ]);


//    app.config(function ($httpProvider) {
//
//        // Use x-www-form-urlencoded Content-Type
//        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
//
//        /**
//         * The workhorse; converts an object to x-www-form-urlencoded serialization.
//         * @param {Object} obj
//         * @return {String}
//         */
//        var param = function(obj) {
//            var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
//
//            for(name in obj) {
//                value = obj[name];
//                if(value instanceof Array) {
//                    for(i=0; i<value.length; ++i) {
//                        subValue = value[i];
//                        fullSubName = name + '[' + i + ']';
//                        innerObj = {};
//                        innerObj[fullSubName] = subValue;
//                        query += param(innerObj) + '&';
//                    }
//                }
//                else if(value instanceof Object) {
//                    for(subName in value) {
//                        subValue = value[subName];
//                        fullSubName = name + '[' + subName + ']';
//                        innerObj = {};
//                        innerObj[fullSubName] = subValue;
//                        query += param(innerObj) + '&';
//                    }
//                }
//                else if(value !== undefined && value !== null) {
//                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
//                }
//            }
//
//            return query.length ? query.substr(0, query.length - 1) : query;
//        };
//
//        // Override $http service's default transformRequest
//        $httpProvider.defaults.transformRequest = [function(data) {
//            return ng.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
//        }];
//    });

    app.config(function (RestangularProvider) {
        RestangularProvider.setBaseUrl('./api/');
    });
    return app;
});