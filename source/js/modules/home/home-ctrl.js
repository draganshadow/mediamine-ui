/**
 * Home controller definition
 */
define(['./module'], function (module) {
  'use strict';

  module.controller('HomeController', ['$scope', 'Restangular', 'SettingService', function ($scope, Restangular) {
      $scope.recentVideos = [];

      var recentVideoParams = {
          order : 'desc',
          orderBy : 'dateCreate'
      };
      Restangular.all('videos').getList(recentVideoParams)
          .then(function(result) {
              $scope.recentVideos = $scope.recentVideos.concat(result);
          });
  }]);
});