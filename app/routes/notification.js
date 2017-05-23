// create a new express router
const express = require('express'),
	  router = express.Router(),
      nodemailer = require('nodemailer');

// export router
module.exports = router;

router.post('/sayHello',function(req, res) {
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'techstarphillyinfo@gmail.com',
            pass: 'karl111024'
        }
    });

    let mailOptions = {
        sender: req.body.name,
        from: "techstarphillyinfo@gmail.com", // sender address
        to: 'techstarphilly@gmail.com', // list of receivers
        cc: 'karenmou9501@gmail.com',
        subject: 'Questions about the TechStarPhilly', // Subject line
        html: '<p>'+ req.body.name +'</p>'+
              '<p>'+ req.body.email +'</p>'+ 
              '<p>'+ req.body.phone +'</p>'+
              '<p>'+ req.body.message +'</p>'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }

        res.status(200).send('Message sent:' + info.response);
    });
});

router.post('/sendEmailNotification',function(req, res) {
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'techstarphillyinfo@gmail.com',
            pass: 'karl111024'
        }
    });

    let mailOptions = {
        from: "techstarphillyinfo@gmail.com", // sender address
        to: req.body.mapId, // list of receivers
        cc: 'techstarphilly@gmail.com, karenmou9501@gmail.com',
        subject: 'You have one notification from the TechStarPhilly', // Subject line
        html: '<p>'+ req.body.title +'</p>'+
              '<p>'+ req.body.subTitle +'</p>'+ 
              '<p>'+ req.body.body +'</p>'+
              '<p>Here is the file: '+ req.body.fileName +'</p>',
        attachments: [{  
            filename: req.body.fileName,
            path: req.body.fileUrl
        }]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }

        res.status(200).send('Notification sent:' + info.response);
    });
});

router.post('/submitBAQuiz',function(req, res) {

    console.log(req.body)
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'techstarphillyinfo@gmail.com',
            pass: 'karl111024'
        }
    });

    let mailOptions = {
        from: "techstarphillyinfo@gmail.com", // sender address
        to: req.body.email, // list of receivers
        cc: 'techstarphilly@gmail.com, karenmou9501@gmail.com',
        subject: 'You have submitted the: ' + req.body.session, // Subject line
        html: '<p>Here is an overview of the quiz.</p>',
        attachments: [{  
            filename: req.body.fileName,
            path: req.body.filePath
        }]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }

        res.status(200).send('Message sent:' + info.response);
    });
});