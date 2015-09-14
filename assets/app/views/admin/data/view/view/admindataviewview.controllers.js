/**
 * @description
 * 
 * A humpback-view created at Sun Sep 13 2015 21:29:15 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.admindataviewview.controllers', [

])
.controller( 'AdminDataViewViewCtrl', function AdminDataViewViewController( $scope, $stateParams, DS, Api ) {
	
	console.log($stateParams.model, $stateParams.item);

	$scope.item = new Api($stateParams.model);
	$scope.item.read($stateParams.item);
	DS.bindOne($stateParams.model, $stateParams.item, $scope, 'thisitem');

});