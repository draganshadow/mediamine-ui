define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('SearchPerson', ['$scope', '$stateParams', 'Restangular', '$rootScope', 'appCache', '$state',
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

            $scope.type = 'person';
            $scope.persons = [];

            var loadMore = function() {
                appCache.put('videoListParam', params);
                Restangular.all('searchs').getList(angular.extend({type: 'person'}, params))
                    .then(function(result) {
                        $scope.persons = $scope.persons.concat(result);
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
                        $scope.persons = result;
                    });
            });

            var unbindVideoTypeListener = $rootScope.$on('filter.video.type', function(event, type) {
                params.page = 1;
                params.type = type ? type.name : null;
                appCache.put('videoListParam', params);
                Restangular.all('searchs').getList(params)
                    .then(function(result) {
                        $scope.persons = result;
                    });
            });
            $scope.$on('$destroy', function () {
                unbindScrollListener();
                unbindVideoGenreListener();
                unbindVideoTypeListener();
            });
    }]);
});

