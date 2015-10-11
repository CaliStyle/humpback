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
		isCode: true,
		options : {
			bypassCache: true, 
			params: {
				populate: 'categories,roles'
			}
		}
	});

	$scope.route.read($stateParams.id);
	
	$scope.route.Categories = new Api('category', {
		limit: 100,
		options: {
			bypassCache: true
		}
	});
	$scope.route.Categories.init();

	$scope.route.Roles = new Api('role', {
		limit: 100
	});
	$scope.route.Roles.init();

	DS.bindOne('route', $stateParams.id, $scope, 'thisroute');

	$scope.route.model = new Api('model', {
		criteria: {
			name: 'route'
		}
	});
	$scope.route.model.search()
	.then(function(models){
		$scope.route.model.selected = models[0];
	});

	$scope.updateRoute = function(){
		$scope.route.update($scope.thisroute);
	}

	$scope.trashRoute = function(){
		$scope.thisroute.trash = !$scope.thisroute.trash;
		$scope.route.update($scope.thisroute);
	}

	$scope.deleteRoute = function(){
		$scope.route.delete($scope.thisroute)
		.then(function(thisroute){
			$state.go('admin.cms');
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
.controller( 'AdminCmsNewCtrl', function AdminCmsNewController( $scope, $state, $stateParams, DS, utils, Api ) {
	
	String.prototype.slug = function() {
    	var title = this;
    	return title
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-');
	};

	$scope.route = new Api('route',{
		isCode: true,
		isNew: true,
		permalink: []
	});

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

	$scope.updatePermalink = function() {
		//$scope.route.permalink[0] = $scope.route.permalink[0];
		$scope.thisroute.title = $scope.thisroute.title ? $scope.thisroute.title : '';
		$scope.route.permalink[1] = $scope.thisroute.title.slug();
		$scope.thisroute.uri = $scope.route.permalink.join('').replace('*','');

		$scope.thisroute.address = 'get ' + $scope.thisroute.uri;
	}
	$scope.$watch('thisroute.title', function(){
		$scope.updatePermalink();
	});

	$scope.createRoute = function(){
		$scope.route.create($scope.thisroute)
		.then(function(thisroute){
			$state.go('admin.cms.cms', {id: thisroute.id});
		});
	}
	

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