define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('Playlist', ['$scope', '$stateParams', 'Restangular', '$rootScope', function ($scope, $stateParams, Restangular, $rootScope) {
        $scope.bitrates = [150,300,500,1000];
        $scope.bitrate = {value :  300};
        $scope.playlist = [];

        $scope.onDrop = function(data, evt){
            $rootScope.$emit('playlist.add', data);
        };

        $scope.onReorder = function(index, data, evt){
            $scope.playlist.splice(index, 0, data);
            $rootScope.$emit('playlist.add');
        };

        $scope.onMoved = function(index, data, evt){
            $rootScope.$emit('playlist.remove', index);
        };

        $rootScope.$on('playlist.play', function(event, arg) {
            Restangular.one('video', arg.id).get()
                .then(function(result) {
                    $scope.playlist.unshift(result);
                    $rootScope.$emit('player.play', $scope.playlist[0]);
                });
        });

        $rootScope.$on('player.completed', function(event, arg) {
            if ($scope.playlist.length && $scope.playlist[0].id == arg) {
                $scope.$apply(function() {
                    $scope.playlist.shift();
                });
            }
            if ($scope.playlist.length > 0) {
                $rootScope.$emit('player.play', $scope.playlist[0]);
            }
        });

        $rootScope.$on('playlist.add', function(event, arg) {
            if (arg) {
                Restangular.one('video', arg.id).get()
                    .then(function(result) {
                        if ($scope.playlist.length === 0) {
                            $scope.playlist.push(result);
                            $rootScope.$emit('player.set', $scope.playlist[0]);
                        } else {
                            $scope.playlist.push(result);
                        }
                    });
            }
        });
        $rootScope.$on('playlist.remove', function(event, arg) {
            $scope.playlist.splice(arg, 1);
        });
        $rootScope.$on('playlist.clear', function(event, arg) {
            $scope.playlist = [];
        });

        $scope.$watch("bitrate.value", function () {
            $rootScope.$emit('player.bitrate', $scope.bitrate.value);
        });
    }]);
});
