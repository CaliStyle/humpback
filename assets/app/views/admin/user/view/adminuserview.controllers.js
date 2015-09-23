/**
 * @description
 * 
 * A humpback-view created at Fri Aug 28 2015 17:08:01 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminUserView.controllers', [

])
.controller( 'AdminUserViewCtrl', function AdminUserViewController( $scope, $stateParams, DS, utils, Api) {

	$scope.user = new Api('user');
	$scope.user.read($stateParams.id);
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

})
.controller( 'AdminUserNewCtrl', function AdminUserNewController( $scope, $stateParams, DS, utils, Api) {

	$scope.user = new Api('user', {
		isNew: true
	});
	
	$scope.thisuser = $scope.user.selected;

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
		console.log("Clicked");
		$scope.user.create($scope.thisuser)
		.then(function(thisuser){
			$state.go('admin.user.view',{id: thisuser.id});
		});
	}
});