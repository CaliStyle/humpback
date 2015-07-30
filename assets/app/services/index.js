/**
* assets/app/services/index.js
* @description 
* services that load when the client side app does.
* 
**/

angular.module( 'humpback.services'
, [
	/**
	* @CORE
	* These are core services used by the framework
	* They are compiled with grunt -> tasks/register/humpback.js
	**/
	/* CORE PROJECT SERVICES */
	'humpback.services.utils',
	/* CORE PROJECT SERVICES END */
	
	/**
	* @PROJECT SPECIFIC
	* These project specific or custom services for this individual project
	**/
	/* PROJECT SERVICES */
	
	/* PROJECT SERVICES END */
	]
);