/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 11:28:21 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.cms.controllers', [

])
.controller( 'CmsCtrl', function CmsController( $scope, DS ) {
	$stateProvider
		.state( 'admin.cms', {
			url: '/cms',
			ncyBreadcrumb: {
          		label: 'Admin CMS'
        	},
			views: {
				"admin": {
					controller: 'CmsCtrl',
					templateUrl: 'app/views/admin/cms/index.html'
				}
			}
		})
		;

});