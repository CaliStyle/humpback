// tasks/config/sass.js
// --------------------------------
// sass task configuration.

module.exports = function(grunt) {

	// We use the grunt.config api's set method to configure an
	// object to the defined string. In this case the task
	// 'sass' will be configured based on the object below.

	grunt.config.set('sass', {	
		dev: {	
			options: {	
				loadPath: ['./assets/bower_components/foundation-apps/scss'],
				style: 'expanded'
			},	
			files: [{	
				expand: true,	
				cwd: 'assets/scss',	
				src: ['*.scss'],	
				dest: '.tmp/public/styles',	
				ext: '.css'
			}]
		}
	});
	// load npm module for handlebars.
	grunt.loadNpmTasks('grunt-contrib-sass');
};