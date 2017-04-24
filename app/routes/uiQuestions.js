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
		
		res.json({message: 'Adding html question'});

	});	
});

//GET
router.get('/getHtmlQuestion', function(req, res) {

	HtmlQuestionModel.find(function(err, question) {
        if (err) res.send(err);

        res.json(question);
    });
	
});