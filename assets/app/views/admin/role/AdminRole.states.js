/**
 * @description
 * 
 * A humpback-view created at Wed Sep 09 2015 15:10:53 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminRole.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.role', {
			url: '/roles?skip?sort?limit?criteria?page',
			reloadOnSearch: false,
			ncyBreadcrumb: {
          		label: 'Roles'
        	},
			views: {
				"admin": {
					controller: 'AdminRoleCtrl',
					templateUrl: 'app/views/admin/role/index.html'
				}
			}
		})
		;
});