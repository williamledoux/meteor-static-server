Npm.depends({
  connect: "2.7.10"
});

Package.describe({
  summary: "Serving content of arbitrary directories",
  version: "0.1.2",
  name: "williamledoux:static-server",
  git: "https://github.com/williamledoux/meteor-static-server.git",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use(['webapp', 'routepolicy'], 'server');
  api.export('StaticServer', 'server');
  api.add_files(['staticserver.js'], 'server'); 
});

Package.onTest(function (api) {
});