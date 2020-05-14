'use strict';
let mongoose = require('mongoose');

//Kết nối DB
let mongoDB = 'mongodb://localhost/'+process.env.DB_NAME; // Tên DB

mongoose.connect(mongoDB); 
//Kiểm tra kết nối
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;