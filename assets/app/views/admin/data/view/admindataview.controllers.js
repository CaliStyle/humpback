/**
 * @description
 * 
 * A humpback-view created at Sat Aug 29 2015 16:08:20 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.admindataview.controllers', [

])
.controller( 'AdminDataViewCtrl', function AdminDataViewController( $scope, $stateParams, DS, utils) {
	DS.find('model', $stateParams.id)
	.then(function(model){
		DS.bindOne('model', model.id, $scope, 'thismodel');
	})
	.catch(function (err) {
	  if(utils.development()){ console.log(err); }; // reason why query failed
	});

});