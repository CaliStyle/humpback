/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 13:11:17 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminUser.controllers', [

])
.controller( 'AdminUserCtrl', function AdminUserController( $scope, $stateParams, DS, Api ) {

	console.log($stateParams);
	$scope.users = new Api('user', {
		limit : $stateParams.limit ? parseInt($stateParams.limit) : 10,
		skip : $stateParams.skip ? parseInt($stateParams.skip) : 0,
		criteria : $stateParams.criteria ? $stateParams.criteria : null
	});
	$scope.users.init();
	
	$scope.users.model = new Api('model', {
		criteria: {
			name: 'user'
		}
	});
	$scope.users.model.search()
	.then(function(models){
		$scope.users.model.selected = models[0];
	});

});