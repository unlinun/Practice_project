const jwt = require("jsonwebtoken");
const userLogin = async (req, res) => {
  try {
    if (req.body.password === process.env.PASSWORD) {
      const token = jwt.sign(
        {
          userId: 1,
        },
        process.env.SECRET
      );
      res.status(200).json({ token });
    } else {
      res.status(401).json({ loginFail: error.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { userLogin };
