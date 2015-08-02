(function(){
	'use strict';
	/**
	* @description 
	* Root Module Loads dependencies and Initializes the APP.
	* 
	**/
	angular.module( 'humpback',	[
		
		'ui.router',
		'js-data',	
		'sails.io',
		'pascalprecht.translate',
		'ngAnimate',

		//Foundation core
		'foundation',
		//'foundation.dynamicRouting',
    	//'foundation.dynamicRouting.animations',
			
		//humpback core
		'humpback.hooks',
		'humpback.controllers',
		'humpback.policies',
		'humpback.services',
		'humpback.directives',
		'humpback.filters',
		'humpback.models',
		'humpback.views'
	  
	])
	/**
	* @description 
	* Root Module Config
	* 
	**/
	.config(['$stateProvider','$urlRouterProvider', '$locationProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
		
		

		/**
		* @description 
		* Configure HTML5
		* 
		**/		
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true
		});

		/**
		* @description 
		* Configure Translations
		* 
		**/
		
		$translateProvider.preferredLanguage(window._defaultLocale);
		/*
		$translateProvider.useStaticFilesLoader({
			prefix: '/languages/',
			suffix: '.json'
		});
		*/

		/**
		* @description 
		* If the uri route doesn't exists, check to see if it's the default route, or else send to the server to handle request
		* 
		**/
		$urlRouterProvider.otherwise(function ($injector, $location, $state) {

			if ($location.$$url === '/') {
				console.log(window._name,': HOMEPAGE');
				//$state.go('home');
				//window.location = '/';
			}else {
				// pass through to let the web server handle this request
				console.log(window._name,': Not Found - send request to server');
				window.location = $location.$$absUrl;
			}
		});

	}])

	/**
	* @description 
	* Root Module Run that can be ignored during unit testing.
	* 
	**/
	.run(['DS', 'DSSailsSocketAdapter', '$rootScope', '$state', '$stateParams', '$location', '$q', 'utils',  function (DS, DSSailsSocketAdapter, $rootScope, $state, $stateParams, $location, $q, utils) {

		/**
		* @description 
		* Initiate the Socket Adapter for JS-data
		* 
		**/
		// register the adapter with the data store
		DS.adapters.DSSailsSocketAdapter = DSSailsSocketAdapter;
		// set the custom adapter as the default
		DS.defaults.defaultAdapter = 'DSSailsSocketAdapter';


		/**
		* @description 
		* Attach APP wide on RUN
		* 
		**/
		// Attach Fast CLick
		FastClick.attach(document.body);

		/**
		* @description 
		* Expose data sent from server
		* 
		**/
		if(window._env){
			$rootScope.__env = window._env;
			if(utils.development()){ console.log(window._name,'ENV:', window._env); }
		}

		if(window._prefix){
			$rootScope.__prefix = window._prefix;
			if(utils.development()){ console.log(window._name,'PREFIX:', window._prefix); }
		}
		
		if(window._defaultLocale){
			$rootScope.__defaultLocale = window._defaultLocale;
			if(utils.development()){ console.log(window._name,'DEFAULT LOCALE:', window._defaultLocale); }
		}

		if(window._user){
			DS.inject('user', window._user);
			DS.bindOne('user', window._user.id, $rootScope, 'currentUser', function(err){
				if(utils.development()){ console.log(window._name,'USER:', $rootScope.currentUser); }
			});
		}



		/**
		* @description 
		* APP Wide State/Route change event handler
		* 
		**/
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
    
		$rootScope.$on('$routeChangeStart', function(e, curr, prev) { 
			$rootScope.__loadingRoute = true;
			// Show a loading message until promises are not resolved
			if (curr.$$route && curr.$$route.resolve) {
				$rootScope.__loadingRoute = true;
			}
		});

		$rootScope.$on('$routeChangeSuccess', function(e, curr, prev) { 
		
			// Show a loading message until promises are not resolved
			if (curr.$$route && curr.$$route.resolve) {
				// Hide loading message
				$rootScope.__loadingRoute = false;
			}
		});

		$rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) { 
			console.log(toState.name);	
			// Show a loading message until promises are not resolved
			
			$rootScope.__loadingRoute = true;
		
		});

		$rootScope.$on('$stateChangeSuccess', function(e, toState, toParams, fromState, fromParams) { 

			//$root.currentState = toState.name.replace(".", "-");
			//$root.currentPage = toState.name;
			// Hide loading message
			$rootScope.__loadingRoute = false;

		});

		$rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){ 
			if(utils.development()){
				console.log(unfoundState.to);
				console.log(unfoundState.toParams);
				console.log(unfoundState.options);
			} 
		});

	}])

	/**
	* @description 
	* APP Wide Primary Controller for ng-app 
	* 
	**/
	.controller( 'HumpbackCtrl', function AppCtrl ($rootScope, $state, utils){
		if(utils.development()){ console.log("App loaded"); }

	});


})();