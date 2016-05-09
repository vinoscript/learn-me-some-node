
var fs = require('fs')
var inputFile = process.argv[2];
var numOfNewLines = undefined;

function findNewLines(callback) {
  fs.readFile(inputFile, function doneReading(err, fileContents) {
    numOfNewLines = fileContents.toString().split('\n').length - 1;
    callback();
  })
}

function logNewLines(){
  console.log(numOfNewLines);
}

findNewLines(logNewLines)



// Solution provided:

 // var fs = require('fs')
 // var file = process.argv[2]

 // fs.readFile(file, function (err, contents) {
 //   // fs.readFile(file, 'utf8', callback) can also be used
 //   var lines = contents.toString().split('\n').length - 1
 //   console.log(lines)
 // })