module.exports.humpback = {

	/***************************************************************************
	* Humpback Name is used for front end console output					   *
	***************************************************************************/
	name: process.env.HUMPBACK_NAME,

	/***************************************************************************
	* In "Testing Enviorments" Sails runs in "development mode", which may     *
	* not always be the best idea.  When a Mocha test, Grunt Test, Protractor  *
	* test is running, Humpback will set the enviroment to "testing".          *
	***************************************************************************/
	env: process.env.NODE_ENV || process.env.HUMPBACK_ENV,
	

	//TODO: Find a Better way to do this other than explicity setting a host.
	host: process.env.HUMPBACK_HOST || 'localhost',
	
	/***************************************************************************
	* Humpback uses livereload to speed up design/development time.  When     *
	* you alter an SCSS, client side JS, or template file, Humpback will      *
	* re-run the Grunt and then reload the browsers connected                 *
	*                                                                         *
	***************************************************************************/
	livereload: process.env.HUMPBACK_LIVERELOAD,

	/***************************************************************************
	* Humpback does not preload HTML templates by default, this protects      *
	* restricted assets, and also speeds up initial loading time of large     *
	* web apps.                                                               *
	*                                                                         *
	* If `preload` is true, Humpback will convert all EJS files as html       *
	* files and then convert them to JS partials using html2js                *
	***************************************************************************/
	preload: false 

}