define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('SearchWidget', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
        $scope.text = $stateParams.text;
        var destState = 'mediamine.search';
        if ($scope.type) {
            if ($scope.type == 'video') {
                destState = 'mediamine.searchVideo';
            }
            if ($scope.type == 'series') {
                destState = 'mediamine.searchSeries';
            }
            if ($scope.type == 'person') {
                destState = 'mediamine.searchPerson';
            }
        }
        $scope.search = function() {
            $state.go(destState, {
                text: $scope.text,
                page: 0
            });
            $scope.text = '';
        };
    }]);
});

