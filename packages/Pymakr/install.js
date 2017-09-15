// installing and re-compiling serialport
// executed automatically from package.json on install

var exec = require('child_process').exec

console.log("Installing serialport")
var precompiles = {'win32': 'win', 'darwin': 'osx', 'linux': 'linux', 'aix': 'linux'}
if(process.platform in precompiles) { // always returns win32 on windows, even on 64bit
  var plf = precompiles[process.platform]
  var cpcommand = 'cp'
  var build = 'build'
  if(plf == 'win'){
    cpcommand = 'xcopy'
  }
  if(plf == 'win' || plf == 'linux'){
    build = 'node_modules/bindings/buid'
  }
  if(plf == 'win' && process.arch == 'ia32'){
    plf = 'win32'
  }
  var path = "precompiles/serialport-" + plf + ""
  console.log(path)
  exec(cpcommand+' '+path+'/build/Release/serialport.node '+build)
}

// Don't preform on windows, since it often fails there. Automatically defaults to precompiled version in /precompiles folder
if (process.platform != 'win32') {


  exec('npm install serialport@4.0.6',
    function(error,stdout,stderr){
      if(error){
        console.log(error)
      }else{
        console.log("Installing electron rebuild")
        exec('npm install electron-rebuild',
          function(error,stdout,stderr){
            if(error){
              console.log(error)
            }else{
              console.log("Rebuilding...")
              exec('$(npm bin)/electron-rebuild -f -w serialport -v 1.3.13',
                function(error,stout,stderr){
                  if(error){
                    console.log(error)
                  }
                  console.log("Done!")
                }
              )
            }
          }
        )
      }
    }
  )
}
