module.exports = function (grunt) {
	grunt.registerTask('humpback',	[
		'sails-linker:humpbackControllers',
		'sails-linker:humpbackModels',
		'sails-linker:humpbackHooks',
		'sails-linker:humpbackPolicies',
		'sails-linker:humpbackDirectives',
		'sails-linker:humpbackFilters',
		'sails-linker:humpbackServices',
		'ejs:humpbackViews',
		'sails-linker:humpbackViews',
		'html2js:humpbackViews',
	]);
};