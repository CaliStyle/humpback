module.exports = function (grunt) {
	grunt.registerTask('compileAssets',	[
		'clean:dev',
		'humpback',
		'sass:dev',
		'html2js:humpbackViews',
		'svgtoolkit:dev',
		'copy:dev',	
		'coffee:dev'
	]);
};
