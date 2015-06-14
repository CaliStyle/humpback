/**
* RequestLog.js
*
* @description    :: This is a private model, meaning that 
* @humpback-docs  :: https://github.com/CaliStyle/humpback/wiki/Models#requestlog
* @sails-docs     :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  autoPK: false,
  
  autoCreatedBy: false,
  
  autoUpdatedAt: false,
  
  description: 'Represents a Request Entry.',

  private: true,

  attributes: {
    id: {
      type: 'string',
      primaryKey: true
    },
    ipAddress: {
      type: 'string'
    },
    method: {
      type: 'string'
    },
    url: {
      type: 'string',
      url: true
    },
    body: {
      type: 'json'
    },
    user: {
      model: 'User'
    },
    model: {
      type: 'string'
    }
  }
};
