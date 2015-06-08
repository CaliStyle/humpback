(function(){
	'use strict';
	/**
	* @description 
	* Root Module Loads dependencies and Initializes the APP.
	* 
	**/
	angular.module( 'humpback'
	,	[	'ui.router'
		,	'js-data'
		,	'sails.io'

			//Foundation core
		,	'foundation'
		,	'foundation.core'
			
			//humpback core
	  ,	'humpback.controllers'
		,	'humpback.policies'
	  ,	'humpback.services'
	  ,	'humpback.models'
	    
		]
	)
	
	/**
	* @description 
	* APP Wide Controller 
	* 
	**/
	.controller( 'AppCtrl', function AppCtrl ($rootScope, $state){
		console.log("App loaded");

	});


})();