const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const loginRouter = require("./routes/loginRouter");
const todosRouter = require("./routes/todosRouter");

require("dotenv").config();

const app = express();

// important!!!
app.use(express.json());

app.use(cors());
app.use(morgan("tiny"));
app.use("/login", loginRouter);
app.use("/todos", todosRouter);

const port = process.env.PORT || 3001;

// 連結 mongo database
mongoose
  .set("strictQuery", false)
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`server is run at http://localhost:${port}`);
    });
  });
