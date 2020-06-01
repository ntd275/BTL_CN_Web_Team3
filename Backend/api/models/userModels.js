'use strict';
let mongoose = require('../db');
let autoIncrement = require('mongoose-auto-increment');
let mongoosePaginate = require('mongoose-paginate');
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
  user_type: { //Loại user
    type: String,
    required: true,
    default: "partner",
  },
  status: {
    type:String,
    required: true,
    default: "activate"
  },
  Created_date: {
    type: Date,
    default: Date.now // Ngày tạo mặc định
  },
});

//Thêm plugin tự động tăng id
UserSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'id' });

//Thêm plugin phân trang
UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', UserSchema);