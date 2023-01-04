import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import { register } from "./controller/auth.js";
import { createPost } from "./controller/posts.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";
/* CONFIGURATIONS  基本配置*/

// 因為在 package.json 是使用 type : "module"，所以需要配置 __fileName, __dirName
// *import.meta是一个给 JavaScript 模块暴露特定上下文的元数据属性的对象。它包含了这个模块的信息，比如说这个模块的 URL。*
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json()); // 必須使用！ 才能讀取 json 文件
app.use(helmet()); // 建立基本資安庫
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common")); // 顯示 NodeJS 日誌
app.use(bodyParser.json({ limit: "30mb", extended: true })); // 解析 json
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); // 解析 urlencoded
app.use(cors()); //解決跨來源資源共享問題 (Cross-Origin Resource Sharing, CORS)。
app.use("/assets", express.static(path.join(__dirname, "public/assets"))); // 讀取靜態資源

/* FILE STORAGE */

//Multer 是由推出 Express 的同一間公司所提供的第三方套件，專門用來處理文件上傳到伺服器。
//cb() 是一個當篩選完成時被呼叫 Callback 函式，其接受兩個參數：（1）錯誤訊息 （2）說明是否接受該檔案的 Boolean 值
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

/* ROUTES WITH FILES */
// 在此使用 upload.single 作為 middleware => 在呼叫 register 之前會先運行 middleware
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .set("strictQuery", false)
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);

      // 加入 data 到 mongoDB
      User.insertMany(users);
      Post.insertMany(posts);
    });
  })
  .catch((error) => {
    console.log(`${error}`);
  });
