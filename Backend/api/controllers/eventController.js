'use strict';

let mongoose = require('../db'),
  Event = require('../models/eventModel');
  
exports.get_all_event = function (req, res) {
  //Tìm hết tất cả event trong DB
  Event.find({}, function (err, data) {
    if (err)
      //Trả về nếu bị lỗi
      res.send(err);
    else
    //Trả dữ liệu nếu không lỗi
    res.json(data);
  });
};
;
exports.create_a_event = function (req, res) {
  //Tạo 1 sự kiện mới
  let new_event = new Event(req.body);
  //Lưu vào DB
  new_event.save(function (err, data) {
    if (err)
      //Trả về nếu lỗi
      res.send(err);
    else
    //Trả về bản ghi nếu không lỗi
    res.json(data);
  });
};

exports.get_a_event = function (req, res) {
  //Tìm bản ghi bằng id
  Event.find({ id: req.params.eventId }, function (err, data) {
    if (err)
      //Trả về nếu lỗi
      res.send(err);
    else
    //Trả về bản ghi nếu không lỗi
    res.json(data);
  });
};


exports.update_a_event = function (req, res) {
  //Tìm bản ghi và cập nhật bằng id dữ liệu mới lấy từ req.body
  Event.findOneAndUpdate({ id: req.params.eventId }, req.body, { new: true }, function (err, data) {
    if (err)
      res.send(err);
    else
    res.json(data);
  });
};

exports.delete_a_event = function (req, res) {
  //Xóa bản ghi bằng id
  Event.remove({ id: req.params.eventId }, function (err, data) {
    if (err)
      res.send(err);
    else
    res.json({ message: 'Event successfully deleted' });
  });
};

exports.get_page = function (req, res) {
  //Phân trang với pagesize = 8
  Event.paginate({}, { page: req.params.pagenum, limit: 8 }, function (err, data) {
    if (err)
      res.send(err);
    else
    res.json(data);
  });
}

exports.get_all_by_category = function(req,res){
  Event.find({category: req.params.category}, function (err, data) {
    if (err)
      //Trả về nếu bị lỗi
      res.send(err);
    else
    //Trả dữ liệu nếu không lỗi
    res.json(data);
  });
}

exports.get_page_by_category = function(req, res){
  Event.paginate({category: req.params.category}, { page: req.params.pagenum, limit: 8 }, function (err, data) {
    if (err)
      res.send(err);
    else
    res.json(data);
  });
}

exports.post_cmt = async function (req, res) {
  try {
    //Tìm bản ghi bằng id
    const event = await Event.findOne({ id: req.body.id });
    //Thêm comment
    event.comment.push(req.body.comment)
    await event.save();
    res.json({ message: "Success" });
  } catch (err) {
    res.json(err);
  }
}

