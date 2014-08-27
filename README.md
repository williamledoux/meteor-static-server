static-server v0.1.2
====================

Meteor server-side package for serving content of arbitrary  directories.

Usecases
---------

 * Serving static files that are outside of and not linked to the Meteor application. For instance sharing your family pictures through your home server.

 * Preventing Meteor, **during development**, to refresh the server when you generate or modify files in the `public` folder. You can then generate your files in another folder and publish it. Once in production mode, you can do it in the public folder without the server restarting.

Installation
------------

```sh
$ meteor add williamledoux:static-server
```
 
Usage
------------

```js
  StaticServer.add('/pics', '/home/username/Pictures/');
```


Changelog
------------

 * 0.1.2 : Update to official meteor packaging system