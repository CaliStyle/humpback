/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 11:28:21 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.admincms.controllers', [

])
.controller( 'AdminCmsCtrl', function AdminCmsController( $scope, $stateParams, DS, Routes) {
	
	console.log($stateParams);
	$scope.routes = new Routes();
	$scope.routes.limit = $stateParams.limit ? parseInt($stateParams.limit) : 10;
	$scope.routes.skip = $stateParams.skip ? parseInt($stateParams.skip) : 0; 
	$scope.routes.criteria = $stateParams.criteria ? $stateParams.criteria : { verb: 'get' };
	$scope.routes.init();
	
});