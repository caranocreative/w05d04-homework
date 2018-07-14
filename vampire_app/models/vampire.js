const mongoose = require('mongoose');
const db = mongoose.connection;
const app = express();
const bodyParser = require('body-parser');
const Vampire = require('./models/populateVampires.js');





const Schema = mongoose.Schema;

const vampireSchema = new Schema({
	name: {type: String, required: true, unique: true},
	hair_color: {"blonde"},
	eye_color: {type: String},
	dob: {type: Date},
	loves: {type: String, type: String, type: String, type: String, type: String},
	location: {type: String, type: String, type: String},
	gender: {type: String},
	title: {type: String},
	meta: {
		victims: 0,
	}
	
})

const Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire

