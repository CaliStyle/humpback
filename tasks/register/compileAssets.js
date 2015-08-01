module.exports = function (grunt) {
	grunt.registerTask('compileAssets',	[
		'clean:dev',
		'humpback',
		//'jst:dev',
		'sass:dev',
		'copy:dev',	
		'coffee:dev'
	]);
};
