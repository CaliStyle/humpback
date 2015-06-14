/**
* Model.js
*
* @description    :: Stores an alert for front end displayed
* @humpback-docs  :: https://github.com/CaliStyle/humpback/wiki/Models#model
* @sails-docs   :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  description: 'Represents a Waterline collection that a User can create, query, etc.',

  autoPK: true,
  
  autoCreatedBy: false,
  
  autoCreatedAt: false,
  
  autoUpdatedAt: false,

  private: true,

  attributes: {
    name: {
      type: 'string',
      notNull: true,
      unique: true
    },
    identity: {
      type: 'string',
      notNull: true
    },
    attributes: {
      type: 'json'
    },
    permissions: {
      collection: 'Permission',
      via: 'model'
    }
  }
};