//load environment variables
require('dotenv').config();

//grab our dependencies
const express = require('express'),
	  app = express(),
	  port = process.env.PORT || 8081,
	  mongoose = require('mongoose'),
	  bodyParser = require('body-parser'),
	  morgan = require('morgan'),
	  AWS = require('aws-sdk');
	  //uuidV4 = require('uuid/v4')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

//configure our application
//tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

//connect to our datablase
mongoose.Promise = global.Promise;

//For local host development
mongoose.connect(process.env.DB_URI);

//set the routes
//Middleware Routes
app.use(require('./app/routes'));

//API Routes
app.use(require('./app/routes/notification'));
app.use(require('./app/routes/uiQuestions'));
app.use(require('./app/routes/posts'));
app.use(require('./app/routes/users'));
app.use(require('./app/routes/files'));
app.use(require('./app/routes/announcements'));

app.all('/*', function(req, res) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname + '/public' });
});

//start our server
app.listen(port, () => {
	console.log('app is running at ' + port + '!');
});
