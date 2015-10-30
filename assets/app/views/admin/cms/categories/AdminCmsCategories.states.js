/**
 * @description
 * 
 * A humpback-view created at Fri Sep 04 2015 15:59:24 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminCmsCategories.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.cms.categories', {
			url: '/categories?skip?sort?limit?criteria?page',
			reloadOnSearch: false,
			ncyBreadcrumb: {
          		label: 'Categories'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminCmsCategoriesCtrl',
					templateUrl: 'app/views/admin/cms/categories/index.html'
				}
			}
		})
		;
});