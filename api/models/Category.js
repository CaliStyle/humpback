/**
* Route.js
*
* @description    :: Stores the Route 
* @humpback-docs  :: https://github.com/CaliStyle/humpback/wiki/Models#category
* @sails-docs     :: http://sailsjs.org/#!documentation/models
*/

var _ = require('lodash');
var _super = require('humpback-cms-hook/api/models/Category');

_.merge(exports, _super);
_.merge(exports, {

  /**
   * Extend the Model
   * https://github.com/CaliStyle/humpback-cms-hook/blob/master/api/models/Category.js
   * @exmaple: 
   * attributes : { 
   *	foo : {type: 'string'} 
   * }, 
   * bar: function(values, next){ 
   *	next(); 
   * }
   */
  
});