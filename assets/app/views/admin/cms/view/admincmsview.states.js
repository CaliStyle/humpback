/**
 * @description
 * 
 * A humpback-view created at Fri Aug 28 2015 18:16:29 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.admincmsview.states', [

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
		.state( 'admin.cms.page', {
			url: '/new?id',
			ncyBreadcrumb: {
          		label: 'New'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminCmsPageCtrl',
					templateUrl: 'app/views/admin/cms/view/index.html'
				},
				"widgets@admin.cms.page": {
					templateUrl: 'app/views/admin/cms/view/widgets.html'
				}
			}
		})
		;
});