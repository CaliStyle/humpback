
/*************************************************************
* Humpback takes advantage of cron-cluster  and Kue, however 
* these require redis.
* While in development you may find it easier to 'fake' redis
* Once you have a real redis connection, remove fake Redis
**************************************************************/

//Fake Redis Connection
var redis = require('fakeredis').createClient(6379, '127.0.0.1');
//Real Redis Connection
/*
var redis = require('redis').createClient(<port>,<host>);
redis.auth('<auth>', function() {
    sails.log.verbose('Redis client connected');
});
*/

var cron_engine = require('cron-cluster')(redis).CronJob;

module.exports.cron = cron_engine;