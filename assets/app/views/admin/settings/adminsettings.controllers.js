/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 13:43:23 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminSettings.controllers', [

])
.controller( 'AdminSettingsCtrl', function AdminSettingsController( $scope, $stateParams, DS, Api) {

	console.log($stateParams);
	$scope.settings = new Api('setting', {
		limit : $stateParams.limit ? parseInt($stateParams.limit) : 10,
		skip : $stateParams.skip ? parseInt($stateParams.skip) : 0,
		criteria : $stateParams.criteria ? $stateParams.criteria : null
	});
	$scope.settings.init();


	$scope.settings.model = new Api('model', {
		criteria: {
			name: 'setting'
		}
	});
	$scope.settings.model.search()
	.then(function(models){
		$scope.settings.model.selected = models[0];
	});

});