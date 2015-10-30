/**
 * @description
 * 
 * A humpback-view created at Mon Aug 31 2015 09:23:58 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminEmail.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.email', {
			url: '/email?skip?sort?limit?criteria?page',
			ncyBreadcrumb: {
          		label: 'Email Management'
        	},
			views: {
				"admin": {
					controller: 'AdminEmailCtrl',
					templateUrl: 'app/views/admin/email/index.html'
				}
			}
		})
		;
});