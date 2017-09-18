var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// add middleware
app.use(function(req, res, next) {

// allow any origin to access the server
res.header("Access-Control-Allow-Origin", "*");

// indicates available HTTP response headers
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

// ROUTES 
app.get('/', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.post('/users', function(req, res) {
  console.log(req.body); 
 res.send(req.body);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);