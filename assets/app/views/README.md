##VIEWS
Views are SPA view states.

##Grunt
Views are included into the app via a grunt task. see `tasks/register/humpback.js`
They can be all loaded into a single JS HTML template or loaded by module 
depending on your Apps size.

To create a new View use the command 
```sh
$ sails generate humpback-view <VIEW_NAME>
````

Example:
```sh
$ sails generate humpback-view profile/dashboard
```