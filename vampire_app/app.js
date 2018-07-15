// 1. Require your node modules

const express = require('express');
const app = express();

const Vampire = require("./models/vampire");

// 2. Require your model (and possibly your extra data source);
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//require('./db/db');


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


// 3. Connect your database and collection name

// 4. Open your mongoose connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vampires');



mongoose.connection.on('connected', () => {
	console.log("Mongoose is connected")
});

mongoose.connection.on('error', (err) => {
	console.log(err, ' mongoose failed to connect')
});

mongoose.connection.on('disconnected', () => {
	console.log(err, ' mongoose failed to disconnect')
});


/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// ### Add some new vampire data

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
app.listen(3000, () => {
  console.log('listening on port 3000');
});