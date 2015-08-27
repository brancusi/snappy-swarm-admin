/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    dotEnv: {
      clientAllowedKeys: ['PUBNUB_PUBLISH_KEY', 
                          'PUBNUB_SUBSCRIBE_KEY']
    }
  });

  app.import("bower_components/pubnub/web/pubnub.min.js");

  app.import("bower_components/fontawesome/fonts/fontawesome-webfont.eot", { destDir: "fonts" });
  app.import("bower_components/fontawesome/fonts/fontawesome-webfont.svg", { destDir: "fonts" });
  app.import("bower_components/fontawesome/fonts/fontawesome-webfont.ttf", { destDir: "fonts" });
  app.import("bower_components/fontawesome/fonts/fontawesome-webfont.woff", { destDir: "fonts" });
  app.import("bower_components/fontawesome/fonts/fontawesome-webfont.woff2", { destDir: "fonts" });
  app.import("bower_components/fontawesome/fonts/FontAwesome.otf", { destDir: "fonts" });

  return app.toTree();
};
