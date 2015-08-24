module.exports = function (grunt) {
	grunt.registerTask('syncAssets',[	
		'jst:dev',
		'humpback',	
		'sass:dev',
		'html2js:humpbackViews',
		'svgtoolkit:dev',	
		'sync:dev',	
		'coffee:dev'
	]);
};
