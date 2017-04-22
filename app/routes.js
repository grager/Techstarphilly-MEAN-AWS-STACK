// create a new express router
const express = require('express'),
	  path = require('path'),
	  router = express.Router(),
	  mongoose = require('mongoose');

// export router
module.exports = router;

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});














