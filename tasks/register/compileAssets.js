module.exports = function (grunt) {
	grunt.registerTask('compileAssets',	[
		'humpback',
		'clean:dev',
		'jst:dev',
		'sass:dev',
		'copy:dev',	
		'coffee:dev'
	]);
};
