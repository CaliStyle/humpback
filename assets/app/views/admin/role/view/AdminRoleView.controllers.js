/**
 * @description
 * 
 * A humpback-view created at Wed Sep 09 2015 18:52:30 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminRoleView.controllers', [

])
.controller( 'AdminRolesViewCtrl', function AdminRolesViewController( $scope, $stateParams, DS, Api ) {

	$scope.role = new Api('role');
	$scope.role.read($stateParams.id);
	DS.bindOne('role', $stateParams.id, $scope, 'thisrole');

	$scope.role.model = new Api('model', {
		criteria: {
			name: 'role'
		}
	});
	$scope.role.model.search()
	.then(function(models){
		$scope.role.model.selected = models[0];
	});

	$scope.role.Users = new Api('user', {
		options: {
			bypassCache: true, 
			endpoint: '/role/' + $stateParams.id + '/users'
		}
	});
	$scope.role.Users.init();

	$scope.updateRole = function(){
		$scope.role.update($scope.thisrole)
		.then(function(thisrole){

		});
	}

	$scope.deleteRole = function(){
		$scope.role.delete($scope.thisrole)
		.then(function(thisrole){
			$state.go('admin.role');
		});
	}

})
.controller( 'AdminRolesNewCtrl', function AdminRolesViewController( $scope, $stateParams, DS, Api ) {

	$scope.role = new Api('role', {
		isNew: true
	});
	$scope.thisrole = $scope.role.selected;
	//$scope.role.read($stateParams.id);
	//DS.bindOne('role', $stateParams.id, $scope, 'thisrole');

	$scope.role.model = new Api('model', {
		criteria: {
			name: 'role'
		}
	});

	$scope.role.model.search()
	.then(function(models){
		$scope.role.model.selected = models[0];
	});

	$scope.createRole = function(){
		$scope.role.create($scope.thisrole)
		.then(function(thisrole){
			$state.go('admin.role.role',{id: thisrole.id});
		});
	}

});