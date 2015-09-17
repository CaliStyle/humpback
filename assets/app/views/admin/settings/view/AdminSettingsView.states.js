/**
 * @description
 * 
 * A humpback-view created at Tue Sep 15 2015 09:04:45 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminSettingsView.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.settings.setting', {
			url: '/view/:id',
			ncyBreadcrumb: {
          		label: '{{ thissetting.name }}'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminSettingsViewCtrl',
					templateUrl: 'app/views/admin/settings/view/index.html'
				},
				"widgets@admin.settings.setting": {
					templateUrl: 'app/views/admin/settings/view/widgets.html'
				}
			}
		})
		.state( 'admin.settings.new', {
			url: '/new?id',
			ncyBreadcrumb: {
          		label: 'New'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminSettingsNewCtrl',
					templateUrl: 'app/views/admin/settings/view/index.html'
				},
				"widgets@admin.settings.new": {
					templateUrl: 'app/views/admin/settings/view/widgets.html'
				}
			}
		})
		;
});