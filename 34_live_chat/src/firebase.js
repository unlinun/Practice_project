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

/* 在firebase中有幾種寫入資料的方式，第一種是 setDoc */
// setDoc 可以指定 document 的名稱，所以可以建立或是覆蓋原有的資料，使用方式為 setDoc(doc(db,"collection的名稱","document的名稱"),{要輸入的data})

//第二種是 addDoc 這種方式無法指定 document 的名稱，使用此方式會隨機產生一組亂數作為 document 的名稱，所以就算送了重複的資料，他也會成為一筆新的 document
// 使用方式為 addDoc(collection(db,"collection的名稱"),{要輸入的data})

/* 在firebase中取的資料的幾種方式有 getDoc/ getDocs */

// getDoc 取得某一個 collection 中，單一 document 的資料
// getDoc (doc(dc, "collection的名稱","document的名稱"))

// getDocs 取得某一個 collection 中所有 document 的資料
// getDocs (collection(db,"collection的名稱"))

/* 刪除資料的方法可分為刪除 data 以及刪除 document*/

// 刪除data
//使用 updateDoc(doc(db,"collection的名稱","document的名稱"),{要刪除的欄位名稱：deleteField()})

// 刪除 document
// 使用 deleteDoc(doc(db,"collection的名稱","document的名稱"))
