/**
* @description 
* Global Email. Model
* humpback-model created at Tue Jun 09 2015 14:23:16 GMT-0400 (EDT)
**/
angular.module('email.model', [
    'humpback.models'
])

/**
* @description 
* Run and ignore for unit testing
* 
**/
.run(function($sailsSocket, DS, EmailService, utils){
	
	if(utils.development()){ console.log(window._name,': listening to email changes')};

    $sailsSocket.subscribe('email', function(envelope){
        if(utils.development()){ console.log(envelope)};
        EmailService.handler[envelope.verb](envelope)
    });

    return DS.defineResource({
        name: 'email',
        maxAge: 36000000,
        deleteOnExpire: 'none',
        onExpire: function (id, email) {
            console.log(id, 'Email Expired');
        },
        storageMode: 'localStorage',
        idAttribute: 'id',
        endpoint: '/email',
        baseUrl: window._prefix || '/api',
        
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
* The EmailService factory Exposes Handler and Service methods for the Email Server Side Model
* 
**/
.factory('EmailService',function(DS, $sailsSocket){
	var _service = {};
	var _handler = {};

    /**
    * @description 
    * When a Email is created that the app is listenting to inject it into the local DB
    * 
    **/
	_handler.created = function(envelope){
        'use strict';
        DS.inject('email', envelope.data);
        console.log(envelope);

    };

    /**
    * @description 
    * When a Email is deleted that the app is listenting to eject it from the local DB 
    * 
    **/
    _handler.deleted = function(envelope){
        'use strict';
        DS.eject('email', envelope.data);
        console.log(envelope);

    };

    /**
    * @description 
    * When a Email is updated that the app is listenting to inject it from the local DB, or if only a ID fetch it from the server 
    * 
    **/
    _handler.updated = function(envelope){
        'use strict';
        console.log(envelope);
        if(envelope.data){
            envelope.data.id = envelope.id;
            DS.inject('email', envelope.data);
        }else{
            DS.refresh('email',envelope.id);
        }

    };

    /**
    * @description 
    * When a Email model's collection is added to, inject it into the Email Model 
    * 
    **/
    _handler.addedTo = function(envelope){
        'use strict';
        console.log(envelope);
    };

    /**
    * @description 
    * When a Email model's collection is detracted from eject it from the Email Model 
    * 
    **/
    _handler.removedFrom = function(envelope){
        'use strict';
        console.log(envelope);
    };

    /**
    * @description 
    * When a Email model is messaged 
    * 
    **/
    _handler.messaged = function(envelope){
        'use strict';
        console.log(envelope);
    };

	return {
		service : _service,
		handler : _handler
	}
});