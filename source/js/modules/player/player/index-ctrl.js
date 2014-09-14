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

        projekktor('#main_player', {
                platforms: ['flash','browser'],
                poster: $scope.image,
                title: $scope.video.name,
                playerFlashMP4: './vendor/projekktor/swf/StrobeMediaPlayback/StrobeMediaPlayback_hls_mss.swf',
                playerFlashMP3: './vendor/projekktor/swf/StrobeMediaPlayback/StrobeMediaPlayback_hls_mss.swf',
                width: 288,
                height: 144,
                enableFlashFallback:true
            }, function(player) {} // on ready
        );

        projekktor('#main_player').addListener('state', function (state) {
            console.log(state);
            if (state == 'COMPLETED') {
                $rootScope.$emit('player.completed', projekktor('#main_player').getItemId());
            }
        });

        projekktor('#main_player').addListener('seek', function (state) {
            console.log(state);
        });
        var setVideo = function (video) {
            projekktor('#main_player').setFile([
                {
//                    0: {src: $rootScope.config.serverUrl + 'stream/' + video.files[0].file.pathKey + '/' + $scope.player.bitrate + '-' + video.files[0].file.pathKey + '.flv', type: 'video/flv'},
//                    0: {src: $rootScope.config.serverUrl + 'stream/' + video.files[0].file.pathKey + '/' + $scope.player.bitrate + '-' + video.files[0].file.pathKey + '.mp4', type: "video/mp4"},
                    0: {src: $rootScope.config.serverUrl + 'stream/' + video.files[0].file.pathKey + '/' + $scope.player.bitrate + '-' + video.files[0].file.pathKey + '.m3u8', type: "application/mpegURL"},
//                    1: {src: $rootScope.config.serverUrl + 'stream/' + video.files[0].file.pathKey + '/' + $scope.player.bitrate + '-' + video.files[0].file.pathKey + '.webm', type: "video/webm"},
                    config: {
                        id: video.id
                    }
                }
            ]);
        };

        $rootScope.$on('player.set', function(event, arg) {
            console.log('player.set');
            setVideo(arg);
        });
        $rootScope.$on('player.play', function(event, arg) {
            console.log('player.play');
            setVideo(arg);
            projekktor('#main_player').setPlay();
//            projekktor('#main_player').setPause();
//            setTimeout(function() {
//                projekktor('#main_player').setPlay();
//            }, 2000);
        });


        $rootScope.$on('player.bitrate', function(event, arg) {
            $scope.player.bitrate = arg;
        });
    }]);
});

