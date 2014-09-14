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
    '<panel heading="{{ \'SEARCH\' | translate }}"><div ng-include="\'js/modules/search/widget/search.html\'"></div></panel><panel heading="{{ \'RECENTLY_ADDED\' | translate }}"><div class="panel-body width-100 scroll-x"><table><tr><td class="valign-top" ng-repeat="video in recentVideos"><div class="width-xl"><tile-video video="video"></tile-video></div></td></tr></table></div></panel><div ui-view=""></div>');
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
    '<nav class="navbar navbar-default navbar-fixed-top" role="navigation"><div class="navbar-header"><a class="navbar-brand" href="#">MediaMine</a></div><div class="collapse navbar-collapse navbar-ex1-collapse"><ul class="nav navbar-nav navbar-right"><li><a></a></li></ul><div ng-repeat="item in menuItems"><div ng-if="item.type == \'link\'"><ul class="nav navbar-nav {{item.class}}"><li active-link="active"><a ng-if="item.sref" ui-sref="{{item.sref}}">{{ item.label | translate }}</a> <a ng-if="!item.sref" href="{{item.href}}">{{ item.label | translate }}</a></li></ul></div><div ng-if="item.type == \'partial\'" ng-include="item.templateUrl"></div><div ng-if="item.type == \'dropdown\'"><ul class="nav navbar-nav {{item.class}}"><li class="dropdown"><a class="dropdown-toggle">{{ item.label | translate }} <i class="caret"></i></a><ul class="dropdown-menu"><li ng-repeat="subItem in item.subItems"><a ng-if="subItem.sref" ui-sref="{{subItem.sref}}">{{ subItem.label | translate }}</a> <a ng-if="!subItem.sref" href="{{subItem.href}}">{{ subItem.label | translate }}</a></li></ul></li></ul></div></div></div></nav>');
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
    '<panel ng-cloak=""><panel-heading><h1>{{ \'ADMIN_FILES_TITLE\' | translate }}</h1></panel-heading><form class="form-horizontal" role="form"><div ng-repeat="path in paths" class="form-group"><label class="col-sm-2 control-label">{{ \'ADMIN_FILES_FOLDERS\' | translate }}</label><div class="col-sm-10"><input ng-repeat="folder in path.valueObject track by $index" type="text" class="form-control margin-bottom-xs" placeholder="Enter path to your media folder" ng-model="folder.value"><button type="button" class="btn btn-link" ng-click="addFolder(path.valueObject)">{{ \'ADMIN_FILES_ADD_FOLDER\' | translate }}</button></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button ng-click="save()" class="btn btn-primary btn-lg">{{ \'ADMIN_FILES_SAVE\' | translate }}</button><button ng-click="execute(\'scanFiles\')" class="btn btn-lg">{{ \'ADMIN_FILES_SCAN\' | translate }}</button></div></div></form></panel><panel title="System Actions" ng-cloak=""><form class="form-horizontal" role="form"><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button ng-repeat="action in actions" ng-click="execute(action.name)" class="btn btn-default">{{action.name}}</button></div></div></form></panel>');
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
    '<panel ng-cloak=""><panel-heading><h1>{{ \'ADMIN_MAINTENANCE_TITLE\' | translate }}</h1></panel-heading><tabset><tab heading="{{ \'ADMIN_MAINTENANCE_FILTER_\' + filter | translate }}" ng-repeat="filter in filters" ng-click="execute(action)"></tab></tabset><table class="table table-striped"><thead><tr><th>#</th><th>{{ \'ADMIN_MAINTENANCE_NAME\' | translate }}</th></tr></thead><tbody><tr ng-repeat="item in items"><td>{{item.id}}</td><td>{{item.files[0].file.directory.path}}/<strong>{{item.files[0].file.name}}.{{item.files[0].file.extension}}</strong></td></tr></tbody></table></panel>');
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
    '<panel ng-cloak=""><panel-heading><h1>{{ \'ADMIN_MODULE_TITLE\' | translate }}</h1></panel-heading><table class="table table-striped"><thead><tr><th>#</th><th>{{ \'ADMIN_MODULE_NAME\' | translate }}</th><th>{{ \'ADMIN_MODULE_VERSION\' | translate }}</th><th>{{ \'ADMIN_MODULE_INSTALLED\' | translate }}</th><th>{{ \'ADMIN_MODULE_ENABLED\' | translate }}</th><th>{{ \'ADMIN_MODULE_ACTION\' | translate }}</th></tr></thead><tbody><tr ng-repeat="module in modules"><td>{{module.id}}</td><td>{{module.name}}</td><td>{{module.version}}</td><td>{{ \'ADMIN_MODULE_\' + module.installed | translate }}</td><td>{{ \'ADMIN_MODULE_\' + module.enabled | translate }}</td><td><div ng-if="!module.installed"><button type="button" class="btn btn-primary btn-xs" ng-click="install(module)">{{ \'ADMIN_MODULE_ACTION_INSTALL\' | translate }}</button></div><div ng-if="module.installed && !module.enabled"><button type="button" class="btn btn-primary btn-xs">{{ \'ADMIN_MODULE_ACTION_ENABLE\' | translate }}</button></div></td></tr></tbody></table></panel>');
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
    '<div class="modal-header"><h3 class="modal-title">{{ \'ADMIN_SETTING_EDIT_TITLE\' | translate }}</h3></div><div class="modal-body"><div class="form-group"><label for="value">{{setting.groupKey}}/{{setting.key}}</label><input type="text" class="form-control" id="value" placeholder="Enter value" ng-model="setting.value"></div></div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">{{ \'ADMIN_SETTING_EDIT_SAVE\' | translate }}</button><button class="btn btn-warning" ng-click="cancel()">{{ \'ADMIN_SETTING_EDIT_CANCEL\' | translate }}</button></div>');
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
    '<panel ng-cloak=""><panel-heading><h1>{{ \'ADMIN_SETTING_TITLE\' | translate }}</h1></panel-heading><table class="table table-striped"><thead><tr><th>#</th><th>{{ \'ADMIN_SETTING_GROUP\' | translate }}</th><th>{{ \'ADMIN_SETTING_KEY\' | translate }}</th><th>{{ \'ADMIN_SETTING_VALUE\' | translate }}</th><th>{{ \'ADMIN_SETTING_ACTION\' | translate }}</th></tr></thead><tbody><tr ng-repeat="setting in settings"><td>{{setting.id}}</td><td>{{setting.groupKey}}</td><td>{{setting.key}}</td><td>{{setting.value}}</td><td><div ng-if="setting.editable"><button type="button" class="btn btn-primary btn-xs" ng-click="edit(setting)">{{ \'ADMIN_SETTING_EDIT\' | translate }}</button></div></td></tr></tbody></table></panel>');
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
    '<panel ng-cloak=""><panel-heading><h1>{{ \'ADMIN_TASKS_TITLE\' | translate }}</h1></panel-heading><tabset><tab heading="{{ \'ADMIN_TASKS_RUNNING\' | translate }}"></tab></tabset><p><button type="button" class="btn btn-primary btn-xs pull-right margin-top-xs" ng-click="refreshList()">{{ \'ADMIN_TASKS_REFRESH\' | translate }}</button></p><table class="table table-striped"><thead><tr><th>{{ \'ADMIN_TASKS_GROUP\' | translate }}</th><th>{{ \'ADMIN_TASKS_KEY\' | translate }}</th><th>{{ \'ADMIN_TASKS_PROGRESS\' | translate }}</th><th></th></tr></thead><tbody><tr ng-repeat="task in tasks"><td>{{task.groupKey}}</td><td>{{task.key}}</td><td>{{task.barLabel}}</td><td><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="{{task.percent}}" aria-valuemin="0" aria-valuemax="100" style="width: {{task.percent}}%;">{{task.percent}}%</div></div></td></tr></tbody></table></panel>');
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
    '<panel ng-cloak=""><panel-heading><h1>{{ \'ADMIN_TUNNEL_TITLE\' | translate }}</h1></panel-heading><table class="table table-striped"><thead><tr><th>#</th><th>{{ \'ADMIN_TUNNEL_KEY\' | translate }}</th><th>{{ \'ADMIN_TUNNEL_SERVICE\' | translate }}</th><th>{{ \'ADMIN_TUNNEL_ENABLED\' | translate }}</th><th>{{ \'ADMIN_TUNNEL_TITLE\' | translate }}</th></tr></thead><tbody><tr ng-repeat="tunnel in tunnels"><td>{{tunnel.id}}</td><td>{{tunnel.key}}</td><td>{{tunnel.service}}</td><td>{{ \'ADMIN_TUNNEL_\' + tunnel.enabled | translate }}</td><td><div ng-if="!tunnel.enabled"><button type="button" class="btn btn-primary btn-xs" ng-click="enable(tunnel)">{{ \'ADMIN_TUNNEL_ACTION_ENABLE\' | translate }}</button></div><div ng-if="tunnel.enabled"><button type="button" class="btn btn-primary btn-xs" ng-click="disable(tunnel)">{{ \'ADMIN_TUNNEL_ACTION_DISABLE\' | translate }}</button></div></td></tr></tbody></table></panel>');
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
    '<div class="side-panel side-panel-right height-100" ng-drop="true" ng-drop-success="onDropComplete($data,$event)"><div id="main_player" class="projekktor center-block height-100 width-100"></div></div>');
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
    '<div class="side-panel side-panel-right last-panel height-100"><div class="panel-body playlist-body scroll-y"><div class="playlist"><div ng-repeat="item in playlist track by $index" ng-drop="true" ng-drop-success="onReorder($index, $data, $event)"><div ng-drag="true" ng-drag-data="item" class="panel panel-default" ng-drag-success="onMoved($index, $data, $event)"><span>{{item.name}}</span> <a ng-prevent-drag="" class="pull-right" ng-click="$root.$emit(\'playlist.remove\', $index)"><span class="glyphicon glyphicon-remove"></span></a></div></div></div><div class="height-100" ng-drop="true" ng-drop-success="onDrop($data,$event)">{{ \'PLAYER_DROP_HERE\' | translate }}</div></div><div class="playlist-footer"><div class="btn-group"><label ng-repeat="br in bitrates" class="btn btn-xs btn-default" ng-model="bitrate.value" btn-radio="br">{{br}}</label></div><a ng-click="$root.$emit(\'playlist.clear\')" class="pull-right" title="{{ \'PLAYER_CLEAR_LIST\' | translate }}"><span class="glyphicon glyphicon-trash"></span></a></div></div>');
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
    '<div ng-controller="SearchWidget"><form class="navbar-form navbar-right" role="search"><div class="form-group"><input type="text" class="form-control" ng-model="text" placeholder="{{ \'SEARCH_PH\' | translate }}"></div><button type="submit" class="btn btn-default" ng-click="search()">{{ \'SEARCH_B\' | translate }}</button></form></div>');
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
    '<div ng-controller="SearchWidget"><form role="search"><div class="form-group"><input type="text" class="form-control" ng-model="text" placeholder="{{ \'SEARCH_PH\' | translate }}"></div><button type="submit" class="btn btn-default" ng-click="search()">{{ \'SEARCH_B\' | translate }}</button></form></div>');
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
    '<accordion close-others="{{false}}"><accordion-group heading="{{ \'FILTER_TYPE\' | translate }}"><span ng-repeat="type in types track by $index"><span class="btn btn-primary btn-sm margin-bottom-xxs" ng-click="selectType(type)">{{type.name}}</span>{{$last ? \'\' : \' \'}}</span><div class="clearfix"><a class="pull-right" ng-click="resetType()">{{ \'RESET\' | translate }}</a></div></accordion-group><accordion-group heading="{{ \'FILTER_GENRE\' | translate }}"><span ng-repeat="genre in genres"><span class="btn btn-primary btn-sm margin-bottom-xxs" ng-click="selectGenre(genre)">{{genre.name}}</span>{{$last ? \'\' : \' \'}}</span><div class="clearfix"><a class="pull-right" ng-click="resetGenre()">{{ \'RESET\' | translate }}</a></div></accordion-group><accordion-group heading="{{ \'FILTER_YEAR\' | translate }}"></accordion-group><accordion-group heading="{{ \'FILTER_RATING\' | translate }}"></accordion-group><accordion-group heading="{{ \'FILTER_LIBRARY\' | translate }}"></accordion-group><accordion-group heading="{{ \'FILTER_VIEWED\' | translate }}"></accordion-group></accordion>');
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
    '<panel ng-show="person" ng-cloak=""><panel-heading><h1>{{person.name}}</h1></panel-heading><div class="row clearfix"><div class="col-md-4 column"><img ng-src="{{person.images[0].pathKey | imagePath : 300 : 400 : \'jpg\' : \'hrbox\' : \'portrait\'}}" class="thumbnail img-rounded"></div><div class="col-md-8 column"><div class="panel panel-default"><div class="panel-heading">{{ \'PERSON_DETAILS\' | translate }}</div><div class="panel-body"></div></div></div></div><div class="panel panel-default"><div class="panel-heading">{{ \'PERSON_SUMMARY\' | translate }}</div><div class="panel-body">{{person.summary}}</div></div><div class="panel panel-default"><div class="panel-heading">{{ \'PERSON_VIDEOS\' | translate }}</div><div class="panel-body scroll-x"><div class="col-sm-6 col-md-3 mb20" ng-repeat="video in person.videos"><tile-video video="video"></tile-video></div></div></div></panel>');
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
    '<panel ng-show="video" ng-cloak=""><panel-heading><h1>{{video.name}}<span ng-if="video.year">({{video.year}})</span></h1></panel-heading><div class="row clearfix"><div class="col-md-4 column"><img ng-src="{{video.images[0].pathKey | imagePath : 300 : 400 : \'jpg\' : \'hrbox\' : \'video\': \'hrbox_ffffff\'}}" class="thumbnail img-rounded"></div><div class="col-md-8 column"><div class="panel panel-default"><div class="panel-heading">{{ \'VIDEO_DETAILS\' | translate }}</div><div class="panel-body"><ul><li ng-repeat="staff in video.staffs | filter:{role:\'!actor\'}"><strong>{{ staff.role | translate }}:</strong>{{staff.person.name}}</li><li><strong>{{ \'VIDEO_GENRES\' | translate }}</strong> <span ng-repeat="genre in video.genres"><span class="label label-default">{{genre.name}}</span>{{$last ? \'\' : \' \'}}</span></li></ul><a class="btn btn-primary" ng-click="$root.$emit(\'playlist.play\', video)"><span class="glyphicon glyphicon-play"></span> {{ \'VIDEO_PLAY\' | translate }}</a><div class="btn-group" dropdown=""><a class="btn btn-default" type="button" href="{{$root.config.serverUrl + \'stream/\' + video.files[0].file.pathKey + \'/300-\' + video.files[0].file.pathKey + \'.mp4\'}}" download=""><span class="glyphicon glyphicon-download"></span> {{ \'VIDEO_DOWNLOAD\' | translate }}</a><button type="button" class="btn dropdown-toggle"><span class="caret"></span></button><ul class="dropdown-menu" role="menu"><li><a href="{{$root.config.serverUrl + \'stream/\' + video.files[0].file.pathKey + \'/150-\' + video.files[0].file.pathKey + \'.mp4\'}}" download="">mp4 (300)</a></li><li><a href="{{$root.config.serverUrl + \'stream/\' + video.files[0].file.pathKey + \'/300-\' + video.files[0].file.pathKey + \'.mp4\'}}" download="">mp4 (500)</a></li><li><a href="{{$root.config.serverUrl + \'stream/\' + video.files[0].file.pathKey + \'/500-\' + video.files[0].file.pathKey + \'.mp4\'}}" download="">mp4 (900)</a></li></ul></div></div></div></div></div><div class="panel panel-default"><div class="panel-heading">{{ \'VIDEO_SUMMARY\' | translate }}</div><div class="panel-body">{{video.summary}}</div></div><div class="panel panel-default"><div class="panel-heading">{{ \'VIDEO_ACTORS\' | translate }}</div><div class="panel-body scroll-x"><table><tr><td class="valign-top" ng-repeat="staff in video.staffs | filter:{role:\'actor\'}"><tile tile-class="width-xl margin-right-xs" image="{{person.images[0].pathKey | imagePath : 300 : 400 : \'jpg\' : \'hrbox\' : \'portrait\' : \'hrbox_ffffff\'}}" image-height="xl" title="{{staff.person.name}}" index="$index"><h4 class="space-nowrap overflow-hidden"><a ui-sref="mediamine.videolib.person({id: staff.person.id})">{{staff.person.name}}</a></h4><h5 class="space-nowrap overflow-hidden">{{staff.character.name || \'-\'}}</h5></tile></td></tr></table></div></div></panel>');
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
