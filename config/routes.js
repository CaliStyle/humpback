/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  * Kue Endpoints                                                            *
  * Change `/api` to your sails.config.blueprints.prefix                     *
  ***************************************************************************/

  'get /api/kue/jobs': 'KueController.jobs',
  'get /api/kue/stats': 'KueController.stats',
  'get /api/kue/types': 'KueController.types',
  'get /api/kue/jobRange': 'KueController.jobRange',
  'get /api/kue/jobStateRange/:type/:state': 'KueController.jobStateRange',
  'get /api/kue/jobTypeRange/:type/:state': 'KueController.jobTypeRange',
  'get /api/kue/jobTypeStateStats': 'KueController.jobTypeStateStats',
  'post /api/kue/create': 'KueController.createJob',
  'get /api/kue/job/:id': 'KueController.job',
  'delete /api/kue/job/:id': 'KueController.remove',
  'put /api/kue/job/:id/:priority': 'KueController.updatePriority',
  'put /api/kue/job/:id/:state': 'KueController.updateState',
  'get /api/kue/job/:id/log': 'KueController.log',
  'get /api/kue/search': 'KueController.search',

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/home/index.ejs`                          *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'get /': {
    view: 'home/index',
    defaultRoles: ['public','registered']
  }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
