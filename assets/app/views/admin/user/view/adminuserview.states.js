/**
 * @description
 * 
 * A humpback-view created at Fri Aug 28 2015 17:08:01 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminUserView.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.user.user', {
			url: '/view/:id',
			ncyBreadcrumb: {
          		label: '{{ thisuser.username }}'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminUserViewCtrl',
					templateUrl: 'app/views/admin/user/view/index.html'
				},
				"widgets@admin.user.user": {
					templateUrl: 'app/views/admin/user/view/widgets.html'
				}
			}
		})
		.state( 'admin.user.new', {
			url: '/new?id',
			ncyBreadcrumb: {
          		label: 'New'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminUserNewCtrl',
					templateUrl: 'app/views/admin/user/view/index.html'
				},
				"widgets@admin.user.new": {
					templateUrl: 'app/views/admin/user/view/widgets.html'
				}
			}
		})
		;
});