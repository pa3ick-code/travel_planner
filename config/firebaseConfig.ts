// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK7qurveeh7az5zgHbP-oRI9SBxVDr2kc",
  authDomain: "travel-planner-9ed41.firebaseapp.com",
  projectId: "travel-planner-9ed41",
  storageBucket: "travel-planner-9ed41.appspot.com",
  messagingSenderId: "360721105172",
  appId: "1:360721105172:web:127c012304345c056b4201",
  measurementId: "G-98C5D1C76H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);