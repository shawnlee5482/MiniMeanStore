// require express so that we can build an express app
var express = require('express');

// require path so that we can use path stuff like path.join
var path = require('path');

// instantiate the app
var app = express();

// include mongoose.js
require('./server/config/mongoose.js');

var bodyParser = require('body-parser'); 
app.use(bodyParser.json());

// this line requires and runs the code from our routes.js file and passes it app so that we can attach our routing rules to our express application!
require('./server/config/routes.js')(app);

// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, '/client')));
app.listen(8000, function() {
  console.log('listening on: 8000');
});