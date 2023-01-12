const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    require: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email",
    ],
    unique: [true, "This email has been used"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
});

// 此處先做預處理 => 將 password 作加密
// 使用 async function => 不要使用 arrow function ，因為此處需指向 this
UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//創建 mongoose schema的 method
// 取得 token
UserSchema.methods.createJWT = function () {
  // jwt.sign 會將傳入的物件變為 token 的 payload
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET
  );
};

// 進行密碼比較
UserSchema.methods.comparePassword = async function (requestPassword) {
  const isMatch = await bcrypt.compare(requestPassword, this.password);
  return isMatch;
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
