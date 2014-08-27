(function(module) {
try {
  module = angular.module('ui.bootstrap.partials');
} catch (e) {
  module = angular.module('ui.bootstrap.partials', []);
}
module.run(['$templateCache', function($templateCache) {
}]);
})();