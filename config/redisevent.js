// config/redisevent.js

var fake = require('fakeredis');
var RedisEvent = require('humpback-redis-event')
/*
var redis = {
	port: <port>,
	host: '<host>',
	auth: '<auth>',
	options: {
    	// see https://github.com/mranney/node_redis#rediscreateclient 
     	enable_offline_queue: false, 
     	retry_max_delay: 10000, 
     	max_attempts: 10000, 
     	no_ready_check: true
    }
}
*/

var redis = {
	createClientFactory: function(){
		return fake.createClient(6379, '127.0.0.1',{
			enable_offline_queue: false,
			retry_max_delay: 10000,
			max_attempts: 10000,
			no_ready_check: true
		});
	}
}


//Channels are populated through `api/hooks/redisevent` from the `events` folder
var redisevent_engine = new RedisEvent(['settings','system','email'], {
	redis: redis 
});

module.exports.redisevent = redisevent_engine;