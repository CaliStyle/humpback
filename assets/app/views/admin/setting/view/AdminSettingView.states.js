/**
 * @description
 * 
 * A humpback-view created at Tue Sep 15 2015 09:04:45 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminSettingView.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.setting.setting', {
			url: '/view/:id',
			ncyBreadcrumb: {
          		label: '{{ thissetting.title }}'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminSettingViewCtrl',
					templateUrl: 'app/views/admin/setting/view/index.html'
				},
				"widgets@admin.setting.setting": {
					templateUrl: 'app/views/admin/setting/view/widgets.html'
				}
			}
		})
		.state( 'admin.setting.new', {
			url: '/new?id',
			ncyBreadcrumb: {
          		label: 'New'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminSettingNewCtrl',
					templateUrl: 'app/views/admin/setting/view/index.html'
				},
				"widgets@admin.setting.new": {
					templateUrl: 'app/views/admin/setting/view/widgets.html'
				}
			}
		})
		;
});