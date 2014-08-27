(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/admin/home.html',
    '<div ui-view=""></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/core/abstract.html',
    '<div ui-view=""></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/core/empty.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/home/home.html',
    '<panel heading="Search"><div ng-include="\'js/modules/search/widget/search.html\'"></div></panel><panel heading="Recent Add"><div class="panel-body width-100 scroll-x"><table><tr><td class="valign-top" ng-repeat="video in recentVideos"><div class="width-xl"><tile-video video="video"></tile-video></div></td></tr></table></div></panel><div ui-view=""></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/menu/menu.html',
    '<nav class="navbar navbar-default navbar-fixed-top" role="navigation"><div class="navbar-header"><a class="navbar-brand" href="#">MediaMine</a></div><div class="collapse navbar-collapse navbar-ex1-collapse"><ul class="nav navbar-nav navbar-right"><li><a></a></li></ul><div ng-repeat="item in menuItems"><div ng-if="item.type == \'link\'"><ul class="nav navbar-nav {{item.class}}"><li active-link="active"><a ng-if="item.sref" ui-sref="{{item.sref}}">{{item.label}}</a> <a ng-if="!item.sref" href="{{item.href}}">{{item.label}}</a></li></ul></div><div ng-if="item.type == \'partial\'" ng-include="item.templateUrl"></div><div ng-if="item.type == \'dropdown\'"><ul class="nav navbar-nav {{item.class}}"><li class="dropdown"><a class="dropdown-toggle">{{item.label}} <i class="caret"></i></a><ul class="dropdown-menu"><li ng-repeat="subItem in item.subItems"><a ng-if="subItem.sref" ui-sref="{{subItem.sref}}">{{subItem.label}}</a> <a ng-if="!subItem.sref" href="{{subItem.href}}">{{subItem.label}}</a></li></ul></li></ul></div></div></div></nav>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/search/module.html',
    '<div ui-view=""></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/video-library/module.html',
    '<div ui-view=""></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/admin/files/main.html',
    '<panel ng-cloak=""><panel-heading><h1>Folders and Files</h1></panel-heading><form class="form-horizontal" role="form"><div ng-repeat="path in paths" class="form-group"><label class="col-sm-2 control-label">Folders</label><div class="col-sm-10"><input ng-repeat="folder in path.valueObject track by $index" type="text" class="form-control margin-bottom-xs" placeholder="Enter path to your media folder" ng-model="folder.value"><button type="button" class="btn btn-link" ng-click="addFolder(path.valueObject)">add a folder</button></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button ng-click="save()" class="btn btn-primary btn-lg">Save</button><button ng-click="execute(\'scanFiles\')" class="btn btn-lg">Scan Files</button></div></div></form></panel><panel title="System Actions" ng-cloak=""><form class="form-horizontal" role="form"><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button ng-repeat="action in actions" ng-click="execute(action)" class="btn btn-default">{{action.name}}</button></div></div></form></panel>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/admin/maintenance/list.html',
    '<panel ng-cloak=""><panel-heading><h1>Maintenance</h1></panel-heading><tabset><tab heading="{{action}}" ng-repeat="action in actions" ng-click="execute(action)"></tab></tabset><table class="table table-striped"><thead><tr><th>#</th><th>Name</th></tr></thead><tbody><tr ng-repeat="item in items"><td>{{item.id}}</td><td>{{item.name}}</td></tr></tbody></table></panel>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/admin/module/detail.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/admin/module/list.html',
    '<panel ng-cloak=""><panel-heading><h1>Modules</h1></panel-heading><table class="table table-striped"><thead><tr><th>#</th><th>Name</th><th>Version</th><th>Installed</th><th>Enabled</th><th>Action</th></tr></thead><tbody><tr ng-repeat="module in modules"><td>{{module.id}}</td><td>{{module.name}}</td><td>{{module.version}}</td><td>{{module.installed}}</td><td>{{module.enabled}}</td><td><div ng-if="!module.installed"><button type="button" class="btn btn-primary btn-xs" ng-click="install(module)">Install</button></div><div ng-if="module.installed && !module.enabled"><button type="button" class="btn btn-primary btn-xs">Enable</button></div></td></tr></tbody></table></panel>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/admin/setting/edit.html',
    '<div class="modal-header"><h3 class="modal-title">Edit</h3></div><div class="modal-body"><div class="form-group"><label for="value">{{setting.groupKey}}/{{setting.key}}</label><input type="text" class="form-control" id="value" placeholder="Enter value" ng-model="setting.value"></div></div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">OK</button><button class="btn btn-warning" ng-click="cancel()">Cancel</button></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/admin/setting/list.html',
    '<panel ng-cloak=""><panel-heading><h1>Setting</h1></panel-heading><table class="table table-striped"><thead><tr><th>#</th><th>Group</th><th>Key</th><th>Value</th><th>Action</th></tr></thead><tbody><tr ng-repeat="setting in settings"><td>{{setting.id}}</td><td>{{setting.groupKey}}</td><td>{{setting.key}}</td><td>{{setting.value}}</td><td><div ng-if="setting.editable"><button type="button" class="btn btn-primary btn-xs" ng-click="edit(setting)">Edit</button></div></td></tr></tbody></table></panel>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/admin/tasks/main.html',
    '<panel ng-cloak=""><panel-heading><h1>Tasks</h1></panel-heading><tabset><tab heading="Running"></tab></tabset><p><button type="button" class="btn btn-primary btn-xs pull-right margin-top-xs" ng-click="refreshList()">Refresh</button></p><table class="table table-striped"><thead><tr><th>Group</th><th>Key</th><th>Status</th><th>Status</th></tr></thead><tbody><tr ng-repeat="task in tasks"><td>{{task.groupKey}}</td><td>{{task.key}}</td><td>{{task.barLabel}}</td><td><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="{{task.percent}}" aria-valuemin="0" aria-valuemax="100" style="width: {{task.percent}}%;">{{task.percent}}%</div></div></td></tr></tbody></table></panel>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/admin/tunnel/list.html',
    '<panel ng-cloak=""><panel-heading><h1>Tunnel</h1></panel-heading><table class="table table-striped"><thead><tr><th>#</th><th>Key</th><th>Service</th><th>Enabled</th><th>Action</th></tr></thead><tbody><tr ng-repeat="tunnel in tunnels"><td>{{tunnel.id}}</td><td>{{tunnel.key}}</td><td>{{tunnel.service}}</td><td>{{tunnel.enabled}}</td><td><div ng-if="!tunnel.enabled"><button type="button" class="btn btn-primary btn-xs" ng-click="enable(tunnel)">Enable</button></div><div ng-if="tunnel.enabled"><button type="button" class="btn btn-primary btn-xs" ng-click="disable(tunnel)">Disable</button></div></td></tr></tbody></table></panel>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/player/control/index.html',
    '<accordion close-others="{{false}}"><accordion-group heading="Genre"><span ng-repeat="genre in genres"><span class="btn btn-primary btn-sm margin-bottom-xxs" ng-click="$root.search.genre = genre.name">{{genre.name}}</span>{{$last ? \'\' : \' \'}}</span></accordion-group><accordion-group heading="Year"></accordion-group><accordion-group heading="Rating"></accordion-group><accordion-group heading="Library"></accordion-group><accordion-group heading="Viewed"></accordion-group></accordion>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/player/player/index.html',
    '<div class="side-panel side-panel-right height-100" ng-drop="true" ng-drop-success="onDropComplete($data,$event)"><div id="main-player" class="projekktor center-block height-100 width-100"></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/player/playlist/index.html',
    '<div class="side-panel side-panel-right last-panel height-100"><div class="panel-body playlist-body scroll-y"><div class="playlist"><div ng-repeat="item in playlist track by $index" ng-drop="true" ng-drop-success="onReorder($index, $data, $event)"><div ng-drag="true" ng-drag-data="item" class="panel panel-default" ng-drag-success="onMoved($index, $data, $event)"><span>{{item.name}}</span> <a ng-prevent-drag="" class="pull-right" ng-click="$root.$emit(\'playlist.remove\', $index)"><span class="glyphicon glyphicon-remove"></span></a></div></div></div><div class="height-100" ng-drop="true" ng-drop-success="onDrop($data,$event)">drop here</div></div><div class="playlist-footer"><div class="btn-group"><label ng-repeat="br in bitrates" class="btn btn-xs btn-default" ng-model="bitrate.value" btn-radio="br">{{br}}</label></div><a ng-click="$root.$emit(\'playlist.clear\')" class="pull-right"><span class="glyphicon glyphicon-signal"></span></a></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/player/video/detail.html',
    '<panel title="{{video.name}} ({{video.year}})" ng-show="video" ng-cloak=""><div class="row clearfix"><div class="col-md-4 column"><img ng-src="{{$root.config.serverUrl}}images/400-400-{{video.images[0].pathKey}}.jpg" class="thumbnail img-rounded"></div><div class="col-md-8 column"><div class="panel panel-default"><div class="panel-heading">Details</div><div class="panel-body"><ul><li ng-repeat="staff in video.staffs | filter:{role:\'!actor\'}"><strong>{{staff.role.name}}:</strong>{{staff.person.name}}</li><li><strong>Genre:</strong><span ng-repeat="genre in video.genres"><span class="label label-default">{{genre.name}}</span>{{$last ? \'\' : \' \'}}</span></li></ul><div class="btn-group"><a class="btn btn-primary" go-to="player"><span class="glyphicon glyphicon-play"></span> Play</a> <a class="btn btn-default" type="button"><span class="glyphicon glyphicon-download"></span> Download</a></div></div></div></div></div><div class="row clearfix"><div class="col-md-12 column"><div class="panel panel-default"><div class="panel-heading">Summary</div><div class="panel-body">{{video.summary}}</div></div></div></div><div class="row clearfix"><div class="col-md-12 column"><div class="panel panel-default"><div class="panel-heading">Actors</div><div class="panel-body scrollX"><table><tr><td class="pa2 vTop" ng-repeat="staff in video.staffs | filter:{role:\'actor\'}"><div class="thumbnail w200p"><img class="h200p" ng-src="{{$root.config.serverUrl}}images/200-200-{{video.images[0].pathKey}}.jpg" alt="{{staff.person.name}}"><div class="caption"><h4><a href="#/person/{{staff.person.id}}">{{staff.person.name}}</a></h4><h5>{{staff.character.name}}</h5></div></div></td></tr></table></div></div></div></div><div class="row clearfix"><div class="col-md-12 column"><div class="panel panel-default"><div id="player" class="panel-heading">Player<div class="right">Bitrate:<select ng-model="player.bitrate"><option ng-repeat="bitrate in bitrates">{{bitrate}}</option></select><a href="stream/{{player.bitrate}}-{{video.files[0].file.pathKey}}.flv"><span class="glyphicon glyphicon-download"></span></a></div></div><div class="panel-body"><div id="player_a" class="projekktor center-block"></div></div></div></div></div></panel>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/search/main/index.html',
    '<list-videos videos="videos"></list-videos>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/search/widget/menu-search.html',
    '<div ng-controller="SearchWidget"><form class="navbar-form navbar-right" role="search"><div class="form-group"><input type="text" class="form-control" ng-model="text" placeholder="Movie, Serie, Actor ..."></div><button type="submit" class="btn btn-default" ng-click="search()">Search</button></form></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/search/widget/search.html',
    '<div ng-controller="SearchWidget"><form role="search"><div class="form-group"><input type="text" class="form-control" ng-model="text" placeholder="Movie, Serie, Actor ..."></div><button type="submit" class="btn btn-default" ng-click="search()">Search</button></form></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/ui/list-videos/index.html',
    '<div class="col-xs-6 col-sm-6 col-md-3" ng-repeat="video in videos"><tile-video video="video"></tile-video></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/ui/panel/panel.html',
    '<div class="panel panel-default fade {{class}}"><div class="panel-heading" panel-transclude="heading">{{heading}}</div><div class="panel-body" ng-transclude=""></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/ui/tile/tile.html',
    '<div class="{{tileClass}} thumbnail fade"><div class="height-{{imageHeight}} overflow-hidden text-center"><img class="width-100" ng-src="{{image}}" alt="{{video.name}}"></div><div class="caption" ng-transclude=""></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/ui/tile-carousel/index.html',
    '<div class="scroll-x"><table><tr><td class="valign-top" ng-repeat="item in items">{{item.person.name}}<div ng-transclude=""></div></td></tr></table></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/ui/tile-video/index.html',
    '<div ng-drag="true" ng-drag-data="video" ng-drag-resize="4"><tile image="{{video.images[0].pathKey | imagePath : 300 : 400 : \'jpg\' : \'hrbox\' : \'video\': \'hrbox_ffffff\'}}" title="{{video.name}}" index="$index"><div class="btn-group btn-group-xs tile-control" ng-prevent-drag=""><a class="btn btn-xs btn-primary" ng-click="$root.$emit(\'playlist.play\', video)"><span class="glyphicon glyphicon-play"></span></a> <a class="btn btn-xs btn-primary" ng-click="$root.$emit(\'playlist.add\', video)"><span class="glyphicon glyphicon-plus"></span></a></div><h4 class="space-nowrap overflow-hidden" ng-prevent-drag=""><span ng-if="video.episode">{{video.episode}} -</span> <a ui-sref="mediamine.videolib.video({id: video.id})">{{video.name}}</a> <span ng-if="video.year">({{video.year}})</span></h4></tile></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/video-library/filters/index.html',
    '<accordion close-others="{{false}}"><accordion-group heading="Type"><span ng-repeat="type in types track by $index"><span class="btn btn-primary btn-sm margin-bottom-xxs" ng-click="selectType(type)">{{type.name}}</span>{{$last ? \'\' : \' \'}}</span><div class="clearfix"><a class="pull-right" ng-click="resetType()">reset</a></div></accordion-group><accordion-group heading="Genre"><span ng-repeat="genre in genres"><span class="btn btn-primary btn-sm margin-bottom-xxs" ng-click="selectGenre(genre)">{{genre.name}}</span>{{$last ? \'\' : \' \'}}</span><div class="clearfix"><a class="pull-right" ng-click="resetGenre()">reset</a></div></accordion-group><accordion-group heading="Year"></accordion-group><accordion-group heading="Rating"></accordion-group><accordion-group heading="Library"></accordion-group><accordion-group heading="Viewed"></accordion-group></accordion>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/video-library/person/detail.html',
    '<panel ng-show="person" ng-cloak=""><panel-heading><h1>{{person.name}}</h1></panel-heading><div class="row clearfix"><div class="col-md-4 column"><img ng-src="{{person.images[0].pathKey | imagePath : 300 : 400 : \'jpg\' : \'hrbox\' : \'portrait\'}}" class="thumbnail img-rounded"></div><div class="col-md-8 column"><div class="panel panel-default"><div class="panel-heading">Details</div><div class="panel-body"></div></div></div></div><div class="panel panel-default"><div class="panel-heading">Summary</div><div class="panel-body">{{person.summary}}</div></div><div class="panel panel-default"><div class="panel-heading">Videos</div><div class="panel-body scroll-x"><div class="col-sm-6 col-md-3 mb20" ng-repeat="video in person.videos"><tile-video video="video"></tile-video></div></div></div></panel>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/video-library/season/detail.html',
    '<panel ng-show="season" ng-cloak=""><panel-heading><h1><a ui-sref="mediamine.videolib.serie({id: season.group.id})">{{season.group.name}}</a> - {{season.name}}</h1></panel-heading><p>{{season.summary}}</p></panel><list-videos videos="videos"></list-videos>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/video-library/series/detail.html',
    '<panel heading="{{serie.name}}" ng-show="serie" ng-cloak=""><p>{{serie.summary}}</p></panel><div class="col-sm-6 col-md-3" ng-repeat="season in seasons"><tile image="{{season.images[0].pathKey | imagePath : 300 : 400 : \'jpg\' : \'hrbox\' : \'placeholder\': \'hrbox_ffffff\'}}" title="{{season.name}}" index="$index"><h4 class="space-nowrap overflow-hidden"><a ui-sref="mediamine.videolib.season({id: season.id})">{{season.name}}</a></h4></tile></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/video-library/series/list.html',
    '<div class="h100 oScrollY"><div class="col-sm-6 col-md-3 mbm" ng-repeat="serie in series | filter:serieFilter"><tile image="{{serie.images[0].pathKey | imagePath : 300 : 400 : \'jpg\' : \'hrbox\' : \'placeholder\': \'hrbox_ffffff\'}}" title="{{serie.name}}" index="$index"><h4 class="space-nowrap overflow-hidden"><a ui-sref="mediamine.videolib.serie({id: serie.id})">{{serie.name}}</a></h4></tile></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/video-library/video/detail.html',
    '<panel ng-show="video" ng-cloak=""><panel-heading><h1>{{video.name}}<span ng-if="video.year">({{video.year}})</span></h1></panel-heading><div class="row clearfix"><div class="col-md-4 column"><img ng-src="{{video.images[0].pathKey | imagePath : 300 : 400 : \'jpg\' : \'hrbox\' : \'video\': \'hrbox_ffffff\'}}" class="thumbnail img-rounded"></div><div class="col-md-8 column"><div class="panel panel-default"><div class="panel-heading">Details</div><div class="panel-body"><ul><li ng-repeat="staff in video.staffs | filter:{role:\'!actor\'}"><strong>{{staff.role.name}}:</strong>{{staff.person.name}}</li><li><strong>Genre:</strong><span ng-repeat="genre in video.genres"><span class="label label-default">{{genre.name}}</span>{{$last ? \'\' : \' \'}}</span></li></ul><div class="btn-group"><a class="btn btn-primary" ng-click="$root.$emit(\'playlist.play\', video)"><span class="glyphicon glyphicon-play"></span> Play</a> <a class="btn btn-default" type="button"><span class="glyphicon glyphicon-download"></span> Download</a></div></div></div></div></div><div class="panel panel-default"><div class="panel-heading">Summary</div><div class="panel-body">{{video.summary}}</div></div><div class="panel panel-default"><div class="panel-heading">Actors</div><div class="panel-body scroll-x"><table><tr><td class="valign-top" ng-repeat="staff in video.staffs | filter:{role:\'actor\'}"><tile tile-class="width-xl margin-right-xs" image="{{person.images[0].pathKey | imagePath : 300 : 400 : \'jpg\' : \'hrbox\' : \'portrait\' : \'hrbox_ffffff\'}}" image-height="xl" title="{{staff.person.name}}" index="$index"><h4 class="space-nowrap overflow-hidden"><a ui-sref="mediamine.videolib.person({id: staff.person.id})">{{staff.person.name}}</a></h4><h5 class="space-nowrap overflow-hidden">{{staff.character.name || \'-\'}}</h5></tile></td></tr></table></div></div></panel>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/modules/video-library/video/list.html',
    '<list-videos videos="videos"></list-videos>');
}]);
})();
