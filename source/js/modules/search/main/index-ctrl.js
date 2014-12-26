define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('Search', ['$scope', '$stateParams', 'Restangular', '$rootScope', 'appCache', '$state',
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

            $scope.text = $stateParams.text;
            $scope.videos = [];
            $scope.series = [];
            $scope.persons = [];

            var loadVideos = function() {
                appCache.put('videoListParam', params);
                Restangular.all('searchs').getList(angular.extend({type: 'video'}, params))
                    .then(function(result) {
                        $scope.videos = $scope.videos.concat(result);
                    });
            };

            var loadSeries = function() {
                appCache.put('videoListParam', params);
                Restangular.all('searchs').getList(angular.extend({type: 'group'}, params))
                    .then(function(result) {
                        $scope.series = $scope.series.concat(result);
                    });
            };

            var loadPersons = function() {
                appCache.put('videoListParam', params);
                Restangular.all('searchs').getList(angular.extend({type: 'person'}, params))
                    .then(function(result) {
                        $scope.persons = $scope.persons.concat(result);
                    });
            };

            loadVideos();
            loadSeries();
            loadPersons();
    }]);
});

