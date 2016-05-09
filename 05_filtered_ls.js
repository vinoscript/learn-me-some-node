 // ## FILTERED LS (Exercise 5 of 13)

 //  Create a program that prints a list of files in a given directory,
 //  filtered by the extension of the files. You will be provided a directory
 //  name as the first argument to your program (e.g. '/path/to/dir/') and a
 //  file extension to filter by as the second argument.

 //  For example, if you get 'txt' as the second argument then you will need to
 //  filter the list to only files that end with .txt. Note that the second
 //  argument will not come prefixed with a '.'.

 //  Keep in mind that the first arguments of your program are not the first
 //  values of the process.argv array, as the first two values are reserved for
 //  system info by Node.

 //  The list of files should be printed to the console, one file per line. You
 //  must use asynchronous I/O.

 // ─────────────────────────────────────────────────────────────────────────────

 // ## HINTS

 //  The fs.readdir() method takes a pathname as its first argument and a
 //  callback as its second. The callback signature is:

 //     function callback (err, list) { /* ... */ }

 //  where list is an array of filename strings.

 //  Documentation on the fs module can be found by pointing your browser here:
 //  file:///Users/Willemina/.nvm/versions/node/v4.4.3/lib/node_modules/learnyo
 //  unode/node_apidoc/fs.html

 //  You may also find node's path module helpful, particularly the extname
 //  method.

 //  Documentation on the path module can be found by pointing your browser
 //  here:
 //  file:///Users/Willemina/.nvm/versions/node/v4.4.3/lib/node_modules/learnyo
 //  unode/node_apidoc/path.html

var fs = require('fs');
var dirName = process.argv[2];
var fileExt = process.argv[3];

function getFileList(){
  fs.readdir(dirName, function doneReading(err, arrayOfFileNameStrings){
    for( var i = 0; i < arrayOfFileNameStrings.length; i++){
      // var extension = arrayOfFileNameStrings[i].split('.').pop();
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