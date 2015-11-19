(function(){
	'use strict';
	/**
	* @description 
	* Root Module Loads dependencies and Initializes the APP.
	* 
	**/
	angular.module( 'humpback',	[
		
		//3rd Party Dependencies
		'ui.router',
		'js-data',	
		'pascalprecht.translate',
		'ngAnimate',
		'ncy-angular-breadcrumb',
		'angular.filter',

		//Foundation core
		'foundation',
			
		//humpback core
		'humpback.core',
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
				//window.location = $location.$$absUrl;
				$location.$$url === '/404';
			}
		});

	}])

	/**
	* @description 
	* Root Module Run that can be ignored during unit testing.
	* 
	**/
	.run(['DS', 'DSSailsSocketAdapter', '$rootScope', '$state', '$stateParams', '$location', '$q', 'utils', 'Api',  function (DS, DSSailsSocketAdapter, $rootScope, $state, $stateParams, $location, $q, utils, Api) {

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
		if(window._name){
			$rootScope.__name = window._name;
			if(utils.development()){ console.log('NAME:', window._name); }
		}

		if(window._barnacles){
			$rootScope.__barnacles = window._barnacles;
			if(utils.development()){ console.log(window._name,'BARNACLES:', window._barnacles); }
		}

		if(window._settings){
			$rootScope.__settings = window._settings;
			if(utils.development()){ console.log(window._name,'SETTINGS:', window._settings); }
		}

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

		if(window._csrf){
			$rootScope.__csrf = window._csrf;
			if(utils.development()){ console.log(window._name,'CSRF:', window._csrf); }
		}

		if(window._dynamicView){
			$rootScope.__dynamicView = window._dynamicView;
			if(utils.development()){ console.log(window._name,'DYNAMIC VIEW:', window._dynamicView); }
		}

		if(window._maintenance){
			$rootScope.__maintenance = window._maintenance;
			if(utils.development()){ console.log(window._name,'MAINTENANCE:', window._maintenance); }
		}

		/**
		* @description 
		* APP Wide State/Route change and connection event handler
		* 
		**/
		
    	$rootScope.__disconnected = false;
    	io.socket.on('disconnect', function(){
        	$rootScope.__disconnected = true;
	    });
	    
	    io.socket.on('reconnect', function(){
	        $rootScope.__disconnected = false;
	    });

		$rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){ 
			utils.development(unfoundState.to);
			utils.development(unfoundState.toParams);
			utils.development(unfoundState.options);
			$state.go('fourZeroFour');
		});

		$rootScope.$on('$stateChargeError', function(event, errfoundState, fromState, fromParams){ 
			utils.development(errfoundState.to);
			utils.development(errfoundState.toParams);
			utils.development(errfoundState.options);
			$state.go('fiveZeroZero');
		});

	}])
	/**
	* @description 
	* Global Factory 
	* 
	**/
	.factory( 'Global', function( ){
		var controllers = [];
		return {
			'controllers': controllers,
			'getControllers': function(c) {
				return JSON.stringify();
			}
		};
	})

	/**
	* @description 
	* APP Wide Primary Controller for ng-app 
	* 
	**/
	.controller( 'HumpbackCtrl', function AppCtrl ($rootScope, $state, utils){
		if(utils.development()){ console.log("App loaded"); }

	});


})();