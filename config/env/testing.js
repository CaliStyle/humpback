/**
 * Test environment settings
 *
 * This file is for testing.
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
	//Set the port
	port: 1337, // Yay for LEET!
	
	hooks: {
    	// Skip grunt (unless your hook uses it)
    	'grunt': false
  	},

	//Set the model settigns
	models: {
		connection: 'localDiskDb',
		migrate: 'drop'
	},

	log: {
    level: 'error'
 	},

  humpback: {
  	env:  'testing',
  	host: 'localhost',
  	livereload: false
  }
}