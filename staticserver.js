var connect  = Npm.require('connect');
var connectr = Npm.require('connectr');
var fs       = Npm.require('fs');
//-----------------------------------------------------------------------------
var StaticServerConstructor = function(){
  connectr.patch(WebApp.connectHandlers);
};
//-----------------------------------------------------------------------------
StaticServerConstructor.prototype = {
  //-----------------------------------
  "add" : function(urlPath, diskPath){
		if(!fs.existsSync(diskPath)){
      throw new Meteor.Error("diskPath-not-found", "Diskpath "+diskPath+" must exist");
    }

    // RoutePolicy doesn't seem to be required
		//RoutePolicy.declare(urlPath, 'network');
    
    WebApp.connectHandlers.first().use(urlPath, connect.static(diskPath)).as(urlPath);
    
    console.log('[staticserver] '+urlPath+' => '+diskPath);
    return true;
  },
  //-----------------------------------
  "relocate": function(urlPath, diskPath){
    this.remove(urlPath);
    this.add(urlPath, diskPath);
  },
  //-----------------------------------
  "remove": function(urlPath){
    // RoutePolicy doesn't seem to be required
    //delete RoutePolicy.urlPrefixTypes[urlPath];
    
    WebApp.connectHandlers.remove(urlPath);
    console.log('[staticserver] '+urlPath+' => X');
    return true;
  }
  //-----------------------------------
};
//-----------------------------------------------------------------------------
StaticServer = new StaticServerConstructor();
//-----------------------------------------------------------------------------