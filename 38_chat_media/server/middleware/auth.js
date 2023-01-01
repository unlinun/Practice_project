import jwt from "jsonwebtoken";

/* 需要在 Request Header 中設定Authorization，將 JWT 一併帶入送至後端伺服器。Authorization的格式通常由 Token 類型（Type）+ 空格 ＋JWT 所組成： */
export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) {
      return res.status(403).send("Access Denied");
    }

    //JWT 是一種 Bearer Token, Authorization: 'Bearer ' + token
    if (token.startWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    // 解密 JWT => 透過模組上的verify()方法可以完成 Base64 解碼與 Token 的驗證，並回傳解碼後的 Payload — 驗證時需要帶入欲驗證的token與自訂的密鑰：
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
