
module.exports = function(grunt) {
	grunt.config.set('ejs', {
	    humpbackViews: {
	      src: ['views/**/*.ejs', '!views/layout.ejs'],
	      dest: 'assets/app',
	      expand: true,
	      ext: '.html',
	    },
	});

	grunt.loadNpmTasks('grunt-ejs');
}