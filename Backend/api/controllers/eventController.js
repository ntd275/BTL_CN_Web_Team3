'use strict';

let mongoose = require('../db'),
  Event = require('../models/eventModel');


exports.get_all_event = function (req, res) {
  Event.find({}, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.create_a_event = function (req, res) {
  let new_event = new Event(req.body);
  new_event.save(function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.get_a_event = function (req, res) {
  Event.find({ id: req.params.eventId }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.update_a_event = function (req, res) {
  Event.findOneAndUpdate({ id: req.params.eventId }, req.body, { new: true }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_event = function (req, res) {
  Event.remove({ id: req.params.eventId }, function (err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'Event successfully deleted' });
  });
};

exports.get_page = function (req, res) {
  Event.paginate({}, { page: req.params.pagenum, limit: 8 }, function (err, data) {
    console.log(data);
    if (err)
      res.send(err);
    res.json(data);
  });
}

exports.post_cmt = async function (req, res) {
  try {
    const event = await Event.findOne({ id: req.body.id });
    event.comment.push(req.body.comment)
    await event.save();
    res.json({ message: "Success" });
  } catch (err) {
    res.json(err);
  }
}

