// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIuUM-ONB5aE9MHYP6soWBqcEdc8AMx8Y",
  authDomain: "findpeople-f2e1d.firebaseapp.com",
  projectId: "findpeople-f2e1d",
  storageBucket: "findpeople-f2e1d.appspot.com",
  messagingSenderId: "647897278522",
  appId: "1:647897278522:web:44a17ea53ff49f0006ad03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
