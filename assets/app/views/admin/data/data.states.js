/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 11:52:44 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.data.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.data', {
			url: '/data',
			ncyBreadcrumb: {
          		label: 'Admin Data GUI'
        	},
			views: {
				"admin": {
					controller: 'DataCtrl',
					templateUrl: 'app/views/admin/data/index.html'
				}
			}
		})
		;
});