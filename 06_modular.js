var module = require('./module');

var dirName = process.argv[2];
var fileExt = process.argv[3];

function logFileName(err, fileNameArray){
  if (err) {
    return console.log("There was an error: ", err)
  }
  fileNameArray.forEach(function(fileName) {  
    console.log(fileName);
  });
}


module(dirName, fileExt, logFileName);

