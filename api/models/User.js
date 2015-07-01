/**
* User.js
*
* @description    :: User Model stores the user model with the humpback default attributes and functions
* @humpback-docs  :: https://github.com/CaliStyle/humpback/wiki/Models#user
* @sails-docs     :: http://sailsjs.org/#!documentation/models
*/


var _ = require('lodash');
var _super = require('humpback-hook/api/models/User');

_.merge(exports, _super);
_.merge(exports, {

  /**
   * Extend the Model
   * https://github.com/CaliStyle/humpback-hook/blob/master/api/models/User.js
   * @exmaple: 
   * attributes : { 
   *  foo : {type: 'string'} 
   * }, 
   * bar: function(values, next){ 
   *  next(); 
   * }
   */  

  
});