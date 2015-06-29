// tasks/config/jshint.js
// --------------------------------
// jshint task configuration.

module.exports = function(grunt) {

	// We use the grunt.config api's set method to configure an
	// object to the defined string. In this case the task
	// 'jshint' will be configured based on the object below.

	grunt.config.set('jshint', {
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                //'index.js',
                //'lib/**/*.js',
                'assets/app/**/*.js',
                'api/**/*.js',
                'test/**/*.js'
            ]
        }
	});

    grunt.loadNpmTasks('grunt-contrib-jshint');
}