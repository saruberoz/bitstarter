var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs')
var buff = new Buffer(fs.readFileSync('index.html', 'utf-8'));
var str = buf.toString(buff)

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
