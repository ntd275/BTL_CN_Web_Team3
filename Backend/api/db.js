'use strict';
let mongoose = require('mongoose');
let autoIncrement = require('mongoose-auto-increment');

//Kết nối DB
let mongoDB = "mongodb://20.44.200.142:27017/WEB"

mongoose.connect(mongoDB); 
//Kiểm tra kết nối
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

autoIncrement.initialize(db);

module.exports = mongoose;