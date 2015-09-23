/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 13:43:23 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminSettings.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.settings', {
			url: '/settings',
			reloadOnSearch: false,
			ncyBreadcrumb: {
          		label: 'Settings'
        	},
			views: {
				"admin": {
					controller: 'AdminSettingsCtrl',
					templateUrl: 'app/views/admin/settings/index.html'
				}
			}
		})
		;
});