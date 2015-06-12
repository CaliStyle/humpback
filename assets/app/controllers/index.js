/**
* assets/app/controllers/index.js
* @description 
* controllers that load when the client side app does.
* 
**/

angular.module( 'humpback.controllers', [
	/**
	* @CORE
	* These are core controllers used by the framework
	* 
	**/
	/* CORE PROJECT CONTROLLERS */

	/* CORE PROJECT CONTROLLERS END */
	/**
	* @PROJECT SPECIFIC
	* These project specific or custom controllers for this individual project
	* They are compiled with grunt -> tasks/register/humpback.js
	**/
	/* PROJECT CONTROLLERS */
	'user.controller',
	/* PROJECT CONTROLLERS END */
]);