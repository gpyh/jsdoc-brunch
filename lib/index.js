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

  var DEFAULTS = {
    input : 'app',
    destination : 'public/jsdocs',
    recursive : true,
    enabled : true
  };
  var CONFIG = {};

  var compileDocs = function(){
    if (!CONFIG.enabled) return; //Possible to disable compiling if this is set to false

    var INPUT = CONFIG.input;
    var DESTINATION = CONFIG.destination;

    console.log('Building JSDocs');

    var RECURSIVE = CONFIG.recursive;
    
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
    CONFIG.input = config && config.plugins && config.plugins.jsdoc && config.plugins.jsdoc.input || DEFAULTS.input;
    CONFIG.destination = config && config.plugins && config.plugins.jsdoc && config.plugins.jsdoc.destination || DEFAULTS.destination;
    CONFIG.recursive = config && config.plugins && config.plugins.jsdoc && config.plugins.jsdoc.recursive;
    CONFIG.enabled = config && config.plugins && config.plugins.jsdoc && config.plugins.jsdoc.enabled;
        
    //Double check values of .recursive
    //If neither false or true, set it to default.
    if (CONFIG.recursive !== false && CONFIG.recursive !== true) CONFIG.recursive = DEFAULTS.recursive;

    //Double check values of .enabled
    //If neither false or true, set it to default.
    if (CONFIG.enabled !== false && CONFIG.enabled !== true) CONFIG.enabled = DEFAULTS.enabled;

  }

  return JSDocRunner;

})();
