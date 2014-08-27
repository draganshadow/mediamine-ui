define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('VideoFilters', ['$scope', '$stateParams', 'Restangular', '$rootScope', function ($scope, $stateParams, Restangular, $rootScope) {
        $scope.genres = [];

        $rootScope.search = {text:''};
        Restangular.all('genre').getList()
            .then(function(result) {
                $scope.genres = $scope.genres.concat(result);
            });
    }]);
});

