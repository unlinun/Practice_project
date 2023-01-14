//require user model
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
// require bcrypt to hash password then save to database
// const bcrypt = require("bcryptjs");
// require token
// const jwt = require("jsonwebtoken");

// register user
const register = async (req, res) => {
  // ===== 下方 code 直接使用 Schema.pre 來做預處理 =====
  /* const { password } = req.body;
  // 很重要！資案問題，要使用 bcrypt 來將密碼重新 "hash" 過，加點鹽巴
  const salt = await bcrypt.genSalt(10); // default 是 10 => 越大越難解密，但也會跑越慢
  const hashedPassword = await bcrypt.hash(password, salt);
  // 1. 首先註冊會員=> 使用 await 來將新的資料傳入 mongoDB */
  const user = await User.create({ ...req.body });
  /*   const token = jwt.sign(
    { userId: user._id, name: user.name },
    process.env.JWT_SECRET
  ); */
  //   ===== 在 model 中創建 Schema 的 function
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

//login user
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    // return res
    //   .status(StatusCodes.BAD_REQUEST)
    //   .json({ msg: "please provide email and password" });
    throw new BadRequestError("please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    // return res
    //   .status(StatusCodes.UNAUTHORIZED)
    //   .json({ msg: "Invalid Credential" });
    throw new UnauthenticatedError("Invalid Credential");
  }
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    // res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Invalid Credential" });
    throw new UnauthenticatedError("Invalid Credential");
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = { register, login };
