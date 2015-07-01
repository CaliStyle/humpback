/**
* Permission.js
*
* @description    :: The actions a Role is granted on a particular Model and its attributes
* @humpback-docs  :: https://github.com/CaliStyle/humpback/wiki/Models#permission
* @sails-docs     :: http://sailsjs.org/#!documentation/models
*/

var _ = require('lodash');
var _super = require('humpback-hook/api/models/Permission');

_.merge(exports, _super);
_.merge(exports, {

  /**
   * Extend the Model
   * https://github.com/CaliStyle/humpback-hook/blob/master/api/models/Permission.js
   * @exmaple: 
   * attributes : { 
   *  foo : {type: 'string'} 
   * }, 
   * bar: function(values, next){ 
   *  next(); 
   * }
   */

  
});