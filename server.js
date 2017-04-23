//load environment variables
require('dotenv').config();

//grab our dependencies
const express = require('express'),
	  app = express(),
	  port = process.env.PORT || 8081,
	  mongoose = require('mongoose'),
	  bodyParser = require('body-parser'),
	  nodemailer = require('nodemailer');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//configure our application
//tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

//connect to our datablase
mongoose.connect(process.env.DB_URI);

//set the routes
app.use(require('./app/routes'));
app.use(require('./app/routes/notification'));

app.all('/*', function(req, res) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname + '/public' });
});

//start our server
app.listen(port, () => {
	console.log('app is running at ' + port + '!');
});
