const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

// 創建 token 驗證 middleware!!!
const authTokenMiddleware = async (req, res, next) => {
  // 取得 token => 在 req.headers.authorization
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("No token provide", 401);
  }
  const token = authHeader.split(" ")[1];
  // token validate
  try {
    // 使用 jwt.verify 來 decode token
    const decoded = jwt.verify(token, process.env.SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new CustomAPIError("Not authorized to access this route", 401);
  }
};

module.exports = authTokenMiddleware;
