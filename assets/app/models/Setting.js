/**
* @description 
* Global Setting. Model
* humpback-model created at Tue Jun 09 2015 14:23:16 GMT-0400 (EDT)
**/
angular.module('setting.model', [
    'humpback.models'
])

/**
* @description 
* Run and ignore for unit testing
* 
**/
.run(function($rootScope, $sailsSocket, DS, SettingService, utils){
	
	if(utils.development()){ console.log(window._name,': listening to setting changes')};

    $sailsSocket.subscribe('setting', function(envelope){
        if(utils.development()){ console.log(envelope)};
        SettingService.handler[envelope.verb](envelope)
    });

    return DS.defineResource({
        name: 'setting',
        maxAge: 36000000,
        deleteOnExpire: 'none',
        onExpire: function (id, setting) {
            console.log(id, 'Setting Expired');
        },
        storageMode: 'localStorage',
        idAttribute: 'id',
        endpoint: '/setting',
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
            $rootScope.__settings[data.name] = window._settings[data.name] = data.value;
            cb(null, data);
        },
        afterCreate: function (resource, data, cb) {
            $rootScope.__settings[data.name] = window._settings[data.name] = data.value;
            cb(null, data);
        },
        beforeDestroy: function (resource, data, cb) {
            cb(null, data);
        },
        afterDestroy: function (resource, data, cb) {
            delete $rootScope.__settings[data.name]; 
            delete window._settings[data.name];
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
* The SettingService factory Exposes Handler and Service methods for the Setting Server Side Model
* 
**/
.factory('SettingService',function(DS, $sailsSocket){
	var _service = {};
	var _handler = {};

    /**
    * @description 
    * When a Setting is created that the app is listenting to inject it into the local DB
    * 
    **/
	_handler.created = function(envelope){
        'use strict';
        DS.inject('setting', envelope.data);
        console.log(envelope);

    };

    /**
    * @description 
    * When a Setting is deleted that the app is listenting to eject it from the local DB 
    * 
    **/
    _handler.deleted = function(envelope){
        'use strict';
        DS.eject('setting', envelope.data);
        console.log(envelope);

    };

    /**
    * @description 
    * When a Setting is updated that the app is listenting to inject it from the local DB, or if only a ID fetch it from the server 
    * 
    **/
    _handler.updated = function(envelope){
        'use strict';
        console.log(envelope);
        if(envelope.data){
            envelope.data.id = envelope.id;
            DS.inject('setting', envelope.data);
        }else{
            DS.refresh('setting',envelope.id);
        }

    };

    /**
    * @description 
    * When a Setting model's collection is added to, inject it into the Setting Model 
    * 
    **/
    _handler.addedTo = function(envelope){
        'use strict';
        console.log(envelope);
    };

    /**
    * @description 
    * When a Setting model's collection is detracted from eject it from the Setting Model 
    * 
    **/
    _handler.removedFrom = function(envelope){
        'use strict';
        console.log(envelope);
    };

    /**
    * @description 
    * When a Setting model is messaged 
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