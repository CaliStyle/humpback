/**
 * @description
 * 
 * A humpback-view created at Fri Aug 28 2015 17:08:01 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.adminuserview.controllers', [

])
.controller( 'AdminUserViewCtrl', function AdminUserViewController( $scope, $stateParams, DS, utils, User) {

	/*
	DS.find('user', $stateParams.id)
	.then(function(user){
		DS.bindOne('user', user.id, $scope, 'thisuser');
	})
	.catch(function (err) {
	  if(utils.development()){ console.log(err); }; // reason why query failed
	});
	*/

	$scope.user = new User($stateParams.id);
	$scope.user.read();
	DS.bindOne('user', $stateParams.id, $scope, 'thisuser');

});