define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminUserList', ['$scope', '$modal', '$location', 'Restangular', function ($scope, $modal, $location, Restangular) {

        var refreshList = function() {
            Restangular.all('users').getList()
                .then(function(result) {
                    $scope.users = result;
                });
        };

        $scope.delete = function (user) {
            user.remove()
                .then(function(result) {
                    refreshList();
                });
        };

        refreshList();


        var EditCtrl = function ($scope, $modalInstance, newUser) {
            $scope.newUser = newUser;
            $scope.ok = function () {
                $modalInstance.close($scope.newUser);
            };
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };

        $scope.create = function () {
            var modalInstance = $modal.open({
                templateUrl: 'js/modules/admin/user/create.html?' + MEDIAMINE_URL_ARG,
                controller: EditCtrl,
                size: 400,
                resolve: {
                    newUser: function () {
                        return {
                            username: null,
                            email: null,
                            password: null
                        };
                    }
                }
            });
            modalInstance.result.then(function (newUser) {
                $scope.users.post(newUser)
                    .then(function(result) {
                        refreshList();
                    });
            });
        };
    }]);

});