define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('Playlist', ['$scope', '$stateParams', 'Restangular', 'actions', '$rootScope', 'user', 'toaster', '$translate',

        function ($scope, $stateParams, Restangular, actions, $rootScope, user, toaster, $translate) {
            $scope.bitrates = [150, 300, 500, 1000];
            $scope.bitrate = {value: 300};
            $scope.playlist = [];


            function playlistAdd(id, index, backup) {
                index = typeof index !== 'undefined' ? index : false;
                backup = typeof backup !== 'undefined' ? backup : true;
                Restangular.one('videos', id).get()
                    .then(function (result) {
                        if ($scope.playlist.length === 0) {
                            $scope.playlist.push(result);
                            $rootScope.$emit('player.set', $scope.playlist[0]);
                        } else {
                            $scope.playlist.push(result);
                        }
                        return $scope.playlist;
                    })
                    .then(function(playlist) {
                        if (backup) {
                            backupPlaylist(playlist);
                        }
                    });
            }

            function playlistAddAll(videos, index, backup) {
                backup = typeof backup !== 'undefined' ? backup : true;
                angular.forEach(videos, function(video) {
                    $scope.playlist.push(video);
                    if ($scope.playlist.length === 0) {
                        $rootScope.$emit('player.set', $scope.playlist[0]);
                    }
                });
                if (backup) {
                    backupPlaylist($scope.playlist);
                }
            }

            function backupPlaylist(playlist) {
                var playlistBackup = [];
                angular.forEach(playlist, function (item) {
                    playlistBackup.push({value: item.id.toString()});
                });
                var userLastPlaylist = user.getSetting('playlist', 'last');
                userLastPlaylist.valueObject = playlistBackup;
                user.save([userLastPlaylist])
                    .then(function() {
                    });
            }

            function loadLastPlaylist() {
                var userLastPlaylist = user.getSetting('playlist', 'last');
                angular.forEach(userLastPlaylist.value, function (item, index) {
                    playlistAdd(item, index, false);
                });
            }

            $scope.onDrop = function (data, evt) {
                if (data.files.length) {
                    $rootScope.$emit('playlist.add', data);
                } else {
                    toaster.pop('warning', $translate.instant('PLAYER_NOT_READABLE_TITLE'), $translate.instant('PLAYER_NOT_READABLE'));
                }
            };

            $scope.onReorder = function (index, data, evt) {
                $scope.playlist.splice(index, 0, data);
                $rootScope.$emit('playlist.add');
            };

            $scope.onMoved = function (index, data, evt) {
                $rootScope.$emit('playlist.remove', index);
            };

            $rootScope.$on('playlist.play', function (event, arg) {
                if (arg) {
                    Restangular.one('videos', arg.id).get()
                        .then(function (result) {
                            if ($scope.playlist.length == 0 || $scope.playlist[0].id != result.id) {
                                $scope.playlist.unshift(result);
                            }
                            $rootScope.$emit('player.play', $scope.playlist[0]);
                            return $scope.playlist;
                        })
                        .then(function(playlist) {
                            backupPlaylist(playlist);
                        });
                } else {
                    $rootScope.$emit('player.play');
                }
            });

            $rootScope.$on('player.completed', function (event, arg) {
                if ($scope.playlist.length && $scope.playlist[0].id == arg) {
                    $scope.$apply(function () {
                        $scope.playlist.shift();
                        backupPlaylist($scope.playlist);
                    });
                }
                if ($scope.playlist.length > 0) {
                    $rootScope.$emit('player.play', $scope.playlist[0]);
                }
            });

            $rootScope.$on('playlist.add', function (event, arg) {
                if (arg) {
                    playlistAdd(arg.id);
                }
            });

            $rootScope.$on('playlist.addAll', function (event, arg) {
                if (arg) {
                    playlistAddAll(arg);
                }
            });
            $rootScope.$on('playlist.remove', function (event, arg) {
                $scope.playlist.splice(arg, 1);
                backupPlaylist($scope.playlist);
            });
            $rootScope.$on('playlist.clear', function (event, arg) {
                $scope.playlist = [];
                backupPlaylist($scope.playlist);
            });

            $scope.killEncoding = function () {
                $rootScope.$emit('player.pause');
                actions.executeAction('killencoding');
            };

            $scope.$watch("bitrate.value", function () {
                $rootScope.$emit('player.bitrate', $scope.bitrate.value);
            });

            loadLastPlaylist();
        }]);
});

