const jwt = require("jsonwebtoken");

const isLoggedIn = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    // 401 you didn't provide the token
    res.status(401).json({ msg: "Invalidate credentials" });
  } else {
    const token = authHeader.split(" ")[1];
    //使用 jwt 來進行 verify
    jwt.verify(token, process.env.SECRET, (err, decode) => {
      if (err) {
        res.status(403).json({ error: err.message });
      } else {
        next();
      }
    });
  }
};

module.exports = isLoggedIn;
