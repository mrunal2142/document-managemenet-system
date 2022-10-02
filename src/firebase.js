// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk-PoCogf-FTZdB28ahuuDyZZuhs4qB08",
  authDomain: "document-management-system-1.firebaseapp.com",
  projectId: "document-management-system-1",
  storageBucket: "document-management-system-1.appspot.com",
  messagingSenderId: "810970363403",
  appId: "1:810970363403:web:7b5464c21daf37d70eb90e",
  measurementId: "G-JG4Q867SZK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);