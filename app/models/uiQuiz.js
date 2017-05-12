var mongoose = require('mongoose'),
	increment = require('mongoose-increment');

var uiQuizSchema = new mongoose.Schema({
	referenceNumber: String,
	question: String,
	anwsers: Array,
	correctAnwser: String,
	category: String,
	session: String
});

uiQuizSchema.plugin(increment, {
  modelName: 'uiQuizModel',
  fieldName: 'referenceNumber',
  start: 001,
  increment: 1,
});


module.exports = mongoose.model('uiQuizModel', uiQuizSchema);