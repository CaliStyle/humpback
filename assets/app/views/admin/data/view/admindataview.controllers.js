/**
 * @description
 * 
 * A humpback-view created at Sat Aug 29 2015 16:08:20 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.admindataview.controllers', [

])
.controller( 'AdminDataViewCtrl', function AdminDataViewController( $scope, $stateParams, DS, Api) {
	
	$scope.model = new Api('model');
	$scope.model.read($stateParams.id)
	.then(function(model){
		
		console.log(model);

		$scope.model.Collection = new Api(model.identity);
		$scope.model.Collection.limit = $stateParams.limit ? parseInt($stateParams.limit) : 10;
		$scope.model.Collection.skip = $stateParams.skip ? parseInt($stateParams.skip) : 0; 
		$scope.model.Collection.criteria = $stateParams.criteria ? $stateParams.criteria : null;
		$scope.model.Collection.init();

	});

	//$scope.thismodel = $scope.model.selected;
	DS.bindOne('model', $stateParams.id, $scope, 'thismodel');

});