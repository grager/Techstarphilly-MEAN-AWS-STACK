var mongoose = require('mongoose'),
	increment = require('mongoose-increment');

var TrainingSchema = new mongoose.Schema({
	courseName: String,
	topic: String,
	status: {type: String, default: 'Draft'},
	referenceNumber: String,
	courseOwner: String,
	trainingType: String,
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

TrainingSchema.plugin(increment, {
  modelName: 'TrainingModel',
  fieldName: 'referenceNumber',
  prefix: 'T-',
  start: 001,
  increment: 1,
});

module.exports = mongoose.model('TrainingModel', TrainingSchema);
