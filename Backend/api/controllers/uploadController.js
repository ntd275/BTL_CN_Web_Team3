let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, path.parse(file.originalname).name + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({ storage : storage}).single('photo');

exports.upload_a_photo = function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.json({
                message: "Fail",
            });
        }
        res.json({
            message: "Success",
            link:req.headers.host + '/uploads/' + req.file.filename,
        })
    });
}