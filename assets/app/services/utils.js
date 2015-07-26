angular.module( 'humpback.services.utils', [])

.service('utils', function($timeout) {
	return {
		development: function(){
			return !_env || _env === "development" ? true : false;
		}
	}
});