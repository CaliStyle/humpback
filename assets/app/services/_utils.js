angular.module( 'humpback.utils', [])

.service('utils', function($timeout) {
	return {
		development: function(){
			return !_env || _env === "development" ? true : false;
		}
	}
});