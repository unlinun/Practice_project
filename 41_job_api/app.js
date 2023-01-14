require("dotenv").config();
require("express-async-errors");
const express = require("express");
const authenticateUser = require("./middleware/authentication");
// security package
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const app = express();

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const authRouter = require("./routes/auth.js");
const jobRouter = require("./routes/jobs.js");

app.set("trust proxy", 1);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// extra packages
// connect to data base
const connectDB = require("./db/connect");
// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connect to data base!!!
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
