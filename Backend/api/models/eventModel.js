'use strict';
let mongoose = require('../db');
let mongoosePaginate = require('mongoose-paginate');
let Schema = mongoose.Schema;

let EventSchema = new Schema({
  id: {
    type: String, //Kiểu dữ liệu
    required: true, //Bắt buộc có
    unique: true, // Các id phải khác nhau
    index: true // Được đánh chỉ mục
  },
  name: {
    type: String,
    required: true
  },
  type: {
      type: String,
  },
  date: {
      type: Date,
  },
  content: {
      type: String,
  },
  comment: {
      type: [],
  },
  Created_date: {
    type: Date,
    default: Date.now // Ngày tạo mặc định
  },
});

//Thêm plugin phân trang
EventSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Event', EventSchema);