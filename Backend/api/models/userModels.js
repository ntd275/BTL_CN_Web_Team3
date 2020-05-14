'use strict';
let mongoose = require('../db');
let Schema = mongoose.Schema;


let UserSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String, 
    required: true, 
    index: { unique: true }
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
    default: Date.now
  },
});

module.exports = mongoose.model('User', UserSchema);