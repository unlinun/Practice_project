require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const jsonProducts = require("./products.json");

const start = async () => {
  try {
    // 連接 MongoDB
    await connectDB(process.env.MONGO_URI);
    // 將 mongoDB 的 product 全部先刪除
    await Product.deleteMany();
    // 創建 product 中的 data
    await Product.create(jsonProducts);
    console.log("Success");
    // every thing went well , just exit the process!!!
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};

start();
