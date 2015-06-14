/**
* User.js
*
* @description    :: TODO: You might write a short summary of how this model works and what it represents here.
* @humpback-docs  :: https://github.com/CaliStyle/humpback/wiki/Models#user
* @sails-docs     :: http://sailsjs.org/#!documentation/models
*/

var _ = require('lodash');
var crypto = require('crypto');

String.prototype.replaceArray = function(find, replace, ignore) {
  var replaceString = this;
  for (var i = 0; i < find.length; i++) {
    replaceString = replaceString.replace(new RegExp(find[i].replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(replace[i])=="string")?replace[i].replace(/\$/g,"$$$$"):replace[i]);
  }
  return replaceString;
};

module.exports = {

  description: 'Represents a user',

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
 
  /**
   * Attach default Role to a new User
   */
  afterCreate: [
    function setOwner (user, next) {
      sails.log('User.afterCreate.setOwner', user);
      User
        .update({ id: user.id }, { owner: user.id })
        .then(function (user) {
          next();
        })
        .catch(next);
    },
    function attachDefaultRole (user, next) {
      Promise.bind({ }, User.findOne(user.id)
        .populate('roles')
        .then(function (user) {
          this.user = user;
          return Role.findOne({ name: 'registered' });
        })
        .then(function (role) {
          this.user.roles.add(role.id);
          return this.user.save();
        })
        .then(function (updatedUser) {
          sails.log.silly('role "registered" attached to user', this.user.username);
          next();
        })
        .catch(next)
      );
    }
  ]
}
