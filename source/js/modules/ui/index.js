define([
    'angular',
    './draggable/index',
    './filters/imagePath',
    './filters/markdown',
    './tile/index',
    './tile-video/index',
    './list-videos/index',
    './scroll/index',
    './tile-carousel/index',
    './panel/index'
], function (angular) {
  'use strict';

  return angular.module('app.ui', [
      'ngDraggable',
      'app.filters',
      'app.ui.tile',
      'app.ui.tile.video',
      'app.ui.list.videos',
      'app.ui.panel',
      'app.ui.scroll',
      'app.ui.tileCarousel'
  ]);
});
