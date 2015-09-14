/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 13:11:17 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.adminuser.controllers', [

])
.controller( 'AdminUserCtrl', function AdminUserController( $scope, $stateParams, DS, Api ) {

	console.log($stateParams);
	$scope.users = new Api('user');
	$scope.users.limit = $stateParams.limit ? $stateParams.limit : 10;
	$scope.users.skip = $stateParams.skip ? $stateParams.skip : 0; 
	$scope.users.criteria = $stateParams.criteria ? $stateParams.criteria : null;
	$scope.users.init();
	
	$scope.user.model = new Api('model');
	$scope.users.model.criteria = {name: 'user'};
	$scope.users.model.search()
	.then(function(models){
		$scope.users.model.selected = models[0];
	});

});