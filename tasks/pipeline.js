/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */



// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = 
  [ 'bower_components/angular/angular-csp.css'
  , 'styles/**/*.css' 
  ];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = 
    // Load sails.io before everything else
  [ 'js/dependencies/sails.io.js'
  , 'js/dependencies/humpback.io.js'
  , 'bower_components/fastclick/lib/fastclick.js'
  , 'bower_components/viewport-units-buggyfill/viewport-units-buggyfill.js'
  , 'bower_components/tether/tether.js'
  , 'bower_components/hammerjs/hammer.js'

    // Angular Dependencies are brought in here
  , 'bower_components/angular/angular.js'

    // Load Angular Data
  , 'bower_components/js-data/dist/js-data.js'
  , 'bower_components/js-data-angular/dist/js-data-angular.js'

    // Load Angular Sails for sails socket version of http
  , 'bower_components/angularSails/dist/ngsails.io.js'

    // Load Angular UI Router
  , 'bower_components/angular-ui-router/release/angular-ui-router.js'
  
    // Load Angular Animate
  , 'bower_components/angular-animate/angular-animate.js'

    // Load Foundation's Angular Core
  , 'bower_components/foundation-apps/js/vendor/**/*.js'
  , 'bower_components/foundation-apps/js/angular/components/**/*.js'
  , 'bower_components/foundation-apps/js/angular/services/**/*.js'
  , 'bower_components/foundation-apps/js/angular/vendor/**/*.js'
  , 'bower_components/foundation-apps/js/angular/foundation.js'
  , 'bower_components/foundation-apps/dist/js/foundation-apps.js'
  , 'bower_components/foundation-apps/dist/js/foundation-apps-templates.js'
  //, '!bower_components/foundation-apps/js/angular/app.js'
  
  , 'bower_components/angular-translate/angular-translate.js'  
    // All other Bower Scripts are brought in here.


    // All other Dependencies are brought in here  
  , 'js/dependencies/**/*.js'
    // All of the rest of your client-side js files
    // will be injected here in no particular order.
  , 'app/**/*.js'
  ];

// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
//var templateFilesToInject = ['templates/**/*.html'];
var templateFilesToInject = [
  'app/views/**/*.html'
];


// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function cssFileToInject(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function jsFileToInject(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function templateFileToInject(path) {
  return 'assets/' + path;
});
