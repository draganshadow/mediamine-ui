define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('VideoList', ['$scope', '$stateParams', 'Restangular', '$rootScope', 'appCache', '$state',
        function ($scope, $stateParams, Restangular, $rootScope, appCache, $state) {
            var params = {
                type : 'movie',
                page : 1
            };

            if ($stateParams.param !== '') {
                angular.extend(params, appCache.get('videoListParam'));
                params.page = 1;
            } else {
                appCache.put('videoListParam', {});
                $state.go('mediamine.videolib.videos', {param: 'p'});
            }
            $scope.videos = [];

            var loadMore = function() {
                appCache.put('videoListParam', params);
                Restangular.all('videos').getList(params)
                    .then(function(result) {
                        $scope.videos = $scope.videos.concat(result);
                    });
            };
            loadMore();
            var unbindScrollListener = $rootScope.$on('main.frame.scroll', function() {
                params.page++;
                loadMore();
            });
            var unbindVideoGenreListener = $rootScope.$on('filter.video.genre', function(event, genre) {
                params.page = 1;
                params.genre = genre ? genre.id : null;
                appCache.put('videoListParam', params);
                Restangular.all('videos').getList(params)
                    .then(function(result) {
                        $scope.videos = result;
                    });
            });
            var unbindVideoYearListener = $rootScope.$on('filter.video.year', function(event, year) {
                params.page = 1;
                params.year = year ? year.year : null;
                appCache.put('videoListParam', params);
                Restangular.all('videos').getList(params)
                    .then(function(result) {
                        $scope.videos = result;
                    });
            });

            var unbindVideoTypeListener = $rootScope.$on('filter.video.type', function(event, type) {
                params.page = 1;
                params.type = type ? type.name : null;
                appCache.put('videoListParam', params);
                Restangular.all('videos').getList(params)
                    .then(function(result) {
                        $scope.videos = result;
                    });
            });
            $scope.$on('$destroy', function () {
                unbindScrollListener();
                unbindVideoGenreListener();
                unbindVideoYearListener();
                unbindVideoTypeListener();
            });
        }]);
});

