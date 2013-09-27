var connect = Npm.require('connect');

RoutePolicy.declare('/my-uploaded-content', 'network');

// Listen to incoming http requests
WebApp.connectHandlers
  .use('/tralala', connect.static('/Datas/Temp'));