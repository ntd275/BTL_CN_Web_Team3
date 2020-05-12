'use strict';
var mongoose = require('../db');
var Schema = mongoose.Schema;


var NewsSchema = new Schema({
  id: {
    type: String,
    required: true,
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
    default: Date.now
  },
});

module.exports = mongoose.model('News', NewsSchema);