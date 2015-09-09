angular.module( 'humpback.services.utils', [])

.service('utils', function($timeout, FoundationApi) {
	return {
		development: function(){
			if(!window._env){
		        throw new Error('Humpback enviroment not found');
		    }
			return !window._env || window._env === "development" ? true : false;
		},
		alert: function(alert){
			return FoundationApi.publish(alert.location, { color: alert.color, title: alert.title, content: alert.content, autoclose: alert.autoclose});
		}
	}
});