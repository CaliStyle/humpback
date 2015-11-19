/**
 * KueController
 *
 * @description :: Server-side logic for managing Kue
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var kue = require('kue');
var reds = require('reds');

module.exports = {
	jobs: function( req, res ) {
  
	    KueService.types(function( err, types ) {
	    	if(err){
	    		return res.serverError(err);
	    	} 
	    	return res.ok(types);
	    });

	},

	/**
	 * Get statistics including:
	 *
	 *   - inactive count
	 *   - active count
	 *   - complete count
	 *   - failed count
	 *   - delayed count
	 *
	 */
	stats: function( req, res ) {
	  getKue(KueService)
	  ('inactiveCount')
	  ('completeCount')
	  ('activeCount')
	  ('failedCount')
	  ('delayedCount')
	  ('workTime')
	  (function( err, obj ) {
	    if( err ){ 
	    	return res.serverError(err);
	    }
	    res.ok(obj);
	  });
	},

	/**
	 * Get job types.
	 */
	types: function( req, res ) {
	  KueService.types(function( err, types ) {
	    if( err ){ 
	    	return res.serverError(err);
	    }
	    res.ok(types);
	  });
	},

	/**
	 * Get jobs by range :from..:to.
	 */
	jobRange: function( req, res ) {
	  var from  = parseInt(req.params.from, 10)
	    , to    = parseInt(req.params.to, 10)
	    , order = req.params.order;

	  kue.Job.range(from, to, order, function( err, jobs ) {
	    if( err ){ 
	    	return res.serverError(err);
	    }
	    res.ok(jobs);
	  });
	},

	/**
	 * Get jobs by :state, and range :from..:to.
	 */
	jobStateRange: function( req, res ) {
	  var state = req.params.state
	    , from  = parseInt(req.params.from, 10)
	    , to    = parseInt(req.params.to, 10)
	    , order = req.params.order;

	  kue.Job.rangeByState(state, from, to, order, function( err, jobs ) {
	    if( err ){ 
	    	return res.serverError(err);
	    }
	    res.ok(jobs);
	  });
	},

	/**
	 * Get jobs by :type, :state, and range :from..:to.
	 */
	jobTypeRange : function( req, res ) {
	  var type  = req.params.type
	    , state = req.params.state
	    , from  = parseInt(req.params.from, 10)
	    , to    = parseInt(req.params.to, 10)
	    , order = req.params.order;

	  kue.Job.rangeByType(type, state, from, to, order, function( err, jobs ) {
	    if( err ){ 
	    	return res.serverError(err);
	    }
	    res.ok(jobs);
	  });
	},

	/**
	 * Get jobs stats by :type and :state
	 */
	jobTypeStateStats: function( req, res ) {
	  var type  = req.params.type
	    , state = req.params.state;

	  KueService.cardByType(type, state, function( err, count ) {
	    if( err ){ 
	    	return res.serverError(err);
	    }
	    res.ok({ count: count });
	  });
	},

	/**
	 * Get job by :id
	 */
	job: function( req, res ) {
	  var id = req.params.id;
	  kue.Job.get(id, function( err, job ) {
	    if( err ) return res.json({ error: err.message });
	    res.json(job);
	  });
	},

	/**
	 * Create a job.
	 */
	createJob: function( req, res ) {
	  var body = req.body;

	  function _create( args, next ) {
	    if( !args.type ) return next({ error: 'Must provide job type' }, null, 400);

	    var job     = new Job(args.type, args.data || {});
	    var options = args.options || {};
	    if( options.attempts ) job.attempts(parseInt(options.attempts));
	    if( options.priority ) job.priority(options.priority);
	    if( options.delay ) job.delay(options.delay);
	    if( options.searchKeys ) job.searchKeys(options.searchKeys);
	    if( options.backoff ) job.backoff(options.backoff);
	    if( options.removeOnComplete ) job.removeOnComplete(options.removeOnComplete);
	    if( options.ttl ) job.ttl(options.ttl);
	    
	    job.save(function( err ) {
	      if( err ) {
	        return next({ error: err.message }, null, 500);
	      }
	      else {
	        return next(null, { message: 'job created', id: job.id });
	      }
	    });
	  }

	  if( !_.isEmpty(body) ) {
	    if( _.isArray(body) ) {
	      var returnErrorCode = 0; // Default: we don't have any error
	      var i      = 0, len = body.length;
	      var result = [];
	      -function _iterate() {
	        _create(body[ i ], function( err, status, errCode ) {
	          result.push(err || status);
	          if( err ) {
	            // Set an error code for the response
	            if( !returnErrorCode ) {
	              returnErrorCode = errCode || 500;
	            }
	          }

	          // Keep processing even after an error
	          i++;
	          if( i < len ) {
	            _iterate();
	          }
	          else {
	            // If we had an error code, return it
	            if( returnErrorCode ) {
	              res.status(returnErrorCode);
	            }

	            res.ok(result);
	          }
	        })
	      }()
	    }
	    else {
	      _create(body, function( err, status, errCode ) {
	        if( err ) {
	          res.status(errCode || 500).json(err);
	        }
	        else {
	          res.ok(status);
	        }
	      })
	    }
	  }
	  else {
	    res.status(204); // "No content" status code
	    res.end();
	  }
	},

	/**
	 * Remove job :id
	 */
	remove: function( req, res ) {
	  var id = req.params.id;
	  kue.Job.remove(id, function( err ) {
	    if( err ){ 
	    	return res.serverError(err);
	    }
	    res.ok({ message: 'job ' + id + ' removed' });
	  });
	},

	/**
	 * Update job :id :priority
	 */
	updatePriority: function( req, res ) {
	  var id       = req.params.id
	    , priority = parseInt(req.params.priority, 10);

	  if( isNaN(priority) ){
	  		var err = new Error('invalid priority');
	    	return res.serverError(err);
	  }
	  kue.Job.get(id, function( err, job ) {
	    if( err ){ 
	    	return res.serverError(err);
	    }
	    job.priority(priority);
	    job.save(function( err ) {
			if( err ){ 
				return res.serverError(err);
			}
	    	res.ok({ message: 'updated priority' });
	    });
	  });
	},

	/**
	 * Update job :id :state
	 */
	updateState: function( req, res ) {
	  var id    = req.params.id
	    , state = req.params.state;

	  kue.Job.get(id, function( err, job ) {
	    if( err ){ 
	    	return res.serverError(err);
	    }
	    job.state(state);
	    job.save(function( err ) {
	    	if( err ){ 
		    	return res.serverError(err);
		    }
	    	res.ok({ message: 'updated state' });
	    });
	  });
	},

	/**
	 * Search and respond with ids.
	 */
	search: function( req, res ) {
	  getSearch().query(req.query.q).end(function( err, ids ) {
	    if( err ){ 
	    	return res.serverError(err);
	    }
	    res.ok(ids);
	  });
	},

	/**
	 * Get log for job :id.
	 */
	log: function( req, res ) {
	  var id = req.params.id;
	  kue.Job.log(id, function( err, log ) {
	    if( err ){ 
	    	return res.serverError(err);
	    }
	    res.ok(log);
	  });
	}	
};

/**
 * Search instance.
 */

var search;
function getSearch() {
  if( search ) return search;
  reds.createClient = require('../../redis').createClient;
  return search = reds.createSearch(KueService.client.getKey('search'));
};

/**
 * Data fetching helper.
 */

function getKue( obj ) {
  var pending = 0
    , res     = {}
    , callback
    , done;

  return function _( arg ) {
    switch(typeof arg) {
      case 'function':
        callback = arg;
        break;
      case 'string':
        ++pending;
        obj[ arg ](function( err, val ) {
          if( done ) return;
          if( err ) return done = true, callback(err);
          res[ arg ] = val;
          --pending || callback(null, res);
        });
        break;
    }
    return _;
  };
}