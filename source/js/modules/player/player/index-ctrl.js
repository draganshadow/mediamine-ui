define(['../module', 'projekktor'], function (controllers) {
    'use strict';
    controllers.controller('Player', ['$scope', '$stateParams', 'Restangular', '$rootScope', function ($scope, $stateParams, Restangular, $rootScope) {
        $scope.image = $rootScope.config.serverUrl + 'images/resized/template/blank-320-240-placeholder.jpg';
        $scope.video = {
            name : '',
            files: [{file:{pathKey: ''}}]
        };
        $scope.player = {
            bitrate: 300
        };

        $scope.onDropComplete = function(data, evt){
            $rootScope.$emit('player.play', data);
        };

        projekktor('#main-player', {
                platforms: ['browser', 'ios', 'native', 'flash'],
                poster: $scope.image,
                title: $scope.video.name,
                playerFlashMP4: './vendor/projekktor/src/swf/jarisplayer.swf',
                playerFlashMP3: './vendor/projekktor/src/swf/jarisplayer.swf',
                width: 288,
                height: 144,
                enableFlashFallback:true,
                playlist: []
            }, function(player) {} // on ready
        );

        projekktor('#main-player').addListener('state', function (state) {
            if (state == 'COMPLETED') {
                $rootScope.$emit('player.completed', projekktor('#main-player').getItemId());
            }
        });
        var setVideo = function (video) {
            projekktor('#main-player').setFile([
                {
                    0: {src: $rootScope.config.serverUrl + 'stream/' + $scope.player.bitrate + '-' + video.files[0].file.pathKey + '.flv', type: 'video/flv'},
//                    1: {src: "/master/mediamine-ui-2/source/vendor/projekktor/dist/media/intro.webm", type: "video/webm"},
//                    2: {src: "/master/mediamine-ui-2/source/vendor/projekktor/dist/media/intro.mp4", type: "video/mp4"},
//                    3: {src: "/master/mediamine-ui-2/source/vendor/projekktor/dist/media/intro.ogv", type: "video/ogg"},
                    config: {
                        id: video.id
                    }
                }
            ]);
        };

        $rootScope.$on('player.set', function(event, arg) {
            setVideo(arg);
        });
        $rootScope.$on('player.play', function(event, arg) {
            setVideo(arg);
            projekktor('#main-player').setPlay();
        });


        $rootScope.$on('player.bitrate', function(event, arg) {
            $scope.player.bitrate = arg;
        });
    }]);
});

