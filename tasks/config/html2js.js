/************************************************************************
* HTML2JS is a Grunt plugin that takes all of your view files and       *
* places them into JavaScript files as strings that are added to        *
* AngularJS's template cache. This means that the templates too become  *
* part of the initial payload as one JavaScript file. This requires     *
* `config/humpback.js` preload to be set to true                        *
************************************************************************/

module.exports = function(grunt) {

	grunt.config.set('html2js', {
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
	});

	grunt.loadNpmTasks('grunt-html2js');
};