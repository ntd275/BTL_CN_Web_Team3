'use strict';

//Load các config từ file .env
require('dotenv').config();

//Tạo server bằng express
let express = require('express'),
    app = express(),
    //Cổng chạy của ứng dụng
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path');

//Sử dụng middleware cors để có thể truy cập từ web khác
app.use(cors());

//Prase body của request thành object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Cho phép truy cập các ảnh đã upload lên bằng link
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));
<<<<<<< HEAD

//Route
let routes = require('./api/routes/routes');
routes(app);
 
//trả về 404 nếu đường dẫn không tồn tại
=======
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
 });
let routes = require('./api/routes/routes');
routes(app);


>>>>>>> ea295d0cc0bf913de942f2bfd3464945a435142e
app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

//Start
app.listen(port);


console.log('RESTful API server started on: ' + port);

