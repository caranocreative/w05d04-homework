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
app.get('/vampires/:id', (req, res) => {
   res.render('/vampire/show.ejs', {
    vampire: Vampire[req.params.id] 
  });
});

/////////////////////////////////////////////////
// ## REPLACE
// app.post('/vampire', (req, res) => {
//   vampires.create(req.body, (err, createdVampire)=> {
//     if(err){
//       console.log(err)
//       res.send(err);
//     } else {
//       console.log(createdVampire)
//       res.redirect('/vampire');
//     }
//   });
// });

// app.get('/vampire/edit', (req, res) => {
//     res.render('/views/edit.ejs');
// });

// app.get('/vampire/:id/edit', (req, res) => {
//   vampires.findById(req.params.id, (err, foundVampire) => {
//     res.render('/views/edit.ejs', {
//       vampires: foundVampire,
//       });
//    });

// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE
// Vampires.findByIdAndUpdate(req.params.id, req.body, (err, updatedVampire) => {
//     if(err){
//       res.send(err);
//     } else {
//       //chek to see if it is updating correctly
//       console.log(updatedVampire, " check our model")
//       res.redirect('/vampire');
//     }
//   });
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE
// app.delete('/vampire/:id', (req, res) => {
//   Vampire.splice(req.params.index, 1);
//   console.log(req.params.index, ' this is req.params');
//   res.redirect('/vampire');
// });

// Vampires.findByIdAndRemove(req.params.id, (err, deletedVampire) => {
// 	if(err){
//       console.log(err, ' this is the error of delete');
//       res.send(err);
//     } else {
//       console.log(deletedVampire, " the deleted vampire in the delete route");
//       res.redirect('/vampire');
//     }
// });

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