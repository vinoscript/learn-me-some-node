
var fs = require('fs');
var dirName = process.argv[2];
var fileExt = process.argv[3];

function getFileList(){
  fs.readdir(dirName, function doneReading(err, arrayOfFileNameStrings){
    for( var i = 0; i < arrayOfFileNameStrings.length; i++){
      if ( arrayOfFileNameStrings[i].includes("." + fileExt) ) {
        console.log(arrayOfFileNameStrings[i]);
      }
    }
  })
}

getFileList();


// Provided solution

     // var fs = require('fs')
     // var path = require('path')

     // var folder = process.argv[2]
     // var ext = '.' + process.argv[3]

     // fs.readdir(folder, function (err, files) {
     //   if (err) return console.error(err)
     //   files.forEach(function(file) {
     //       if (path.extname(file) === ext) {
     //           console.log(file)
     //       }
     //   })
     // })