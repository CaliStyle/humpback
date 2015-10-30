/**
 * @description
 * 
 * A humpback-view created at Mon Sep 28 2015 10:41:40 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminWebhook.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.webhook', {
			url: '/webhook?skip?sort?limit?criteria?page',
			reloadOnSearch: false,
			ncyBreadcrumb: {
          		label: 'Webhook Management'
        	},
			views: {
				"admin": {
					controller: 'AdminWebhookCtrl',
					templateUrl: 'app/views/admin/webhook/index.html'
				}
			}
		})
		;
});