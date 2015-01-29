define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('SeriesList', ['$scope', '$stateParams', 'Restangular', '$rootScope', 'appCache',
        function ($scope, $stateParams, Restangular, $rootScope, appCache) {
            var params = {
                page : 1,
                limit : 20
            };

            if ($stateParams.param !== '') {
                angular.extend(params, appCache.get('groupListParam'));
                params.page = 1;
            } else {
                appCache.put('groupListParam', {});
                $state.go('mediamine.videolib.series', {param: 'p'});
            }
            $scope.series = [];

            var loadMore = function() {
                appCache.put('groupListParam', params);
                Restangular.all('groups').getList(params)
                    .then(function(result) {
                        $scope.series = $scope.series.concat(result);
                    });
            };
            loadMore();

            var unbindScrollListener = $rootScope.$on('main.frame.scroll', function() {
                params.page++;
                loadMore();
            });

            $scope.$on('$destroy', function () {
                unbindScrollListener();
            });
        }]);
});