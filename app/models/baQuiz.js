var mongoose = require('mongoose'),
	increment = require('mongoose-increment');

var baQuizSchema = new mongoose.Schema({
	referenceNumber: String,
	question: String,
	category: String,
	session: String
});

baQuizSchema.plugin(increment, {
  modelName: 'baQuizModel',
  fieldName: 'referenceNumber',
  start: 001,
  increment: 1,
});


module.exports = mongoose.model('baQuizModel', baQuizSchema);