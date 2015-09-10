/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 13:43:23 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.adminsettings.controllers', [

])
.controller( 'AdminSettingsCtrl', function AdminSettingsController( $scope, $stateParams, DS, Settings) {

	console.log($stateParams);
	$scope.settings = new Settings();
	$scope.settings.limit = $stateParams.limit ? parseInt($stateParams.limit) : 10;
	$scope.settings.skip = $stateParams.skip ? parseInt($stateParams.skip) : 0; 
	$scope.settings.criteria = $stateParams.criteria ? $stateParams.criteria : null;
	$scope.settings.nextPage();
});