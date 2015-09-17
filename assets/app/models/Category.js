/**
* @description 
* Global Category. Model
* humpback-model created at Fri Sep 04 2015 11:20:23 GMT-0400 (EDT)
**/
angular.module('category.model', [
    'humpback.models'
])

/**
* @description 
* Run and ignore for unit testing
* 
**/
.run(function($sailsSocket, DS, CategoryService, utils){
    if(utils.development()){ console.log(window._name,': listening to category changes')};
    
    $sailsSocket.subscribe('category', function(envelope){
        //console.log(envelope);
        CategoryService.handler[envelope.verb](envelope)
    });
    
    DS.defineResource({
        name: 'category_route__route_category',
        relations: {
            belongsTo: {
                category: {
                    localField: 'category',
                    localKey: 'category_routes'
                },
                route: {
                    localField: 'route',
                    localKey: 'route_categories'
                }
            }
        }
    });


    var Category = DS.defineResource({
        name: 'category',
        maxAge: 36000000,
        deleteOnExpire: 'none',
        onExpire: function (id, category) {
            console.log(id, 'Category Expired');
        },
        storageMode: 'localStorage',
        idAttribute: 'id',
        endpoint: '/category',
        baseUrl: window._prefix || '/api',
        


        /**
        * @description 
        * Model's Life Cycle Callbacks
        * http://www.js-data.io/v1.5.8/docs/dsdefaults
        **/
        beforeInject: function(resource, data){
            //console.log(data);
            /*
            if(data.routes){
                Promise.all(_.map(data.routes, function(route){
                    return DS.inject('category_route__route_category', {
                        id: data.id,
                        category_routes: data.id,
                        route_categories: route.id,
                    });
                }));
            }
            */
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
        afterInject: function(resource, attrs){
            console.log(attrs);
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
           hasMany: {
                category_route__route_category: {
                    localField: 'categories',
                    foreignKey: 'category_routes'
                }
            }
        }
    });
    
    Category.findAllRoutes = function(categoryId){
        return DS.findAll('category_route__route_category', {
            category_routes: categoryId
        })
        .then(function(categoryRoutes) {
        // this could be done a few different ways
            return Promise.all(categoryRoutes.map(function(categoryRoute) {
                return DS.find('route', categoryRoute.category_routes);
            }));
        });
    };
    
})

/**
* @description 
* The CategoryService factory Exposes Handler and Service methods for the Category Server Side Model
* 
**/
.factory('CategoryService',function(DS, $sailsSocket){
	var _service = {};
	var _handler = {};

    /**
    * @description 
    * When a Category is created that the app is listenting to inject it into the local DB
    * 
    **/
	_handler.created = function(envelope){
        'use strict';
        DS.inject('category', envelope.data);
        console.log(envelope);

    };

    /**
    * @description 
    * When a Category is deleted that the app is listenting to eject it from the local DB 
    * 
    **/
    _handler.deleted = function(envelope){
        'use strict';
        DS.eject('category', envelope.data);
        console.log(envelope);

    };

    /**
    * @description 
    * When a Category is updated that the app is listenting to inject it from the local DB, or if only a ID fetch it from the server 
    * 
    **/
    _handler.updated = function(envelope){
        'use strict';
        console.log(envelope);
        if(envelope.data){
            envelope.data.id = envelope.id;
            DS.inject('category', envelope.data);
        }else{
            DS.refresh('category',envelope.id);
        }

    };

    /**
    * @description 
    * When a Category model's collection is added to, inject it into the Category Model 
    * 
    **/
    _handler.addedTo = function(envelope){
        'use strict';
        console.log(envelope);
    };

    /**
    * @description 
    * When a Category model's collection is detracted from eject it from the Category Model 
    * 
    **/
    _handler.removedFrom = function(envelope){
        'use strict';
        console.log(envelope);
    };

    /**
    * @description 
    * When a Category model is messaged 
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