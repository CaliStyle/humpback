/************************************************************************
* svgtoolkit is a Grunt task that stylizes svgs and generates pngs      *
************************************************************************/

module.exports = function(grunt) {

	grunt.config.set('svgtoolkit', {
	
		dev: {
			options: {
				generatePNGs: false,
				//style: '/assets/assets/css/themes/blue.css',
				//colorize: '#808000',
				debug: true
	    	},
			files: [
				{
		        	expand: true,
		        	cwd: './assets/images/svg',
		        	src: '*.svg',
		    		dest: 'assets/assets/img'
		    	}
	    	]
		}
		
	});

	grunt.loadNpmTasks('grunt-svg-toolkit');
};