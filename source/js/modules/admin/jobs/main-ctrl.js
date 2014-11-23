define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminJobsMain', ['$scope', '$location', 'Restangular', function ($scope, $location, Restangular) {
        $scope.jobs = {};

        $scope.refreshList = function() {
            Restangular.all('jobs').getList()
                .then(function(result) {
                    for (var i = 0, j = result.length; i < j; i += 1) {
                        var job = result[i];
                        job.percent = job.nbTasks ? Math.ceil(job.nbTasksDone / job.nbTasks * 100) : 100;
                        job.barLabel = job.nbTasksDone + ' / ' + job.nbTasks;
                        result[i] = job;
                    }
                    $scope.jobs = result;
                });
        };

        $scope.refreshList();
    }]);
});
