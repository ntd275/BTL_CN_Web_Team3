'use strict';
let User = require("../models/userModels");
let bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10; // Độ bảo mật
let pageSize = 8;

//Sửa thông tin của user
exports.edit_information = async function (req, res) {
    try {
        let user = await User.findOne({ id: req.jwtDecoded.data.id }).exec();
        user.name = req.body.name;
        await user.save();
        res.json(user);
    }
    catch (err) {
        res.json(err);
    }
}

//Sửa password
exports.edit_password = async function (req, res) {
    try {
        let user = await User.findOne({ id: req.jwtDecoded.data.id }).exec();
        let newpassword = await bcrypt.hash(req.body.password, saltRounds);
        user.password = newpassword;
        await user.save();
        res.json({ message: 'Success' });
    }
    catch (err) {
        res.send(err);
    }
}

//Thay đổi trạng thái
exports.edit_status = async function(req,res){
    if(req.jwtDecoded.data.user_type != 'admin'){
        res.json({message: 'Unauthorized'});
        return;
    }
    try {
        let user = await User.findOne({id: req.body.id}).exec();
        user.status = req.body.status;
        await user.save();
        res.json(user);
    }catch(err){
        res.json(err);
    }
}

//lấy tất cả user
exports.get_all_user = async function(req,res){
    if(req.jwtDecoded.data.user_type != 'admin'){
        return res.json({message: 'Unauthorized'});
    }
    try {
        let users = await User.find({}).exec();
        res.json(users);
    }catch(err){
        res.json(err);
    }
}

//Phân trang user
exports.get_page_user = async function(req,res){
    if(req.jwtDecoded.data.user_type != 'admin'){
        return res.json({message: 'Unauthorized'});
    }
    try {
        let users = await User.paginate({},{ page: req.params.pagenum, limit: pageSize });
        res.json(users);
    }catch(err){
        res.json(err);
    }
}