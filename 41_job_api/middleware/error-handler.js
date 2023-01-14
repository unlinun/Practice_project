// const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  // 創建 error 物件 => 在預設的狀態下的錯誤物件
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, please try again later",
  };

  // check for error name
  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  // check for status code
  if (err.code && err.code === 11000) {
    customError.msg = `This email has been used, please choose another email to submit!`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  // 404 not found castError
  if (err.name === "CastError") {
    (customError.msg = `No item found with id: ${err.value}`),
      (customError.statusCode = StatusCodes.NOT_FOUND);
  }

  return res
    .status(customError.statusCode)
    .json({ error: { msg: customError.msg } });
};

module.exports = errorHandlerMiddleware;
