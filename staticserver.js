var connect = Npm.require('connect');
var fs = Npm.require('fs');

StaticServer = function(){
	"use strict";
	var StaticServer = {};
	StaticServer.add = function(urlPath, diskPath){
		if(fs.existsSync(diskPath)){
			RoutePolicy.declare(urlPath, 'network');
			WebApp.connectHandlers.use(urlPath, connect.static(diskPath));
			console.log('[staticserver] '+urlPath+' => '+diskPath);
			return true;
		}else{
			console.log('[staticserver] could not find '+diskPath);
			return false;
		}
	};
	return StaticServer;
}();