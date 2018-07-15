
const mongoose = require('mongoose');


const vampireSchema = new mongoose.Schema({
	name: {type: String, required: true, unique: true},
	hair_color: {type: String},
	eye_color: {type: String},
	dob: {type: Date},
	loves: {type: String, type: String, type: String, type: String, type: String},
	location: {type: String, type: String, type: String},
	gender: {type: String},
	title: {type: String},
	meta: {
		victims: 0,
	}
	
});

module.exports = mongoose.model('Vampire', vampireSchema);



