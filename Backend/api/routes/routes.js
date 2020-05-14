'use strict';
let AuthMiddleWare = require("../../middleware/authMiddleware");
module.exports = function (app) {

  let eventCtr = require('../controllers/eventController');

  //API lấy tất cả events
  app.route('/events')
    .get(eventCtr.get_all_event);

  //API lấy 1 event theo id
  app.route('/events/:eventId')
    .get(eventCtr.get_a_event);

  //API để comment vào 1 event
  app.route('/cmtevents')
    .post(eventCtr.post_cmt);

  //API phân trang event
  app.route('/eventspage/:pagenum')
    .get(eventCtr.get_page);

  let newsCtr = require('../controllers/newsController');

  //API lấy tất cả tin tức
  app.route('/news')
    .get(newsCtr.get_all_news);

  //API phân trang tin tức
  app.route('/newspage/:pagenum')
    .get(newsCtr.get_page);

  //API lấy 1 trang tin theo id
  app.route('/news/:newsId')
    .get(newsCtr.get_a_news);

  let authCtr = require('../controllers/authController');

  //API đăng nhập
  app.route('/login')
    .post(authCtr.login);

  //API đăng kí
  app.route('/register')
    .post(authCtr.register);


  //Các API dưới đây cần token để gọi
  app.use(AuthMiddleWare.isAuth);

  app.route('/events').post(eventCtr.create_a_event);

  //API cho sửa và xóa event theo id
  app.route('/events/:eventId')
    .put(eventCtr.update_a_event)
    .delete(eventCtr.delete_a_event);

  //API để đăng bài viết
  app.route('/news')
    .post(newsCtr.create_a_news);

  //API để sửa và xóa tin tức theo id
  app.route('/news/:newsId')
    .put(newsCtr.update_a_news)
    .delete(newsCtr.delete_a_news);

  let uploadCtr = require('../controllers/uploadController');

  //API để upload ảnh
  app.route('/upload')
    .post(uploadCtr.upload_a_photo);

  //API đăng xuất
  app.route('/logout')
    .post(authCtr.logout);

};