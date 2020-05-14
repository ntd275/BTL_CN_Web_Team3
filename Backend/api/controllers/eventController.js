'use strict';

let mongoose = require('../db'),
  Event = require('../models/eventModel');


exports.get_all_event = function (req, res) {
<<<<<<< HEAD
  //Tìm hết tất cả event trong DB
=======
  // console.log(req);
>>>>>>> ea295d0cc0bf913de942f2bfd3464945a435142e
  Event.find({}, function (err, data) {
    if (err)
      //Trả về nếu bị lỗi
      res.send(err);
    //Trả dữ liệu nếu không lỗi
    res.json(data);
  });
};
;
exports.create_a_event = function (req, res) {
<<<<<<< HEAD
  //Tạo 1 sự kiện mới
=======
  console.log(req.body);
>>>>>>> ea295d0cc0bf913de942f2bfd3464945a435142e
  let new_event = new Event(req.body);
  //Lưu vào DB
  new_event.save(function (err, data) {
    if (err)
      //Trả về nếu lỗi
      res.send(err);
<<<<<<< HEAD
    //Trả về bản ghi nếu không lỗi
=======
      console.log("day la data: ");
      console.log(data);
>>>>>>> ea295d0cc0bf913de942f2bfd3464945a435142e
    res.json(data);
  });
};

exports.get_a_event = function (req, res) {
  //Tìm bản ghi bằng id
  Event.find({ id: req.params.eventId }, function (err, data) {
    if (err)
      //Trả về nếu lỗi
      res.send(err);
    //Trả về bản ghi nếu không lỗi
    res.json(data);
  });
};


exports.update_a_event = function (req, res) {
  //Tìm bản ghi và cập nhật bằng id dữ liệu mới lấy từ req.body
  Event.findOneAndUpdate({ id: req.params.eventId }, req.body, { new: true }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_event = function (req, res) {
  //Xóa bản ghi bằng id
  Event.remove({ id: req.params.eventId }, function (err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'Event successfully deleted' });
  });
};

exports.get_page = function (req, res) {
  //Phân trang với pagesize = 8
  Event.paginate({}, { page: req.params.pagenum, limit: 8 }, function (err, data) {
    if (err)
      res.send(err);
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

