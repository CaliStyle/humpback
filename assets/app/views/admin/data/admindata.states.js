/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 11:52:44 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.admindata.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.data', {
			url: '/data?skip?sort?limit?criteria',
			ncyBreadcrumb: {
          		label: 'Data Management'
        	},
			views: {
				"admin": {
					controller: 'AdminDataCtrl',
					templateUrl: 'app/views/admin/data/index.html'
				}
			}
		})
		;
});