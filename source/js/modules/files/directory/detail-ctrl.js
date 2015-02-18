define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('DirectoryDetail', ['$rootScope', '$scope', '$stateParams', '$state', 'Restangular', 'actions', function ($rootScope, $scope, $stateParams, $state, Restangular, actions) {

        $scope.directory = {};
        $scope.directories = [];
        $scope.files = [];

        if ($stateParams.id) {
            Restangular.one('directories', $stateParams.id).get()
                .then(function(result) {
                    $scope.directory = result;
                });
        } else {
            $scope.directory = {
                name: 'root',
                path: 'root'
            };
        }

        Restangular.all('directories').getList({
            parent: ($stateParams.id || null)
        })
            .then(function(result) {
                $scope.directories = result;
            });

        Restangular.all('files').getList({
            directory: ($stateParams.id || null)
        })
            .then(function(result) {
                $scope.files = result;
            });

        $scope.clickVideo = function (id) {
            Restangular.all('videos').getList({
                file: id
            })
                .then(function(result) {
                    if (result && result.length > 0) {
                        $state.go('mediamine.videolib.video', {id: result[0].id});
                    }
                });
        };

        $scope.clickVideoPlay = function (id) {
            Restangular.all('videos').getList({
                file: id
            })
                .then(function(result) {
                    console.log(result);
                    if (result && result.length > 0) {
                        $rootScope.$emit('playlist.play', result[0]);
                    }
                });
        };
    }]);
});