define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('SearchWidget', ['$scope', '$state', function ($scope, $state) {
        $scope.text = '';
        $scope.search = function() {
            $state.go('mediamine.search', {
                text: $scope.text,
                page: 0
            });
            $scope.text = '';
        };
    }]);
});

