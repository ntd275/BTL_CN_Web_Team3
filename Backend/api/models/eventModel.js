"use strict";
let mongoose = require("../db");
let mongoosePaginate = require("mongoose-paginate");
let Schema = mongoose.Schema;

let EventSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  start_time: {
    type: Date,
  },
  finish_time: {
    type: Date,
  },
  address: {
    type: String,
  },
  locate: {
    type: String,
  },
  content: {
    type: Array,
  },
  category: {
    type: String,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

EventSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Event", EventSchema);
