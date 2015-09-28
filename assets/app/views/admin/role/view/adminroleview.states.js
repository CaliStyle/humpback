/**
 * @description
 * 
 * A humpback-view created at Wed Sep 09 2015 18:52:30 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminRoleView.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.role.role', {
			url: '/view/:id',
			ncyBreadcrumb: {
          		label: '{{ thisrole.name }}'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminRolesViewCtrl',
					templateUrl: 'app/views/admin/role/view/index.html'
				},
				"widgets@admin.roles.role": {
					templateUrl: 'app/views/admin/role/view/widgets.html'
				}
			}
		})
		.state( 'admin.role.new', {
			url: '/new?id',
			ncyBreadcrumb: {
          		label: 'New'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminRolesNewCtrl',
					templateUrl: 'app/views/admin/role/view/index.html'
				},
				"widgets@admin.roles.new": {
					templateUrl: 'app/views/admin/role/view/widgets.html'
				}
			}
		})
		;
});