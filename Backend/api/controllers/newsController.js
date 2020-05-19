'use strict';

let mongoose = require('../db'),
    News = require('../models/newsModel');

//Lấy tất cả tin tức
exports.get_all_news = function(req, res) {
  News.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

//Phân trang tin tức
exports.get_page = function (req, res) {
  News.paginate({}, { page: req.params.pagenum, limit: 8 }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
}

//Tạo 1 bài tin tức
exports.create_a_news = function(req, res) {
  let new_news = new News(req.body);
  new_news.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

//Lấy 1 bài tin tức
exports.get_a_news = function(req, res) {
  News.findOneAndUpdate({ id: req.params.newsId}, {$inc:{'view':1}}, { new: true }, function (err, data) {
    if (err)
      res.send(err);
    else{
      if(data){
        res.json(data);
      } else {
        res.json({ message: "Does not exist"});
      }
    }
  });
};

//API cập nhật 1 bài tin tức
exports.update_a_news = function(req, res) {
  News.findOneAndUpdate({ id: req.params.newsId,user_create: req.jwtDecoded.data.username}, req.body, { new: true }, function (err, data) {
    if (err)
      res.send(err);
    else{
      if(data){
        res.json(data);
      } else {
        res.json({ message: 'Unauthorized'});
      }
    }
  });
};

//Xóa bài tin tức
exports.delete_a_news = function(req, res) {
  News.remove({ id: req.params.newsId,user_create: req.jwtDecoded.data.username }, function (err, data) {
    if (err)
      res.send(err);
    else{
      if(data.deletedCount){
        res.json({ message: 'News successfully deleted' });
      } else {
        res.json({ message: 'Unauthorized'});
      }
    }
    
  });
};

//Lấy bài tin trước
exports.prev_news = function(req, res){
  News.findOne({ id: {$lt:req.params.newsId} },null,{sort:{id:-1}}, function (err, data) {
    if (err)
      //Trả về nếu lỗi
      res.send(err);
    else
    //Trả về bản ghi nếu không lỗi
    res.json(data);
  });
}

//Lấy bài tin sau
exports.next_news = function(req, res){
  News.findOne({ id: {$gt:req.params.newsId} },null,{sort:{id:1}}, function (err, data) {
    if (err)
      //Trả về nếu lỗi
      res.send(err);
    else
    //Trả về bản ghi nếu không lỗi
    res.json(data);
  });
}

//Lấy 8 tin tức mới nhất
exports.get_top_8_newest_news = function(req,res){
  News.find({},null,{sort:{Created_date:'desc'},limit:8},function(err,data){
    if(err){
      res.send(err);
    }
    else {
      res.json(data);
    }
  })
}

//Lấy 3 sự kiện nổi bật
exports.get_top_3_trend_news = function(req,res){
  News.find({},null,{sort:{view:'-1'},limit:3},function(err,data){
    if(err){
      res.send(err);
    }
    else {
      res.json(data);
    }
  })
}