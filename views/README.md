##VIEWS
Views are SPA view states.  You should edit the EJS files in this folder, 
and not edit the html files in the `app/views/` folder.  This allows for the EJS files
to still act like layout views which speeds up initial load time.

##Grunt
Views .ejs files are converted to .html and included into the app via a grunt task. 
see `tasks/register/humpback.js` They can be all loaded into a single JS HTML template 
or loaded by module depending on your Apps size.

To create a new View use the command 
```sh
$ sails generate humpback-view <VIEW_NAME>
````

Example:
```sh
$ sails generate humpback-view profile/dashboard
```