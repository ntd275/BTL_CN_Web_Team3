'use strict';
let mongoose = require('../db');
let Schema = mongoose.Schema;
let mongoosePaginate = require('mongoose-paginate');


let NewsSchema = new Schema({
  id: {
    type: String, // Kiểu dữ liệu
    required: true, // Bắt buộc có
  },
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now // Ngày tạo mặc định
  },
});

//Thêm plugin phân trang
NewsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('News', NewsSchema);