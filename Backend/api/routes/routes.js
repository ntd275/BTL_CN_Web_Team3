'use strict';
module.exports = function(app) {

  let eventCtr = require('../controllers/eventController');

  app.route('/events')
    .get(eventCtr.get_all_event)
    .post(eventCtr.create_a_event);

  app.route('/events/:eventId')
    .get(eventCtr.get_a_event)
    .put(eventCtr.update_a_event)
    .delete(eventCtr.delete_a_event);

  let newsCtr = require('../controllers/newsController');

  app.route('/news')
    .get(newsCtr.get_all_news)
    .post(newsCtr.create_a_news);

  app.route('/news/:newsId')
    .get(newsCtr.get_a_news)
    .put(newsCtr.update_a_news)
    .delete(newsCtr.delete_a_news);

  let uploadCtr = require('../controllers/uploadController');
  
  app.route('/upload')
    .post(uploadCtr.upload_a_photo);
};