'use strict';
let mongoose = require('../db');
let mongoosePaginate = require('mongoose-paginate');
let Schema = mongoose.Schema;

let EventSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
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

EventSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Event', EventSchema);