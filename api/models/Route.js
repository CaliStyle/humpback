/**
* Route.js
*
* @description    :: Stores the Route 
* @humpback-docs  :: https://github.com/CaliStyle/humpback/wiki/Models#route
* @sails-docs     :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	description: 'Represents a route.',
	
	attributes: {
		url: {
  			type: 'string',
  			required: true
  		},
		roles: {
	    	collection: 'Role',
	    	via: 'routes',
	    	dominant: true
	    }
	}
};

