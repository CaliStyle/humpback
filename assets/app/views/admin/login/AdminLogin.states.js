/**
 * @description
 * 
 * A humpback-view created at Tue Sep 29 2015 09:42:27 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminLogin.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.login', {
			url: '/login',
			ncyBreadcrumb: {
          		label: 'Admin Login'
        	},
			views: {
				"main@": {
					controller: 'AdminLoginCtrl',
					templateUrl: 'app/views/admin/login/index.html'
				}
			}
		})
		;
});