'use strict';
let mongoose = require('mongoose');
let autoIncrement = require('mongoose-auto-increment');

//Kết nối DB
let mongoDB = "mongodb+srv://ducpb:ducpb@ducpb-wpscg.mongodb.net/WEB?retryWrites=true&w=majority"

mongoose.connect(mongoDB); 
//Kiểm tra kết nối
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

autoIncrement.initialize(db);

module.exports = mongoose;