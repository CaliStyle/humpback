/**
 * @description
 * 
 * A humpback-view created at Wed Sep 09 2015 18:52:30 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.adminroleview.controllers', [

])
.controller( 'AdminRolesViewCtrl', function AdminRolesViewController( $scope, $stateParams, DS, Api ) {

	$scope.role = new Api('role');
	$scope.role.read($stateParams.id);
	DS.bindOne('role', $stateParams.id, $scope, 'thisrole');

});