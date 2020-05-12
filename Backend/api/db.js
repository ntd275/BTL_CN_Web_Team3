'use strict';
let mongoose = require('mongoose');
let mongoDB = 'mongodb://localhost/'+process.env.DB_NAME;

mongoose.connect(mongoDB); 

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;