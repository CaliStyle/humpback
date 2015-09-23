/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 11:52:44 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminData.controllers', [

])
.controller( 'AdminDataCtrl', function AdminDataController( $scope, $stateParams, DS, Api) {

	console.log($stateParams);
	$scope.models = new Api('model',{
		limit : $stateParams.limit ? parseInt($stateParams.limit) : 10,
		skip : $stateParams.skip ? parseInt($stateParams.skip) : 0,
		criteria : $stateParams.criteria ? $stateParams.criteria : null
	});
	$scope.models.init();


	$scope.models.model = new Api('model', {
		criteria: {
			name: 'model'
		}
	});

	$scope.models.model.search()
	.then(function(models){
		$scope.models.model.selected = models[0];
	});
});