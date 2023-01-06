const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  // 找到用戶名稱及密碼
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("Please provide email and password", 400);
  }

  const id = new Date().getDate();
  //創建 token => 使用 jwt.sign() 絕不要放入機密資訊(keep payload small) , 後面要加上 SECRET
  const token = jwt.sign({ id, username }, process.env.SECRET);
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const { username } = req.user;
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello ${username}`,
    secret: ` your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
