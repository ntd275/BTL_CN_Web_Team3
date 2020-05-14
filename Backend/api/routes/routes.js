'use strict';
let AuthMiddleWare = require("../../middleware/authMiddleware");
module.exports = function (app) {

  let eventCtr = require('../controllers/eventController');

  app.route('/events')
    .get(eventCtr.get_all_event);

<<<<<<< HEAD
  app.route('/events/:eventId')// hapi để làm gì
    .get(eventCtr.get_a_event)
    .put(eventCtr.update_a_event)
    .delete(eventCtr.delete_a_event);
=======
  app.route('/events/:eventId')
    .get(eventCtr.get_a_event);
>>>>>>> 8dfc751533f68091682fe9be47591886869c03c5

  app.route('/cmtevents')
    .post(eventCtr.post_cmt);

  app.route('/eventspage/:pagenum')
    .get(eventCtr.get_page);

  let newsCtr = require('../controllers/newsController');

  app.route('/news')
    .get(newsCtr.get_all_news);

  app.route('/newspage/:pagenum')
    .get(newsCtr.get_page);

  app.route('/news/:newsId')
    .get(newsCtr.get_a_news);

  let authCtr = require('../controllers/authController');

  app.route('/login')
    .post(authCtr.login);

  app.route('/register')
    .post(authCtr.register);


  //Need token
  app.use(AuthMiddleWare.isAuth);

  app.route('/events').post(eventCtr.create_a_event);

  app.route('/events/:eventId')
    .put(eventCtr.update_a_event)
    .delete(eventCtr.delete_a_event);

  app.route('/news')
    .post(newsCtr.create_a_news);

  app.route('/news/:newsId')
    .put(newsCtr.update_a_news)
    .delete(newsCtr.delete_a_news);

  let uploadCtr = require('../controllers/uploadController');

  app.route('/upload')
    .post(uploadCtr.upload_a_photo);

  app.route('/logout')
    .post(authCtr.logout);

};