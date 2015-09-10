/**
 * @description
 * 
 * A humpback-view created at Fri Sep 04 2015 17:31:09 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.admincmscategoriesview.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.cms.categories.view', {
			url: '/view/:id',
			ncyBreadcrumb: {
          		label: '{{ thiscategory.name }}'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminCmsCategoriesViewCtrl',
					templateUrl: 'app/views/admin/cms/categories/view/index.html'
				}
			}
		})
		.state( 'admin.cms.categories.new', {
			url: '/new?id',
			ncyBreadcrumb: {
          		label: 'New'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminCmsCategoriesNewCtrl',
					templateUrl: 'app/views/admin/cms/categories/view/index.html'
				}
			}
		})
		;
});