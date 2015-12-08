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
		      	sails.log.info("Starting cron-cluster");
			    
			    var cron_engine = sails.config.cron;
			    
			    //register cron-cluster.
			    sails.log.info("Registering cron jobs");
			    var crons = require('include-all')({
			        dirname     :  sails.config.appPath +'/crons',
			        filter      :  /(.+)\.js$/,
			        excludeDirs :  /^\.(git|svn)$/,
			        optional    :  true
			    });

			    sails.log.info("CRONS DIR:" + sails.config.appPath + "/crons");

			    _.forEach(crons, function(cron, name){
			        sails.log.info("Registering cron-cluster handler: "+name);
			     
			    });
			});

			return next();
		}
	}
}