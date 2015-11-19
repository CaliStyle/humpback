
// config/kue.js

/*************************************************************
* Humpback takes advantage of Kue, however Kue requires redis.
* While in development you may find it easier to 'fake' redis
* Once you have a real redis connection, remove fake Redis
**************************************************************/

var fake = require("fakeredis");

var kue = require('kue')
    , kue_engine = kue.createQueue({
        prefix: 'kue',
        
        //Fake Redis Connection
		redis: {
			createClientFactory: function(){
				return fake.createClient(6379, '127.0.0.1')
			}
	    }
        /*
        //Real Redis Connection
        redis: {
           port: 6379, //Port of Redis
           host: '127.0.0.1' //Host of Redis
           auth: 'PASSWORD' //Password for Redis  
        }
        */
    });

module.exports.kue = kue_engine;