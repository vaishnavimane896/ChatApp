// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4aLBm2_lqo0obZyhCGlikDNv2qIn2i44",
  authDomain: "chatapp-81aa1.firebaseapp.com",
  projectId: "chatapp-81aa1",
  storageBucket: "chatapp-81aa1.firebasestorage.app",
  messagingSenderId: "30824832101",
  appId: "1:30824832101:web:0e9f7077526bb4d224ba8c",
  measurementId: "G-S6NQLJ89X4"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth()
export const db = getFirestore()
