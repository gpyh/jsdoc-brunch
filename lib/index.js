var JSDocRunner, child_process, sysPath;

sysPath = require('path');

child_process = require('child_process');

module.exports = JSDocRunner = (function() {

  JSDocRunner.prototype.brunchPlugin = true;

  JSDocRunner.prototype.type = 'javascript';

  JSDocRunner.prototype.extension = 'js';

  function JSDocRunner(config) {
    this.config = config;
    
    config.plugins.jshint

    var INPUT = config && config.plugins && config.plugins.jsdoc && config.plugins.jsdoc.input ||  'app';
    var DESTINATION = config && config.plugins && config.plugins.jsdoc && config.plugins.jsdoc.destination ||  'jsdocs2';

    child_process.exec("node_modules/jsdoc-brunch/node_modules/.bin/jsdoc  " + process.cwd() + "/" + INPUT + " -r -d " + DESTINATION, function(error, stdout, stderr) {
      if (error !== null) {
        return console.log("exec error: " + error);
      }
    });
  }

  return JSDocRunner;

})();
