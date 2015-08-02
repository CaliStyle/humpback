/**
* assets/app/views/index.js
* @description 
* views that load when the client side app does.
* 
**/

angular.module( 'humpback.views', [
	/**
	* @CORE
	* These are core views used by the framework
	* 
	**/
	/* CORE PROJECT VIEWS */

	/* CORE PROJECT VIEWS END */

	/**
	* @PROJECT SPECIFIC
	* These project specific or custom views for this individual project
	* They are compiled with grunt -> tasks/register/humpback.js
	**/
	/* PROJECT VIEWS */
	
	/* PROJECT VIEWS END */
])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'fourZeroThree', {
			url: '^/403',
			views: {
				"main": {
					templateUrl: 'app/views/403.html'
				}
			}
		})
		.state( 'fourZeroFour', {
			url: '^/404',
			views: {
				"main": {
					templateUrl: 'app/views/404.html'
				}
			}
		})
		.state( 'fiveZeroZero', {
			url: '^/500',
			views: {
				"main": {
					templateUrl: 'app/views/500.html'
				}
			}
		});
});