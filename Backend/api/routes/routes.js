'use strict';
let AuthMiddleWare = require("../../middleware/authMiddleware");
module.exports = function (app) {

  let eventCtr = require('../controllers/eventController');

  //API lấy tất cả events
  app.route('/events')
    .get(eventCtr.get_all_event);

  //API phân trang event
  app.route('/eventspage/:pagenum')
    .get(eventCtr.get_page);

  //APi tim event
  app.route('/search/:keyword/:pagenum')
    .get(eventCtr.search_events);

  //API lấy 8 bài mới nhất
  app.route('/newestevents')
    .get(eventCtr.get_top_8_newest_event);

  //API lấy 3 sự kiện nổi bật
  app.route('/trendevents')
    .get(eventCtr.get_top_3_trend_event);

  //API lấy 1 event theo id
  app.route('/events/:eventId')
    .get(eventCtr.get_a_event);

  //API lấy sự kiện hà nội hôm nay
  app.route('/eventshntoday')
    .get(eventCtr.get_event_hanoi_today);

  //API lấy sự kiện Hồ Chí Minh hôm nay
  app.route('/eventshcmtoday')
    .get(eventCtr.get_event_hcm_today);

  //API lấy tất cả theo category
  app.route('/eventscat/:category')
    .get(eventCtr.get_all_by_category);
  
  //APi lấy một trang trong category
  app.route('/eventscat/:category/:pagenum')
    .get(eventCtr.get_page_by_category);

  //API lấy bài tiếp theo
  app.route('/nextevent/:eventId')
    .get(eventCtr.next_event);
  
  //API lấy bài trước
  app.route('/prevevent/:eventId')
    .get(eventCtr.prev_event);

  //API thống kê số bài theo tuần của username
  app.route('/statisticeventbyweek/:username')
    .get(eventCtr.count_event_by_week_and_username);

  //API thống kê tất cả số bài theo tuần
  app.route('/statisticeventbyweek')
    .get(eventCtr.count_event_by_week);

  //API lấy tất cả bài của user
  app.route('/geteventbyuser/:username')
    .get(eventCtr.get_all_by_username);

  //API phân trang event của user
  app.route('/geteventbyuser/:username/:pagenum')
    .get(eventCtr.get_page_by_username);

  //API lấy tổng số view
  app.route('/getview')
    .get(eventCtr.calc_view);

  //API lấy tổng view của 1 user
  app.route('/getview/:username')
    .get(eventCtr.calc_view_user);

  let newsCtr = require('../controllers/newsController');

  //API lấy tất cả tin tức
  app.route('/news')
    .get(newsCtr.get_all_news);

  //API phân trang tin tức
  app.route('/newspage/:pagenum')
    .get(newsCtr.get_page);

  //API lấy 8 tin mới nhất
  app.route('/newestnews')
    .get(newsCtr.get_top_8_newest_news);

  //API lấy 3 tin nổi bật
  app.route('/trendnews')
    .get(newsCtr.get_top_3_trend_news);

  //API lấy tin tức tiếp theo
  app.route('/nextnews/:newsId')
    .get(newsCtr.next_news);

  //API lấy tin phía trước
  app.route('/prevnews/:newsId')
    .get(newsCtr.prev_news);

  //API lấy 1 trang tin theo id
  app.route('/news/:newsId')
    .get(newsCtr.get_a_news);

  let authCtr = require('../controllers/authController');

  //API đăng nhập
  app.route('/login')
    .post(authCtr.login);

  //API refresh token
  app.route('/refreshtoken')
    .post(authCtr.refreshToken);

  //Các API dưới đây cần token để gọi
  app.use(AuthMiddleWare.isAuth);

  //API đăng kí
  app.route('/register')
    .post(authCtr.register);

  //API đăng 1 bài
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
  
  let userCtr = require('../controllers/userController');
  
  //API thay đổi thông tin
  app.route('/changeinfo')
    .post(userCtr.edit_information);
  
  //API thay đổi mật khẩu
  app.route('/changepassword')
    .post(userCtr.edit_password);
  
  //API thay đổi trạng thái
  app.route('/changestatus')
    .post(userCtr.edit_status);
  
  //API lấy tất cả user
  app.route('/users')
    .post(userCtr.get_all_user);

  //API lấy thông tin của user
  app.route('/user')
    .post(userCtr.get_infomation);

  //API phân trang user
  app.route('/users/:pagenum')
    .post(userCtr.get_page_user);
};