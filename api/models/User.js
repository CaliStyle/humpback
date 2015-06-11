/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var _ = require('lodash');
var crypto = require('crypto');

module.exports = {
  attributes: {
    username: {
      type: 'string',
      unique: true,
      //index: true, //Waterline can not index a String as v0.10.0
      //notNull: true
    },
    email: {
      type: 'email',
      unique: true,
      //index: true, //Waterline can not index a String as v0.10.0
      //notNull: true
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    passports: {
      collection: 'Passport',
      via: 'user'
    },
    getGravatarUrl: function () {
      var md5 = crypto.createHash('md5');
      md5.update(this.email);
      return 'https://gravatar.com/avatar/'+ md5.digest('hex');
    },
    toJSON: function () {
      var user = this.toObject();
      delete user.password;
      user.gravatarUrl = this.getGravatarUrl();
      return user;
    }
  },
  beforeValidate: [
    function UserBeforeValidate(values, next){

      next();
    }
  ],
  beforeCreate: [
    function UserBeforeCreate(values, next){

      next();
    }
  ],
  afterCreate: [
    function UserAfterCreate(created, next){

      next();
    }
  ]
}
