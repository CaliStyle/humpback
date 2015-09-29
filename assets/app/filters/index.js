/**
* assets/app/filters/index.js
* @description 
* filters that load when the client side app does
* 
**/

angular.module( 'humpback.filters'
, [
	/**
	* @CORE
	* These are core hooks used by the framework
	* They are compiled with grunt -> tasks/register/humpback.js
	**/
	/* CORE PROJECT FILTERS */
	'humpback.filters.core',
	'humpback.filters.truncate',
	/* CORE PROJECT FILTERS END */
	/**
	* @PROJECT SPECIFIC
	* These project specific or custom filters for this individual project
	**/
	/* PROJECT FILTERS */

	/* PROJECT FILTERS END */
	]
);