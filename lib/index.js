var JSDocRunner, child_process, sysPath;

sysPath = require('path');

child_process = require('child_process');

module.exports = JSDocRunner = (function() {

  JSDocRunner.prototype.brunchPlugin = true;

  JSDocRunner.prototype.type = 'javascript';

  JSDocRunner.prototype.extension = 'js';

  function JSDocRunner(config) {
    this.config = config;
    child_process.exec("node_modules/.bin/jsdoc " + process.cwd() + "/app -r -d jsdocs", function(error, stdout, stderr) {
      if (error !== null) {
        return console.log("exec error: " + error);
      }
    });
  }

  return JSDocRunner;

})();
