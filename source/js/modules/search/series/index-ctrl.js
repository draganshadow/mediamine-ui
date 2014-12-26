define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('SearchSeries', ['$scope', '$stateParams', 'Restangular', '$rootScope', 'appCache', '$state',
        function ($scope, $stateParams, Restangular, $rootScope, appCache, $state) {
            var params = {
                page: 1,
                text: $stateParams.text
            };

            if ($stateParams.param !== '') {
                angular.extend(params, appCache.get('searchParam'));
            } else {
                appCache.put('searchParam', {});
                $state.go('mediamine.search', {text: $stateParams.text, param: 'p'});
            }

            $scope.type = 'series';
            $scope.series = [];

            var loadMore = function() {
                appCache.put('videoListParam', params);
                Restangular.all('searchs').getList(angular.extend({type: 'group'}, params))
                    .then(function(result) {
                        $scope.series = $scope.series.concat(result);
                    });
            };

            loadMore();

            var unbindScrollListener = $rootScope.$on('main.frame.scroll', function() {
                params.page++;
                loadMore();
            });

            var unbindVideoGenreListener = $rootScope.$on('filter.video.genre', function(event, genre) {
                params.page = 1;
                params.genre = genre ? genre.name : null;
                appCache.put('videoListParam', params);
                Restangular.all('searchs').getList(params)
                    .then(function(result) {
                        $scope.series = result;
                    });
            });

            var unbindVideoTypeListener = $rootScope.$on('filter.video.type', function(event, type) {
                params.page = 1;
                params.type = type ? type.name : null;
                appCache.put('videoListParam', params);
                Restangular.all('searchs').getList(params)
                    .then(function(result) {
                        $scope.series = result;
                    });
            });
            $scope.$on('$destroy', function () {
                unbindScrollListener();
                unbindVideoGenreListener();
                unbindVideoTypeListener();
            });
    }]);
});

