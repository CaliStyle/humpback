/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

	grunt.config.set('watch', {	
		// API files to watch:
		api: {	
			files: [
				'api/**/*',	
				'!**/node_modules/**'
			]
		},	
		// Assets to watch:
		assets: {	
			files: [
				'assets/**/*', 
				'tasks/pipeline.js', 
				'!**/node_modules/**'
			],

			// When assets are changed:
			tasks: [
				'syncAssets',
				'linkAssets'
			]
		},

		//Livereload
		options: {	
			livereload: 1338
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
