var JSDocRunner, child_process, sysPath;

sysPath = require('path');

child_process = require('child_process');

module.exports = JSDocRunner = (function() {

  JSDocRunner.prototype.brunchPlugin = true;

  JSDocRunner.prototype.type = 'javascript';

  JSDocRunner.prototype.extension = 'js';

  JSDocRunner.prototype.onCompile = function(generatedFiles){
    compileDocs();
  };

  var CONFIG;

  var compileDocs = function(){    
    var config = CONFIG;
    var INPUT = config && config.plugins && config.plugins.jsdoc && config.plugins.jsdoc.input ||  'app';
    var DESTINATION = config && config.plugins && config.plugins.jsdoc && config.plugins.jsdoc.destination ||  'public/jsdocs';

    console.log('Building JSDocs');

    var RECURSIVE = config && config.plugins && config.plugins.jsdoc && config.plugins.jsdoc.recursive ||  '';
    
    if (RECURSIVE === true) RECURSIVE = ' -r ';
    else RECURSIVE = '';

    child_process.exec("node_modules/jsdoc-brunch/node_modules/.bin/jsdoc  " + process.cwd() + "/" + INPUT + RECURSIVE + " -d " + DESTINATION, function(error, stdout, stderr) {
      if (error !== null) {
        return console.log("exec error: " + error);
      }else{
        return console.log('JSDocs was built in : ' + DESTINATION);
      }
    });
  };

  function JSDocRunner(config) {
    CONFIG = config;
  }

  return JSDocRunner;

})();
