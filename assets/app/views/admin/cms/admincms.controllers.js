/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 11:28:21 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminCms.controllers', [

])
.controller( 'AdminCmsCtrl', function AdminCmsController( $scope, $stateParams, DS, Api) {
	
	console.log($stateParams);
	$scope.routes = new Api('route',{
		limit : $stateParams.limit ? parseInt($stateParams.limit) : 10,
		skip : $stateParams.skip ? parseInt($stateParams.skip) : 0,
		criteria : $stateParams.criteria ? $stateParams.criteria : {verb: 'get'}
	});
	$scope.routes.init();
	
	$scope.routes.model = new Api('model', {
		criteria: {
			name: 'route'
		}
	});
	$scope.routes.model.search()
	.then(function(models){
		$scope.routes.model.selected = models[0];
	});
});