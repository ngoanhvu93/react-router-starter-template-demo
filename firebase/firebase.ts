// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzlxMClv-F6uWhpUaf11l_nzWEtIcUJY8",
  authDomain: "app-viet-23c27.firebaseapp.com",
  projectId: "app-viet-23c27",
  storageBucket: "app-viet-23c27.firebasestorage.app",
  messagingSenderId: "831913285954",
  appId: "1:831913285954:web:cb588d0ffd996d3045d0db",
  measurementId: "G-40WPTQR6W1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
