/**
 * @description
 * 
 * A humpback-view created at Sat Oct 10 2015 11:43:23 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminUserViewPassword.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider	
		.state( 'admin.user.user.password', {
			url: '/passports',
			ncyBreadcrumb: {
          		label: 'Edit Passports'
        	},
			views: {
				"content@admin.user.user": {
					controller: 'AdminUserViewPasswordCtrl',
					templateUrl: 'app/views/admin/user/view/password/index.html'
				}
			}
		});
});