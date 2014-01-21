var JSDocRunner, child_process, sysPath;

sysPath = require('path');

child_process = require('child_process');

// Require the dependency
var execSync = require("exec-sync");

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

    var result;
    result = execSync("node_modules/jsdoc-brunch/node_modules/.bin/jsdoc " + INPUT + RECURSIVE + " -d " + DESTINATION, true);

    var failed = handleExec(result.stdout, result.stderr);

    if (failed){
      console.log('JSDocs failed');
    }else{
      console.log('JSDocs was built in: ' + DESTINATION);
    }
  };

  var handleExec = function(stdout, stderr){
    var failed = false;

    if(stdout) console.log(stdout);

    if(stderr){
        console.log(stderr)
        failed = true;
    }

    return failed;
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
  };

  return JSDocRunner;

})();
