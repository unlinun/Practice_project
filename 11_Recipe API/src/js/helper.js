// 包含許多函數，我們可以在整個程式當中重複使用
// 像是獲取 WEB API

// 設定時間 產生錯誤捕捉
import { TIME_OUT } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    // 使用 fetch 來取得遠端的 WebAPI
    // 利用 Promise.race 來進行時間的競賽，利用[]來包住 promise1,promise2
    const res = await Promise.race([fetch(url), timeout(TIME_OUT)]);
    // 將 response 轉換為 json 格式的資料
    const data = await res.json();

    // 建立程式中的 error 語句，來讓 catch 捕捉
    // 如果 response 中的 ok 是 false 就傳送 error 語句
    if (!res.ok) {
      throw new Error(`You got ${data.status} (${res.status})`);
    }
    console.log(res, data);
    // 需要回傳 promise 回去給其他資料使用 !!! 非常重要 !!!
    return data;
  } catch (err) {
    // 這邊要將 error 丟出去成為一個新的 promise
    throw err;
  }
};
