/**
 * redisevent hook
 */

module.exports = function (sails) {
  	/**
	 * Module dependencies.
	 */
	
	/**
	 * Expose hook definition
	 */

	return {

	    // Run when sails loads-- be sure and call `next()`.
	    initialize: function (next) {
			sails.after('hook:orm:loaded', function () {
		      	sails.log.info("Starting redis-event");
	    		var redisevent_engine = sails.config.redisevent;
			    


			    //register humpback redis-event channels.
			    sails.log.info("Registering redis-event channels");
			    var events = require('include-all')({
			        dirname     :  sails.config.appPath +'/events',
			        filter      :  /(.+)\.js$/,
			        excludeDirs :  /^\.(git|svn)$/,
			        optional    :  true
			    });

			    sails.log.info("EVENTS DIR:" + sails.config.appPath + "/events");

			    _.forEach(crons, function(cron, name){
			        sails.log.info("Registering channel: "+name);
			     
			    });

	    		return next();
	    	});
	    }
	};
};