/**
* Email.js
*
* @description    :: Represents a Waterline collection that stores Email Templates
* @humpback-docs  :: https://github.com/CaliStyle/humpback/wiki/Models#email
* @sails-docs     :: http://sailsjs.org/#!documentation/models
*/

var _ = require('lodash');
var _super = require('humpback-email-hook/api/models/Email');

_.merge(exports, _super);
_.merge(exports, {

  /**
   * Extend the Model
   * https://github.com/CaliStyle/humpback-hook/blob/master/api/models/Email.js
   * @exmaple: 
   * attributes : { 
   *  foo : {type: 'string'} 
   * }, 
   * bar: function(values, next){ 
   *  next(); 
   * }
   */
  
});