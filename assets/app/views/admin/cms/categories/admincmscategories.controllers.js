/**
 * @description
 * 
 * A humpback-view created at Fri Sep 04 2015 15:59:24 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.admincmscategories.controllers', [

])
.controller( 'AdminCmsCategoriesCtrl', function AdminCmsCategoriesController( $scope, $stateParams, DS, Api ) {
	console.log($stateParams);
	$scope.categories = new Api('category');
	$scope.categories.limit = $stateParams.limit ? parseInt($stateParams.limit) : 100;
	$scope.categories.skip = $stateParams.skip ? parseInt($stateParams.skip) : 0; 
	$scope.categories.criteria = $stateParams.criteria ? $stateParams.criteria : null;
	$scope.categories.init();

	$scope.categories.model = new Api('model');
	$scope.categories.model.criteria = {name: 'category'};
	$scope.categories.model.search()
	.then(function(models){
		$scope.categories.model.selected = models[0];
	});

});