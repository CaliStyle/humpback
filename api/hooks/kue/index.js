/**
 * kue hook
 */

module.exports = function (sails) {
  	/**
	 * Module dependencies.
	 */

	var kue = require('kue');
	
	/**
	 * Expose hook definition
	 */

	return {

	    // Run when sails loads-- be sure and call `next()`.
	    initialize: function (next) {
	      	
	      	sails.after('hook:orm:loaded', function () {
		      	sails.log.info("Starting kue")
			    var kue_engine = sails.config.kue;

			    //register kue.
			    sails.log.info("Registering jobs")
			    var jobs = require('include-all')({
			        dirname     :  sails.config.appPath +'/jobs',
			        filter      :  /(.+)\.js$/,
			        excludeDirs :  /^\.(git|svn)$/,
			        optional    :  true
			    });

			    sails.log.info("HUMPBACK.JOBS.DIR:" + sails.config.appPath + "/jobs");

			    _.forEach(jobs, function(job, name){
			        sails.log.info("Registering kue handler: "+name)
			        kue_engine.process(name, job);
			    })
			    
			    process.once('SIGTERM', function (sig) {
			        kue_engine.shutdown(function (err) {
			            console.log('Kue is shut down.', err || '');
			            process.exit(0);
			        }, 5000);
			    });
	      	});

        	return next();
	    }
	};
};