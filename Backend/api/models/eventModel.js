'use strict';
let mongoose = require('../db');
let mongoosePaginate = require('mongoose-paginate');
let autoIncrement = require('mongoose-auto-increment');

let Schema = mongoose.Schema;

let EventSchema = new Schema({
  id: {
    type: Number, //Kiểu dữ liệu
    required: true, //Bắt buộc có
    unique: true, // Các id phải khác nhau
    index: true // Được đánh chỉ mục
  },
  user_create: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  start_time: {
    type: Date,
  },
  finish_time: {
    type: Date,
  },
  locate:{
    type: String,
  },
  address:{
    type: String,
  },
  content: {
    type: [],
  },
  Created_date: {
    type: Date,
    default: Date.now // Ngày tạo mặc định
  },
});

//Thêm plugin phân trang
EventSchema.plugin(mongoosePaginate);
//Thêm plugin tự động tăng id
EventSchema.plugin(autoIncrement.plugin, { model: 'Event', field: 'id' });

module.exports = mongoose.model('Event', EventSchema);