// create a new express router
const express = require('express'),
	  path = require('path'),
	  router = express.Router(),
	  mongoose = require('mongoose');

// export router
module.exports = router;

// middleware to use for jwt authenticate
router.use(function(req, res, next) {

  console.log("authentication is happening!");

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, 'ilovetechstarphilly', function(err, decoded) {

      if (err) {

        return res.json('Failed to authenticate token.');

      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});














