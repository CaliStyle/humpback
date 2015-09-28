/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 13:11:17 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminUser.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.user', {
			url: '/users?skip?sort?limit?criteria?page',
			reloadOnSearch: false,
			ncyBreadcrumb: {
          		label: 'User Management'
        	},
			views: {
				"admin": {
					controller: 'AdminUserCtrl',
					templateUrl: 'app/views/admin/user/index.html'
				}
			}
		})
		;
});