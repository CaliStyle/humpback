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
	* They are compiled with grunt -> tasks/register/humpback.js
	**/
	/* CORE PROJECT CONTROLLERS */
	'user.controller',
	/* CORE PROJECT CONTROLLERS END */
	/**
	* @PROJECT SPECIFIC
	* These project specific or custom controllers for this individual project
	**/
	/* PROJECT CONTROLLERS */
	'user.controller',
	/* PROJECT CONTROLLERS END */
]);