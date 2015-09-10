/**
 * AuthController
 *
 * @description :: Server-side logic for managing humpback auth
 * @humpback-docs  :: https://github.com/CaliStyle/humpback/wiki/Controllers#Auth
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */



var _ = require('lodash');
var _super = require('humpback-hook/api/controllers/AuthController');

delete _super.callback;

_.merge(exports, _super);
_.merge(exports, {

	/**
	 * Extend the Controller
	 * https://github.com/CaliStyle/humpback-hook/blob/master/api/controllers/AuthController.js
	 * @exmaple:  
	 * bar: function(req, res){ 
	 *  res.ok(); 
	 * }
	 */


	/**
    * Create a authentication callback endpoint
    *
    * This endpoint handles everything related to creating and verifying Pass-
    * ports and users, both locally and from third-aprty providers.
    *
    * Passport exposes a login() function on req (also aliased as logIn()) that
    * can be used to establish a login session. When the login operation
    * completes, user will be assigned to req.user.
    *
    * For more information on logging in users in Passport.js, check out:
    * http://passportjs.org/guide/login/
    *
    * @param {Object} req
    * @param {Object} res
    */
    callback: function (req, res) {
        function _tryAgain (err) {

            // Only certain error messages are returned via req.flash('error', someError)
            // because we shouldn't expose internal authorization errors to the user.
            // We do return a generic error and the original request body.
            var flashError = req.flash('error')[0];
            if (err || flashError) {
                sails.log.warn(err);
                sails.log.warn(flashError);
            }

            if (err && !flashError ) {
                req.flash('error', 'Error.Passport.Generic');
            }
            else if (flashError) {
                req.flash('error', flashError);
            }
            req.flash('form', req.body);

            // If an error was thrown, redirect the user to the
            // login, register or disconnect action initiator view.
            // These views should take care of rendering the error messages.
            var action = req.param('action');

            if (action === 'register') {
                if (!req.isSocket) {
                    res.redirect('/contact');
                }
                else{

                }
            }
            else if (action === 'login') {
                if (!req.isSocket) {
                    res.redirect('/client');
                }
                else{

                }    
            }
            else if (action === 'disconnect') {
                if (!req.isSocket) {
                    res.redirect('back');
                }
                else{
                    
                }
            }
            else {
                // make sure the server always returns a response to the client
                // i.e passport-local bad username/email or password
                res.forbidden();
            }
        }

        sails.passport.callback(req, res, function (err, user) {

            if (err || !user) {
                sails.log.warn(err);
                return _tryAgain();
            }

            req.login(user, function (err) {
                if (err) {
                    sails.log.warn(err);
                    return _tryAgain();
                }

                // Upon successful login, send the user to the homepage where req.user
                // will available.
                req.session.authenticated = true;

                if (!req.isSocket && req.query.next) {
		          res.status(302).set('Location', req.query.next);
		        }

		        sails.log.info('user', user, 'authenticated successfully');
		        return res.json(user);
            });
        });
    }, 

});
