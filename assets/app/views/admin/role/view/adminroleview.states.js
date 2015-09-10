/**
 * @description
 * 
 * A humpback-view created at Wed Sep 09 2015 18:52:30 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.adminroleview.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.roles.role', {
			url: '/:id',
			ncyBreadcrumb: {
          		label: '{{ thisrole.name }}'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminRolesViewCtrl',
					templateUrl: 'app/views/admin/role/view/index.html'
				}
			}
		})
		;
});