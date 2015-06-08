/**
* @description 
* Custom Socket Adapter for JS-data written for sails sockets by Scott Wyatt.
* 
* @dependecies
* angularSails
*
**/
angular.module('humpback')
.provider('DSSailsSocketAdapter', function () {
 
  'use strict';
 
  var defaults = this.defaults = {
    queryTransform: function (resourceName, params) {
      return params;
    },
    deserialize: function (resourceConfig, data) {
      return data ? "data" in data ? data.data : data : data;        
    },
    serialize: function(resourceConfig, data) {
      return data;
    },
    log : function (a, b) {
      return console[typeof console.info === "function" ? "info" : "log"](a, b);
    },
    error : function (a, b) {
      return console[typeof console.error === "function" ? "error" : "log"](a, b);
    },
    forceTrailingSlash: false,
    $sailsConfig: {}

  };
 
  // inject whatever you need here
  this.$get = ['$sailsSocket','$log', 'DSUtils', '$q', function ($sailsSocket, $log, DSUtils, $q) {
 
    return {
      defaults: defaults,
 
       /**
       * @doc method
       * @id DSSailsSocketAdapter.methods:HTTP
       * @name HTTP
       * @description
       * A wrapper for `$sailsSocket()`.
       *
       * ## Signature:
       * ```js
       * DSSailsSocketAdapter.HTTP(config)
       * ```
       *
       * @param {object} config Configuration object.
       * @returns {Promise} Promise.
       */
      HTTP: function (config) {
        var _this = this;
        var start = new Date();

        if (this.defaults.forceTrailingSlash && config.url[config.url.length] !== '/') {
          config.url += '/';
        }
        config = DSUtils.deepMixIn(config, defaults.$sailsConfig);
        
        function logResponse(data) {
          var str = "" + start.toUTCString() + " - " + data.config.method.toUpperCase() + " " + data.config.url + " - " + data.status + " " + (new Date().getTime() - start.getTime()) + "ms";
          if (data.status >= 200 && data.status < 300) {
            if (_this.defaults.log) {
              _this.defaults.log(str, data);
            }
            return data;
          } else {
            if (_this.defaults.error) {
              _this.defaults.error("FAILED: " + str, data);
            }
            return $q.reject(data);
          }
        }
        return $sailsSocket(config).then(logResponse, logResponse);
        
      },

      getPath: function(method, resourceConfig, id, options) {
          var _this = this;
          options = options || {};
          var args = [options.basePath || _this.defaults.basePath || resourceConfig.basePath, resourceConfig.getEndpoint(isString(id) || isNumber(id) || method === "create" ? id : null, options)];
          if (method === "find" || method === "update" || method === "destroy") {
            args.push(id);
          }
          return makePath.apply(DSUtils, args);
      },

      /**
       * @doc method
       * @id DSSailsSocketAdapter.methods:GET
       * @name GET
       * @description
       * A wrapper for `$sailsSocket.get()`.
       *
       * ## Signature:
       * ```js
       * DSSailsSocketAdapter.GET(url[, config])
       * ```
       *
       * @param {string} url The url of the request.
       * @param {object=} config Optional configuration.
       * @returns {Promise} Promise.
       */
      GET: function (url, config) {
        config = config || {};
        if (!('method' in config)) {
          config.method = 'GET';
        }
        return this.HTTP(DSUtils.deepMixIn(config, {
          url: url
        }));
        /*
        return this.HTTP(DSUtils.deepMixIn(config, {
          url: url
        }));
        */
      },

      /**
       * @doc method
       * @id DSSailsSocketAdapter.methods:POST
       * @name POST
       * @description
       * A wrapper for `$http.post()`.
       *
       * ## Signature:
       * ```js
       * DSSailsSocketAdapter.POST(url[, attrs][, config])
       * ```
       *
       * @param {string} url The url of the request.
       * @param {object=} attrs Request payload.
       * @param {object=} config Optional configuration.
       * @returns {Promise} Promise.
       */
      POST: function (url, attrs, config) {
        config = config || {};
        if (!('method' in config)) {
          config.method = 'POST';
        }
        return this.HTTP(DSUtils.deepMixIn(config, {
          url: url,
          data: attrs
        }));
      },

      /**
       * @doc method
       * @id DSSailsSocketAdapter.methods:PUT
       * @name PUT
       * @description
       * A wrapper for `$http.put()`.
       *
       * ## Signature:
       * ```js
       * DSSailsSocketAdapter.PUT(url[, attrs][, config])
       * ```
       *
       * @param {string} url The url of the request.
       * @param {object=} attrs Request payload.
       * @param {object=} config Optional configuration.
       * @returns {Promise} Promise.
       */
      PUT: function (url, attrs, config) {
        config = config || {};
        if (!('method' in config)) {
          config.method = 'PUT';
        }
        return this.HTTP(DSUtils.deepMixIn(config, {
          url: url,
          data: attrs || {}
        }));
      },

      /**
       * @doc method
       * @id DSSailsSocketAdapter.methods:DEL
       * @name DEL
       * @description
       * A wrapper for `$http.delete()`.
       *
       * ## Signature:
       * ```js
       * DSSailsSocketAdapter.DEL(url[, config])
       * ```
       *
       * @param {string} url The url of the request.
       * @param {object=} config Optional configuration.
       * @returns {Promise} Promise.
       */
      DEL: function (url, config) {
        config = config || {};
        if (!('method' in config)) {
          config.method = 'DELETE';
        }
        return this.HTTP(DSUtils.deepMixIn(config, {
          url: url
        }));
      },

      /**
       * @doc method
       * @id DSSailsSocketAdapter.methods:find
       * @name find
       * @description
       * Retrieve a single entity from the server.
       *
       * Makes a `GET` request.
       *
       * ## Signature:
       * ```js
       * DSSailsSocketAdapter.find(resourceConfig, id[, options])
       * ```
       *
       * @param {object} resourceConfig DS resource definition object:
       * @param {string|number} id Primary key of the entity to update.
       * @param {object=} options Optional configuration. Also passed along to `$http([config])`. Properties:
       *
       * - `{string=}` - `baseUrl` - Override the default base url.
       * - `{string=}` - `endpoint` - Override the default endpoint.
       * - `{object=}` - `params` - Additional query string parameters to add to the url.
       *
       * @returns {Promise} Promise.
       */
      find: function (resourceConfig, id, options) {
        options = options || {};
        return this.GET(
          DSUtils.makePath(options.baseUrl || resourceConfig.baseUrl, resourceConfig.getEndpoint(id, options), id),
          options
        ).then(function (data) {
          var item = (options.deserialize ? options.deserialize : defaults.deserialize)(resourceConfig, data);
          return !item ? DSUtils.Promise.reject(new Error("Not Found!")) : item;
        });
      },

      /**
       * @doc method
       * @id DSSailsSocketAdapter.methods:findAll
       * @name findAll
       * @description
       * Retrieve a collection of entities from the server.
       *
       * Makes a `GET` request.
       *
       * ## Signature:
       * ```js
       * DSSailsSocketAdapter.findAll(resourceConfig[, params][, options])
       * ```
       *
       * @param {object} resourceConfig DS resource definition object:
       * @param {object=} params Search query parameters. See the [query guide](/documentation/guide/queries/index).
       * @param {object=} options Optional configuration. Also passed along to `$http([config])`. Properties:
       *
       * - `{string=}` - `baseUrl` - Override the default base url.
       * - `{string=}` - `endpoint` - Override the default endpoint.
       * - `{object=}` - `params` - Additional query string parameters to add to the url.
       *
       * @returns {Promise} Promise.
       */
      findAll: function (resourceConfig, params, options) {
        options = options ? options : {};
        options.suffix = options.suffix || resourceConfig.suffix;
        options.params = options.params || {};

        if (params) {
          params = defaults.queryTransform(resourceConfig.name, params);
          DSUtils.deepMixIn(options.params, params);
        }
        
        return this.GET(
          DSUtils.makePath(options.baseUrl || resourceConfig.baseUrl, resourceConfig.getEndpoint(null, options)),
          options
        ).then(function (data) {
          return (options.deserialize ? options.deserialize : defaults.deserialize)(resourceConfig, data);
        });
        
      },

      /**
       * @doc method
       * @id DSSailsSocketAdapter.methods:create
       * @name create
       * @description
       * Create a new entity on the server.
       *
       * Makes a `POST` request.
       *
       * ## Signature:
       * ```js
       * DSSailsSocketAdapter.create(resourceConfig, attrs[, options])
       * ```
       *
       * @param {object} resourceConfig DS resource definition object:
       * @param {object} attrs The attribute payload.
       * @param {object=} options Optional configuration. Also passed along to `$http([config])`. Properties:
       *
       * - `{string=}` - `baseUrl` - Override the default base url.
       * - `{string=}` - `endpoint` - Override the default endpoint.
       * - `{object=}` - `params` - Additional query string parameters to add to the url.
       *
       * @returns {Promise} Promise.
       */
      create: function (resourceConfig, attrs, options) {
        options = options || {};
        return this.POST(
          DSUtils.makePath(options.baseUrl || resourceConfig.baseUrl, resourceConfig.getEndpoint(attrs, options)),
          attrs,
          options
        ).then(function (data) {
          return (options.deserialize ? options.deserialize : defaults.deserialize)(resourceConfig, data);
        });
      },

      /**
       * @doc method
       * @id DSSailsSocketAdapter.methods:update
       * @name update
       * @description
       * Update an entity on the server.
       *
       * Makes a `PUT` request.
       *
       * ## Signature:
       * ```js
       * DSSailsSocketAdapter.update(resourceConfig, id, attrs[, options])
       * ```
       *
       * @param {object} resourceConfig DS resource definition object:
       * @param {string|number} id Primary key of the entity to update.
       * @param {object} attrs The attribute payload.
       * @param {object=} options Optional configuration. Also passed along to `$http([config])`. Properties:
       *
       * - `{string=}` - `baseUrl` - Override the default base url.
       * - `{string=}` - `endpoint` - Override the default endpoint.
       * - `{object=}` - `params` - Additional query string parameters to add to the url.
       *
       * @returns {Promise} Promise.
       */
      update: function (resourceConfig, id, attrs, options) {
        
        options = options || {};
        options.suffix = options.suffix || resourceConfig.suffix;
        options.params = options.params || {};
        options.params = defaults.queryTransform(resourceConfig, options.params);

        return this.PUT(
          DSUtils.makePath(options.baseUrl || resourceConfig.baseUrl, resourceConfig.getEndpoint(id, options), id),
          attrs,
          options
        ).then(function (data) {
          return (options.deserialize ? options.deserialize : defaults.deserialize)(resourceConfig, data);
        });
      },

      /**
       * @doc method
       * @id DSSailsSocketAdapter.methods:updateAll
       * @name updateAll
       * @description
       * Update a collection of entities on the server.
       *
       * Makes a `PUT` request.
       *
       * ## Signature:
       * ```js
       * DSSailsSocketAdapter.updateAll(resourceConfig, attrs[, params][, options])
       * ```
       *
       * @param {object} resourceConfig DS resource definition object:
       * @param {object} attrs The attribute payload.
       * @param {object=} params Search query parameters. See the [query guide](/documentation/guide/queries/index).
       * @param {object=} options Optional configuration. Also passed along to `$http([config])`. Properties:
       *
       * - `{string=}` - `baseUrl` - Override the default base url.
       * - `{string=}` - `endpoint` - Override the default endpoint.
       * - `{object=}` - `params` - Additional query string parameters to add to the url.
       *
       * @returns {Promise} Promise.
       */
      updateAll: function (resourceConfig, attrs, params, options) {
        options = options || {};
        options.suffix = options.suffix || resourceConfig.suffix;
        options.params = options.params || {};
        
        if (params) {
          params = defaults.queryTransform(resourceConfig.name, params);
          DSUtils.deepMixIn(options.params, params);
        }
        return this.PUT(
          DSUtils.makePath(options.baseUrl || resourceConfig.baseUrl, resourceConfig.getEndpoint(null, options)),
          attrs,
          options
        ).then(function (data) {
          return (options.deserialize ? options.deserialize : defaults.deserialize)(resourceConfig, data);
        });
      },

      /**
       * @doc method
       * @id DSSailsSocketAdapter.methods:destroy
       * @name destroy
       * @description
       * Delete an entity on the server.
       *
       * Makes a `DELETE` request.
       *
       * ## Signature:
       * ```js
       * DSSailsSocketAdapter.destroy(resourceConfig, id[, options)
       * ```
       *
       * @param {object} resourceConfig DS resource definition object:
       * @param {string|number} id Primary key of the entity to update.
       * @param {object=} options Optional configuration. Also passed along to `$http([config])`. Properties:
       *
       * - `{string=}` - `baseUrl` - Override the default base url.
       * - `{string=}` - `endpoint` - Override the default endpoint.
       * - `{object=}` - `params` - Additional query string parameters to add to the url.
       *
       * @returns {Promise} Promise.
       */
      destroy: function (resourceConfig, id, options) {
        options = options || {};
        return this.DEL(
          DSUtils.makePath(options.baseUrl || resourceConfig.baseUrl, resourceConfig.getEndpoint(id, options), id),
          options
        ).then(function (data) {
          return (options.deserialize ? options.deserialize : defaults.deserialize)(resourceConfig, data);
        });
      },

      /**
       * @doc method
       * @id DSSailsSocketAdapter.methods:destroyAll
       * @name destroyAll
       * @description
       * Delete a collection of entities on the server.
       *
       * Makes `DELETE` request.
       *
       * ## Signature:
       * ```js
       * DSSailsSocketAdapter.destroyAll(resourceConfig[, params][, options])
       * ```
       *
       * @param {object} resourceConfig DS resource definition object:
       * @param {object=} params Search query parameters. See the [query guide](/documentation/guide/queries/index).
       * @param {object=} options Optional configuration. Also passed along to `$http([config])`. Properties:
       *
       * - `{string=}` - `baseUrl` - Override the default base url.
       * - `{string=}` - `endpoint` - Override the default endpoint.
       * - `{object=}` - `params` - Additional query string parameters to add to the url.
       *
       * @returns {Promise} Promise.
       */
      destroyAll: function (resourceConfig, params, options) {
        options = options || {};
        options.params = options.params || {};
        if (params) {
          params = defaults.queryTransform(resourceConfig.name, params);
          DSUtils.deepMixIn(options.params, params);
        }
        return this.DEL(
          DSUtils.makePath(options.baseUrl || resourceConfig.baseUrl, resourceConfig.getEndpoint(null, options)),
          options
        ).then(function (data) {
          return (options.deserialize ? options.deserialize : defaults.deserialize)(resourceConfig, data);
        });
      }
    };
  }];
});