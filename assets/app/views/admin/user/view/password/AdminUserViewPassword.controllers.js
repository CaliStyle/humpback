/**
 * @description
 * 
 * A humpback-view created at Sat Oct 10 2015 11:43:23 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminUserViewPassword.controllers', [

])
.controller( 'AdminUserViewPasswordCtrl', function AdminUserViewPasswordController( $stateParams, $state, $scope, DS, Api ) {

	/*
	$scope.user = new Api('user',{
		options : {
			bypassCache: true, 
			params: {
				populate: 'passports'
			}
		}
	});

	$scope.user.read($stateParams.id);
	DS.bindOne('user', $stateParams.id, $scope, 'thisuser');
	*/
	$scope.createPassword = function(passport){
		
		passport.user = $scope.thisuser;

		console.log(passport);
		
		$scope.passport = new Api('passport',{
			isNew : true,
			options: {
				baseUrl: '/auth',
				endpoint: '/local/adminreset',
				cacheResponse: false
			}
		});

		$scope.passport.create(passport)
		.then(function(thispassport){
			$state.go('admin.user.user', {id: $scope.thisuser.id});
		});

	}

	$scope.updatePassword = function(passport){
		
		passport.user = $scope.thisuser;
		console.log(passport);
		
		$scope.passport = new Api('passport',{
			options: {
				baseUrl: '/auth',
				endpoint: '/local/adminreset',
				cacheResponse: false
			}
		});

		$scope.passport.create(passport)
		.then(function(thispassport){
			$state.go('admin.user.user', {id: $scope.thisuser.id});
		});
		//console.log(passport);
		//$scope.user.Passports
	}

	$scope.deletePassport = function(passport){
		$scope.passport = new Api('passport',{
			options: {
				baseUrl: '/auth',
				endpoint: '/local/disconnect',
				cacheResponse: false
			}
		});

		$scope.passport.update(passport)
		.then(function(thispassport){
			$state.go('admin.user.user', {id: $scope.thisuser.id});
		});

	}

});