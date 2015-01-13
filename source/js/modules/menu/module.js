define([
  'angular',
  'ui.router',
  '../../config',
    '../core/index', 'ui-bootstrap-dropdown'
], function (angular) {
  'use strict';

    function MenuManager(entries) {

        this.entries = entries;

        this.registerEntry = function(config) {
            this.entries.push(config);
        };

        this.getEntries = function() {
            return this.entries;
        };
    }

  return angular.module('app.menu', [
        'app.constants',
        'app.core',
        'ui.bootstrap.dropdown',
        'ui.router'
  ])
      .provider('menuManager',
      function MenuManagerProvider() {
          var entries = [];

          this.registerEntry = function(config) {
              entries.push(config);
          };

          this.$get = [function menuManagerFactory() {
              return new MenuManager(entries);
          }];
      })
      .config(['$stateProvider', 'moduleManagerProvider', function ($stateProvider, moduleManagerProvider) {
          moduleManagerProvider
              .registerView('header', 'menu',
              {
                  templateUrl: 'js/modules/menu/menu.html' + MEDIAMINE_URL_ARG_P,
                  controller: 'MenuController'
              }
          );
      }]);

});
