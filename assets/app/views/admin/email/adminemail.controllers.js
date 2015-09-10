/**
 * @description
 * 
 * A humpback-view created at Mon Aug 31 2015 09:23:58 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.adminemail.controllers', [

])
.controller( 'AdminEmailCtrl', function AdminEmailController( $scope, $stateParams, DS, Emails ) {

	console.log($stateParams);
	$scope.emails = new Emails();
	$scope.emails.limit = $stateParams.limit ? parseInt($stateParams.limit) : 10;
	$scope.emails.skip = $stateParams.skip ? parseInt($stateParams.skip) : 0; 
	$scope.emails.criteria = $stateParams.criteria ? $stateParams.criteria : null;
	$scope.emails.init();

});