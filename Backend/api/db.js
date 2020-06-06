'use strict';
let mongoose = require('mongoose');
let autoIncrement = require('mongoose-auto-increment');
let user = process.env.USERDB;
let password = process.env.PASSWORD;

//connection string;
let mongoDB = "mongodb://" + user + ":" + password + "@20.44.200.142:27017/WEB"

//console.log(mongoDB);

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//Kết nối DB
mongoose.connect(mongoDB);
//Kiểm tra kết nối
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

autoIncrement.initialize(db);

module.exports = mongoose;