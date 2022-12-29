const mongoose = require("mongoose");

//   connectDB 會回傳的是一個 promise! => 在呼叫時可以使用 async await
const connectDB = (url) => {
  mongoose.set("strictQuery", false).connect(url);
};

module.exports = connectDB;
