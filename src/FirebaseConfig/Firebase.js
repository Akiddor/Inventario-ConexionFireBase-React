// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAFmeBap0MjSBVItzzAT9AJHfJLNVfz7nc",
  authDomain: "accesg-8bf9a.firebaseapp.com",
  databaseURL: "https://accesg-8bf9a-default-rtdb.firebaseio.com",
  projectId: "accesg-8bf9a",
  storageBucket: "accesg-8bf9a.appspot.com",
  messagingSenderId: "430791172832",
  appId: "1:430791172832:web:b7bcc5b602c1d27091a685",
  measurementId: "G-L70ZXFNGS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);