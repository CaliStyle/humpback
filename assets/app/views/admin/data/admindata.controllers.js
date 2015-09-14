/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 11:52:44 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.admindata.controllers', [

])
.controller( 'AdminDataCtrl', function AdminDataController( $scope, $stateParams, DS, Api) {

	console.log($stateParams);
	$scope.models = new Api('model');
	$scope.models.limit = $stateParams.limit ? parseInt($stateParams.limit) : 10;
	$scope.models.skip = $stateParams.skip ? parseInt($stateParams.skip) : 0; 
	$scope.models.criteria = $stateParams.criteria ? $stateParams.criteria : null;
	$scope.models.init();

});