/**
* @description 
* Global Passport. Model
* humpback-model created at Fri Sep 04 2015 11:20:23 GMT-0400 (EDT)
**/
angular.module('passport.model', [
    'humpback.models'
])

/**
* @description 
* Run and ignore for unit testing
* 
**/
.run(function($sailsSocket, DS, PassportService, utils){
    if(utils.development()){ console.log(window._name,': listening to passport changes')};
    
    $sailsSocket.subscribe('passport', function(envelope){
        //console.log(envelope);
        PassportService.handler[envelope.verb](envelope)
    });

    return DS.defineResource({
        name: 'passport',
        maxAge: 36000000,
        deleteOnExpire: 'none',
        onExpire: function (id, passport) {
            console.log(id, 'Passport Expired');
        },
        storageMode: 'localStorage',
        idAttribute: 'id',
        endpoint: '/passport',
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
* The PassportService factory Exposes Handler and Service methods for the Passport Server Side Model
* 
**/
.factory('PassportService',function(DS, $sailsSocket, utils){
	var _service = {};
	var _handler = {};

    /**
    * @description 
    * When a Passport is created that the app is listenting to inject it into the local DB
    * 
    **/
	_handler.created = function(envelope){
        'use strict';
        utils.development(envelope);
        DS.inject('passport', envelope.data);
        
    };

    /**
    * @description 
    * When a Passport is deleted that the app is listenting to eject it from the local DB 
    * 
    **/
    _handler.deleted = function(envelope){
        'use strict';
        utils.development(envelope);
        DS.eject('passport', envelope.data);
    
    };

    /**
    * @description 
    * When a Passport is updated that the app is listenting to inject it from the local DB, or if only a ID fetch it from the server 
    * 
    **/
    _handler.updated = function(envelope){
        'use strict';
        utils.development(envelope);
        if(envelope.data){
            envelope.data.id = envelope.id;
            DS.inject('passport', envelope.data);
        }else{
            DS.refresh('passport',envelope.id);
        }

    };

    /**
    * @description 
    * When a Passport model's collection is added to, inject it into the Passport Model 
    * 
    **/
    _handler.addedTo = function(envelope){
        'use strict';
        utils.development(envelope);
    };

    /**
    * @description 
    * When a Passport model's collection is detracted from eject it from the Passport Model 
    * 
    **/
    _handler.removedFrom = function(envelope){
        'use strict';
        utils.development(envelope);
    };

    /**
    * @description 
    * When a Passport model is messaged 
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