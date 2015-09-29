angular.module( 'humpback.services.utils', [])

.service('utils', function($timeout, FoundationApi) {
	return {
		development: function(log){
			if(!window._env){
		        throw new Error('Humpback enviroment not found');
		    }
		    var development = !window._env || window._env === "development" ? true : false;
		    if(development && log){
		    	console.log(log);
		    }
			return development;
		},
		alert: function(alert){
			return FoundationApi.publish(alert.location, { color: alert.color, title: alert.title, content: alert.content, autoclose: alert.autoclose});
		},

		/**
		 * @param {Object} err requires status, data
		 */
		handleError: function(err){
			return err;
		}
	}
});