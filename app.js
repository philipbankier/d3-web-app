var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// set the view engine to ejs
app.set('view engine', 'ejs')

// add middleware 
app.use(function(req, res, next) {

// allow any origin to access the server
res.header("Access-Control-Allow-Origin", "*");

// indicates available HTTP response headers
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.use(express.static(__dirname + '/staticFiles'));

// ROUTES 

// - Home page
app.get('/', (req, res) => {

  // render `home.ejs` with the list of posts
  res.render('home')
})

app.post('/users', function(req, res) {
  console.log(req.body); 
 res.send(req.body);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
