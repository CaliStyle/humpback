/**
 * @description
 * 
 * A humpback-view created at Sun Sep 13 2015 21:29:15 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminDataViewView.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.data.data.data', {
			url: '/:model/view/:item',
			ncyBreadcrumb: {
          		label: 'Item'
        	},
			views: {
				"content@admin.data.data": {
					controller: 'AdminDataViewViewCtrl',
					templateUrl: 'app/views/admin/data/view/view/index.html'
				},
				"widgets@admin.data.data.data": {
					templateUrl: 'app/views/admin/data/view/view/widgets.html'
				}
			}
		})
		.state( 'admin.data.data.new', {
			url: '/:model/new?id',
			ncyBreadcrumb: {
          		label: 'New Item'
        	},
			views: {
				"content@admin.data.data": {
					controller: 'AdminDataViewNewCtrl',
					templateUrl: 'app/views/admin/data/view/view/index.html'
				},
				"widgets@admin.data.data.new": {
					templateUrl: 'app/views/admin/data/view/view/widgets.html'
				}
			}
		})
	;
});