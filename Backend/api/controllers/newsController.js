'use strict';

let mongoose = require('../db'),
    News = require('../models/newsModel');

exports.get_all_news = function(req, res) {
  News.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.get_page = function (req, res) {
  News.paginate({}, { page: req.params.pagenum, limit: 8 }, function (err, data) {
    console.log(data);
    if (err)
      res.send(err);
    res.json(data);
  });
}

exports.create_a_news = function(req, res) {
  let new_news = new News(req.body);
  new_news.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.get_a_news = function(req, res) {
  News.find({id:req.params.newsId}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.update_a_news = function(req, res) {
  News.findOneAndUpdate({id: req.params.newsId}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete_a_news = function(req, res) {
  News.remove({ id: req.params.newsId }, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'News successfully deleted' });
  });
};
