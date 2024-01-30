// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiyjehw1q4f3LWM4omui-ZfzUjAtKxyQ4",
  authDomain: "optimental-auth.firebaseapp.com",
  projectId: "optimental-auth",
  storageBucket: "optimental-auth.appspot.com",
  messagingSenderId: "135165178438",
  appId: "1:135165178438:web:1518fe21910f5d99989047"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
