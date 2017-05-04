var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	email: String,
	name: String, 
    password: String,
    sex: String,
    dob: Date,
    major: String,
    school: String,
    identity: String,
    startDate: { 
    	type: Date, 
    	default: Date.now 
    },
    userGroup: String, 
    admin: {
    	type: Boolean,
    	default: false
    } 
});

module.exports = mongoose.model('userModel', userSchema);