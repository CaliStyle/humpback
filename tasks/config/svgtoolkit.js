/************************************************************************
* svgtoolkit is a Grunt task that stylizes svgs and generates pngs      *
************************************************************************/

module.exports = function(grunt) {

	grunt.config.set('svgtoolkit', {
	
		dist: {
			options: {
				generatePNGs: false,
				//style: 'src/css/themes/blue.css',
				//colorize: '#808000',
				debug: true
	    	},
			files: [
				{
		        	expand: true,
		        	cwd: './assets/assets/img',
		        	src: '**/*.svg',
		    		dest: 'assets/assets/img'
		    	}
	    	]
		}
		
	});

	grunt.loadNpmTasks('grunt-svg-toolkit');
};