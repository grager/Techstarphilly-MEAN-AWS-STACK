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