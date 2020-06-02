'use strict';

let mongoose = require('../db'),
    News = require('../models/newsModel');

//Lấy tất cả tin tức
exports.get_all_news = function(req, res) {
  News.find({allow: "approved"}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

//Phân trang tin tức
exports.get_page = function (req, res) {
  News.paginate({allow: "approved"}, { page: req.params.pagenum, limit: 8 }, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
}

//Tạo 1 bài tin tức
exports.create_a_news = function(req, res) {
  req.body.allow = "pending";
  let new_news = new News(req.body);
  new_news.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

//Lấy 1 bài tin tức
exports.get_a_news = function(req, res) {
  News.findOneAndUpdate({ id: req.params.newsId,allow: "approved"}, {$inc:{'view':1}}, { new: true }, function (err, data) {
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
  req.body.allow = "pending";
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
  News.findOne({ id: {$lt:req.params.newsId},allow: "approved" },null,{sort:{id:-1}}, function (err, data) {
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
  News.findOne({ id: {$gt:req.params.newsId},allow: "approved" },null,{sort:{id:1}}, function (err, data) {
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
  News.find({allow: "approved"},null,{sort:{Created_date:'desc'},limit:8},function(err,data){
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
  News.find({allow: "approved"},null,{sort:{view:'-1'},limit:3},function(err,data){
    if(err){
      res.send(err);
    }
    else {
      res.json(data);
    }
  })
}

//Lấy tin tức theo người đăng
exports.get_all_by_username = function (req, res) {
  News.find({ user_create: req.params.username ,allow: "approved"}, function (err, data) {
    if (err) {
      res.send(err);
    }
    else
      res.json(data);
  })
}

//Phân trang tin tức theo người tạo
exports.get_page_by_username = function (req, res) {
  News.paginate({ user_create: req.params.username ,allow: "approved"}, { page: req.params.pagenum, limit: pageSize }, function (err, data) {
    if (err) {
      res.send(err);
    }
    else
      res.json(data);
  })
}

//Thống kê số bài theo week của user
exports.count_news_by_week_and_username = function (req, res) {
  let now = new Date();
  let year = now.getFullYear();
  let pipeline = [
    {
      $project: { 
        week: { $week: '$created_date' },
        year: { $year: '$created_date'},
        user_create: 1,
      }
    },
    {
      $match: {
        user_create: req.params.username,
        year: year
      }
    },
    {
      $group: {
        _id: '$week',
        count: {
          $sum: 1,
        },
      }
    }
  ]
  if(req.jwtDecoded.data.user_type == "admin"){
    pipeline = [
      {
        $project: { 
          week: { $week: '$created_date' },
          year: { $year: '$created_date'},
          user_create: 1,
        }
      },
      {
        $match: {
          year: year,
        }
      },
      {
        $group: {
          _id: '$week',
          count: {
            $sum: 1,
          },
        }
      }
    ]
  }
  News.aggregate(pipeline,function(err,data){
    if(err) 
      res.send(err);
    else 
      res.json(data);
  })
}

//Thống kê số bài theo tháng của user
exports.count_news_by_month_and_username = function (req, res) {
  let now = new Date();
  let year = now.getFullYear();
  let pipeline = [
    {
      $project: { 
        month: { $month: '$created_date' },
        year: { $year: '$created_date'},
        user_create: 1,
      }
    },
    {
      $match: {
        user_create: req.params.username,
        year: year
      }
    },
    {
      $group: {
        _id: '$month',
        count: {
          $sum: 1,
        },
      }
    }
  ]

  if(req.jwtDecoded.data.user_type == "admin"){
    pipeline = [
      {
        $project: { 
          month: { $month: '$created_date' },
          year: { $year: '$created_date'},
          user_create: 1,
        }
      },
      {
        $match: {
          year: year
        }
      },
      {
        $group: {
          _id: '$month',
          count: {
            $sum: 1,
          },
        }
      }
    ]
  }
  News.aggregate(pipeline,function(err,data){
    if(err) 
      res.send(err);
    else 
      res.json(data);
  })
}

//Thống kê số bài theo năm của user
exports.count_news_by_year_and_username = function (req, res) {
  let pipeline = [
    {
      $project: { 
        year: { $year: '$created_date'},
        user_create: 1,
      }
    },
    {
      $match: {
        user_create: req.params.username,
      }
    },
    {
      $group: {
        _id: '$year',
        count: {
          $sum: 1,
        },
      }
    }
  ]

  if(req.jwtDecoded.data.user_type == "admin"){
    pipeline = [
      {
        $project: { 
          year: { $year: '$created_date'},
          user_create: 1,
        }
      },
      {
        $group: {
          _id: '$year',
          count: {
            $sum: 1,
          },
        }
      }
    ]
  }
  News.aggregate(pipeline,function(err,data){
    if(err) 
      res.send(err);
    else 
      res.json(data);
  })
}

//Tính tổng view của tất cả
exports.calc_view = function(req,res){
  let pipeline = [
    {
      $group: {
        _id: null,
        count: {
          $sum: '$view',
        },
      }
    }
  ]
  Event.aggregate(pipeline,function(err,data){
    if(err) 
      res.send(err);
    else 
      res.json(data);
  });
}

//Tính tổng view của một user
exports.calc_view_user = function(req,res){
  let pipeline = [
    {
      $match: {
        user_create: req.params.username,
      }
    },
    {
      $group: {
        _id: null,
        count: {
          $sum: '$view',
        },
      }
    }
  ]
  News.aggregate(pipeline,function(err,data){
    if(err) 
      res.send(err);
    else 
      res.json(data);
  });
}

//Lấy tất cả tin tức đang chờ duyệt
exports.get_all_news_pending = async function(req,res) {
  let condition = {allow : "pending"};
  if(req.jwtDecoded.data.user_type != 'admin'){
    condition[user_create] = req.jwtDecoded.data.username;
  }
  try{
    let data = await News.find(condition);
    res.json(data);
  }
  catch(err){
    res.send(err);
  }
}

//Lấy tin tức đang chờ duyệt theo trang 
exports.get_page_news_pending = async function(req,res) {
  let condition = {allow : "pending"};
  if(req.jwtDecoded.data.user_type != 'admin'){
    condition[user_create] = req.jwtDecoded.data.username;
  }
  try{
    let data = await News.paginate(condition,{page:req.params.pagenum,limit:pageSize});
    res.json(data);
  }
  catch(err){
    res.send(err);
  }
}

//Lấy 1 tin tức đang chờ duyệt theo id
exports.get_news_pending_by_id = async function(req,res) {
  let condition = {allow : "pending",id: req.params.eventId};
  if(req.jwtDecoded.data.user_type != 'admin'){
    condition[user_create] = req.jwtDecoded.data.username;
  }
  try{
    let data = await News.find(condition);
    res.json(data);
  }
  catch(err){
    res.send(err);
  }
}

//Thay đổi trạng thái duyệt của 1 bài
exports.change_allow_news_pending_by_id = async function(req,res) {
  let condition = {id: req.body.id};
  if(req.jwtDecoded.data.user_type != 'admin'){
    return res.json({message:"Unauthorized"})
  }
  try{
    let event = await News.findOne(condition);
    event.allow = req.body.allow;
    event.save();
    res.json(event);
  }
  catch(err){
    res.send(err);
  }
}