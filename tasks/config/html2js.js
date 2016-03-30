/************************************************************************
* HTML2JS is a Grunt plugin that takes all of your view files and       *
* places them into JavaScript files as strings that are added to        *
* AngularJS's template cache. This means that the templates too become  *
* part of the initial payload as one JavaScript file. This requires     *
* `config/humpback.js` preload to be set to true                        *
************************************************************************/

var config = require('../../config/humpback').humpback;
var preload = config.preload;


module.exports = function(grunt) {

	var actions = {
		humpbackViews: {
			options: {
				base: 'assets/src/app',
				// changing the module name here will be set as the angular module name of for the template cache
				// So in this case, our code will use 'app-views' as the module name
				module: 'humpback.views.templates'
			},
			files: {
				'.tmp/public/app/views/templates.js':  require('../pipeline').templateFilesToInject
			}
		}
	};
	if(!preload){
		actions = {
			humpbackViews: {}
		};
	}

	grunt.config.set('html2js', actions);

	grunt.loadNpmTasks('grunt-html2js');
};