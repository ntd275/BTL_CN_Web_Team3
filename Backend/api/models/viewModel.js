'use strict';
let mongoose = require('../db');
let Schema = mongoose.Schema;

//Tạo Schema cho user
let viewSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    user_create: {
        type: String,
        required: true,
    },
    created_date: {
        type: Date,
        default: Date.now // Ngày tạo mặc định
    },
});

module.exports = mongoose.model('View', viewSchema);