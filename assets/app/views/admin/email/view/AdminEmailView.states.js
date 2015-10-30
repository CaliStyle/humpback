/**
 * @description
 * 
 * A humpback-view created at Fri Sep 25 2015 14:25:31 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminEmailView.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.email.email', {
			url: '/view/:id',
			ncyBreadcrumb: {
          		label: '{{ thisemail.name }}'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminEmailViewCtrl',
					templateUrl: 'app/views/admin/email/view/index.html'
				},
				"widgets@admin.email.email": {
					templateUrl: 'app/views/admin/email/view/widgets.html'
				}
			}
		})
		.state( 'admin.email.new', {
			url: '/new?id',
			ncyBreadcrumb: {
          		label: 'New'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminEmailNewCtrl',
					templateUrl: 'app/views/admin/email/view/index.html'
				},
				"widgets@admin.email.new": {
					templateUrl: 'app/views/admin/email/view/widgets.html'
				}
			}
		})
		;
});