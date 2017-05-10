// create a new express router
const express = require('express'),
	  router = express.Router(),
	  mongoose = require('mongoose'),
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