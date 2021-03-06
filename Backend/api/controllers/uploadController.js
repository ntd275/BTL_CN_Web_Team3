'use strict';
let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    //Nơi lưu file
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    //tên file được lưu tên gốc + ngày hiện tại
    filename: function (req, file, callback) {
        callback(null, path.parse(file.originalname).name + '-' + Date.now() + path.extname(file.originalname));
    }
});

//Chỉ up một ảnh một lần
let upload = multer({
    storage: storage
}).single('photo');

exports.upload_a_photo = function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.json({
                message: err,
            });
        } else
            res.json({
                message: "Success",
                link: req.headers.host + '/uploads/' + req.file.filename, // Trả về link của ảnh
            })
    });
}