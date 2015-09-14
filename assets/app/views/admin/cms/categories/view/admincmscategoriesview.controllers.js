/**
 * @description
 * 
 * A humpback-view created at Fri Sep 04 2015 17:31:09 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.admincmscategoriesview.controllers', [

])
.controller( 'AdminCmsCategoriesViewCtrl', function AdminCmsCategoriesViewController( $scope, $stateParams, DS, Api) {
	$scope.category = new Api('category');
	$scope.category.options = {bypassCache: true, params: {populate: 'routes'}};
	$scope.category.read($stateParams.id);

	$scope.category.Routes = new Api('category');
	$scope.category.Routes.options = {bypassCache: true, endpoint: '/category/' + $stateParams.id + '/routes'};
	$scope.category.Routes.init();

	DS.bindOne('category', $stateParams.id, $scope, 'thiscategory');

	$scope.updateCategory = function(){
		$scope.category.update($scope.thiscategory);
	}

	$scope.deleteCategory = function(){
		$scope.category.delete($scope.thiscategory);
	}

})
.controller( 'AdminCmsCategoriesNewCtrl', function AdminCmsCategoriesNewController( $scope, $stateParams, DS, Api) {
	
	$scope.category = new Api('category');
	$scope.thiscategory = $scope.category.selected;

	$scope.createCategory = function(){
		console.log("Clicked");
		$scope.category.create($scope.thiscategory);
	}


});