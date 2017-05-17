// create a new express router
const express = require('express'),
	  router = express.Router(),
	  BAQuizModel = require('../models/baQuiz');

// export router
module.exports = router;

router.post('/savebaQuiz', function(req, res) {
	let baQuizModel = new BAQuizModel({
		question: 'List some of documentations a BA might need to write in a project.',
		category: 'ba',
		session: 'quiz1'
	});

	baQuizModel.save(function(err) {
		if (err) res.send(err);

		res.send("This quiz has been created successfully.");

	})
});

router.get('/getBaQuizSession/:session', function(req, res) {

	BAQuizModel.find({"session": req.params.session}, function(err, quiz) {
		if (err) res.send(err);

		res.send(quiz);
	});
});