var fs = require('fs');
var path = require('path');

var getFileList = function(dirName, fileNameExt, callback) {
  fs.readdir(dirName, function doneReading(err, arrayOfFileNameStrings){
    if (err) {
      return callback(err);
    }

    var filteredArray = [];


    for( var i = 0; i < arrayOfFileNameStrings.length; i++){

      if ( arrayOfFileNameStrings[i].includes("." + fileNameExt) ) {
        filteredArray.push(arrayOfFileNameStrings[i]);
      }

    } 

    callback(null, filteredArray);

  })
}

module.exports = getFileList;

// Export should have 3 parameters:
  // directoryName, fileNameExt, function sadf(err, data){
  // };


// can also use:
// arrayOfFileNameStrings = arrayofFileNameStrings.filter(function(file){

// Solution Provided

 //  _/Users/Willemina/.nvm/versions/node/v4.4.3/lib/node_modules/learnyounode/
 //  exercises/make_it_modular/solution/solution.js_ :

 //     var filterFn = require('./solution_filter.js')
 //     var dir = process.argv[2]
 //     var filterStr = process.argv[3]

 //     filterFn(dir, filterStr, function (err, list) {
 //       if (err)
 //         return console.error('There was an error:', err)

 //       list.forEach(function (file) {
 //         console.log(file)
 //       })
 //     })

 // ─────────────────────────────────────────────────────────────────────────────
 //  _/Users/Willemina/.nvm/versions/node/v4.4.3/lib/node_modules/learnyounode/
 //  exercises/make_it_modular/solution/solution_filter.js_ :

 //     var fs = require('fs')
 //     var path = require('path')

 //     module.exports = function (dir, filterStr, callback) {

 //       fs.readdir(dir, function (err, list) {
 //         if (err)
 //           return callback(err)

 //         list = list.filter(function (file) {
 //           return path.extname(file) === '.' + filterStr
 //         })

 //         callback(null, list)
 //       })
 //     }

     