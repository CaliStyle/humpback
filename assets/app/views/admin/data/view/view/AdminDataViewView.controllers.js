/**
 * @description
 * 
 * A humpback-view created at Sun Sep 13 2015 21:29:15 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminDataViewView.controllers', [

])
.controller( 'AdminDataViewViewCtrl', function AdminDataViewViewController( $scope, $state, $stateParams, DS, Api ) {
	
	console.log($stateParams.model, $stateParams.item);

	$scope.item = new Api($stateParams.model);
	$scope.item.read($stateParams.item);
	DS.bindOne($stateParams.model, $stateParams.item, $scope, 'thisitem');

	$scope.updateItem = function(){
		$scope.item.update($scope.thisitem)
		.then(function(thisitem){

		});
	}

	$scope.deleteItem = function(){
		$scope.item.delete($scope.thisitem)
		.then(function(thisitem){
			$state.go('admin.data.data',{model: $stateParams.model});
		});
	}
})

.controller( 'AdminDataViewNewCtrl', function AdminDataViewNewController( $scope, $state, $stateParams, DS, Api ) {
	
	console.log($stateParams.model, $stateParams.item);

	$scope.item = new Api($stateParams.model, {
		isNew: true
	});
	
	$scope.thisitem = $scope.item.selected;

	$scope.createItem = function(){
		$scope.item.create($scope.thisitem)
		.then(function(thisitem){
			$state.go('admin.data.data.data',{model: $stateParams.model, item: thisitem.id});
		});
	}
	

});