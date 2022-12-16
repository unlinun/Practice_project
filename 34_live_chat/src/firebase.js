// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// 要使用 email.password 註冊帳號密碼的話，需使用 authentication
import { getAuth } from "firebase/auth";
// 從 firebase 中導入 file/ database
import { getFirestore, collection, getDocs } from "firebase/firestore";

//從 firebase 中導入 storage
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsLXO7RO_UuufGr0mav2o4vsmSdwYRUxU",
  authDomain: "chat-68a83.firebaseapp.com",
  projectId: "chat-68a83",
  storageBucket: "chat-68a83.appspot.com",
  messagingSenderId: "428154441721",
  appId: "1:428154441721:web:98d7ddffb3fdbcb99d3728",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// 導出 firebase 中的 auth
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

/* 若要提供用戶註冊帳戶的功能：當用戶完成表單時，驗證用戶提供的電子郵件地址和密碼，然後將它們傳遞給createUserWithEmailAndPassword方法 */

// 多行註解 shift + alt + a
