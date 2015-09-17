/**
 * @description
 * 
 * A humpback-view created at Mon Aug 31 2015 09:23:58 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminEmail.controllers', [

])
.controller( 'AdminEmailCtrl', function AdminEmailController( $scope, $stateParams, DS, Api) {

	console.log($stateParams);
	$scope.emails = new Api('email', {
		limit : $stateParams.limit ? parseInt($stateParams.limit) : 10,
		skip : $stateParams.skip ? parseInt($stateParams.skip) : 0,
		criteria : $stateParams.criteria ? $stateParams.criteria : null
	});
	$scope.emails.init();

	$scope.emails.model = new Api('model', {
		criteria: {
			name: 'email'
		}
	});
	$scope.emails.model.search()
	.then(function(models){
		$scope.emails.model.selected = models[0];
	});

});