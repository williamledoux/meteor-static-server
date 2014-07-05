static-server v0.1.0
====================

Meteor server-side package for serving content of arbitrary  directories.

Usecases
---------

 * Serving static files that are outside of and not linked to the Meteor application. For instance sharing your family pictures through your home server.

 * Preventing Meteor, **during development**, to refresh the server when you generate or modify files in the `public` folder. You can then generate your files in another folder and publish it. Once in production mode, you can do it in the public folder without the server restarting.

Installation
------------

With [Meteorite](https://github.com/oortcloud/meteorite) installed:

```sh
$ mrt add bootstrap-3
```
 
Usage
------------

```js
  StaticServer.add('/TemporaryFiles', '/Tmp/');
```
