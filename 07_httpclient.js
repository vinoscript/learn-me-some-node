var http = require('http');

var inputUrl = process.argv[2];

http.get(inputUrl, function(res){
  res.setEncoding('utf8');
  res.on('data', console.log);

})


// Solution provided:

     // var http = require('http')

     // http.get(process.argv[2], function (response) {
     //   response.setEncoding('utf8')
     //   response.on('data', console.log)
     //   response.on('error', console.error)
     // }).on('error', console.error)
