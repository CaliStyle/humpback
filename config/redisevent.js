// config/redisevent.js
var RedisEvent = require('humpback-redis-event')
var fake = require('fakeredis');

var redisevent_engine = new RedisEvent(['system'], {
	/*
	//Real Redis
	port: <port>,
	host: '<host>',
	auth: '<pass>' 
	*/
	//Fake Redis
	redis: {
		createClientFactory: function(){
			return fake.createClient(6379, '127.0.0.1')
		}
	}
});

module.exports.redisevent = redisevent_engine;