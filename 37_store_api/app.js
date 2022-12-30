// 首先加入 .env => dotenv 來操作比較隱密的資訊（保有安全性）
require("dotenv").config();
// express async errors
require("express-async-errors");

const connectDB = require("./db/connect");
const express = require("express");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const productRouter = require("./routes/products");

const app = express();
// 使用 middleware
app.use(express.json());

// home page
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1>this is home page</h1><a href="/api/v2/products">Link to products</a>'
    );
});

// product page
app.use("/api/v1/products", productRouter);

// 產品頁面使用 middleware (catch error)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    //連結 MongoDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
