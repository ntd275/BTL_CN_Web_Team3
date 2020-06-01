'use strict';
let jwtHelper = require("../../helper/jwtHelper");
let User = require("../models/userModels");
let bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10; // Độ bảo mật

let tokenList = {};

const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || "1h";

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "KEY";

const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE || "3650d";

const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "KEY";

exports.register = function (req, res) {
  let new_user = new User(req.body);
  User.find({username : new_user.username},function(err,data){
    if(err) 
      res.send(err)
    if(data.length){
      res.json({
        message : "Username already exist"
      })
    } else {
      bcrypt.hash(new_user.password, saltRounds, function (err, hash) {
        new_user.password = hash;
        new_user.save(function (err, data) {
          if (err)
            res.send(err)
          else
            res.json({ message: "Success" });
        });
      });
    }
  })
}

exports.login = async function (req, res) {
  try {

    //Kiểm tra user đã tồn tại trong DB chưa
    let user = await User.findOne({ username: req.body.username }).exec();

    if(!user){
      return res.json({ message: 'Username and Password are incorrect' });
    }
    //Kiểm tra mật khẩu
    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
      return res.json({ message: 'Username and Password are incorrect' });
    }

    if(user.status == 'block'){
      return res.json({message: 'account blocked'});
    }

    user.password = undefined;

    let userData = user;

    //Sinh access token
    const accessToken = await jwtHelper.generateToken(userData, accessTokenSecret, accessTokenLife);
    //Sinh refreshToken
    const refreshToken = await jwtHelper.generateToken(userData, refreshTokenSecret, refreshTokenLife);
    //Lưu lại token
    tokenList[refreshToken] = { accessToken, refreshToken };
    //Trả token cho người dùng
    return res.status(200).json({ accessToken, refreshToken,userData});
  } catch (error) {
    //Trả về nếu gặp lỗi
    return res.status(500).json(error);
  }
}

//Cung cấp lại access token
exports.refreshToken = async function (req, res) {
  //Nhận refresh token
  const refreshTokenFromClient = req.body.refreshToken;

  //Kiểm tra token
  if (refreshTokenFromClient && (tokenList[refreshTokenFromClient])) {
    try {
      const decoded = await jwtHelper.verifyToken(refreshTokenFromClient, refreshTokenSecret);
      const userData = decoded.data;
      //Sinh asscess token mới
      const accessToken = await jwtHelper.generateToken(userData, accessTokenSecret, accessTokenLife);
      return res.status(200).json({ accessToken });
    } catch (error) {
      //Refresh token không đúng
      res.status(403).json({
        message: 'Invalid refresh token.',
      });
    }
  } else {
    return res.status(403).send({
      //Không gửi token
      message: 'No token provided.',
    });
  }
};


//Đăng xuất
exports.logout = async function (req, res) {
  //Nhận refresh token
  const refreshTokenFromClient = req.body.refreshToken;
  if (refreshTokenFromClient && (tokenList[refreshTokenFromClient])) {
    try {
      // Xóa các token đã lưu
      delete tokenList[refreshTokenFromClient];
      return res.status(200).json({ message: "Success" });
    } catch (error) {
      res.status(403).json({
        //Sai token
        message: 'Invalid refresh token.',
      });
    }
  } else {
    return res.status(403).send({
      //Không gửi token
      message: 'No token provided.',
    });
  }
}
