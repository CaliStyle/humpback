/************************************************************************
* EJS is a Grunt plugin that takes all of your view files and           *
* converts them to HTML files inside of `assets/app/views` folder       *
************************************************************************/

module.exports = function(grunt) {
	grunt.config.set('ejs', {
	    humpbackViews: {
	      src: ['views/**/*.ejs', '!views/layout.ejs', '!views/layout-admin.ejs'],
	      dest: 'assets/app',
	      expand: true,
	      ext: '.html',
	    },
	});

	grunt.loadNpmTasks('grunt-ejs');
}