define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('VideoList', ['$scope', '$stateParams', 'Restangular', '$rootScope', 'appCache', '$state',
        function ($scope, $stateParams, Restangular, $rootScope, appCache, $state) {
            var params = {
                type : 'movie',
                genre : null,
                minYear : null,
                maxYear : null,
                limit : 24,
                page : 1
            };

            var pagination = {
                count : 0
            };
            $scope.videos = [];
            $scope.loading = false;

            var clearList = function() {
                $('#main-frame').scrollTop();
                $scope.videos = [];
            };

            var loadCount = function() {
                var countParams = angular.extend({count: true}, params);
                Restangular.all('videos').getList(countParams)
                    .then(function(result) {
                        pagination.count = result;
                        countParams = angular.extend(countParams, {count: result});
                        appCache.put('videoListPagination', pagination);
                        $rootScope.$emit('list.video.pagination', countParams);
                    });
            };
            var loadMore = function() {
                $scope.loading = true;
                loadCount();
                Restangular.all('videos').getList(params)
                    .then(function(result) {
                        $scope.videos = $scope.videos.concat(result);
                        appCache.put('videoListParam', params);
                        appCache.put('videoList', $scope.videos);
                        $scope.loading = false;
                    });
            };

            if ($stateParams.param) {
                var videosCache = appCache.get('videoList');
                if (!videosCache || (Array.isArray(videosCache) && videosCache.length == 0)) {
                    clearList();
                    params.page = 1;
                    loadMore();
                } else {
                    if (videosCache) {
                        var paginationCache = appCache.get('videoListPagination');
                        if (paginationCache) {
                            pagination = paginationCache;
                        }
                        $scope.videos = videosCache;
                        params = appCache.get('videoListParam');
                        $rootScope.$emit('list.video.pagination', angular.extend({}, params, pagination));
                    }
                }
            } else {
                appCache.put('videoListParam', {});
                appCache.put('videoList', []);
                $state.go('mediamine.videolib.videos', {param: 'p'});
                return;
            }

            var unbindPageListener = $rootScope.$on('list.video.page', function(event, page) {
                if (params.page != page) {
                    if ((params.page + 1) != page) {
                        clearList();
                    }
                    params.page = page;
                    loadMore();
                }
            });

            var unbindScrollListener = $rootScope.$on('main.frame.scroll', function() {
                if (!$scope.loading && (params.page * params.limit) < pagination.count) {
                    params.page++;
                    loadMore();
                }
            });

            var unbindVideoGenreListener = $rootScope.$on('filter.video.genre', function(event, genre) {
                params.page = 1;
                genre = genre ? genre.id : null;
                if (genre != params.genre) {
                    params.genre = genre;
                    clearList();
                    loadMore();
                }
            });
            var unbindVideoYearListener = $rootScope.$on('filter.video.year', function(event, minYear, maxYear) {
                params.page = 1;
                minYear = minYear ? minYear : null;
                maxYear = maxYear ? maxYear : null;
                if (minYear != params.minYear || maxYear != params.maxYear) {
                    params.minYear = minYear;
                    params.maxYear = maxYear;
                    clearList();
                    loadMore();
                }
            });

            var unbindVideoTypeListener = $rootScope.$on('filter.video.type', function(event, type) {
                params.page = 1;
                type = type ? type.name : null;
                if (type != params.type) {
                    params.type = type;
                    clearList();
                    loadMore();
                }
            });
            $scope.$on('$destroy', function () {
                unbindScrollListener();
                unbindPageListener();
                unbindVideoGenreListener();
                unbindVideoYearListener();
                unbindVideoTypeListener();
            });
        }]);
});

