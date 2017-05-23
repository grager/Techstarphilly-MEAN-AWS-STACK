// create a new express router
const express = require('express'),
	  path = require('path'),
	  router = express.Router(),
    jwt = require('jsonwebtoken'),
    AWS = require('aws-sdk'),
    fs = require('fs'),
	  mongoose = require('mongoose');

// export router
module.exports = router;

// middleware to use for jwt authenticate
router.use('/api',function(req, res, next) {

  console.log("authentication is happening!");

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, 'ilovetechstarphilly', function(err, decoded) {

      if (err) {

        return res.send({
          success: false,
          message:'Failed to authenticate token.'
        });

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

// middleware to upload quiz content to S3
router.use('/s3', function(req, res, next) {

  fs.readFile(req.body.filePath, function(err, data) {

    if (err) {

      console.log(err);

    } else {

      let base64data = new Buffer(data, 'binary');

      // Create an S3 client
      let s3 = new AWS.S3({
        signatureVersion: 'v4'
      });

      // Create a bucket and upload something into it
      let params = {
        Bucket: 'business-analyst-quiz-session', 
        Key: req.body.fileName,
        Body: base64data,
        Expires: 60,
        ContentType: 'application/pdf',
        ACL: 'public-read'
      };

      s3.putObject(params, function(err, data) {

        if (err) {

          console.log(err);

        } else {
          console.log(data);
          //Go to next function
          next();
        }
      })

    }
  })
});














