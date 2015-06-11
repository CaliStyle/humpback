// tasks/config/mochaTest.js
// --------------------------------
// mochaTest task configuration.

module.exports = function(grunt) {

	// We use the grunt.config api's set method to configure an
	// object to the defined string. In this case the task
	// 'mochaTest' will be configured based on the object below.

	grunt.config.set('mochaTest', {
		mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    timeout: 20000
                },
                src: ['test/**/*.js']
            }
        }
	});

	grunt.loadNpmTasks('grunt-mocha-test');

}