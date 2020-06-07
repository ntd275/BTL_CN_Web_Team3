'use strict';

let mongoose = require('../db'),
  Event = require('../models/eventModel');

let pageSize = 8;

exports.get_all_event = function (req, res) {
  //Tìm hết tất cả event trong DB
  Event.find({
    allow: "approved"
  }, function (err, data) {
    if (err)
      //Trả về nếu bị lỗi
      res.send(err);
    else
      //Trả dữ liệu nếu không lỗi
      res.json(data);
  });
};

//Tạo 1 sự kiện mới
exports.create_a_event = function (req, res) {
  req.body.user_create = req.jwtDecoded.data.username;
  req.body.allow = undefined;
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

//Tìm bản ghi bằng id
exports.get_a_event = function (req, res) {
  Event.findOneAndUpdate({
    id: req.params.eventId,
    allow: "approved"
  }, {
    $inc: {
      'view': 1
    }
  }, {
    new: true
  }, function (err, data) {
    if (err)
      res.send(err);
    else {
      if (data) {
        res.json(data);
      } else {
        res.json({
          message: "Does not exist"
        });
      }
    }
  });
};

//Tìm bản ghi và cập nhật bằng id dữ liệu mới lấy từ req.body
exports.update_a_event = function (req, res) {
  req.body.allow = 'pending';
  req.body.user_create = req.jwtDecoded.data.username;
  Event.findOneAndUpdate({
    id: req.params.eventId,
    user_create: req.jwtDecoded.data.username
  }, req.body, {
    new: true
  }, function (err, data) {
    if (err)
      res.send(err);
    else {
      if (data) {
        res.json(data);
      } else {
        res.json({
          message: 'Unauthorized'
        });
      }
    }
  });
};

//Xóa bản ghi bằng id
exports.delete_a_event = function (req, res) {
  Event.remove({
    id: req.params.eventId,
    user_create: req.jwtDecoded.data.username
  }, function (err, data) {
    if (err)
      res.send(err);
    else {
      if (data.deletedCount) {
        res.json({
          message: 'Event successfully deleted'
        });
      } else {
        res.json({
          message: 'Unauthorized'
        });
      }
    }
  });
};

//Phân trang sự kiện
exports.get_page = function (req, res) {
  //Phân trang với pagesize = 8
  Event.paginate({
    allow: "approved"
  }, {
    page: req.params.pagenum,
    limit: pageSize
  }, function (err, data) {
    if (err)
      res.send(err);
    else
      res.json(data);
  });
}

//Lấy tất cả sự kiện theo chủ đề
exports.get_all_by_category = function (req, res) {
  Event.find({
    category: req.params.category,
    allow: "approved"
  }, function (err, data) {
    if (err)
      //Trả về nếu bị lỗi
      res.send(err);
    else
      //Trả dữ liệu nếu không lỗi
      res.json(data);
  });
}

//Phân trang theo chủ đề
exports.get_page_by_category = function (req, res) {
  Event.paginate({
    category: req.params.category,
    allow: "approved"
  }, {
    page: req.params.pagenum,
    limit: pageSize
  }, function (err, data) {
    if (err)
      res.send(err);
    else
      res.json(data);
  });
}

//Lấy sự kiện trước sự kiện theo id
exports.prev_event = function (req, res) {
  Event.findOne({
    id: {
      $lt: req.params.eventId
    },
    allow: "approved"
  }, null, {
    sort: {
      id: -1
    }
  }, function (err, data) {
    if (err)
      //Trả về nếu lỗi
      res.send(err);
    else
      //Trả về bản ghi nếu không lỗi
      res.json(data);
  });
}

//Lấy sự kiện sau sự kiện theo id
exports.next_event = function (req, res) {
  Event.findOne({
    id: {
      $gt: req.params.eventId
    },
    allow: "approved"
  }, null, {
    sort: {
      id: 1
    }
  }, function (err, data) {
    if (err)
      //Trả về nếu lỗi
      res.send(err);
    else
      //Trả về bản ghi nếu không lỗi
      res.json(data);
  });
}

//Lấy 8 sự kiện mới nhất
exports.get_top_8_newest_event = function (req, res) {
  Event.find({
    allow: "approved"
  }, null, {
    sort: {
      start_time: 'desc'
    },
    limit: 8
  }, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  })
}

//Lấy 3 sự kiện nổi bật
exports.get_top_3_trend_event = function (req, res) {
  Event.find({
    allow: "approved"
  }, null, {
    sort: {
      view: '-1'
    },
    limit: 3
  }, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  })
}

// Lấy sự kiện hà nội hôm nay
exports.get_event_hanoi_today = function (req, res) {
  let now = new Date();
  now.setHours(0, 0, 0, 0);
  Event.find({
    start_time: {
      $lt: now
    },
    finish_time: {
      $gte: now
    },
    locate: "Hà Nội",
    allow: "approved"
  }, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  })
}

//Lấy sự kiện HCM hôm nay
exports.get_event_hcm_today = function (req, res) {
  let now = new Date();
  now.setHours(0, 0, 0, 0);
  Event.find({
    start_time: {
      $lt: now
    },
    finish_time: {
      $gte: now
    },
    locate: "Hồ Chí Minh",
    allow: "approved"
  }, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  })
}

//Tìm event title theo key word
exports.search_events = function (req, res) {
  Event.paginate({
    title: {
      '$regex': req.params.keyword,
      '$options': 'i'
    }
  }, {
    page: req.params.pagenum,
    limit: pageSize
  }, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  })
}

//Lấy event theo người đăng
exports.get_all_by_username = function (req, res) {
  Event.find({
    user_create: req.params.username,
    allow: "approved"
  }, function (err, data) {
    if (err) {
      res.send(err);
    } else
      res.json(data);
  })
}

//Phân trang sự kiện theo người tạo
exports.get_page_by_username = function (req, res) {
  Event.paginate({
    user_create: req.params.username,
    allow: "approved"
  }, {
    page: req.params.pagenum,
    limit: pageSize
  }, function (err, data) {
    if (err) {
      res.send(err);
    } else
      res.json(data);
  })
}

//Thống kê số bài theo week của user
exports.count_event_by_week_and_username = function (req, res) {
  let now = new Date();
  let year = now.getFullYear();
  let pipeline = [{
      $project: {
        week: {
          $week: '$created_date'
        },
        year: {
          $year: '$created_date'
        },
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
  if (req.jwtDecoded.data.user_type == "admin") {
    pipeline = [{
        $project: {
          week: {
            $week: '$created_date'
          },
          year: {
            $year: '$created_date'
          },
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
  Event.aggregate(pipeline, function (err, data) {
    if (err)
      res.send(err);
    else
      res.json(data);
  })
}

//Thống kê số bài theo tháng của user
exports.count_event_by_month_and_username = function (req, res) {
  let now = new Date();
  let year = now.getFullYear();
  let pipeline = [{
      $project: {
        month: {
          $month: '$created_date'
        },
        year: {
          $year: '$created_date'
        },
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

  if (req.jwtDecoded.data.user_type == "admin") {
    pipeline = [{
        $project: {
          month: {
            $month: '$created_date'
          },
          year: {
            $year: '$created_date'
          },
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
  Event.aggregate(pipeline, function (err, data) {
    if (err)
      res.send(err);
    else
      res.json(data);
  })
}

//Thống kê số bài theo năm của user
exports.count_event_by_year_and_username = function (req, res) {
  let pipeline = [{
      $project: {
        year: {
          $year: '$created_date'
        },
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

  if (req.jwtDecoded.data.user_type == "admin") {
    pipeline = [{
        $project: {
          year: {
            $year: '$created_date'
          },
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
  Event.aggregate(pipeline, function (err, data) {
    if (err)
      res.send(err);
    else
      res.json(data);
  })
}

//Tính tổng view của một user
exports.calc_view_user = function (req, res) {
  let pipeline = [{
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
  if (req.jwtDecoded.data.user_type == "admin") {
    pipeline = [
      {
        $group: {
          _id: null,
          count: {
            $sum: '$view',
          },
        }
      }
    ]
  }

  Event.aggregate(pipeline, function (err, data) {
    if (err)
      res.send(err);
    else
      res.json(data);
  });
}

//Lấy tất cả event đang chờ duyệt
exports.get_all_event_pending = async function (req, res) {
  let condition = {
    allow: "pending"
  };
  if (req.jwtDecoded.data.user_type != 'admin') {
    condition["user_create"] = req.jwtDecoded.data.username;
  }
  try {
    let data = await Event.find(condition);
    res.json(data);
  } catch (err) {
    res.send(err);
  }
}

//Lấy event đang chờ duyệt theo trang 
exports.get_page_event_pending = async function (req, res) {
  let condition = {
    allow: "pending"
  };
  if (req.jwtDecoded.data.user_type != 'admin') {
    condition["user_create"] = req.jwtDecoded.data.username;
  }
  try {
    let data = await Event.paginate(condition, {
      page: req.params.pagenum,
      limit: pageSize
    });
    res.json(data);
  } catch (err) {
    res.send(err);
  }
}

//Lấy 1 event đang chờ duyệt theo id
exports.get_event_pending_by_id = async function (req, res) {
  let condition = {
    allow: "pending",
    id: req.body.id
  };
  if (req.jwtDecoded.data.user_type != 'admin') {
    condition["user_create"] = req.jwtDecoded.data.username;
  }
  try {
    let data = await Event.find(condition);
    res.json(data);
  } catch (err) {
    res.send(err);
  }
}

//Thay đổi trạng thái duyệt của 1 bài
exports.change_allow_event_pending_by_id = async function (req, res) {
  let condition = {
    id: req.body.id
  };
  if (req.jwtDecoded.data.user_type != 'admin') {
    return res.json({
      message: "Unauthorized"
    })
  }
  try {
    let event = await Event.findOne(condition);
    event.allow = req.body.allow;
    event.save();
    res.json(event);
  } catch (err) {
    res.send(err);
  }
}