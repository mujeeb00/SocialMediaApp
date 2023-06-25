// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDv2OAtjnjN_fX5viAxAflhPXiqMjRn3c4",
  authDomain: "socialmediaapp-67bd8.firebaseapp.com",
  projectId: "socialmediaapp-67bd8",
  storageBucket: "socialmediaapp-67bd8.appspot.com",
  messagingSenderId: "774862108669",
  appId: "1:774862108669:web:a7c0f734ffea19881d0b94",
  measurementId: "G-Q0KFJ04C0C"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)
const analytics = getAnalytics(app);