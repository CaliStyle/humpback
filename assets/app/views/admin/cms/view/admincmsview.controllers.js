/**
 * @description
 * 
 * A humpback-view created at Fri Aug 28 2015 18:16:29 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminCmsView.controllers', [

])
.controller( 'AdminCmsViewCtrl', function AdminCmsViewController( $scope, $stateParams, DS, utils, Api ) {


	//$scope.route = new Route($stateParams.id);
	//$scope.route.read();
	//DS.bindOne('route', $stateParams.id, $scope, 'thisroute');

	$scope.route = new Api('route', {
		options : {
			bypassCache: true, 
			params: {
				populate: 'categories'
			}
		}
	});
	
	$scope.route.isCode = true;

	$scope.route.read($stateParams.id);
	
	$scope.route.Categories = new Api('category', {
		limit: 100
	});
	$scope.route.Categories.init();

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
	    //_renderer.setShowGutter(false);

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
.controller( 'AdminCmsNewCtrl', function AdminCmsNewController( $scope, $state, $stateParams, DS, utils, Api ) {
	
	//DS.bindOne('route', $stateParams.id, $scope, 'thisroute');

	String.prototype.slug = function() {
    var title = this;
    return title
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-');
	};

	$scope.route = new Api('route',{
		isCode: true
	});
	$scope.route.isCode = true;

	$scope.thisroute = $scope.route.selected;
	
	$scope.route.Categories = new Api('category', {
		limit: 100
	});
	$scope.route.Categories.init();

	$scope.route.Wildcards = new Api('route', {
		limit: 100,
		criteria: {
			'uri': {
				endsWith: '*'
			}
		}, 
		options: {
			bypassCache: true
		}
	});

	$scope.route.Wildcards.init();


	$scope.createRoute = function(){
		$scope.route.create($scope.thisroute)
		.then(function(thisroute){
			$state.go('admin.cms.view', {id: thisroute.id});
		});
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
	    //_renderer.setShowGutter(false);

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