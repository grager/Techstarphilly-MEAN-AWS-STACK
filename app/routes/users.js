// create a new express router
const express = require('express'),
	  router = express.Router(),
	  mongoose = require('mongoose'),
	  jwt    = require('jsonwebtoken'),
	  UserModel   = require('../models/users');

// export router
module.exports = router;

//Sign up users
router.get('/signup', function(req, res) {
	var userModel = new UserModel({
		email:'karenmou9501@gmail.com',
		name: 'karenmou',
		password: 'karl111024',
		admin: true
	})

	//save the sample user
	userModel.save(function(err) {
		if (err) res.send(err);
		
		res.json('This account has been created successfully.');

	});
});

//Get all user lists
router.get('/getAllUsers', function(req, res) {

	UserModel.find(function(err, users) {
        if (err) res.send(err);

        res.json(users);
    });
});

//authentication
router.post('/authenticate', function(req, res) {
	
	UserModel.findOne({
		email: req.body.email
	}, function(err, user) {

		if (err) res.send(err);

		if (!user) {

			res.json("This account does not exist.");

		} else if (user) {
			//check if password matches
			if(user.password != req.body.password) {

				res.json("The password is not correct");
				
			} else {
				//if user is found and password is correct
				//create a token
				var token = jwt.sign(user, 'ilovetechstarphilly', {
					expiresIn: 1440 // expires in 24 hours
				});

				 // return the information including token as JSON
		        res.json({
		          success: true,
		          message: 'Enjoy your token!',
		          token: token
		        });
			}
		}
	});
});














