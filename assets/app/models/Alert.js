/**
* @description 
* Global Alert. Model
* humpback-model created at Fri Jun 12 2015 14:12:36 GMT-0400 (EDT)
**/
angular.module('alert.model', [
    'humpback.models'
])

/**
* @description 
* Run and ignore for unit testing
* 
**/
.run(function($sailsSocket, DS, AlertService, utils, FoundationApi){
    
    if(utils.development()){ 
        console.log(window._name,': listening to alert changes');
        setTimeout(function() {
            AlertService.handler.development();    
        }, 10);
        
    };

    $sailsSocket.subscribe('alert', function(envelope){
        //console.log(envelope);
        AlertService.handler[envelope.verb](envelope)
    });

    io.socket.on('disconnect', function(){
        AlertService.handler.disconnect();
    });
    
    io.socket.on('reconnect', function(){
        AlertService.handler.reconnect();
    });

    io.socket.on("maintenance", function(envelope){
        AlertService.handler.maintenance(envelope)
    });

    return DS.defineResource({
        name: 'alert',
        maxAge: 36000000,
        deleteOnExpire: 'none',
        onExpire: function (id, alert) {
            console.log(id, "Alert Expired");
        },
        storageMode: 'localStorage',
        idAttribute: 'id',
        endpoint: '/alert',
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
* The AlertService factory Exposes Handler and Service methods for the Alert Server Side Model
* 
**/
.factory('AlertService',function(DS, $sailsSocket, $rootScope, FoundationApi, utils){
    var _service = {};
    var _handler = {};

    /**
    * @description 
    * When site is placed into maintenance mode
    * 
    **/
    _handler.maintenance = function(envelope){
        "use strict";
        console.log(envelope);
        $rootScope.maintenance(envelope);
    };

    /**
    * @description 
    * When site is placed into maintenance mode
    * 
    **/
    _handler.development = function(){
        "use strict";
        var data = { id: 1000, display: true, system: false, location: 'system-alerts', color: 'success', title: 'Running', content: window._name + ' is running!', autoclose: 5000 };
        DS.inject('alert', data);
        FoundationApi.publish(data.location, { color: data.color, title: data.title, content: data.content, autoclose: data.autoclose});
    };

    /**
    * @description 
    * When client is disconnected
    * 
    **/
    _handler.disconnect = function(){
        "use strict";
        var data = { id: 1001, display: true, system: false, location: 'system-alerts', color: 'warning', title: 'Disconnected', content: 'Humpback.Connection.Disconnected', autoclose: 5000 };
        DS.inject('alert', data);
        DS.eject('alert', 1002);
        FoundationApi.publish(data.location, { color: data.color, title: data.title, content: data.content, autoclose: data.autoclose});
    };

    /**
    * @description 
    * When client is reconnected
    * 
    **/
    _handler.reconnect = function(){
        "use strict";
        var data = { id: 1002, display: true, system: false, location: 'system-alerts', color: 'success', title:'Reconnected', content: 'Humpback.Connection.Reconnected', autoclose: 5000 };
        DS.inject('alert', data);
        DS.eject('alert', 1001);
        FoundationApi.publish(data.location, { color: data.color, title: data.title, content: data.content, autoclose: data.autoclose});
    };

    /**
    * @description 
    * When a Alert is created that the app is listenting to inject it into the local DB
    * 
    **/
    _handler.created = function(envelope){
        "use strict";
        DS.inject('alert', envelope.data);
        console.log(envelope);

    };

    /**
    * @description 
    * When a Alert is deleted that the app is listenting to eject it from the local DB 
    * 
    **/
    _handler.deleted = function(envelope){
        "use strict";
        DS.eject('alert', envelope.data);
        console.log(envelope);

    };

    /**
    * @description 
    * When a Alert is updated that the app is listenting to inject it from the local DB, or if only a ID fetch it from the server 
    * 
    **/
    _handler.updated = function(envelope){
        "use strict";
        console.log(envelope);
        if(envelope.data){
            envelope.data.id = envelope.id;
            DS.inject('alert', envelope.data);
        }else{
            DS.refresh('alert',envelope.id);
        }

    };

    /**
    * @description 
    * When a Alert model's collection is added to, inject it into the Alert Model 
    * 
    **/
    _handler.addedTo = function(envelope){
        "use strict";
        console.log(envelope);
    };

    /**
    * @description 
    * When a Alert model's collection is detracted from eject it from the Alert Model 
    * 
    **/
    _handler.removedFrom = function(envelope){
        "use strict";
        console.log(envelope);
    };

    /**
    * @description 
    * When a Alert model is messaged 
    * 
    **/
    _handler.messaged = function(envelope){
        "use strict";
        console.log(envelope);
    };

    return {
        service : _service,
        handler : _handler
    }
});