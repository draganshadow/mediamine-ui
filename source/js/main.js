/**
 * Bootstraps angular onto the window.document node.
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
define([
    'angular',
    './app'
], function (angular, app) {
    'use strict';

    // You can place operations that need to initialize prior to app start here
    // using the `run` function on the top-level module

    app
        .service('appCache', ['$cacheFactory', function($cacheFactory) {
            return $cacheFactory('appCache');
        }])
        .run(['CONFIG', '$rootScope', '$state', 'moduleManager', function(CONFIG, $rootScope, $state, moduleManager) {
            $rootScope.showHeaderViews = true;
            $rootScope.headerViews = moduleManager.getViews('header');
            $rootScope.showLeftViews = true;
            $rootScope.leftViews = moduleManager.getViews('left');
            $rootScope.showRightViews = true;
            $rootScope.rightViews = moduleManager.getViews('right');
            $rootScope.showFooterViews = true;
            $rootScope.footerViews = moduleManager.getViews('footer');

            $rootScope.showView = function (position) {
                var Position = position.charAt(0).toUpperCase() + position.slice(1);
                var show = $rootScope['show' + Position + 'Views'];
                var views = [];
                angular.forEach($state.$current.path, function(item){
                    for (var view in item.views) {
                        if (item.views[view].templateUrl.indexOf('js/modules/core/empty') === -1) {
                            var v = view.replace('@', '');
                            if (v) {
                                views.push(v);
                            }
                        }
                    }
                });

                var hasView = false;
                angular.forEach($rootScope[position + 'Views'], function(item){
                    hasView = hasView || (views.indexOf(item.name) >= 0);
                });

                if (show) {
                    show = hasView;
                }
                return show;
            };

            $rootScope.viewSize = function (base, left, right) {
                right = $rootScope.showView('right') ? (typeof right !== 'undefined' ? right : left) : 0;
                left = $rootScope.showView('left') ? left : 0;
                return base + left + right;
            };

            $rootScope.config = CONFIG;
            angular.element('body').addClass('random-background');
    //
    //        $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
    //            console.log('$stateChangeStart to '+toState.name+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
    //        });
    //        $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams){
    //            console.log('$stateChangeError - fired when an error occurs during transition.');
    //            console.log(arguments);
    //        });
    //        $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
    //            console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
    //        });
    //        $rootScope.$on('$viewContentLoading',function(event, viewConfig){
    //           // runs on individual scopes, so putting it in "run" doesn't work.
    //           console.log('$viewContentLoading - view begins loading - dom not rendered',viewConfig);
    //        });
    //        $rootScope.$on('$viewContentLoaded',function(event){
    //            console.log('$viewContentLoaded - fired after dom rendered',event);
    //        });
    //        $rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
    //            console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
    //            console.log(unfoundState, fromState, fromParams);
    //        });
        }]);
    // as script is at the very bottom of the page no waiting for domReady
    angular.bootstrap(document, ['app']);
});
