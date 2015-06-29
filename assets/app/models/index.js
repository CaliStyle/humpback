/**
* assets/app/models/index.js
* @description 
* JSdata Models handle the client side objects sent from the server and preform
* local CRUD operations that resolve with the server
* 
**/

angular.module( 'humpback.models'
, [
	/**
	* @CORE
	* These are core models used by the framework
	* 
	**/
	/* CORE PROJECT MODELS */

	/* CORE PROJECT MODELS END */
	
	/**
	* @PROJECT SPECIFIC
	* These project specific or custom models for this individual project
	* They are compiled with grunt -> tasks/register/humpback.js
	**/
	/* PROJECT MODELS */
	'alert.model',
	'setting.model',
	'user.model',
	/* PROJECT MODELS END */
	]
);