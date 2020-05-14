'use strict';
let jwtHelper = require("../../helper/jwtHelper");
let User = require("../models/userModels");
let bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;

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

    let user = await User.findOne({ username: req.body.username }).exec();

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
      return res.json({ message: 'Username and Password are incorrect' });
    }

    let userData = {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    }

    const accessToken = await jwtHelper.generateToken(userData, accessTokenSecret, accessTokenLife);

    const refreshToken = await jwtHelper.generateToken(userData, refreshTokenSecret, refreshTokenLife);

    tokenList[refreshToken] = { accessToken, refreshToken };

    return res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    return res.status(500).json(error);
  }
}

exports.refreshToken = async function (req, res) {
  const refreshTokenFromClient = req.body.refreshToken;
  if (refreshTokenFromClient && (tokenList[refreshTokenFromClient])) {
    try {
      const decoded = await jwtHelper.verifyToken(refreshTokenFromClient, refreshTokenSecret);
      const userData = decoded.data;
      const accessToken = await jwtHelper.generateToken(userData, accessTokenSecret, accessTokenLife);
      return res.status(200).json({ accessToken });
    } catch (error) {
      res.status(403).json({
        message: 'Invalid refresh token.',
      });
    }
  } else {
    return res.status(403).send({
      message: 'No token provided.',
    });
  }
};

exports.logout = async function (req, res) {
  const refreshTokenFromClient = req.body.refreshToken;
  if (refreshTokenFromClient && (tokenList[refreshTokenFromClient])) {
    try {
      delete tokenList[refreshTokenFromClient];
      return res.status(200).json({ message: "Success" });
    } catch (error) {
      res.status(403).json({
        message: 'Invalid refresh token.',
      });
    }
  } else {
    return res.status(403).send({
      message: 'No token provided.',
    });
  }
}