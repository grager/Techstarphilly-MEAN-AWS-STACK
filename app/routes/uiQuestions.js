// create a new express router
const express = require('express'),
	  router = express.Router(),
	  mongoose = require('mongoose'),
	  HtmlQuestionModel = require('../models/htmlQuestions');

// export router
module.exports = router;

//HTML Questions

//CREATE
router.post('/saveHtmlQuestion', function(req, res) {
	
	var htmlQuestionModel = new HtmlQuestionModel(req.body);

	htmlQuestionModel.save(function(err) {
		if (err) res.send(err);
		
		res.json('This question list has been created successfully.');

	});	
});

//GET
router.get('/getHtmlQuestion', function(req, res) {

	HtmlQuestionModel.find(function(err, question) {
        if (err) res.send(err);

        res.json(question);
    });
	
});

//UPDATE
router.put('/updateHtmlQuestion/:referenceNumber',function(req, res) {

    HtmlQuestionModel.find({"referenceNumber":req.params.referenceNumber},function(err, question) {
        if (err) res.send(err);

        res.json(question);

    });
});

//DELETE
router.delete('/deleteHtmlQuestion/:referenceNumber',function(req, res) {

    HtmlQuestionModel.remove({"referenceNumber":req.params.referenceNumber},function(err) {
        if (err) res.send(err);

        res.json('This question has been deleted successfully.');
    });
});