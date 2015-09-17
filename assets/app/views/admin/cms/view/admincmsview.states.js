/**
 * @description
 * 
 * A humpback-view created at Fri Aug 28 2015 18:16:29 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminCmsView.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.cms.cms', {
			url: '/view/:id',
			ncyBreadcrumb: {
          		label: '{{ thisroute.title }}'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminCmsViewCtrl',
					templateUrl: 'app/views/admin/cms/view/index.html'
				},
				"widgets@admin.cms.cms": {
					templateUrl: 'app/views/admin/cms/view/widgets.html'
				}
			}
		})
		.state( 'admin.cms.new', {
			url: '/new?id',
			ncyBreadcrumb: {
          		label: 'New'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminCmsNewCtrl',
					templateUrl: 'app/views/admin/cms/view/index.html'
				},
				"widgets@admin.cms.new": {
					templateUrl: 'app/views/admin/cms/view/widgets.html'
				}
			}
		})
		;
});