/**
* Setting.js
*
* @description 	:: Setting Contains the settings for the Humpback Application
* @humpback-docs	:: https://github.com/CaliStyle/humpback/wiki/Models#setting
* @sails-docs		:: http://sailsjs.org/#!documentation/models
*/

var _ = require('lodash');
var _super = require('humpback-cms-hook/api/models/Setting');

_.merge(exports, _super);
_.merge(exports, {

  /**
   * Extend the Model
   * https://github.com/CaliStyle/humpback-cms-hook/blob/master/api/models/Setting.js
   * https://github.com/CaliStyle/humpback-hook/blob/master/api/models/Setting.js
   * @exmaple: 
   * attributes : { 
   *	foo : {type: 'string'} 
   * }, 
   * bar: function(values, next){ 
   *	next(); 
   * }
   */
   afterCreate: [
      function eventBroadcast (setting, next){
         sails.log('Setting.afterCreate.eventBroadcast', setting);

         sails.config.redisevent.pub('settings:create', {
            setting: setting
         });

         next();
      },
      function webhookBroadcast (setting, next){
         sails.log('Setting.afterCreate.webhookBroadcast', setting);

         next();
      }
   ],
   afterUpdate: [
      function eventBroadcast (setting, next){
         sails.log('Setting.afterUpdate.eventBroadcast', setting);
         
         sails.config.redisevent.pub('settings:update', {
            setting: setting
         });

         next();
      },
      function webhookBroadcast (subcategory, next){
         sails.log('Setting.afterUpdate.webhookBroadcast', subcategory);
         
         next();
      }
   ],
   afterDestroy: [
      function eventBroadcast (setting, next){
         sails.log('Setting.afterDestroy.eventBroadcast', setting);
         
         sails.config.redisevent.pub('settings:destroy', {
            setting: setting
         });

         next();
      },
      function webhookBroadcast (subcategory, next){
         sails.log('Setting.afterDestroy.webhookBroadcast', subcategory);
         
         next();
      }
   ]
  
});
