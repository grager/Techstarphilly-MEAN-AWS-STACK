var mongoose = require('mongoose');

var postsSchema = new mongoose.Schema({
	title: String,
	description: String,
	body: String,
	author: String,
	date: String,
	category: String
},{
    versionKey: false
});

module.exports = mongoose.model('postsModel', postsSchema);