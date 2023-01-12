// 使用 token 來進行資料驗證！！！
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

// 因為是作為 middleware 使用，所以會有 req,res,next
const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Authentication error" });
  }
  const token = authHeader.split(" ")[1];
  try {
    //verify token
    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    // attach the user to the job routes
    req.user = { userId: payload.userId, name: payload.name };
    /*   方法二  const user = User.findById(payload.id).select("-password"); // 去掉 password ！！！
    req.user = user; */
    next();
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json({ error: error.message });
  }
};

module.exports = auth;
