/**
 * @description
 * 
 * A humpback-view created at Fri Aug 28 2015 17:08:01 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminUserView.controllers', [

])
.controller( 'AdminUserViewCtrl', function AdminUserViewController( $scope, $state, $stateParams, DS, utils, Api) {

	$scope.user = new Api('user',{
		options : {
			bypassCache: true, 
			params: {
				populate: 'roles'
			}
		}
	});

	$scope.user.read($stateParams.id);
	
	$scope.user.Roles = new Api('role', {
		limit: 100
	});
	$scope.user.Roles.init();

	DS.bindOne('user', $stateParams.id, $scope, 'thisuser');

	$scope.user.model = new Api('model', {
		criteria: {
			name: 'user'
		}
	});
	$scope.user.model.search()
	.then(function(models){
		$scope.user.model.selected = models[0];
	});


	$scope.updateUser = function(){
		$scope.user.update($scope.thisuser)
		.then(function(thisuser){

		});
	}

	$scope.deleteUser = function(){
		$scope.user.delete($scope.thisuser)
		.then(function(thisuser){
			$state.go('admin.user');
		});
	}


})
.controller( 'AdminUserNewCtrl', function AdminUserNewController( $scope, $state, $stateParams, DS, utils, Api) {

	$scope.user = new Api('user', {
		isNew: true
	});
	
	$scope.thisuser = $scope.user.selected;

	$scope.user.Roles = new Api('role', {
		limit: 100
	});
	$scope.user.Roles.init();

	$scope.user.model = new Api('model', {
		criteria: {
			name: 'user'
		}
	});
	$scope.user.model.search()
	.then(function(models){
		$scope.user.model.selected = models[0];
	});

	$scope.createUser = function(){
		$scope.user.create($scope.thisuser)
		.then(function(thisuser){
			$state.go('admin.user.user',{id: thisuser.id});
		});
	}
});