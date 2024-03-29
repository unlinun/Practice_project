// helper 當中的 function 是希望可以一直重複使用的
import { async } from "regenerator-runtime";
import { TIMEOUT } from "./config";
import { API_KEY } from "./config";

export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// 創建一個可以共同使用的 AJAX call

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPromise = uploadData
      ? fetch(url, {
          // 傳入一個物件使 API 可以獲得資訊
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    // 這裡使用 promise.race([參數1, 參數2])
    const response = await Promise.race([fetchPromise, timeout(TIMEOUT)]);
    const data = await response.json();
    /* 建立一個 throw new Error, 利用 API 的 error message 來創建 mes，因為 API 中會提供 status, OK ,message, 所以可以將他們多加利用 */
    if (!response.ok) {
      throw new Error(`${data.message} (${response.status})`);
    }
    return data;
  } catch (err) {
    throw err;
  }
};

// 將 get json() 變為一個可以重複使用的 function

/*
export const getJSON = async function (url) {
  try {
    const fetchPromise = fetch(url);
    // 這裡使用 promise.race([參數1, 參數2])
    const response = await Promise.race([fetchPromise, timeout(TIMEOUT)]);
    const data = await response.json();
    // 建立一個 throw new Error, 利用 API 的 error message 來創建 mes，因為 API 中會提供 status, OK ,message, 所以可以將他們多加利用
    if (!response.ok) {
      throw new Error(`${data.message} (${res.status})`);
    }
    return data;
  } catch (err) {
    throw err;
  }
};

//post json() (創建一個新的菜單)
export const postJSON = async function (url, uploadData) {
  try {
    const fetchPromise = fetch(url, {
      // 傳入一個物件使 API 可以獲得資訊
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uploadData),
    });
    // 這裡使用 promise.race([參數1, 參數2])
    const response = await Promise.race([fetchPromise, timeout(TIMEOUT)]);
    const data = await response.json();
    // 建立一個 throw new Error, 利用 API 的 error message 來創建 mes，因為 API 中會提供 status, OK ,message, 所以可以將他們多加利用
    if (!response.ok) {
      throw new Error(`${data.message} (${response.status})`);
    }
    return data;
  } catch (err) {
    throw err;
  }
};

*/
