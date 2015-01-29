define(['../module', 'projekktor'], function (controllers, projekktor) {
    'use strict';
    controllers.controller('ResumePlayer', ['$scope', '$stateParams', 'Restangular', '$rootScope', 'UserService', 'deviceDetector',
        function ($scope, $stateParams, Restangular, $rootScope, UserService, deviceDetector) {
            var userLastVideo = UserService.getSetting('player', 'last_video');
            var userLastTime = UserService.getSetting('player', 'last_time');
            function backupProgress(id, time) {
                var userLastVideo = UserService.getSetting('player', 'last_video');
                userLastVideo.valueObject = [{value: id.toString()}];

                var userLastTime = UserService.getSetting('player', 'last_time');
                userLastTime.valueObject = [{value: time.toString()}];

                UserService.save([userLastVideo, userLastTime])
                    .then(function () {
                    });
            }

            $scope.resume = function() {
                $rootScope.$emit('playlist.play', {
                    id: userLastVideo.value[0],
                    goTo: userLastTime.value[0]
                });
                $rootScope.$emit('player.goTo', userLastTime.value[0]);
            };
            $scope.no = function() {
                backupProgress("", 0);
            };
        }]);
    controllers.controller('Player', ['$scope', '$stateParams', 'Restangular', '$rootScope', 'user', 'deviceDetector', 'toaster', '$translate',
        function ($scope, $stateParams, Restangular, $rootScope, user, deviceDetector, toaster, $translate) {
            $scope.image = $rootScope.config.serverUrl + 'images/resized/template/blank-320-240-placeholder.jpg';
            $scope.video = {
                id: '',
                name: '',
                files: [{file: {pathKey: ''}}]
            };
            $scope.player = {
                state: null,
                bitrate: 300,
                goTo: 0,
                time: 0
            };

            $scope.onDropComplete = function (data, evt) {
                $rootScope.$emit('player.play', data);
            };

            function backupProgress(id, time) {
                var userLastVideo = user.getSetting('player', 'last_video');
                userLastVideo.valueObject = [{value: id.toString()}];

                var userLastTime = user.getSetting('player', 'last_time');
                userLastTime.valueObject = [{value: time.toString()}];

                user.save([userLastVideo, userLastTime])
                    .then(function () {
                    });
            }

            var userLastVideo = user.getSetting('player', 'last_video');
            if (userLastVideo.value[0]) {
                toaster.pop('note', $translate.instant('PLAYER_RESUME_TITLE'), 'js/modules/player/player/resume.html' + MEDIAMINE_URL_ARG_P, 30000, 'template', function(toaster) {
                    return true;
                });
            }

            projekktor('#main_player', {
                    controls: true,
                    addplugins: ['controlbar'],
                    platforms: ['flash', 'browser'],
                    poster: $scope.image,
                    title: $scope.video.name,
                    playerFlashMP4: './vendor/projekktor/swf/StrobeMediaPlayback/StrobeMediaPlayback_hls_mss.swf',
                    playerFlashMP3: './vendor/projekktor/swf/StrobeMediaPlayback/StrobeMediaPlayback_hls_mss.swf',
                    width: 288,
                    height: 144,
                    enableFlashFallback: true
                }, function (player) {
                    player.addListener('time', function (time) {
                        if ($scope.player.time + 120 < time) {
                            $scope.player.time = time;
                            backupProgress($scope.video.id, time);
                        }
                    });
                } // on ready
            );

            projekktor('#main_player').addListener('state', function (state) {
                console.log(state);
                if (state == 'COMPLETED') {
                    $scope.player.state = state;
                    backupProgress('', 0);
                    $rootScope.$emit('player.completed', projekktor('#main_player').getItemId());
                }
                if (state == 'PLAYING') {
                    $scope.player.state = state;
                    if ($scope.player.goTo > 0) {
                        setTimeout(function(){
                            projekktor('#main_player').setPlayhead('+' + $scope.player.goTo);
                            $scope.player.goTo = 0;
                        }, 5000);
                    }
                }
                if (state == 'IDLE') {
                    $scope.player.state = state;
                }
            });

            projekktor('#main_player').addListener('seek', function (state) {
                console.log(state);
            });

            var tokenParam = '?access_token=' + user.getToken().access_token;
            var setVideo = function (video) {
                $scope.video = video;

                var videoItem;

                var desktopFormat = user.getSetting('player', 'desktop_format');
                var mobileFormat = user.getSetting('player', 'mobile_format');

                var format = deviceDetector.isDesktop() ? desktopFormat.value : mobileFormat.value;
                console.log(format);
                switch (format) {
                    case 'flv':
                        videoItem = {src: $rootScope.config.serverUrl + 'stream/' + video.files[0].file.pathKey + '/' + $scope.player.bitrate + '-' + video.files[0].file.pathKey + '.flv' + tokenParam, type: 'video/flv'};
                        break;
                    case 'mp4':
                        videoItem = {src: $rootScope.config.serverUrl + 'stream/' + video.files[0].file.pathKey + '/' + $scope.player.bitrate + '-' + video.files[0].file.pathKey + '.mp4' + tokenParam, type: 'video/mp4'};
                        break;
                    case 'hls':
                        videoItem = {src: $rootScope.config.serverUrl + 'stream/' + video.files[0].file.pathKey + '/' + $scope.player.bitrate + '-' + video.files[0].file.pathKey + '.m3u8' + tokenParam, type: 'application/mpegURL'};
                        break;
                    case 'webm':
                        videoItem = {src: $rootScope.config.serverUrl + 'stream/' + video.files[0].file.pathKey + '/' + $scope.player.bitrate + '-' + video.files[0].file.pathKey + '.webm' + tokenParam, type: 'video/webm'};
                        break;
                    default:
                        videoItem = {src: $rootScope.config.serverUrl + 'stream/' + video.files[0].file.pathKey + '/' + $scope.player.bitrate + '-' + video.files[0].file.pathKey + '.flv' + tokenParam, type: 'video/flv'};
                        break;
                }
                projekktor('#main_player').setFile([
                    {
                        0: videoItem,
                        config: {
                            id: video.id
                        }
                    }
                ]);
            };

            $rootScope.$on('player.set', function (event, arg) {
                console.log('player.set');
                setVideo(arg);
            });
            $rootScope.$on('player.play', function (event, arg) {
                console.log('player.play');
                $scope.player.time = 0;
                if (arg) {
                    setVideo(arg);
                }
                projekktor('#main_player').setPlay();
            });
            $rootScope.$on('player.pause', function (event, arg) {
                console.log('player.pause');
                projekktor('#main_player').setPause();
            });


            $rootScope.$on('player.bitrate', function (event, arg) {
                $scope.player.bitrate = arg;
            });
            $rootScope.$on('player.goTo', function (event, arg) {
                console.log('player.goTo.' + arg);
                if ($scope.player.state == 'PLAYING') {
                    projekktor('#main_player').setPlayhead('+' + arg);
                } else {
                    $scope.player.goTo = arg;
                }
            });
        }]);
});

