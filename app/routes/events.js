// create a new express router
const express = require('express'),
	  router = express.Router(),
	  EventsModel = require('../models/events');

// export router
module.exports = router;

router.post('/createEvent', function(req, res) {

	var eventModel = new EventsModel(req.body);

	eventModel.save(function(err) {
		if (err) res.send(err);

		res.send("This event has been created successfully");
	});
});

router.get('/getAllEvents', function(req, res) {

	EventsModel.find(function(err, events) {       
        if (err) res.send(err);

        res.send(events);
    });
});

router.get('/getSingleEvent/:id', function(req, res) {

    EventsModel.findOne({"id": req.params.id},function(err, event) {       
        if (err) res.send(err);

        res.send(event);
    });
});

router.put('/updateEvent/:id', function(req, res) {
    
	EventsModel.findOne({"id":req.params.id}, function(err, event) {
        
        event.title = req.body.title;
        event.content = req.body.content;
        event.url = req.body.url;
        event.time = req.body.time;
        event.location = req.body.location;
        event.allDay = req.body.allDay;
        event.startDate = req.body.startDate;
        event.endDate = req.body.endDate;

        event.save(function(err) {
			if (err) res.send(err);

			res.send('This event has been updated successfully.')
        });

    });

});