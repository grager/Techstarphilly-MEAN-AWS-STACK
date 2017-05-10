// create a new express router
const express = require('express'),
	  router = express.Router(),
	  AWS = require('aws-sdk'),
	  AnnouncementModel = require('../models/announcements');

// export router
module.exports = router;

//Create Announcement
router.post('/createAnnouncement', function(req, res) {

	var announcementModel = new AnnouncementModel(req.body);

	announcementModel.save(function(err, annoucement) {
		if (err) res.send(err);
		
		res.send('This annoucement has been created successfully.');
	});
});

//Get Annoucement based on user group and id 
router.post('/getFilteredAnnouncement', function(req, res) {
	
	AnnouncementModel.find({mapId: req.body.mapId},function(err, annoucements) {       
        if (err) res.send(err);

        res.send(annoucements);
    });
});

router.post('/uploadFiletoBucket', function(req, res) {

	// Create an S3 client
	let s3 = new AWS.S3({
		signatureVersion: 'v4'
	});

	// Create a bucket and upload something into it
	let myBucket = 'admin-portal-notification',
		fileName = req.body.fileName,
		fileType = req.body.fileType;

    let params = {
    	Bucket: myBucket, 
    	Key: fileName,
    	Expires: 60,
    	ContentType: fileType,
    	ACL: 'public-read'
    };

    s3.getSignedUrl('putObject', params, function (err, signedUrl) {
	  // send signedUrl back to client
	  	if (err) console.log(err);

	  	res.send(signedUrl);

	});
});


	

