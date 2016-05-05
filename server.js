var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;
var data = require('./db.js');


app.get('/', function(req, res) {
  var dnaData = data.retrieveOne();
  res.send(dnaData);
});

app.listen(port, function() {
  console.log('Listening at :' + port);
});
