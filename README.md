# Humpback

##Preamble
Humpback was born out of necessity.  We fell in love with sails.js, Angular.js, and Zurb Foundation and we knew right away that we wanted to build an intuitive platform to use these frameworks in large production level applications at blistering development speeds.  The first attempts at Humpback were behind closed doors and intended to be proprietary. Then, after many many debates, we decided to OS an entire rebuild of Humpback using node-machines, treeline, JSdata, Foundation-apps, and all the wonderful new projects that have come out recently.  We are building the platform publicly so there is as much external input as possible and will launch contributor guidelines when they are ready.

This README.md file will be updated as this project evolves.  This product is currently NOT PRODUCTION ready. 

##Overview
Humpback is to the frontend what treeline is to the backend of a sails.js app.  We've concretely decided to use Foundation-apps as the frontend framework and JSdata as the client side persistence layer.  Both of these are forward thinking technologies, and we are focusing on Humpback as a web application builder not a website generator. 


##File Structure
Humpback's file structure is identical to a normal Sails.js app with a few exceptions. 

  1. Humpback uses bower to manage frontend dependencies.
  2. Humpback generators create additional files compared to their sails.js counterparts.
  3. Humpback uses scss in lieu of less.
  4. Humpback includes a humans.txt.
  5. Humpback includes an app folder for angular controllers and models.

  * -- api
    * -- controllers
    * -- models
    * -- hooks
    * -- policies
    * -- responses
    * -- services
  * -- assets
  	* -- app
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
  * -- views
  * -- .sailsrc
  * -- app.js
  * -- Gruntfile.js
  * -- package.json
  * -- README.md
  * -- CONTRIBUTORS.md

##Generators
Humpback's generators override sails stock generators to create additional 
files
  * `sails-generate humpback-api <API_NAME>`
  * `sails-generate humpback-model <MODEL_NAME>`
  * `sails-generate humpback-controller <CONTROLLER_NAME>`
  * `sails-generate humpback-view <VIEW_NAME>`

Humpback also has a few custom generators that make development faster and will 
also work with the future release of humpback.io

##Contributing
See `CONTRIBUTORS.md`