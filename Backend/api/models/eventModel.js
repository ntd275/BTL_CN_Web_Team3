'use strict';
var mongoose = require('../db');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  id: {
    type: String,
    required: true
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
    default: Date.now
  },
});

module.exports = mongoose.model('Event', EventSchema);