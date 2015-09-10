/**
 * @description
 * 
 * A humpback-view created at Fri Sep 04 2015 17:31:09 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.admincmscategoriesview.controllers', [

])
.controller( 'AdminCmsCategoriesViewCtrl', function AdminCmsCategoriesViewController( $scope, $stateParams, DS, Category ) {
	$scope.category = new Category($stateParams.id);
	$scope.category.read();
	DS.bindOne('category', $stateParams.id, $scope, 'thiscategory');

	$scope.updateCategory = function(){
		$scope.category.update($scope.thiscategory);
	}

	$scope.deleteCategory = function(){
		$scope.category.delete();
	}


})
.controller( 'AdminCmsCategoriesNewCtrl', function AdminCmsCategoriesNewController( $scope, $stateParams, DS, Category ) {
	
	$scope.category = new Category();
	$scope.thiscategory = $scope.category.category;
	//$scope.route.read();
	//DS.bindOne('route', $stateParams.id, $scope, 'thisroute');

	$scope.createCategory = function(){
		console.log("Clicked");
		$scope.category.create($scope.thiscategory);
	}


});