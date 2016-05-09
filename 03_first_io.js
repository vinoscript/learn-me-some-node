var fs = require('fs')

var inputFile = process.argv[2];

var bufferFile = fs.readFileSync(inputFile);

var outputString = bufferFile.toString();

var splitStringArray = outputString.split('\n')

var numOfNewLines = splitStringArray.length - 1;

console.log(numOfNewLines);
