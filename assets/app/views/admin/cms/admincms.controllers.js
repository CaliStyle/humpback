/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 11:28:21 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.admincms.controllers', [

])
.controller( 'AdminCmsCtrl', function AdminCmsController( $scope, $stateParams, DS, Api) {
	
	console.log($stateParams);
	$scope.routes = new Api('route');
	$scope.routes.limit = $stateParams.limit ? parseInt($stateParams.limit) : 10;
	$scope.routes.skip = $stateParams.skip ? parseInt($stateParams.skip) : 0; 
	$scope.routes.criteria = $stateParams.criteria ? $stateParams.criteria : { verb: 'get' };
	$scope.routes.init();
	
	$scope.routes.model = new Api('model');
	$scope.routes.model.criteria = {name: 'route'};
	$scope.routes.model.search()
	.then(function(models){
		$scope.routes.model.selected = models[0];
	});
});