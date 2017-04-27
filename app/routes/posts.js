// create a new express router
const express = require('express'),
	  router = express.Router(),
	  mongoose = require('mongoose'),
	  PostsModel = require('../models/posts');

// export router
module.exports = router;

//Create
router.post('/savePost', function(req, res) {
	
	var postModel = new PostsModel(req.body);

	postModel.save(function(err) {
		if (err) res.send(err);
		
		res.json('This post has been created successfully.');

	});	
});

//GET
router.get('/getAllPosts', function(req, res) {

	PostsModel.find(function(err, posts) {
        if (err) res.send(err);

        //Sorting the array based on date
        posts.sort(function(a,b){
        	return new Date(b.date) - new Date(a.date);
        });

        res.json(posts);
    });
	
});

//Filter GET
router.get('/getAllPosts/:category',function(req, res) {

    PostsModel.find({"category":req.params.category},function(err, posts) {
        if (err) res.send(err);

        //Sorting the array based on date
        posts.sort(function(a,b){
        	return new Date(b.date) - new Date(a.date);
        });

        res.json(posts);
    });
});