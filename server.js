var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;
var data = require('./db.js');
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);

app.get('/', function(req, res) {
  var dnaData = data.retrieveOne();
  res.send(JSON.stringify(dnaData));
});

app.listen(port, function() {
  console.log('Listening at :' + port);
});
