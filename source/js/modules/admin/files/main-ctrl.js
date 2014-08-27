define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('AdminFilesMain', ['$scope', '$location', 'Restangular', '$timeout', function ($scope, $location, Restangular, $timeout) {
        $scope.actions = ['reset', 'install', 'scanFiles', 'searchMovies', 'searchSeries'];
        $scope.paths = [];

        function valuesToObjects(a) {
            var b = [];
            angular.forEach(a, function (elem, i) {
                b[i] = {value: elem};
            });
            return b;
        }
        function objectsToValues(a) {
            var b = [];
            angular.forEach(a, function (elem, i) {
                b[i] = elem.value;
            });
            return b;
        }

        var refreshList = function() {
            Restangular.all('setting').getList({groupKey: 'paths'})
                .then(function(result) {
                    angular.forEach(result, function (path) {
                        path.valueObject = valuesToObjects(path.value);
                    });
                    $scope.paths = result;
                });
        };
        refreshList();

        $scope.addFolder = function (pathArray) {
            pathArray.push({value:''});
        };

        $scope.save = function () {
            angular.forEach($scope.paths, function (path) {
                var cleanValues = [];
                angular.forEach(path.valueObject, function (v) {
                    if (v.value.trim() !== '') {
                        cleanValues.push(v);
                    }
                });
                path.valueObject = cleanValues;
                path.value = objectsToValues(path.valueObject);
                path.put().then(function() {

                });
            });
        };



        var getActions = function() {
            Restangular.all('action').getList()
                .then(function(result) {
                    $scope.actions = result;
                });
        };
        getActions();
        var executeActions = function(action) {
            action.post('execute', {action:action.name})
                .then(function(result) {
                    alert('EXECUTED');
                });
        };
        $scope.execute = function (action) {
            executeActions(action);
        };
    }]);
});
