/**
 * @description
 * 
 * A humpback-view created at Fri Sep 25 2015 14:25:31 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminEmailView.controllers', [

])
.controller( 'AdminEmailViewCtrl', function AdminEmailViewController( $scope, DS ) {

	$scope.email = new Api('email');
	$scope.email.read($stateParams.id);
	DS.bindOne('email', $stateParams.id, $scope, 'thisemail');

	$scope.email.model = new Api('email', {
		criteria: {
			name: 'email'
		}
	});
	$scope.email.model.search()
	.then(function(models){
		$scope.email.model.selected = models[0];
	});

	$scope.updateEmail = function(){
		console.log("Clicked");
		$scope.email.update($scope.thisemail)
		.then(function(thisemail){
			
		});
	}
	$scope.deleteSetting = function(){
		console.log("Clicked");
		$scope.email.delete($scope.thisemail)
		.then(function(thisemail){
			$state.go('admin.email');
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
.controller( 'AdminEmailNewCtrl', function AdminEmailNewController( $scope, $state, DS, Api ) {

	$scope.email = new Api('email', {
		isNew: true
	});
	
	$scope.thisemail = $scope.email.selected;

	$scope.email.model = new Api('model', {
		criteria: {
			name: 'email'
		}
	});
	$scope.email.model.search()
	.then(function(models){
		$scope.email.model.selected = models[0];
	});

	$scope.createEmail = function(){
		$scope.email.create($scope.thisemail)
		.then(function(thisemail){
			$state.go('admin.email.email',{id: thisemail.id});
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
	

});