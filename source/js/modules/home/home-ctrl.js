/**
 * Home controller definition
 */
define(['./module'], function (module) {
  'use strict';

  module.controller('HomeController', ['$scope', 'Restangular', 'settings', function ($scope, Restangular, settings) {
      $scope.recentVideos = [];

      var recentVideoParams = {
          order : 'desc',
          orderBy : 'createdAt'
      };
      Restangular.all('videos').getList(recentVideoParams)
          .then(function(result) {
              $scope.recentVideos = $scope.recentVideos.concat(result);
          });
  }]);
});