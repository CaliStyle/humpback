/**
 * @description
 * 
 * A humpback-view created at Sat Aug 29 2015 16:08:20 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminDataView.controllers', [

])
.controller( 'AdminDataViewCtrl', function AdminDataViewController( $scope, $stateParams, DS, Api) {
	
	$scope.model = new Api('model');
	$scope.model.read($stateParams.id)
	.then(function(model){
		
		console.log(model);

		$scope.model.Collection = new Api(model.identity, {
			limit : $stateParams.limit ? parseInt($stateParams.limit) : 10,
			skip : $stateParams.skip ? parseInt($stateParams.skip) : 0,
			criteria : $stateParams.criteria ? $stateParams.criteria : null,
			page : $stateParams.page ? $stateParams.page : 1,
			options: {
				bypassCache: true
			}
		});
		$scope.model.Collection.init().then(function(){
			$scope.model.Collection.options.bypassCache = false;
		});

	});

	//$scope.thismodel = $scope.model.selected;
	DS.bindOne('model', $stateParams.id, $scope, 'thismodel');

});