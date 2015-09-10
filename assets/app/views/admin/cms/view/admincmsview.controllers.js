/**
 * @description
 * 
 * A humpback-view created at Fri Aug 28 2015 18:16:29 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.admincmsview.controllers', [

])
.controller( 'AdminCmsViewCtrl', function AdminCmsViewController( $scope, $stateParams, DS, utils, Route ) {


	$scope.route = new Route($stateParams.id);
	$scope.route.read();
	DS.bindOne('route', $stateParams.id, $scope, 'thisroute');

	$scope.updateRoute = function(){
		$scope.route.update($scope.thisroute);
	}

	//$scope.thisroute = route.route;
	//console.log(route.route);
	
	

	$scope.aceLoaded = function(_editor) {
	    // Editor part
	    var _session = _editor.getSession();
	    var _renderer = _editor.renderer;

	    // Options
	    //_editor.setReadOnly(true);
	    _session.setUndoManager(new ace.UndoManager());
	    _renderer.setShowGutter(false);

	    // Events
	    _editor.on("changeSession", function(){ 
	    	
	    });
	    _session.on("change", function(){ 

	    });
	};

	$scope.aceChanged = function(e) {
	    //
	    //console.log(e);	
	};


})
.controller( 'AdminCmsPageCtrl', function AdminCmsPageController( $scope, $stateParams, DS, utils, Route ) {
	$scope.route = new Route();
	$scope.thisroute = $scope.route.route;
	//$scope.route.read();
	//DS.bindOne('route', $stateParams.id, $scope, 'thisroute');

	$scope.createRoute = function(){
		$scope.route.create($scope.thisroute);
	}

	//$scope.thisroute = route.route;
	//console.log(route.route);
	
	

	$scope.aceLoaded = function(_editor) {
	    // Editor part
	    var _session = _editor.getSession();
	    var _renderer = _editor.renderer;

	    // Options
	    //_editor.setReadOnly(true);
	    _session.setUndoManager(new ace.UndoManager());
	    _renderer.setShowGutter(false);

	    // Events
	    _editor.on("changeSession", function(){ 
	    	
	    });
	    _session.on("change", function(){ 

	    });
	};

	$scope.aceChanged = function(e) {
	    //
	    //console.log(e);	
	};
})
;