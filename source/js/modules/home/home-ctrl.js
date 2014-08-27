/**
 * Home controller definition
 */
define(['./module'], function (module) {
  'use strict';

  module.controller('HomeController', ['$scope', 'Restangular', function ($scope, Restangular) {
      $scope.recentVideos = [];

      var recentVideoParams = {
          order : 'desc',
          orderBy : 'dateCreate'
      };
      Restangular.all('video').getList(recentVideoParams)
          .then(function(result) {
              $scope.recentVideos = $scope.recentVideos.concat(result);
          });
  }]);
});