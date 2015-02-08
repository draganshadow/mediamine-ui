define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('SeriesList', ['$scope', '$stateParams', '$state', 'Restangular', '$rootScope', 'appCache',
        function ($scope, $stateParams, $state, Restangular, $rootScope, appCache) {
            var params = {
                page : 1,
                limit : 24
            };

            var pagination = {
                count : 0
            };
            $scope.loading = false;

            var clearList = function() {
                $('#main-frame').scrollTop();
                $scope.series = [];
            };

            var loadCount = function() {
                var countParams = angular.extend({count: true}, params);
                Restangular.all('groups').getList(countParams)
                    .then(function(result) {
                        pagination.count = result;
                        countParams = angular.extend(countParams, {count: result});
                        appCache.put('groupListPagination', pagination);
                    });
            };
            var loadMore = function() {
                $scope.loading = true;
                loadCount();
                Restangular.all('groups').getList(params)
                    .then(function(result) {
                        $scope.series = $scope.series.concat(result);
                        appCache.put('groupListParam', params);
                        appCache.put('groupList', $scope.series);
                        $scope.loading = false;
                    });
            };

            if ($stateParams.param) {
                var groupsCache = appCache.get('groupList');
                if (!groupsCache || (Array.isArray(groupsCache) && groupsCache.length == 0)) {
                    clearList();
                    params.page = 1;
                    loadMore();
                } else {
                    if (groupsCache) {
                        var paginationCache = appCache.get('groupListPagination');
                        if (paginationCache) {
                            pagination = paginationCache;
                        }
                        $scope.series = groupsCache;
                        params = appCache.get('groupListParam');
                    }
                }
            } else {
                appCache.put('groupListParam', {});
                appCache.put('groupList', []);
                $state.go('mediamine.videolib.series', {param: 'p'});
            }

            var unbindScrollListener = $rootScope.$on('main.frame.scroll', function() {
                if (!$scope.loading && (params.page * params.limit) < pagination.count) {
                    params.page++;
                    loadMore();
                }
            });

            $scope.$on('$destroy', function () {
                unbindScrollListener();
            });
        }]);
});