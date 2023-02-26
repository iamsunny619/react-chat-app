// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqRO4Fxw_uNsG3ZlXUSl4rRoXGd3-E2gw",
  authDomain: "fir-mooo.firebaseapp.com",
  projectId: "fir-mooo",
  storageBucket: "fir-mooo.appspot.com",
  messagingSenderId: "533897834170",
  appId: "1:533897834170:web:15925c2078775fdc905c83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()