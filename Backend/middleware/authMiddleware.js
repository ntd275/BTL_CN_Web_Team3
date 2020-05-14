'use strict';
let jwtHelper = require("../helper/jwtHelper");
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "KEY";

exports.isAuth = async function(req, res, next){
  const tokenFromClient = req.body.token;
  if (tokenFromClient) {
    try {
      const decoded = await jwtHelper.verifyToken(tokenFromClient, accessTokenSecret);
      req.jwtDecoded = decoded;
      next();
    } catch (error) {
      return res.status(401).json({
        message: 'Unauthorized.',
      });
    }
  } else {
    return res.status(403).send({
      message: 'No token provided.',
    });
  }
}