/**
* @description 
* Global Role. Model
* humpback-model created at Tue Jun 09 2015 14:23:16 GMT-0400 (EDT)
**/
angular.module('role.model', [
    'humpback.models'
])

/**
* @description 
* Run and ignore for unit testing
* 
**/
.run(function($sailsSocket, DS, RoleService, utils){
	
	if(utils.development()){ console.log(window._name,': listening to role changes')};

    $sailsSocket.subscribe('role', function(envelope){
        if(utils.development()){ console.log(envelope)};
        RoleService.handler[envelope.verb](envelope)
    });

    return DS.defineResource({
        name: 'role',
        maxAge: 36000000,
        deleteOnExpire: 'none',
        onExpire: function (id, role) {
            console.log(id, 'Role Expired');
        },
        storageMode: 'localStorage',
        idAttribute: 'id',
        endpoint: '/role',
        baseUrl: window._prefix || '/api',
        meta: {
            contentCount: 0
        },
        
        /**
        * @description 
        * Model's Life Cycle Callbacks
        * http://www.js-data.io/v1.5.8/docs/dsdefaults
        **/
        beforeInject: function(resource, data){
           //console.log(data);
        },
        beforeCreate: function (resource, data, cb) {
            cb(null, data);
        },
        beforeUpdate: function(resource, data, cb){
            cb(null, data);
        },
        afterUpdate: function(resource, data, cb){
            cb(null, data);
        },
        afterCreate: function (resource, data, cb) {
            cb(null, data);
        },
        beforeDestroy: function (resource, data, cb) {
            cb(null, data);
        },
        afterDestroy: function (resource, data, cb) {
            cb(null, data);
        },

        /**
        * @description 
        * Define's Relations to the Model 
        * 
        **/
        relations:{
            
        }
    });
})

/**
* @description 
* The RoleService factory Exposes Handler and Service methods for the Role Server Side Model
* 
**/
.factory('RoleService',function(DS, $sailsSocket, utils){
	var _service = {};
	var _handler = {};

    /**
    * @description 
    * When a Role is created that the app is listenting to inject it into the local DB
    * 
    **/
	_handler.created = function(envelope){
        'use strict';
        utils.development(envelope);
        DS.inject('role', envelope.data);

    };

    /**
    * @description 
    * When a Role is deleted that the app is listenting to eject it from the local DB 
    * 
    **/
    _handler.deleted = function(envelope){
        'use strict';
        utils.development(envelope);
        DS.eject('role', envelope.data);
    
    };

    /**
    * @description 
    * When a Role is updated that the app is listenting to inject it from the local DB, or if only a ID fetch it from the server 
    * 
    **/
    _handler.updated = function(envelope){
        'use strict';
        utils.development(envelope);
        if(envelope.data){
            envelope.data.id = envelope.id;
            DS.inject('role', envelope.data);
        }else{
            DS.refresh('role',envelope.id);
        }

    };

    /**
    * @description 
    * When a Role model's collection is added to, inject it into the Role Model 
    * 
    **/
    _handler.addedTo = function(envelope){
        'use strict';
        utils.development(envelope);
    };

    /**
    * @description 
    * When a Role model's collection is detracted from eject it from the Role Model 
    * 
    **/
    _handler.removedFrom = function(envelope){
        'use strict';
        utils.development(envelope);
    };

    /**
    * @description 
    * When a Role model is messaged 
    * 
    **/
    _handler.messaged = function(envelope){
        'use strict';
        utils.development(envelope);
    };

	return {
		service : _service,
		handler : _handler
	}
});