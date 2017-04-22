var mongoose = require('mongoose');

var CurriculumSchema = new mongoose.Schema({
	courseName: String,
	curriculumName: String,
	curriculumId: String,
	referenceNumber: String,
	curriculumOwner: String,
	rollOutDate: String,
	lobRegion: String,
	compliance: String,
	newHires: String,
	existingEmployees: String,
	transfers: String
});

module.exports = mongoose.model('CurriculumModel', CurriculumSchema);