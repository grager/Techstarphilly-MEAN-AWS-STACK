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
	/*var userModel = new UserModel({
		email:'karenmou9501@gmail.com',
		name: 'mouqinyao',
		password: 'karl111024',
		sex: 'female',
    	dob: '10/01/1991',
    	major: 'Finance',
    	school: 'Syracuse Univerity',
    	identity: 'H1B',
    	startDate: '05/02/2017',
		userGroup: 'ba',
		admin: true
	})*/

	var userModel = new UserModel(req.body);

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














