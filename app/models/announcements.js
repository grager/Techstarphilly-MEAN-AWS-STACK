var mongoose = require('mongoose');

var announcementSchema = mongoose.Schema({
	title: String,
    subTitle: String,
	body: String, 
    mapId: String,
    mapGroup: String
});

module.exports = mongoose.model('announcementModel', announcementSchema);