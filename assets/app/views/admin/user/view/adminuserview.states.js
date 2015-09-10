/**
 * @description
 * 
 * A humpback-view created at Fri Aug 28 2015 17:08:01 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.adminuserview.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.user.user', {
			url: '/:id',
			ncyBreadcrumb: {
          		label: '{{ thisuser.username }}'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminUserViewCtrl',
					templateUrl: 'app/views/admin/user/view/index.html'
				}
			}
		})
		;
});