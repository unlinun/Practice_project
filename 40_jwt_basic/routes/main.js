const express = require("express");
const authTokenMiddleware = require("../middleware/auth");

const router = express.Router();

const { login, dashboard } = require("../controllers/main");

router.route("/dashboard").get(authTokenMiddleware, dashboard);
router.route("/login").post(login);

module.exports = router;
