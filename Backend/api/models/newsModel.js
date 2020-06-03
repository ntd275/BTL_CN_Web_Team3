'use strict';
let mongoose = require('../db');
let mongoosePaginate = require('mongoose-paginate');
let autoIncrement = require('mongoose-auto-increment');
let Schema = mongoose.Schema;


let NewsSchema = new Schema({
  id: {
    type: Number, // Kiểu dữ liệu
    required: true, // Bắt buộc có
  },
  user_create: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  content: {
    type: [],
  },
  view: {
    type: Number,
    default: 0
  },
  allow: {
    type: String,
    default: "pending",
    required: true,
  },
  Created_date: {
    type: Date,
    default: Date.now // Ngày tạo mặc định
  },
});

//Thêm plugin phân trang
NewsSchema.plugin(mongoosePaginate);
//Thêm plugin tự động tăng id
NewsSchema.plugin(autoIncrement.plugin, { model: 'News', field: 'id' });

module.exports = mongoose.model('News', NewsSchema);