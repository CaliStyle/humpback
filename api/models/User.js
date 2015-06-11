/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var _ = require('lodash');
var crypto = require('crypto');

String.prototype.replaceArray = function(find, replace) {
  var replaceString = this;
  for (var i = 0; i < find.length; i++) {
    replaceString = replaceString.replace(find[i], replace[i]);
  }
  return replaceString;
};

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
    roles: {
      collection: 'Role',
      via: 'users',
      dominant: true
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
      
      if(values.email && !values.username){
        var username,
            find = [".", "@"],
            replace = ["DOT", "AT"];

        username = values.email.replaceArray(find, replace);
        values.username = username; 
      }
      next(null, values);
    }
  ],
  
  beforeCreate: [
    function UserBeforeCreate(values, next){
      next(null, values);
    }
  ],
 
  afterCreate: [
    function UserAfterCreate(created, next){

      next(null, created);
    }
  ]
}
