// create a new express router
const express = require('express'),
	  router = express.Router(),
	  AWS = require('aws-sdk');

// export router
module.exports = router;

//Upload file to AWS S3
router.get('/uploadUIResume', function(req, res) {
	// Create an S3 client
	let s3 = new AWS.S3();

	// Create a bucket and upload something into it
	let myBucket = 'web-developer',
		myKey = 'hello_world.txt';

	s3.createBucket({Bucket: myBucket}, function(err, data) {

	if (err) {

	   console.log(err);

	   } else {

	     let params = {Bucket: myBucket, Key: myKey, Body: 'Hello!'};

	     s3.putObject(params, function(err, data) {

	         if (err) {

	             console.log(err)

	         } else {

	             console.log("Successfully uploaded data to " + myBucket + "/" + myKey);

	         }

	      });

	   }

	});
});

router.get('/getListOfFiles/:week', function(req, res) {
	
	let s3 = new AWS.S3();

	let bucketName = 'business-analyst-' + req.params.week;

	s3.listObjects({Bucket: bucketName}, function(err, data) {
		
		if (err) res.send(err);
		
		res.send(data);
	});

});

router.post('/getSignedUrl/:week', function(req, res) {

	let s3 = new AWS.S3();

	let params = {Bucket: 'business-analyst-' + req.params.week, Key: req.body.fileName};

	let	signedUrl = s3.getSignedUrl('getObject', params, function(err, url) {
		
		if (err) res.send(err);

		res.send(url);
	});
	
});