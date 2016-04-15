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
    enabled: true,
    configfile: ".jsdoc.json"
  };
  var CONFIG = {};

  var compileDocs = function(){
    if (!CONFIG.enabled) return; //Possible to disable compiling if this is set to false
    if (!CONFIG.configfile) CONFIG.configfile = DEFAULTS.configfile;
  


    var result;
    result = child_process.execSync(
      "node_modules/.bin/jsdoc -c " + CONFIG.configfile, {stdio: "pipe"});

    var failed = handleExec(result.stdout, result.stderr);

    if (failed){
      console.log('JSDocs failed');
    } else{
      console.log('JSDocs was built');
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
    CONFIG.configfile = config && config.plugins && config.plugins.jsdoc && config.plugins.jsdoc.configfile;
    CONFIG.enabled = config && config.plugins && config.plugins.jsdoc && config.plugins.jsdoc.enabled;
  };

  return JSDocRunner;

})();
