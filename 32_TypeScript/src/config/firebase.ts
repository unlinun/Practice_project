// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// 這裡是創建認證的 import
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMN8wmThDmLnxVwPdO5677GuEFqRmj2-8",
  authDomain: "react-course-a13ef.firebaseapp.com",
  projectId: "react-course-a13ef",
  storageBucket: "react-course-a13ef.appspot.com",
  messagingSenderId: "1025917808764",
  appId: "1:1025917808764:web:5dd6fc0e3a7e7d8c2d19f9",
  measurementId: "G-YZXYVDKYM0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
