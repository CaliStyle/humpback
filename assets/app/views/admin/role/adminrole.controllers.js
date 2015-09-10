/**
 * @description
 * 
 * A humpback-view created at Wed Sep 09 2015 15:10:53 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.adminrole.controllers', [

])
.controller( 'AdminRoleCtrl', function AdminRoleController( $scope, DS, $stateParams, Roles ) {

	console.log($stateParams);
	$scope.roles = new Roles();
	$scope.roles.limit = $stateParams.limit ? parseInt($stateParams.limit) : 10;
	$scope.roles.skip = $stateParams.skip ? parseInt($stateParams.skip) : 0; 
	$scope.roles.criteria = $stateParams.criteria ? $stateParams.criteria : null;
	$scope.roles.init();

});