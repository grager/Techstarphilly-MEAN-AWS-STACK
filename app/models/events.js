var mongoose = require('mongoose'),
	increment = require('mongoose-increment');

var eventsSchema = mongoose.Schema({
	id: String,
	title: String,
    content: String,
    url: String,
    time: String,
    location: String,
    allDay: {
    	type: Boolean,
    	default: false
    },
    startDate:{ 
    	type: Date, 
    	default: Date.now 
    },
    endDate: { 
    	type: Date, 
    	default: Date.now 
    }
});

eventsSchema.plugin(increment, {
  modelName: 'eventsModel',
  fieldName: 'id',
  start: 001,
  increment: 1,
});

module.exports = mongoose.model('eventsModel', eventsSchema);