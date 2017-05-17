// create a new express router
const express = require('express'),
	  router = express.Router(),
	  UIQuizModel = require('../models/uiQuiz');

// export router
module.exports = router;

router.post('/saveuiQuiz', function(req, res) {
	let uiQuizModel = new UIQuizModel({
		question: 'which service can be used in Angular JS to request a api call?',
		anwsers: ['$http', '$q', '$timeout'],
		correctAnwser: '$http',
		category: 'angularjs',
		session: 'quiz1'
	});

	uiQuizModel.save(function(err) {
		if (err) res.send(err);

		res.send("This quiz has been created successfully.");

	})
});

router.get('/getUiQuizSession/:session', function(req, res) {

	UIQuizModel.find({"session": req.params.session}, function(err, quiz) {
		if (err) res.send(err);

		res.send(quiz);
	});
});