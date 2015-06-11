'use strict';

var sails = require('sails');
var ConfigOverrides = require('../config/env/testing');

describe('Bootstrap tests ::', function() {

    // Before running any tests, attempt to lift Sails
    before(function (done) {

      // Hook will timeout in 11 seconds
      this.timeout(11000);

      // Attempt to lift sails
      sails.lift( ConfigOverrides, function (err, sails) {
          if (err) {
              return done(err);
          }

          //var Client = require('../assets/js/dependencies/sails.io.js');
          //global.io = new Client(require('socket.io-client'));
          //io.sails.url = 'http://localhost:1337/';
          
          done(null, sails);
           
      });
    });

    // After tests are complete, lower Sails
    after(function (done) {

      // Lower Sails (if it successfully lifted)
      if (sails) {
          return sails.lower(done);
      }
      // Otherwise just return
      return done();
    });

    // Test that Sails can lift with the hook in place
    it ('sails does not crash', function() {
      return true;
    });

 });