var path = require('path');
var drool = require('drool');
var webdriver = drool.webdriver;
var controlFlow = webdriver.promise.controlFlow();
var driver = drool.start({chromeOptions: 'no-sandbox'});
var polymerDrool = require('polymer-drool');
var server;

controlFlow.execute(function() {
  server = polymerDrool.serveComponent(path.join(__dirname, '../'), 'paper-button')
});

controlFlow.execute(function() {
  polymerDrool.test('paper-button', driver).then(function() {
    return driver.quit();
  }).then(function() {
    server.close();
  });
});
