'use strict';
let AuthMiddleWare = require("../../middleware/authMiddleware");
module.exports = function (app) {

  let eventCtr = require('../controllers/eventController');
  let newsCtr = require('../controllers/newsController');

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

  //API lấy tất cả sự kiện của user
  app.route('/geteventbyuser/:username')
    .get(eventCtr.get_all_by_username);

  //API phân trang sự kiện của user
  app.route('/geteventbyuser/:username/:pagenum')
    .get(eventCtr.get_page_by_username);

  //API lấy tất cả tin tức của user
  app.route('/getnewsbyuser/:username')
    .get(newsCtr.get_all_by_username);

  //API phân trang tin tức của user
  app.route('/getnewsbyuser/:username/:pagenum')
    .get(newsCtr.get_page_by_username);

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

  //API thống kê số tin tức theo tuần của username
  app.route('/statisticnewsbyweek/:username')
    .post(newsCtr.count_news_by_week_and_username);

  //API thống kế số tin tức theo tháng của username
  app.route('/statisticnewsbymonth/:username')
    .post(newsCtr.count_news_by_month_and_username);

  //API thống kế số tin tức theo năm của username
  app.route('/statisticnewsbyyear/:username')
    .post(newsCtr.count_news_by_year_and_username);

  //API lấy tất cả các bài tin tức đang chờ duyệt
  app.route('/newsspending')
    .post(newsCtr.get_all_news_pending);

  //API phân trang bài tin tức đang chờ duyệt
  app.route('/newsspending/:pagenum')
    .post(newsCtr.get_page_news_pending);

  //API lấy 1 bài đang chờ duyệt
  app.route('/newspending')
    .post(newsCtr.get_news_pending_by_id);

  //API thay đổi trạng thái duyệt của 1 bài tin tức
  app.route('/changenewsallow')
    .post(newsCtr.change_allow_news_pending_by_id);

  //API thống kê số sự kiện theo tuần của username
  app.route('/statisticeventbyweek/:username')
    .post(eventCtr.count_event_by_week_and_username);

  //API thống kế số sự kiện theo tháng của username
  app.route('/statisticeventbymonth/:username')
    .post(eventCtr.count_event_by_month_and_username);

  //API thống kế số sự kiện theo năm của username
  app.route('/statisticeventbyyear/:username')
    .post(eventCtr.count_event_by_year_and_username);

  //API lấy tất cả các bài đang chờ duyệt
  app.route('/eventspending')
    .post(eventCtr.get_all_event_pending);

  //API phân trang bài đang chờ duyệt
  app.route('/eventspending/:pagenum')
    .post(eventCtr.get_page_event_pending);

  //API lấy 1 bài đang chờ duyệt
  app.route('/eventpending')
    .post(eventCtr.get_event_pending_by_id);

  //API thay đổi trạng thái duyệt của 1 bài
  app.route('/changeeventallow')
    .post(eventCtr.change_allow_event_pending_by_id);

  //API lấy tổng view sự kiện của 1 user
  app.route('/getviewevent/:username')
    .post(eventCtr.calc_view_user);

  //API lấy tổng view tin tức của 1 user
  app.route('/getviewnews/:username')
    .post(newsCtr.calc_view_user);

  //API thống kê view sự kiện theo tuần
  app.route('/statisticvieweventbyweek/:username')
    .post(eventCtr.count_view_event_by_week_and_username)

  //API thống kê view sự kiện theo tháng
  app.route('/statisticvieweventbymonth/:username')
    .post(eventCtr.count_view_event_by_month_and_username)

  //API thống kê view sự kiện theo năm
  app.route('/statisticvieweventbyyear/:username')
    .post(eventCtr.count_view_event_by_year_and_username)

  //API thống kê view tin tức theo tuần
  app.route('/statisticviewnewsbyweek/:username')
    .post(newsCtr.count_view_news_by_week_and_username);
  
  //API thống kê view tin tức theo tháng
  app.route('/statisticviewnewsbymonth/:username')
    .post(newsCtr.count_view_news_by_month_and_username);
  
  //API thống kê view tin tức theo năm
  app.route('/statisticviewnewsbyyear/:username')
    .post(newsCtr.count_view_news_by_year_and_username);

};