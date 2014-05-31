define(['./../index'], function (controllers) {
    'use strict';
    controllers.controller('PersonDetail', function ($scope, $routeParams, Restangular) {
        $scope.person = {};
        var df1 = jQuery.Deferred(), df2 = jQuery.Deferred();
        Restangular.one('person', $routeParams.id).get()
            .then(function(result) {
                $scope.person = result;
                df1.resolve(result);
            });
        Restangular.all('video').getList({person: $routeParams.id})
            .then(function(result) {
                df2.resolve(result);
            });
        $.when(df1, df2).then(function(result1, result2) {
            $scope.person.videos = result2;
        });
    });
});