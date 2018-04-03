var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
//var PORT = 3000;
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './public')));

// Add middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add routes
require(path.join(__dirname, './routing/apiRoutes'))(app);
require(path.join(__dirname, './routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Volunteer Finder app is listening on PORT: ' + PORT);
});