// create a new express router
const express = require('express'),
	  router = express.Router(),
	  BAQuizModel = require('../models/baQuiz'),
	  _ = require('lodash'),
	  fs = require('fs'),
	  PDFDocument = require('pdfkit');

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

	doc.pipe(fs.createWriteStream('app/files/'+ fileDetail.session +'_'+ fileDetail.username +'.pdf')).on('finish', function() {
		
		res.status(200).json('This pdf has been created.');

	}).on('error', function(err) {

		res.status(500).json(err);
	});

});