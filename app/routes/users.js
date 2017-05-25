// create a new express router
const express = require('express'),
	  router = express.Router(),
	  mongoose = require('mongoose'),
	  jwt    = require('jsonwebtoken'),
	  UserModel   = require('../models/users');

// export router
module.exports = router;

//Sign up users
router.post('/signup', function(req, res) {

	let userModel = new UserModel(req.body);

	//save the sample user
	userModel.save(function(err) {
		if (err) res.send(err);
		
		res.send('This account has been created successfully.');

	});
});

//Get all user lists
router.get('/api/getAllUsers', function(req, res) {

	UserModel.find(function(err, users) {
        if (err) res.send(err);

        res.send(users);
    });
});

//Get all user group
router.get('/getUserGroup', function(req, res) {
	UserModel.distinct('userGroup', function(err, group) {
		if (err) res.send(err);

		res.send(group);
	})
});

//Get list of user emails for target group
router.post('/getUserEmails', function(req, res) {

	UserModel.find({userGroup: req.body.userGroup}, function(err, user) {
		
		if (err) res.send(err);
		
		res.send(user);
	});
});

//Get user detail
router.post('/getUserDetail', function(req, res) {

	UserModel.findOne({email: req.body.email}, function(err, user) {
		
		if (err) res.send(err);

		res.send(user);
	});
});

//authentication
router.post('/authenticate', function(req, res) {
	
	UserModel.findOne({
		email: req.body.email
	}, function(err, user) {

		if (err) res.send(err);

		if (!user) {

			res.json({
				success: false,
				message: "This account does not exist."});

		} else if (user) {
			//check if password matches
			if(user.password != req.body.password) {

				res.json({
					success: false,
					message:"The password is not correct"
				});
				
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
		          user: user,
		          token: token
		        });
			}
		}
	});
});

//Update password based on email
router.put('/updatePassord', function(req, res) {

	UserModel.findOne({email: req.body.email}, function(err, user) {

		user.password = req.body.password;

		user.save(function(err) {

			if (err) res.send(err);
			res.json('The password has been updated successfully.')
    	});			
		
	})
});














