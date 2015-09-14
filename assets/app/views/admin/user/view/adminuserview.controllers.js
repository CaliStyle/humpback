/**
 * @description
 * 
 * A humpback-view created at Fri Aug 28 2015 17:08:01 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.adminuserview.controllers', [

])
.controller( 'AdminUserViewCtrl', function AdminUserViewController( $scope, $stateParams, DS, utils, Api) {

	$scope.user = new Api('user');
	$scope.user.read($stateParams.id);
	DS.bindOne('user', $stateParams.id, $scope, 'thisuser');

});