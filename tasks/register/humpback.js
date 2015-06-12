module.exports = function (grunt) {
	grunt.registerTask('humpback',	[
		'sails-linker:humpbackControllers',
		'sails-linker:humpbackModels',
		'sails-linker:humpbackHooks',
		'sails-linker:humpbackPolicies',
		'sails-linker:humpbackViews'
	]);
};