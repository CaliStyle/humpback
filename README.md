# Humpback

##Preamble
Humpback was born out of necessity.  We fell in love with sails.js, Angular.js,
and Zurb Foundation and we knew right away that we wanted to build an intuitive
platform to use these frameworks in large production level applications at 
blistering development speeds.  The first attempts at Humpback were behind 
closed doors and intended to be proprietary. Then, after many many debates, we
decided to OS an entire rebuild of Humpback using node-machines, *possibly* treeline, 
JSdata, Foundation-apps, and all the wonderful new projects that have come out 
recently.  We are building the platform publicly so there is as much external 
input as possible and will launch contributor guidelines when they are ready.

This README.md file will be updated as this project evolves.  
This product is currently *NOT PRODUCTION* ready. 

##Overview
Humpback is to the frontend what treeline is to the backend of a sails.js app. 
We've concretely decided to use Foundation-apps as the frontend framework and 
JSdata as the client side persistence layer.  Both of these are forward thinking 
technologies, and we are focusing on Humpback as a Single Page Application (SPA) 
builder not a website generator.

##Quick Start
For now, there is no complete CLI or node module, so to get started with humpback
you can use the standard sails.js way.  First you will need to have node.js / 
sails.js installed.

Then, Fork this repo
```sh
$ npm install

$ sails lift
```

##What you should know if you consider using Humpback
There is plethra of awesome technologies being used in Humpback.  If you 
consider using Humpback for production, you and your team should have an
understanding of the following:
  * Node.js
  * Sails.js
  * Angular.js
  * Foundation-apps
  * JS-Data

Additional things that will come in handy  
  * Node-machines
  * Bower
  * Grunt

Methodologies to keep in mind
  * Single Page Applications (SPAs)
  * Model View Controller (MVC)

##Role based authorization and Prebuilt Back Back Admin
One of the most repetitive tasks that we do with every sails project is
Role based authorization and GUI Data Management.  So with Humpback, we built
that in natively.  We did it for two reasons 1) we do it for 99% of the 
sails.js projects we create anyways 2) It's a great working example of how 
the humpback frontend and backend work together. It's not a sails.js version
of wordpress or anything like that, just a great time saving way to see all 
the working pieces.

By default a single super user is created:
  ```js
  username : admin,
  password : admin123
  ``` 
This user can Create Read Update Delete (CRUD) anything built on Humpback
and is the only source to add additional Admin users in. 

*NOTE: you'll want to change the super user's password before production*

##API
Humpback uses sails.js's native sails.socket.io combined with JSdata and a 
custom provider for storage of client side models.  By default, humpback 
client side models communicate with the the REST routes via the prefix `/api` 
and pluralize turned to false. 


##File Structure
Humpback's file structure is identical to a normal Sails.js app with a few exceptions. 

  1. Humpback uses bower to manage frontend dependencies.
  *  Humpback generators create additional files compared to their sails.js counterparts.
  *  Humpback uses SASS in lieu of less (to support foundation-apps).
  *  Humpback includes a humans.txt.
  *  Humpback includes an app folder for angular controllers and models.
  *  Humpback includes `config/env/test.js` environment file for testing.
  *  Humpback includes a test folder for unit testing.
  *  Humpback includes a `.jshintrc` file for consitent javascript across the front and back end.
  
  * -- api
    * -- controllers
    * -- hooks
    * -- models
 	* -- machines
    * -- policies
    * -- responses
    * -- services
  * -- assets
  	* -- app
  	  * -- controllers
  	  * -- hooks
  	  * -- models
  	  * -- policies
  	  * -- providers
  	  * -- services
      * -- views
  	  * -- app.js
  	* -- bower_components
  	* -- images
  	* -- styles
  	* -- scss
  	* -- templates
  	* -- bower.json
  	* -- favicon.ico
  	* -- robots.txt
  	* -- humans.txt
  * -- config
  * -- node_modules
  * -- tasks
  * -- test
  * -- views
  * -- .gitignore
  * -- .jshintrc
  * -- .bowerrc
  * -- .sailsrc
  * -- app.js
  * -- Gruntfile.js
  * -- bower.json
  * -- package.json
  * -- README.md
  * -- CONTRIBUTORS.md

##System Defaults
Humpback overrides as few system defaults as possible, but there are some
things that are changed for this particular SPA concept.
  * `config/blueprints.js` -> `prefix: 'api/'`
  * `tasks/register/compileAssets.js` -> `sass:dev`
  * `tasks/register/syncAssets.js` -> `sass:dev`

##Reserved Model Names
Humpback reserves certain model names. While you are free to extend the models
you should not attempt to create models with these name spaces:
  * `User`
  * `Passport`
  * `Permission`
  * `Role`
  * `Model`
  * `Setting`

If you are using sails-stripe, you should consider not using those model names as well.

##Installable Hooks
Humpback makes use of installable hooks, we call them barnacles. By default
the included barnicles are:
  * `humpback-hook` responsible for authorization logic, includes passport 

##Generators
Humpback's generators override sails stock generators to create additional 
files:
  * `sails generate humpback-api <API_NAME>`
  * `sails generate humpback-model <MODEL_NAME>`
  * `sails generate humpback-controller <CONTROLLER_NAME>`
  * `sails generate humpback-view <VIEW_NAME [|ui-view]>`

Humpback also has a few custom generators that make development faster and will 
also work with the future release of humpback.io
  * `sails generate humpback-module <MODULE_NAME>`

Humpback comes bootstrapped with sails-stripe to make humpback apps SaaS 
friendly and stripe ready.  See [this link for setup](https://github.com/scott-wyatt/sails-stripe).
  * `sails generate sails-stripe`

##Contributing
See `CONTRIBUTORS.md` or [click here](https://github.com/CaliStyle/humpback/blob/master/CONTRIBUTORS.md)

