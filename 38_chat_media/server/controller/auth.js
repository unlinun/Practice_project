import bcrypt from "bcrypt"; //當我們寫入資料庫前要先將用戶密碼加密才是正確的做法，而使用的加密方法是使用 bcrypt 這個套件
import jwt from "jsonwebtoken"; // JSON Web Tokens
import User from "../models/User.js";

// 當你呼叫 mongo data base ，會是異步執行的程序，所以要使用 async await
// req => 前端傳送過來的請求
// res => 後端要傳送給前端的響應

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    // 1. 為密碼添加鹽巴(加鹽的意思是在要加密的字串中加特定的字符，打亂原始的字符串)
    const salt = await bcrypt.genSalt(); // 生成鹽 => 預設值為 10
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      // 儲存加密過後的密碼
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

    const savedUser = await newUser.save(); // 異步=>使用 new 创建 Mongoose 模型的實例时，调用 save() 会使 Mongoose 插入一个新文档。
    // 前後端使用相同的 format => json
    res.status(201).json(savedUser); // 後端回傳給前端一個響應，使前端可以拿到資料
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// LOGGING
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // 使用 mongoDB => findOne 來找到前端要求的 user
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: `User is not found!` });
    // 使用 bcrypt 來進行解密，查看是否匹配
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: `Invalid credentials. ` });

    // 建立 token => 透過模組上的sign()方法可以產生一組 JWT，產生時需要將存放在 Token 當中的資料帶入payload參數中、密鑰帶入secretOrPrivateKey參數中：
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password; // 移除密碼屬性，安全性問題
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
