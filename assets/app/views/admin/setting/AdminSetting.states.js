/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 13:43:23 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminSetting.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.setting', {
			url: '/settings?skip?sort?limit?criteria?page',
			reloadOnSearch: false,
			ncyBreadcrumb: {
          		label: 'Settings'
        	},
			views: {
				"admin": {
					controller: 'AdminSettingCtrl',
					templateUrl: 'app/views/admin/setting/index.html'
				}
			}
		})
		;
});