define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminTasksMain', ['$scope', '$location', 'Restangular', function ($scope, $location, Restangular) {
        $scope.tasks = {};

        $scope.refreshList = function() {
            Restangular.all('task').getList()
                .then(function(result) {
                    for (var i = 0, j = result.length; i < j; i += 1) {
                        var task = result[i];
                        task.percent = task.nbTasks ? Math.ceil((task.nbTasks - task.nbRemainingTasks) / task.nbTasks * 100) : 100;
                        task.barLabel = (task.nbTasks - task.nbRemainingTasks) + ' / ' + task.nbTasks;
                        result[i] = task;
                    }
                    $scope.tasks = result;
                });
        };

        $scope.refreshList();
    }]);
});