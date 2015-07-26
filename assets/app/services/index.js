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
	* 
	**/
	/* CORE PROJECT SERVICES */

	/* CORE PROJECT SERVICES END */
	
	/**
	* @PROJECT SPECIFIC
	* These project specific or custom services for this individual project
	* They are compiled with grunt -> tasks/register/humpback.js
	**/
	/* PROJECT SERVICES */
	'humpback.services.utils',
	/* PROJECT SERVICES END */
	]
);