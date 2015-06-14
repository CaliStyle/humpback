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

  description: 'Represents a User.',

  permissions: {
    'registered': {
      'create': {action: false, relation: false},
      'read'  : {action: true,  relation: false},
      'update': {action: false, relation: 'owner'},
      'delete': {action: false, relation: false}    
    },
    'public': {
      'create': {action: false, relation: false},
      'read'  : {action: false, relation: false},
      'update': {action: false, relation: false},
      'delete': {action: false, relation: false}
    }
  },

  attributes: {
    username: {
      type: 'string',
      unique: true,
      required: true // We need some kind of unique identifier, since not all providers have a email, this is the way to go.
      //index: true, //Waterline can not index a String as v0.10.0
      //notNull: true

    },
    email: {
      type: 'email',
      unique: true,
      //required: true, //Not all providers return an email, here's looking at you twitter!
      //index: true, //Waterline can not index a String as v0.10.0
      //notNull: true //Not all providers return an email, here's looking at you twitter!
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
  ],

  /**
   * Register a new User with a local passport
   */
  register: function (user) {
    return new Promise(function (resolve, reject) {
      sails.passport.protocols.local.createUser(user, function (error, created) {
        if (error) return reject(error);

        resolve(created);
      });
    });
  }
}