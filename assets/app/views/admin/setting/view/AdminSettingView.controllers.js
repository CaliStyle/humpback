/**
 * @description
 * 
 * A humpback-view created at Tue Sep 15 2015 09:04:45 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminSettingView.controllers', [

])
.controller( 'AdminSettingViewCtrl', function AdminSettingViewController( $scope, $state, $stateParams, DS, Api ) {
	$scope.setting = new Api('setting');
	$scope.setting.read($stateParams.id);
	DS.bindOne('setting', $stateParams.id, $scope, 'thissetting');

	$scope.setting.model = new Api('model', {
		criteria: {
			name: 'setting'
		}
	});
	$scope.setting.model.search()
	.then(function(models){
		$scope.setting.model.selected = models[0];
	});

	$scope.updateSetting = function(){
		console.log("Clicked");
		$scope.setting.update($scope.thissetting)
		.then(function(thissetting){
			
		});
	}
	$scope.deleteSetting = function(){
		console.log("Clicked");
		$scope.setting.delete($scope.thissetting)
		.then(function(thissetting){
			$state.go('admin.setting');
		});
	}

})
.controller( 'AdminSettingNewCtrl', function AdminSettingNewController( $scope, $state, DS, Api ) {

	$scope.setting = new Api('setting', {
		isNew: true
	});
	
	$scope.thissetting = $scope.setting.selected;

	$scope.setting.model = new Api('model', {
		criteria: {
			name: 'setting'
		}
	});
	$scope.setting.model.search()
	.then(function(models){
		$scope.setting.model.selected = models[0];
	});

	$scope.createSetting = function(){
		$scope.setting.create($scope.thissetting)
		.then(function(thissetting){
			$state.go('admin.setting.setting',{id: thissetting.id});
		});
	}

	

});