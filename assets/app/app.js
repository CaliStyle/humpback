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
		//'foundation.core',
			
		//humpback core
		'humpback.hooks',
		'humpback.controllers',
		'humpback.policies',
		'humpback.services',
		'humpback.directives',
		'humpback.filters',
		'humpback.models'
	  
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
		/*
		$translateProvider.preferredLanguage('en');
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
				console.log("to home");
				//$state.go('home');
				//window.location = '/';
			}else {
				// pass through to let the web server handle this request
				console.log('send to server');
				window.location = $location.$$absUrl;
			}
		});

	}])

	/**
	* @description 
	* Root Module Run that can be ignored during unit testing.
	* 
	**/
	.run(['DS', 'DSSailsSocketAdapter', '$rootScope', '$state', '$stateParams', '$q', 'utils' , function (DS, DSSailsSocketAdapter, $rootScope, $state, $stateParams, $q, utils) {

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
			if(utils.development()){ console.log("HUMPBACK ENV:", window._env); }
		}

		if(window._prefix){
			console.log("HUMPBACK PREFIX:", window._prefix);
			$rootScope.__prefix = window._prefix;
			if(utils.development()){ console.log("HUMPBACK ENV:", window._env); }
		}

		if(window._user){
			DS.inject('user', window._user);
			DS.bindOne('user', window._user.id, $rootScope, 'currentUser', function(err){
				if(utils.development()){ console.log("HUMPBACK USER:", $rootScope.currentUser); }
			});
		}

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