var mongoose = require('mongoose');

var AwarenessSchema = new mongoose.Schema({
	awarenessName: String,
	status: String,
	referenceNumber: String,
	awarenessOwner: String,
	awarenessType: String,
	primaryReason: String,
	associatedAP: String,
	initialLaunchDate: String,
	firstLaunchDate: String,
	countries: String,
	newHires: String,
	existingEmployees: String,
	contingentWorkers: String,
	audienceSize: String,
});

module.exports = mongoose.model('AwarenessModel', AwarenessSchema);

	

