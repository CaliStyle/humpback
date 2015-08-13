angular.module( 'humpback.views.home.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'home', {
			url: '^/',
			ncyBreadcrumb: {
          		label: 'One World Lab'
        	},
			views: {
				"main": {
					controller: 'HomeCtrl',
					templateUrl: 'app/views/home/index.html'
				}
			}
		})
		;
});