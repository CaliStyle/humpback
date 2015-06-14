/**
* Route.js
*
* @description    :: Stores the Route 
* @humpback-docs  :: https://github.com/CaliStyle/humpback/wiki/Models#route
* @sails-docs     :: http://sailsjs.org/#!documentation/models
*/


module.exports = {
	
	description: 'Represents a route.',
  	
  	permissions: {
	    'registered': {
			'create': {action: false,	relation: false},
			'read' 	: {action: true,	relation: false},
    		'update': {action: false,	relation: false},
    		'delete': {action: false,	relation: false}		
    	},
		'public': {
			'create': {action: false,	relation: false},
			'read' 	: {action: true,	relation: false},
    		'update': {action: false,	relation: false},
    		'delete': {action: false,	relation: false}
		}
  	},

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
}