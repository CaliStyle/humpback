/**
 * @description
 * 
 * A humpback-view created at Fri Sep 04 2015 15:59:24 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminCmsCategories.controllers', [

])
.controller( 'AdminCmsCategoriesCtrl', function AdminCmsCategoriesController( $scope, $stateParams, DS, Api ) {
	console.log($stateParams);
	
	$scope.categories = new Api('category', {
		limit : $stateParams.limit ? parseInt($stateParams.limit) : 10,
		skip : $stateParams.skip ? parseInt($stateParams.skip) : 0,
		criteria : $stateParams.criteria ? $stateParams.criteria : null,
		page : $stateParams.page ? $stateParams.page : 1,
		options: {
			bypassCache: true
		}
	});

	$scope.categories.init().then(function(){
		$scope.categories.options.bypassCache = false;
	});

	$scope.categories.model = new Api('model', {
		criteria: {
			name: 'category'
		}
	});
	$scope.categories.model.search()
	.then(function(models){
		$scope.categories.model.selected = models[0];
	});

});