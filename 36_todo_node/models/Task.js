const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 只有在 schema 中的數據資訊會被傳遞上 MongoDB , 如果 post 上去的數據中沒有在 schema 中則會被忽略
const TaskSchema = new Schema({
  name: {
    // ** validation -- 驗證資料 - this is the basic validation
    type: String,
    // [data, "要傳送的 error msg"]
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can't be more tha 20"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// mongoose.model("要創建的 collection 名稱", "在創建時要使用的 schema ")
module.exports = mongoose.model("Task", TaskSchema);
