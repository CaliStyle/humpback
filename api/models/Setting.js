/**
* Setting.js
*
* @description 		:: Setting Contains the settings for the Humpback Application
* @humpback-docs	:: https://github.com/CaliStyle/humpback/wiki/Models#setting
* @sails-docs		:: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	description: 'Represents a humpback setting.',

	autoCreatedBy: false,
	
	attributes: {
		name: {
	    	type: 'string',
	    	required: true,
	    	unique: true
	    },
	    setting: {
	    	type: 'json'
	    }
	}
};
