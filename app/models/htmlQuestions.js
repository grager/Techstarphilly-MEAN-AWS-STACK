var mongoose = require('mongoose'),
	increment = require('mongoose-increment');

var htmlQuestionSchema = new mongoose.Schema({
	referenceNumber: String,
	title: String,
	question: String,
	anwser: String,
	code: String,
},{
    versionKey: false
});

htmlQuestionSchema.plugin(increment, {
  modelName: 'htmlQuestionModel',
  fieldName: 'referenceNumber',
  start: 001,
  increment: 1,
});


module.exports = mongoose.model('htmlQuestionModel', htmlQuestionSchema);