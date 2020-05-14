'use strict';
let mongoose = require('../db');
let Schema = mongoose.Schema;

//Tạo Schema cho user
let UserSchema = new Schema({
  id: {
    type: String, //Kiểu dữ liệu
    required: true, //Bắt buộc phải có
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String, 
    required: true, 
    index: { unique: true } // các user name phải phân biệt
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now // Ngày tạo mặc định
  },
});



module.exports = mongoose.model('User', UserSchema);