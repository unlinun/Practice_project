const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

require("dotenv").config();

const port = process.env.prot || 3000;

//使用 middleware
// 1. Express 可以解讀 JSON 文字轉成 javascript 的 Object
app.use(express.json()); // 如果沒有這一行，body 就得不到 JSON object 了
app.use(express.static("./public"));
// 使用 app.use('路徑',路由器) 來使用 CURD
app.use("/api/v1/tasks", tasks); // 代表 /api/v1/tasks 的路徑就會查找到要使用的方法 ex:get,post
app.use(notFound);
app.use(errorHandlerMiddleware);

// start
const start = async () => {
  try {
    // 使用 process.env來保持資訊的加密
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is running at http://localhost:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
