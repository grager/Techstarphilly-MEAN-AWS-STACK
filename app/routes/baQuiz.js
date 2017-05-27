// create a new express router
const express = require('express'),
	  router = express.Router(),
	  BAQuizModel = require('../models/baQuiz'),
	  UserModel   = require('../models/users'),
	  _ = require('lodash'),
	  fs = require('fs'),
	  PDFDocument = require('pdfkit');

// export router
module.exports = router;

router.post('/savebaQuiz', function(req, res) {
	let baQuizModel = new BAQuizModel({
		question: 'Please wrote one test cases in your previous project.',
		category: 'ba',
		session: 'quiz3'
	});

	baQuizModel.save(function(err) {
		if (err) res.send(err);

		res.send("This quiz has been created successfully.");

	})
});

router.get('/getBaQuizSession/:session', function(req, res) {

	BAQuizModel.find({'session': req.params.session}, function(err, quiz) {
		if (err) res.send(err);

		res.send(quiz);
	});
});

//Generate PDF
router.post('/generateBaQuizPDF', function(req, res) {
	
	let fileDetail = req.body.fileDetail;

	let doc = new PDFDocument();

	doc.fontSize(20).text(fileDetail.session).moveDown(2);

	_.forEach(fileDetail.quizContent, function(key, value) {
		//Write text to PDF file
		doc.fontSize(16).text(value+1 + '. ' + key.title).moveDown(0.5);
		
		doc.fontSize(14).text(key.anwser).moveDown(1);
	});

	doc.end();

	doc.pipe(fs.createWriteStream('public/assets/files/'+ fileDetail.session +'_'+ fileDetail.username +'.pdf')).on('finish', function() {
		
		res.status(200).json({
			success: true,
			mesage: 'This pdf has been created successfully.',
			fileName: fileDetail.session+'_'+fileDetail.username +'.pdf',
			filePath: 'public/assets/files/'+fileDetail.session+'_'+fileDetail.username +'.pdf'
		});

	}).on('error', function(err) {

		res.status(500).json(err);
	});

});

//Get User Quiz Status
router.post('/getUserBaQuizStatus', function(req, res) {
	
	UserModel.findOne({email: req.body.email}, function(err, user) {
		if (err) res.send(err);

		res.send(user);
	});
})

//Enable Test Case
router.put('/enableTestCase', function(req, res) {

	let quizSession = req.body.quizSession;

	UserModel.findOne({email: req.body.email}, function(err, user) {

		_.forEach(user.quiz, function(key, value) {
			
			if (Object.getOwnPropertyNames(key)[0] == quizSession) {
				
				user.quiz[value][quizSession] = 'Ready';

				user.quiz.set(value, user.quiz[value]);
				
				user.save(function(err) {
					if (err) res.send(err);
					res.json('The test case has been changed.')
				});
			}
		});

	});
});

//Disable Test Case
router.put('/disableTestCase', function(req, res) {

	let quizSession = req.body.quizSession;

	UserModel.findOne({email: req.body.email}, function(err, user) {
		
		_.forEach(user.quiz, function(key, value) {
			
			if (Object.getOwnPropertyNames(key)[0] == quizSession) {
				
				user.quiz[value][quizSession] = 'Not started';

				user.quiz.set(value, user.quiz[value]);
				
				user.save(function(err) {
					if (err) res.send(err);
					res.json('The test case has been changed.')
				});
			}
		});
	});
});




