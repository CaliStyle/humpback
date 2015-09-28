/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 13:43:23 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminSetting.controllers', [

])
.controller( 'AdminSettingCtrl', function AdminSettingController( $scope, $stateParams, DS, Api) {

	console.log($stateParams);
	$scope.settings = new Api('setting', {
		limit : $stateParams.limit ? parseInt($stateParams.limit) : 10,
		skip : $stateParams.skip ? parseInt($stateParams.skip) : 0,
		criteria : $stateParams.criteria ? $stateParams.criteria : null,
		page : $stateParams.page ? $stateParams.page : 1,
		options: {
			bypassCache: true
		}
	});
	$scope.settings.init().then(function(){
		$scope.settings.options.bypassCache = false;
	});


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