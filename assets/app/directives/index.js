/**
* assets/app/directives/index.js
* @description 
* hooks that load when the client side app does
* 
**/

angular.module( 'humpback.directives'
, [
	/**
	* @CORE
	* These are core hooks used by the framework
	* They are compiled with grunt -> tasks/register/humpback.js
	**/
	/* CORE PROJECT DIRECTIVES */
	'humpback.directives.focus',
	/* CORE PROJECT DIRECTIVES END */
	/**
	* @PROJECT SPECIFIC
	* These project specific or custom hooks for this individual project
	**/
	/* PROJECT DIRECTIVES */
	
	/* PROJECT DIRECTIVES END */
	]
);